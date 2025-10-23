import React from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
const ECourseCard = ({
  courseImage,
  category,
  courseName,
  subjectCourseName,
  coursePrice,
  rating,
  reviews,
  layout,
  courseId
}) => {
  return (
    <>
   { layout === 'grid' ? (
    <Link href={`courseDetails/${courseId}`}>
    <div className="borde-2 h-[300px] flex gap-2 flex-col p-2 border-2 shadow-md rounded-lg ">
      {
        courseImage ? (
          <>
          <img src={`https://yassrly-001-site1.ftempurl.com${courseImage}`} className="w-full h-[150px] rounded-md"/>
          </>
        ) : (
        <p className="text-sm font-bold text-center">Sorry! Not found  picture for this course now!</p>
        )
      }
      <div className="w-[76px] h-[35px] rounded-full bg-[#FFF5F6] flex items-center justify-center ">
        <span className="text-[#FF445D] text-[10px]">{subjectCourseName}</span>
      </div>
      <h2 class="font-bold text-lg truncate">
        {courseName}
      </h2>
      <div className="flex items-center justify-between">
        <span className="text-[#4075FF] font-bold">${coursePrice}</span>
        <div className="flex items-center gap-1">
     <span className="text-[#FDC83D] "><FaStar/></span>
     <span className="flex items-center text-[#6B7280] gap-1">{reviews}</span>
    </div>
      </div>
    </div>
  </Link>

    ) : (
  
<Link href={`courseDetails/${courseId}`}>
<div className="w-full p-4  h-[120px] border-2 ">
<div className="flex gap-2 items-center">
  <img src={`https://yassrly-001-site1.ftempurl.com${courseImage}`} className="w-[90px] h-[90px]" />
  <div className="flex  flex-col gap-1">
    <div className="w-[65px] h-[25px] bg-[#EAFCF2] rounded-full flex items-center justify-center">
      <span className="text-[#25D076] text-[10px]">{subjectCourseName}</span>
    </div>
    <span className="text-[#111827] font-bold text-[14px]">{courseName}</span>
    <span className="text-[#0564F1] font-bold text-[14px]">${coursePrice}</span>
    <div className="flex items-center gap-1">
     <span className="text-[#FDC83D] "><FaStar/></span>
     <span className="flex items-center text-[#6B7280] gap-1"><strong>{rating}</strong>{reviews}</span>
    </div>
  </div>
</div>
</div>
</Link>
    )
   }
    </>

  );
};

export default ECourseCard;
