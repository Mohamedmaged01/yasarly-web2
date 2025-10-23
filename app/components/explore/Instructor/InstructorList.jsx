import React from "react";
import InstructorCard from "./InstructorCard";

const InstructorList = ({ instructors, layout }) => {
  return (
    <div>
      <h1 className="text-[18px] mb-4 ">
        <span className="text-[#6B7280]">Showing</span>{" "}
        <span className=" font-bold text-[18px] ">12,376</span>{" "}
        <span className="text-[#6B7280]">instructor</span>
      </h1>
      <div className="w-full">

      {instructors.map((instructor, index) => (
  <div key={index} className="w-full h-[104px] mb-10 border-2 rounded-lg">
    <InstructorCard {...instructor} layout={layout} />
  </div>
))}
      </div>
    </div>
  );
};

export default InstructorList;
