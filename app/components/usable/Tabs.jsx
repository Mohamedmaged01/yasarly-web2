import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import { SlCheck } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import StarRating from "./StarRating";
import { CiLock } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import Image from "next/image";
export default function BTabs({ points, lessons, reviews }) {
  return (
    <div className="p-10">
    <Tabs className="w-full" aria-label="Basic tabs" defaultValue={0}>
      <TabList disableUnderline>
        <Tab>About</Tab>
        <Tab>Lessons</Tab>
        <Tab>Reviews</Tab>
      </TabList>
      <TabPanel value={0}>
        <div className='flex   flex-col gap-5'>
          <p className="text-[#111827] font-bold text-[20px]">Descriptions</p>
          <p className=" text-[#6B7280] font-medium text-[20px]">
          Hi there! 👋 My name is Olivia Smith and welcome to my profile.
          Digital products are more abstract and complex than any product we`&apos;`ve
          designed before. People are using their digital devices faster, with
          less conscious <strong>See more...</strong>
        </p>
    
        <p className=" font-[700] text-[24px]">Key Points</p>
        {points.map((point) => (
          <div key={point.id} className="flex gap-3 text-[#6B7280] ">
            <SlCheck className=" top-1" />
            <p> {point.desc}</p>
          </div>
        ))}

        </div>
      </TabPanel>
      <TabPanel value={1}>
        <h1 className="font-bold m-5 text-[24px]">Course Lessons</h1>
        <p className="font-bold text-[21px] m-5">class</p>
        {lessons.map((lesson) => (
          <div key={lesson.id} className=" flex gap-3 text-[#6B7280] m-4">
            <FaPlay className="relative top-1 border   text-[#2C3658]" />
            <p> {lesson.name}</p>
            <CiLock className="flex text-[25px] relative left-[1000px]" />
          </div>
        ))}
      </TabPanel>
      <TabPanel value={2}>
        <div className="container m-auto">
          <div className="w-1/2">
            <h1 className="font-bold text-[24px] ">Ratings</h1>
            <div className="flex justify-between">
              <h1 className="font-bold text-[24px] mb-6 ">User Reviews</h1>
              <div className="gap-3 flex justify-end text-[28px] text-[#9CA3AF]">
                <BiSortAlt2 className="relative top-[6px]" />
                Sort
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-col border shadow flex p-4 gap-3 text-[#6B7280] "
                >
                  <div className="text-[20px]  text-gray-600 font-[600] relative flex  justify-end top-14">
                    <div className="bg-[#FDC83D] flex items-center justify-center h-[30px] gap-2 flex border w-[60px] rounded-[8px] text-white p-1 ">
                      <FaStar className="text-white   " />
                      {review.rating}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Image src={review.img} width={100} height={100} alt="iamge"/>
                    <div className="">
                      <h1 className="font-bold text-black">{review.name}</h1>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <p className="font-[500] text-[22px] text-[#111827] ">
                    {review.content}
                  </p>
                  <div className="flex text-[24px] gap-3">
                    <GrLike className="relative  m-2" /> <p>200</p>
                    <GrDislike className="relative  m-2" /> <p>0</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[500px] p-4 h-[550px] border shadow  flex flex-col ml-40 text-[#6B7280]">
              <h1 className="font-bold text-[24px] text-black m-3 justify-center flex">
                Customer Review
              </h1>
              <div className="flex gap-8 m-4 justify-center">
                <p>12K ratings</p>
                <p> 3546 reviews</p>
              </div>
              <div className="flex justify-center text-[24px]">
                <StarRating /> <p>4.5 out of 5</p>
              </div>
              <div className="gap-7 flex flex-col text-[#6B7280]">
                <div className="flex gap-5">
                  <p> 5 star </p>
                  <span className="w-[60%] bg-[#FDC83D] rounded-[3px] gap-5"></span>
                  <p>60%</p>
                </div>
                <div className="flex gap-5">
                  <p> 5 star </p>
                  <span className="w-[35%] bg-[#FDC83D] rounded-[3px] gap-5"></span>
                  <p>60%</p>
                </div>
                <div className="flex gap-5">
                  <p> 5 star </p>
                  <span className="w-[5%] bg-[#FDC83D] rounded-[3px] gap-5"></span>
                  <p>60%</p>
                </div>
                <div className="flex gap-5">
                  <p> 5 star </p>
                  <span className="w-[5%] bg-[#FDC83D] rounded-[3px] gap-5"></span>
                  <p>60%</p>
                </div>
                <div className="flex gap-5">
                  <p> 5 star </p>
                  <span className="w-[5%] bg-[#FDC83D] rounded-[3px] gap-5"></span>
                  <p>60%</p>
                </div>
              </div>
              <div className=" flex gap-3 justify-center text-[20px] p-4 bg-[#0A90B0] rounded-full m-9 text-white">
                <CiCirclePlus size={30} /> New Review
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Tabs>
    </div>
  );
}
