import React from "react";
import { FiSearch } from "react-icons/fi";
const Help = () => {
  const topics = [
    {
      img: "/G.png",
      name: "Getting Strated",
    },
    {
      img: "/A.png",
      name: "Getting Strated",
    },
    {
      img: "/L.png",
      name: "Getting Strated",
    },
    {
      img: "/P.png",
      name: "Getting Strated",
    },
    {
      img: "/M.png",
      name: "Getting Strated",
    },
    {
      img: "/T.png",
      name: "Getting Strated",
    },
  ];
  return (
    <div className="mt-24 mx-16  p-10 border-[#9CA3AF] border-[1px] rounded-[16px]  shadow w-full h-full">
      <h1 className="font-bold text-[24px] mb-5">Help Center </h1>
      <div className=" rounded-[16px] w-full h-[170px] flex gap-4 p-4 flex-col ">
        <h1 className="text-white font-bold  text-[20px]">
          How May we help you ?
        </h1>
        <div className="relative flex items-center w-full  text-white ">
          <input
            type="text"
            placeholder=" Search"
            className="w-[400px] h-[45px]  rounded-lg text-white bg-[#FFFFFF1A] "
          />
        </div>
      </div>
      <h1 className="font-bold text-[20px]">Browse by topics </h1>
      <div className=" grid grid-cols-5 gap-10 relative m-5">
        {topics.map((topic) => (
          <div className="flex flex-col  gap-2 bg-[#0A90B0]  " key={topic.name}>
            <img src={topic.img} className="w-fit h-fit" />
            <p className="font-semibold text-[12px]"> {topic.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
