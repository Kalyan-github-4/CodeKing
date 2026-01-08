import { Skeleton } from "@/components/ui/skeleton";
import { Course } from "../../_components/CourseList";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Lock, FileText } from "lucide-react";

type Props = {
  loading: boolean;
  courseDetail: Course | undefined;
};

const CourseChapters = ({ loading, courseDetail }: Props) => {

  const enableExercise = (
    chapterIndex: number,
    exerciseIndex: number,
    chapterExercisesLength: number
  ) => {
    const completed = courseDetail?.completedExercises;

    if (!completed || completed.length === 0) {
      return chapterIndex === 0 && exerciseIndex === 0;
    }

    const last = completed[completed.length - 1];

    const currentExerciseNumber = chapterIndex * chapterExercisesLength + exerciseIndex + 1;
    const lastCompletedExerciseNumber = (last.chapterId - 1) * chapterExercisesLength + last.exerciseId;

    return currentExerciseNumber === lastCompletedExerciseNumber + 2;
  }

  return (
    <div>
      {courseDetail?.chapters?.length == 0 ?
        <div className="space-y-4">
          <Skeleton className="w-full h-16 rounded-lg" />
          <Skeleton className="w-full h-16 rounded-lg" />
          <Skeleton className="w-full h-16 rounded-lg" />
        </div>
        :
        <div className="font-game border border-gray-500 rounded-xl p-4 bg-linear-to-br from-slate-900/80 to-slate-900">
          <h2 className="text-3xl text-white mb-4">Course Chapters</h2>

          {courseDetail?.chapters?.map((chapter, index) => (
            <Accordion key={index} type="single" collapsible className="mb-3 font-game">
              <AccordionItem value={"item-" + index} className="border border-gray-700 rounded-lg">
                <AccordionTrigger className="px-4 py-3 hover:bg-gray-800/50 transition-colors">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cyan-900/30 border border-cyan-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-cyan-300 font-medium">{index + 1}</span>
                      </div>
                      <h3 className="text-gray-100 text-xl text-left  hover:text-yellow-400 transition-colors">
                        {chapter?.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>{chapter?.exercises?.length || 0} exercises</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="pt-3 border-t border-gray-800">
                    {chapter?.exercises?.map((exercise, indexExc) => (
                      <div key={indexExc} className="flex items-center justify-between py-3 border-b border-gray-800/50 last:border-0">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-gray-400" />
                          <div>
                            <h4 className="text-gray-200 font-medium text-base tracking-wider">
                              {exercise?.name}
                            </h4>
                            <p className="text-base text-gray-500">
                              Exercise {index * (chapter?.exercises?.length || 0) + indexExc + 1}
                            </p>
                          </div>
                        </div>
                        {enableExercise(index, indexExc, chapter?.exercises?.length) ? (
                          <Button
                            variant="pixel"
                            className="w-20"
                          >
                            Start
                          </Button>
                        ) : (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-gray-600 text-gray-400 hover:bg-gray-800"
                              >
                                <Lock className="w-3 h-3 mr-1" />
                                Locked
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="font-medium">Enroll to unlock this exercise</p>
                            </TooltipContent>
                          </Tooltip>
                        )}

                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      }
    </div>
  )
}

export default CourseChapters