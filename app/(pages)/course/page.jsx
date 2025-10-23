'use client'
import Course from "@/app/components/explore/Instructor/Course";
import FixedSidebarLayout from "@/app/components/FixedSidebarLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <FixedSidebarLayout>
        <Course />
      </FixedSidebarLayout>
    </div>
  );
};

export default page;
