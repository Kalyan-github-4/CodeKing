import { Skeleton } from "@/components/ui/skeleton";
import { Course } from "../../_components/CourseList";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type Props = {
  loading: boolean;
  courseDetail: Course | undefined;
};

const CourseChapters = ({ loading, courseDetail }: Props) => {
  return (
    <div>

      {courseDetail?.chapters?.length == 0 ?
        <div>
          <Skeleton className="w-full h-[100px] rounded-xl" />
          <Skeleton className="w-full h-[100px] mt-5 rounded-xl" />
          <Skeleton className="w-full h-[100px] mt-5 rounded-xl" />
        </div>

        :

        <div className="border-4 p-5 rounded-2xl">
          {courseDetail?.chapters?.map((chapter, index) => (
            <Accordion key={index} type="single" collapsible className="mb-4 font-game ">
              <AccordionItem value={"item-" + index} className="">
                <AccordionTrigger className="text-2xl tracking-wide font-md px-4 py-2 rounded-t-lg hover:bg-zinc-800">

                  <div className="flex items-center">
                    <h2 className="h-12 w-12 bg-zinc-900 p-2 rounded-full flex items-center justify-center">
                      {index + 1}
                    </h2>
                    <h2 className="ml-4 text-gray-200">
                      {chapter?.name}
                    </h2>
                  </div>

                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-300 p-8">
                  <div className="p-7 bg-zinc-900 rounded-xl">
                    {chapter?.exercises?.map((exercise, indexExc) => (
                      <div key={indexExc} className="flex justify-between items-center mb-7">
                        <div className="flex items-center gap-10">
                          <h2 className="text-3xl">
                            Excercise {index*chapter?.exercises?.length+indexExc + 1}
                          </h2>
                          <h2 className="text-3xl">
                            {exercise?.name}
                          </h2>
                        </div>
                        <Tooltip>
                          <TooltipTrigger asChild>
                        <Button variant={'pixelDisabled'} className="w-16 rounded-xl">???</Button>

                          </TooltipTrigger>

                        <TooltipContent >
                          <p className="font-game text-xl">Please Enroll First</p>
                        </TooltipContent>
                        </Tooltip>

                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>}
    </div>
  )
}

export default CourseChapters