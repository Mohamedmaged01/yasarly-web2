import React from "react";

const ProgressCard = ({ type, title, subtitle, progress }) => {
  return (
    <div className="bg-white rounded-[15px] border border-2  p-4 w-96 ">
      <div className="flex justify-between gap-3">
        <img src="/image.png" />
        <div className="grid  ">
          <p className=" text-[#FDC83D] font-[600] ">{type}</p>
          <h3 className="text-[17.5px] font-bold mb-1">{title}</h3>
        </div>
      </div>
      <p className="text-[15px] text-[#6B7280] mb-3 relative top-5">
        {subtitle}
      </p>
        <span className="text-[15px] text-[#6B7280] relative left-60 bottom-5">
          {progress}% completed
        </span>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div
            style={{ width: `${progress}%` }}
            className=" flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#0A90B0]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
