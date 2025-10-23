'use client'
import Settings from "@/app/components/settings/Settings";
import React from "react";
import FixedSidebarLayout from "@/app/components/FixedSidebarLayout";

const page = () => {
  return (
    <FixedSidebarLayout>
      <Settings />
    </FixedSidebarLayout>
  );
};

export default page;
