import React from "react";
import ECourseCard from "./ECourseCard";

const CourseList = ({ courses, layout }) => {
  return (
    <div>
      <div className={`grid gap-3  ${layout === "grid" ? "grid-cols-4 " : ""}`}>
        {courses.map((course, index) => (
          <ECourseCard key={index} {...course} layout={layout} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
