import React from "react";

const Language = () => {
  return (
    <div className="w-full overflow-hidden h-[650px] p-12 mt-24 ml-10 border border-[#9CA3AF] rounded-[12px]  ">
      <h1 className="font-bold text-[24px] m-4  ">Language</h1>
      <div className="flex flex-col ">
        <input type="radio" className="relative rounded-full left-80 top-11" />
        <label className="border p-2 font-bold flex m-4 border-[#9CA3AF] rounded-lg">
          <img src="/arabic.png" className="mr-4" /> Arabic
        </label>
        <input
          type="radio"
          className=" relative rounded-full left-80 top-11 "
        />
        <label className="border p-2 font-bold flex m-4 border-[#9CA3AF] rounded-lg">
          <img src="/english.png" className="mr-4" />
          English
        </label>
        <div className="flex justify-end relative top-24  m-5">
          <button className="bg-[#0A90B0] text-white  rounded-full w-[200px] h-[48px]">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Language;
