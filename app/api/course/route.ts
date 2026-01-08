import { db } from "@/config/db";
import {
  completedExercisesTable,
  courseChaptersTable,
  courseTable,
  enrolledCoursesTable,
  usersTable,
} from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq, asc, and, desc, inArray } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = await currentUser();

  try {
    const { searchParams } = new URL(req.url);
    const courseIdParam = searchParams.get("courseId");

    // If fetching specific course
    if (courseIdParam) {
      const courseId = Number(courseIdParam);

      if (isNaN(courseId)) {
        return NextResponse.json(
          { message: "Invalid courseId" },
          { status: 400 }
        );
      }

      // Fetch course details
      const courseResult = await db
        .select()
        .from(courseTable)
        .where(eq(courseTable.courseId, courseId))
        .limit(1);

      if (courseResult.length === 0) {
        return NextResponse.json(
          { message: "Course not found" },
          { status: 404 }
        );
      }

      // Fetch chapters - order by chapterId since there's no chapterOrder column
      const chapterResult = await db
        .select()
        .from(courseChaptersTable)
        .where(eq(courseChaptersTable.courseId, courseId))
        .orderBy(asc(courseChaptersTable.chapterId)); // Order by chapterId

      // Get Clerk user ID directly
      const clerkUserId = user?.id || null;
      
      let isEnrolledCourse = false;
      let courseEnrolledInfo = null;
      let completedExercises = [];

      // Only check enrollment and completed exercises if user exists
      if (clerkUserId) {
        // Get chapter IDs for this course to filter completed exercises
        const chapterIds = chapterResult.map(chapter => chapter.chapterId);

        const [enrolledCoursesResult, completedExercisesResult] = await Promise.all([
          // Check enrollment
          db
            .select()
            .from(enrolledCoursesTable)
            .where(
              and(
                eq(enrolledCoursesTable.courseId, courseId),
                eq(enrolledCoursesTable.userId, clerkUserId)
              )
            ),

          // Fetch completed exercises for chapters in this course
          chapterIds.length > 0
            ? db
                .select()
                .from(completedExercisesTable)
                .where(
                  and(
                    inArray(completedExercisesTable.chapterId, chapterIds),
                    eq(completedExercisesTable.userId, clerkUserId)
                  )
                )
                .orderBy(
                  desc(completedExercisesTable.completedDate),
                  desc(completedExercisesTable.exerciseId)
                )
            : Promise.resolve([]),
        ]);

        isEnrolledCourse = enrolledCoursesResult.length > 0;
        courseEnrolledInfo = enrolledCoursesResult[0] || null;
        completedExercises = completedExercisesResult;
      }

      return NextResponse.json({
        ...courseResult[0],
        chapters: chapterResult,
        userEnrolled: isEnrolledCourse,
        courseEnrolledInfo: courseEnrolledInfo,
        completedExercises: completedExercises,
      });
    }

    // Fetch all courses (when no courseId provided)
    const allCourses = await db
      .select()
      .from(courseTable)
      .orderBy(asc(courseTable.id));

    return NextResponse.json(allCourses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}