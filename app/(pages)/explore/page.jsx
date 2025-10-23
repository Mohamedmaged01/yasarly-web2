"use client";
import CourseList from "@/app/components/explore/CourseList";
import Explore from "@/app/components/explore/Explore";
import React from "react";
import ExploreView from "@/sections/explore/ExploreView";
import FixedSidebarLayout from "@/app/components/FixedSidebarLayout";

const page = () => {
  return (
    <div>
      <FixedSidebarLayout>
      <ExploreView />
      </FixedSidebarLayout>
    </div>
  );
};

export default page;
