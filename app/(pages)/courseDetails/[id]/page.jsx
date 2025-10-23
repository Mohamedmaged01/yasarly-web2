import FixedSidebarLayout from "@/app/components/FixedSidebarLayout";
import React from "react";
import DetailsView from "@/sections/details/detailsView";
async function page() {
  return (
      <FixedSidebarLayout>
        <DetailsView/>
      </FixedSidebarLayout>
  )
}

export default page;
