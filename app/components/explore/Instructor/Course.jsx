import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCaretForwardOutline } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { SlLike } from "react-icons/sl";

import { IoIosArrowForward } from "react-icons/io";
import { RiForward10Fill } from "react-icons/ri";
import { GrBackTen } from "react-icons/gr";
import { FaPause } from "react-icons/fa";

const Course = () => {
  const content = [
    {
      id: 1,
      name: "overview",
      time: "03:23",
      watched: false,
    },
    {
      id: 2,
      name: "overview",
      time: "03:23",
      watched: false,
    },
    {
      id: 3,
      name: "overview",
      time: "03:23",
      watched: true,
    },
  ];
  const comments = [
    {
      id: 1,
      name: "Ahmed Hassan",
      text: "Embark on a transformative journey with our comprehensive course, 'Master Digital Product'",
      likes: 117,
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      text: "Embark on a transformative journey with our comprehensive course, 'Master Digital Product'",
      likes: 117,
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      text: "Embark on a transformative journey with our comprehensive course, 'Master Digital Product'",
      likes: 117,
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="ml-10 mt-11">
          <img src="course1.png" className="z-0" />
          <img src="controls.png" className="z-10 relative bottom-28" />
          <div className=" w-[1000px]  flex justify-between relative left-24 bottom-[500px] z-20 text-white ">
            <img src="Group 3810.png" />
          </div>
        </div>
        <div className="border shadow w-[350px] flex flex-col p-10 m-5 mt-11">
          <h1 className="font-bold text-[24px] mb-4">Course content</h1>
          <div className="font-bold text-[24px] mb-4 flex justify-between">
            <h1>introductions</h1>
            <IoIosArrowDown className="top-2 relative text-[#9CA3AF]" />
          </div>
          <div className="font-bold text-[24px] mb-4 flex justify-between">
            <h1>what is Design </h1>
            <IoIosArrowUp className="top-2 relative text-[#9CA3AF]" />
          </div>
          {content.map((course) => {
            return (
              <div key={course.id} className="flex  m-5 gap-4">
                <IoCaretForwardOutline />
                <p className="relative bottom-1">{course.name}</p>
                <p className="relative left-20">{course.time}</p>
                {course.watched ? (
                  <IoIosCheckmarkCircle
                    size={20}
                    className="relative left-20 top-1 "
                  />
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="mb-5 ml-6 text-[38px] font-bold">
          Freestyle Graffiti: Creating a Zentangle Wall Painting using Spray
          Paint
        </h1>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Comment section</h2>
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0">
                <img
                  className="rounded-full"
                  src="/profile.png"
                  alt={comment.name}
                  width={50}
                  height={50}
                />
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex-1">
                <div className="font-semibold">{comment.name}</div>
                <div className="text-gray-600 bg-[#EEEEEE] h-20">
                  {comment.text}
                </div>
              </div>
              <div className="flex flex-col items-center relative right-24">
                <SlLike className="" />
                <div className="text-gray-600 text-sm">{comment.likes}</div>
              </div>
            </div>
          ))}
          <div className="flex items-center space-x-4">
            <img
              className="rounded-full"
              src="profile.png"
              alt="User"
              width={50}
              height={50}
            />
            <input
              type="text"
              placeholder="Type to talk"
              className="flex-1 bg-[#EEEEEE] rounded-lg p-4"
            />
            <button className="p-2 rounded-full  text-white">
              <img src="/button.png" className="rounded" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
