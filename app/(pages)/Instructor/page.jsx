import About from "@/app/components/explore/Instructor/About";
import React from "react";
import InstructorView from "@/sections/instructorView/instructorView";
import FixedSidebarLayout from "@/app/components/FixedSidebarLayout";
const page = () => {
  return (

      <FixedSidebarLayout>
      <InstructorView/>
      </FixedSidebarLayout>

  );
};

export default page;
