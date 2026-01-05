
import { db } from "@/config/db";
import { enrolledCoursesTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const { courseId } = await req.json();
    const  user = await currentUser();
    const result = await db.insert(enrolledCoursesTable).values({
        courseId: Number(courseId),
        userId: Number(user?.id),
        xpEarned: 0
    }).returning()

    return NextResponse.json(result)
}
