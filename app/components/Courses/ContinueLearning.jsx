import React from "react";

const ContinueLearning = ({ courses }) => {
  return (
    <div className="mb-8 ">
      <h2 className="text-2xl font-semibold mb-4">Continue Learning</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg  p-4 w-80 flex-none">
            <h3 className="text-[17.5px] font-bold mb-2">{course.title}</h3>
            <p className="text-sm text-[#6B7280] relative flex top-7 ">
              {course.subtitle}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-500">
              {course.progress}% completed
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueLearning;
