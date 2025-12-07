import React from "react";
import { Course } from "../../_components/CourseList";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  loading: boolean;
  courseDetail: Course | undefined;
};

const CourseDetailsBanner = ({ loading, courseDetail }: Props) => {
  // Safe banner URL
  const bannerUrl =
    typeof courseDetail?.bannerImage === "string"
      ? courseDetail.bannerImage.trim()
      : "/hero2.gif"; 

  return (
    <div>
      {loading ? (
        <Skeleton className="w-full h-[300px] rounded-2xl mt-20" />
      ) : !courseDetail ? (
        <Skeleton className="w-full h-[300px] rounded-2xl mt-20" />
      ) : (
        <div className="relative mt-20">
          <Image
            src={bannerUrl}
            alt={courseDetail.title}
            width={1400}
            height={300}
            className="w-full h-[300px] object-cover "
          />
          <div className="font-game absolute top-0 pt-15 h-full p-10 md:px-24 lg:px-36 bg-linear-to-r from-black/80 to to-white-50/50">
            <h2 className="text-6xl">{courseDetail.title}</h2>
            <p className="text-2xl text-gray-300 mt-3">{courseDetail.description}</p>
            <Button variant={'pixel'} className="mt-7 w-36">Enroll Now</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsBanner;
