import React from "react";
import CourseCard from "./CourseCard";
import { IoIosArrowForward } from "react-icons/io";
import CourseCarousel from "./CourseCarousel";
const CourseSection = ({ title, courses }) => {
  return (
    <div className="mt-[250px] p-8 overflow-hidden ">
      <div className="flex justify-between items-center mb-4 overflow-hidden">
        <h2 className="text-[24px] font-bold">{title}</h2>
        <div className="flex gap-3 text-[#0A90B0] font-[600]  ">
          <button className=" text-[16px] flex relative bottom-1 ">
            See more
          </button>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="">
        <CourseCarousel courses={courses} />
      </div>
    </div>
  );
};

export default CourseSection;
