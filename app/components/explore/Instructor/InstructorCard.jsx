/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BiRightArrow } from "react-icons/bi";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { TbBackground } from "react-icons/tb";

const InstructorCard = ({
  layout,
  doctorImage,
  title,
  doctorName,
  courseNumber,
  students,
  rating,
  doctorId
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [doctorProfile, setDoctorProfile] = useState([])
  // Function to toggle the drawer
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const fetchDoctorProfile = async () => {
    try {
      const response = await axios.get(
        `https://yassrly-001-site1.ftempurl.com/api/Doctor/Select/Doctor/Profile/${doctorId}`
      );
      const data = response.data;
      console.log(data); // Use this data to update your state or render on the page
      setDoctorProfile(data)
    } catch (error) {
      console.error("Error fetching doctor profile:", error);
    }
  };

  useEffect(() => {
    fetchDoctorProfile()
  }, [])
  return (
    <>
      <div
        className="flex items-center p-4 justify-between"
        onClick={toggleDrawer(true)}
      >
        <div className="flex gap-2 items-center">
          <div className="relative ">

            {
              doctorImage ? (
                <>
                  <img src={`https://yassrly-001-site1.ftempurl.com${doctorImage}`} className="w-[60px] h-[60px] rounded-full" />
                </>
              ) : (
                <p className="w-[60px] h-[60px] text-[10px]">no photo!</p>
              )
            }
            <div className="w-[40px] rounded-lg left-2 top-10 absolute  h-[20px] bg-[#FDC83D] flex items-center justify-center text-white]">
              <span className="text-white flex items-center text-sm">4.5 <FaStar /></span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-[15px] text-[#111827]">{doctorName}</h2>
            <span className="flex items-center gap-1 text-[#6B7280]"><FiUsers />{students}   </span>
          </div>
        </div>
        <div>
          <span className="flex items-center gap-1 text-[#6B7280]"><BiRightArrow />
            {
              courseNumber > 1 ?
                (
                  <>
                    {courseNumber} Courses
                  </>
                ) : (
                  <>
                    {courseNumber} Course
                  </>
                )
            }
          </span>
        </div>
      </div>
      {/* MUI Drawer Component */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box p={2} width="400px" role="presentation" style={{
          display: "flex",
          flexDirection: "column"
        }}>
          <h2 className="text-[#004353] cursor-pointer" onClick={toggleDrawer(false)}>Swipe Back</h2>
          <div className='flex flex-col gap-5 mt-[100px]'>
            {
              doctorImage ? (
                <>
                  <div className="flex items-center justify-center">
                    <img src={`https://yassrly-001-site1.ftempurl.com${doctorImage}`} className="w-[100px] h-[100px] rounded-full" />
                  </div>
                </>
              ) : (
                <p className="w-[60px] h-[60px] text-[10px]">no photo!</p>
              )
            }

            <Box
              style={{
                width: "100%",
                height: "100px",
                backgroundColor: "#004353",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "50px",
                borderRadius: "15px"
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-[#fff] text-[20px]">{doctorProfile?.studentNumber}</h2>
                <h2 className="font-normal text-[#97A9BD] text-[15px]">Students</h2>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-[#fff] text-[20px]">{doctorProfile?.myCourses?.length}</h2>
                <h2 className="font-normal text-[#97A9BD] text-[15px]">Courses</h2>
              </div>

            </Box>
            <div>
              <h2>My courses</h2>
              {
                doctorProfile?.myCourses?.map((course) => (
                  <Box
                    key={course.courseId}
                    style={{
                      width: "100%",
                      height: "150px",
                      borderRadius: "15px",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      // justifyContent: "center",
                      padding: 4,
                    }}
                  >

                    <div className="flex gap-2 items-center">
                      <img src={`https://yassrly-001-site1.ftempurl.com${course.courseImage}`} className="w-[80px] h-[80px]" />
                      <div className="flex flex-col gap-1">
                        <h2 className="font-bold">{course.courseName}</h2>
                        <p>{course.subjectName}</p>
                        <p>${course.coursePrice}</p>
                      </div>
                    </div>
                  </Box>
                ))
              }
            </div>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default InstructorCard;
