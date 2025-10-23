'use client'
import FixedSidebarLayout from "@/app/components/FixedSidebarLayout";
import React from "react";
import MyCoursesView from "@/sections/myCourses/myCoursesView";

const page = () => {
  return (
    <div>
      <FixedSidebarLayout>
            <MyCoursesView/>
      </FixedSidebarLayout>
    </div>
  );
};

export default page;
