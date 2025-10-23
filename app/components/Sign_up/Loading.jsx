import React from "react";

export const Loading = () => {
  return (
    <div className="w-screen min-h-screen bg-[#10738E] justify-center items-center flex flex-col ">
      <img src="/loading.png" />
      <h1 className="text-white font-[600] text-[32px]">
        Be serious, Get the updates
      </h1>
    </div>
  );
};
