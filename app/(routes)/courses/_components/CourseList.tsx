"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { 
  ChartNoAxesColumnDecreasing, 
  Zap, 
  Clock, 
  Users,
  Lock,
  Unlock
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export type Course = {
  id: number,
  courseId: number | null,
  title: string,
  description: string,
  bannerImage: string,
  level: string,
  tags: string | null,
  chapters: Chapter[]
  userEnrolled?: boolean,
  courseEnrolledInfo?: CourseEnrolledInfo,
  completedExercises?: CompletedExercise[]
}

export type CourseEnrolledInfo = {
  xpEarned: number,
  enrolledDate: any
}

export type CompletedExercise = {
  chapterId: number,
  exerciseId: number,
  courseId: number,
  userId: number,
  completedDate: any
}

export type Chapter = {
  id: number,
  chapterId: number,
  courseId: number,
  description: string,
  name: string,
  exercises: Exercise[]
}

export type Exercise = {
  name: string,
  difficulty: string,
  slug: string,
  xp: number
}

const CourseList = () => {
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const GetAllCourseList = async () => {
      try {
        setLoading(true);
        const result = await axios.get("/api/course");
        console.log("CourseList:", result);
        setCourseList(result.data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoading(false);
      }
    };

    GetAllCourseList();
  }, []);

  const getLevelColor = (level: string) => {
    const colors: Record<string, string> = {
      'Beginner': 'from-green-500 to-emerald-300',
      'Intermediate': 'from-yellow-500 to-amber-300',
      'Advanced': 'from-red-500 to-pink-300',
      'Expert': 'from-purple-500 to-pink-400'
    };
    return colors[level] || 'from-cyan-500 to-blue-300';
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch(difficulty?.toLowerCase()) {
      case 'easy': return '🟢';
      case 'medium': return '🟡';
      case 'hard': return '🔴';
      default: return '⚪';
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-2 border-purple-500/20 rounded-2xl bg-slate-900/50 p-4 animate-pulse">
            <div className="h-48 bg-slate-800 rounded-xl mb-4" />
            <div className="h-6 bg-slate-800 rounded w-3/4 mb-3" />
            <div className="h-4 bg-slate-800 rounded w-full mb-2" />
            <div className="h-4 bg-slate-800 rounded w-2/3" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courseList?.map((course, index) => (
        <Link href={'/courses/' + course?.id} key={index}>
          <div className="group relative overflow-hidden border-2 border-purple-500/30 
                        rounded-2xl bg-linear-to-br from-slate-900/80 to-slate-950/80 
                        backdrop-blur-sm hover:border-cyan-500/50 
                        transition-all duration-500 hover:scale-[1.02]
                        hover:shadow-2xl hover:shadow-purple-500/20">
            
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-cyan-600 
                          rounded-2xl blur opacity-0 group-hover:opacity-20 
                          transition-opacity duration-500" />
            
            {/* Course Image */}
            <div className="relative h-48 overflow-hidden rounded-t-xl">
              <Image 
                src={course?.bannerImage?.trimEnd() || '/placeholder-course.jpg'} 
                alt={course?.title} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
              
              {/* Level Badge */}
              <div className={`absolute top-4 right-4 px-4 py-1 rounded-full 
                            bg-linear-to-r ${getLevelColor(course?.level)} 
                            font-game text-sm text-white shadow-lg`}>
                {course?.level}
              </div>
              
              {/* Progress Indicator */}
              {/* <div className="absolute bottom-4 left-4 right-4">
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-linear-to-r from-cyan-500 to-purple-500 rounded-full"
                    style={{ width: `${Math.random() * 100}%` }}
                  />
                </div>
              </div> */}
            </div>

            {/* Course Content */}
            <div className="p-6 relative">
              {/* Title & Description */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  {course?.userEnrolled ? (
                    <Unlock className="h-5 w-5 text-green-400" />
                  ) : (
                    <Lock className="h-5 w-5 text-purple-400" />
                  )}
                  <h2 className="text-2xl font-game text-white group-hover:text-cyan-300 transition-colors">
                    {course?.title}
                  </h2>
                </div>
                <p className="text-gray-300 line-clamp-2 font-game">
                  {course?.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-1 text-sm text-cyan-100">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  <span>{course?.chapters?.reduce((acc, chapter) => acc + (chapter.exercises?.length || 0), 0) || 0} XP</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-cyan-100">
                  <Clock className="h-4 w-4 text-purple-400" />
                  <span>{course?.chapters?.length || 0} Chapters</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-cyan-100">
                  <Users className="h-4 w-4 text-green-400" />
                  <span>{Math.floor(Math.random() * 500) + 50} Enrolled</span>
                </div>
              </div>

              {/* Difficulty Tags */}
              <div className="flex flex-wrap gap-2">
                {course?.chapters?.slice(0, 3).map((chapter, idx) => (
                  chapter.exercises?.slice(0, 1).map((exercise, exIdx) => (
                    <span 
                      key={`${idx}-${exIdx}`}
                      className="px-3 py-1 rounded-full bg-slate-800/50 text-sm 
                               font-game border border-slate-700 text-cyan-100"
                    >
                      {getDifficultyIcon(exercise.difficulty)} {exercise.difficulty}
                    </span>
                  ))
                ))}
              </div>

              {/* CTA Button */}
              <Button variant="pixel">
                Continue Learning
              </Button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;