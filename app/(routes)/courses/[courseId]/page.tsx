"use client";

import { useParams } from "next/navigation";
import CourseDetailsBanner from "./_components/CourseDetailsBanner";
import axios from "axios";
import { useEffect, useState } from "react";
import { Course } from "../_components/CourseList";
import CourseChapters from "./_components/CourseChapters";
import CourseStatus from "./_components/CourseStatus";
import UpgradeToPro from "../../dashboard/_components/UpgradeToPro";
import CommunityHelpSection from "./_components/CommunityHelpSection";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [courseDetail, setCourseDetail] = useState<Course>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (courseId) GetCourseDetail();
  }, [courseId]);

  const GetCourseDetail = async () => {
    try {
      setLoading(true);

      const result = await axios.get(`/api/course?courseId=${courseId}`);

      console.log(result.data);
      setCourseDetail(result.data);
    } catch (error) {
      console.error("Error loading course:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CourseDetailsBanner loading={loading} courseDetail={courseDetail} />
      
        {/* Additional course details can be rendered here */}
      <div className="grid grid-cols-3 p-10 md:px-24 lg:px-36 gap-5">
        <div className="col-span-2">
        
        <CourseChapters loading={loading} courseDetail={courseDetail} />
        </div>
        <div>
          <CourseStatus courseDetail={courseDetail} />
          <UpgradeToPro />
          <CommunityHelpSection />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
