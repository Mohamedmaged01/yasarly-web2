'use client'
import FixedSidebarLayout from "@/app/components/FixedSidebarLayout";
import React from "react";
import MyCourseView from "@/sections/mycourse/MycourseView";

const page = () => {
  return (
      <FixedSidebarLayout>
        <MyCourseView/>
      </FixedSidebarLayout>
  )
}

export default page
