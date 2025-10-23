'use client'
import React, { useState, useEffect } from 'react'
import { useParams } from "next/navigation";
import { getCourseById } from '@/actions/course';
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
import { CiLock } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import StarRating from '@/app/components/usable/StarRating';
import { fetchCourseCommentsById } from '@/actions/course';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DetailsView = () => {
  const idd = useParams();
  const [courseInfo, setCourseInfo] = useState(null)
  const [courseComment, setCourseComment] = useState(null)

  const fetchData = async () => {
    try {
      const courseData = await getCourseById(idd.id);
      setCourseInfo(courseData);
      console.log(courseData)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchComment = async () => {
    try {
      const courseData = await fetchCourseCommentsById(idd.id);
      setCourseComment(courseData);
      console.log(courseData, "comment")
    } catch (error) {
      console.log(error);
    }
  };

  const requestOrder = async () => {
    const studentId = localStorage.getItem('studentId');
    const courseId = idd.id;

    // Log values to debug
    console.log('Student ID:', studentId);
    console.log('Course ID:', courseId);

    const body = {
      studentId: parseInt(studentId), // Ensure it's an integer
      courseId: parseInt(courseId), // Ensure it's an integer
    };

    try {
      const response = await fetch('https://yassrly-001-site1.ftempurl.com/api/Student/Insert/Course/Reqest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      toast.success('your order is send successfully!');
      if (!response.ok) {
        const errorResponse = await response.json(); // Log the error response
        console.error('Error response:', errorResponse);
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error requesting order:', error);
    }
  };


  useEffect(() => {
    fetchData();
    fetchComment();
  }, [idd.id]);


  return (
    <>
    
      <div className='flex flex-col gap-5 mt-[150px] p-4' >
        <div className=' flex flex-col items-center justify-center '>
          <div className='w-[800px] h-[300px]'>
            <img src={`https://yassrly-001-site1.ftempurl.com${courseInfo?.courseImage}`} className="w-full rounded-md h-full" alt="cover" />
          </div>
          <Button
            onClick={requestOrder}
            sx={{
              background: "#000",
              color: "#fff",
              padding: 3,
              marginTop: "10px",
              width: "130px",
              height: "20px",
              fontSize: "10px"
            }}
          >Buy now!</Button>
        </div>
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
                  {courseInfo?.courseDescription}
                </p>
              </div>
            </TabPanel>
            <TabPanel value={1}>
              <h1 className="font-bold m-5 text-[24px]">Course Lessons</h1>
              <p className="font-bold text-[21px] m-5">class</p>
              {courseInfo?.lessons.map((lesson) => (
                <div key={lesson.monthId} className="p-4">
                  {
                    lesson?.lectures.map((lec) => (
                      <div className='flex items-center justify-between ' key={lec.lectureId}>
                        <div className='flex items-center gap-2'>
                          <FaPlay className="relative top-1 border   text-[#2C3658]" />
                          <span className='text-[#9CA3AF] font-medium text-[20px]'>{lec.lectureName}</span>
                        </div>
                        <CiLock className="flex text-[25px]  left-[1000px]" />
                      </div>
                    ))
                  }
                  {/* 
            <p> {lesson.name}</p>
            <CiLock className="flex text-[25px] relative left-[1000px]" /> */}
                </div>
              ))}
            </TabPanel>
            <TabPanel value={2}>
              <div className="container m-auto">
                <div className="w-1/2">
                  <h1 className="font-medium text-[20px] ">Ratings</h1>
                  <div className="flex justify-between">
                    <h1 className="font-medium text-[20px] mb-6 ">User Reviews</h1>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-1/2">
                    {courseComment?.comments.map((review) => (
                      <div
                        key={review.id}
                        className="flex-col border shadow flex p-4 gap-3 text-[#6B7280] "
                      >
                        <div className="text-[20px]  text-gray-600 font-[600] relative flex  justify-end top-14">
                          <div className="bg-[#FDC83D] flex items-center justify-center h-[30px] gap-2 flex border w-[60px] rounded-[8px] text-white p-1 ">
                            <FaStar className="text-white   " />
                            {review.studentCourseEvaluation}
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <img src={`https://yassrly-001-site1.ftempurl.com${review.studentImage}`} className='w-[60px] h-[60px] rounded-full' />
                          <div className="">
                            <h1 className="font-bold text-black">{review.studentName}</h1>
                            <p>{review.studentCourseCommentDate}</p>
                          </div>
                        </div>
                        <p className="font-[500] text-[22px] text-[#111827] ">
                          {review.studentCourseComment}
                        </p>
                        <div className="flex text-[24px] gap-3">
                          <GrLike className="relative  m-2" /> <p>200</p>
                          <GrDislike className="relative  m-2" /> <p>0</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div className="w-[500px] p-4 h-[550px] border shadow  flex flex-col ml-40 text-[#6B7280]">
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
            </div> */}
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}


export default DetailsView