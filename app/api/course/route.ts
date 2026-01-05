import { db } from "@/config/db";
import { courseChaptersTable, courseTable, enrolledCoursesTable, usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq, asc, and } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = await currentUser();

  try {
    const { searchParams } = new URL(req.url);
    const courseIdParam = searchParams.get("courseId");

    if (courseIdParam) {
      const courseId = Number(courseIdParam);

      if (isNaN(courseId)) {
        return NextResponse.json(
          { message: "Invalid courseId" },
          { status: 400 }
        );
      }

      const result = await db
        .select()
        .from(courseTable)
        .where(eq(courseTable.courseId, courseId))
        .limit(1);

      const chapterResult = await db
        .select()
        .from(courseChaptersTable)
        .where(eq(courseChaptersTable.courseId, courseId));


      let isEnrolledCourse = false;
      let userId = null;
      if (user?.primaryEmailAddress?.emailAddress) {
        const userResult = await db
          .select({ id: usersTable.id })
          .from(usersTable)
          .where(eq(usersTable.email, user.primaryEmailAddress.emailAddress))
          .limit(1);

        userId = userResult[0]?.id || null;
      }

      if (userId) {
        const enrolledCourses = await db
          .select()
          .from(enrolledCoursesTable)
          .where(
            and(
              eq(enrolledCoursesTable.courseId, courseId),
              eq(enrolledCoursesTable.userId, userId)
            )
          );

        isEnrolledCourse = enrolledCourses.length > 0;
      }

      if (result.length === 0) {
        return NextResponse.json(
          { message: "Course not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        ...result[0],
        chapters: chapterResult,
        userEnrolled: isEnrolledCourse
      });
    }

    const result = await db
      .select()
      .from(courseTable)
      .orderBy(asc(courseTable.id));

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { message: "Server error", error: String(error) },
      { status: 500 }
    );
  }
}