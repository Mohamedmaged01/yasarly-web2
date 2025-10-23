"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { CiCircleQuestion, CiHeadphones } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Personal from "./Personal";
import Language from "./Language";
import Help from "./Help";
import { fetchStudentProfile } from "@/actions/student";
import { useRouter } from "next/navigation"; // Import the useRouter hook
const Settings = () => {
  const router = useRouter(); // Initialize the router

  const [view, setView] = useState(0);
  const [studentData, setStudentData] = useState({});
  const [studentId, setStudentId] = useState(null);

  const handlePersonal = () => setView(0);
  const handleLanguage = () => setView(1);
  const handleFAQs = () => setView(2);
  const handleHelp = () => setView(3);
  const handlePrivacy = () => setView(4);

  // Fetch the studentId from localStorage only on the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedStudentId = localStorage.getItem("studentId");
      if (storedStudentId) {
        setStudentId(storedStudentId);
      } else {
        // Redirect to login page if studentId is not found
        router.push("/login");
      }
    }
  }, [router]);

  const fetchStudent = async (id) => {
    try {
      const dataProfile = await fetchStudentProfile(id);
      setStudentData(dataProfile);
    } catch (error) {
      console.error("Error fetching student profile:", error);
    }
  };

  // Call fetchStudent only when studentId is available
  useEffect(() => {
    if (studentId) {
      fetchStudent(studentId);
    }
  }, [studentId]);


  return (

    <>

      <div className="flex">
        <h1 className="font-bold text-[24px] my-10 ml-7">Settings</h1>
        <div className="flex">
          <div className="w-[400px] h-[650px] p-6 gap-6 flex flex-col items-center my-24 rounded-[16px] border-2 shadow-2xl">
            <h1 className="font-bold text-[24px]">
              {studentData?.studentName || "Student Name"}
            </h1>
            <p className="text-[#5F5F5F] mb-10">
              {studentData?.studentEmail || "Student Email"}
            </p>
            <ul className="flex flex-col gap-7 text-[#374151]">
              <li
                onClick={handlePersonal}
                className={`cursor-pointer gap-6 p-2 justify-between ${view === 0
                  ? "flex border-b-2 justify-between border-[#09C1E0] text-[#09C1E0]"
                  : "flex"
                  }`}
              >
                <IoPersonOutline size={25} className="text-[#9CA3AF]" />
                <span className="relative bottom-1 text-[#374151]">
                  Personal Details
                </span>
                <IoIosArrowForward className="" />
              </li>
              {/* <li
              onClick={handleLanguage}
              className={`cursor-pointer gap-6 p-2 justify-between ${view === 1
                ? "flex border-b-2 justify-between border-[#09C1E0] text-[#09C1E0]"
                : "flex"
                }`}
            >
              <GrLanguage size={25} className="text-[#9CA3AF]" />
              <span className="relative bottom-1 text-[#374151]">Language</span>
              <IoIosArrowForward className="" />
            </li> */}
              {/* <li
              onClick={handleFAQs}
              className={`cursor-pointer gap-6 p-2 justify-between ${view === 2
                ? "flex border-b-2 justify-between border-[#09C1E0] text-[#09C1E0]"
                : "flex"
                }`}
            >
              <CiCircleQuestion size={25} className="text-[#374151]" />
              <span className="relative bottom-1 text-[black]">FAQs</span>
              <IoIosArrowForward className="" />
            </li> */}
              <li
                onClick={handleHelp}
                className={`cursor-pointer gap-6 p-2 justify-between ${view === 3
                  ? "flex border-b-2 justify-between border-[#09C1E0] text-[#09C1E0]"
                  : "flex"
                  }`}
              >
                <CiHeadphones size={25} className="text-[#9CA3AF]" />
                <span className="relative bottom-1 text-[#374151]">
                  Help Center
                </span>
                <IoIosArrowForward className="" />
              </li>
              {/* <li
              onClick={handlePrivacy}
              className={`cursor-pointer p-2 gap-6 justify-between ${view === 4
                  ? "flex border-b-2 justify-between border-[#09C1E0] text-[#09C1E0]"
                  : "flex"
                }`}
            >
              <IoShieldCheckmarkOutline size={25} className="text-[#9CA3AF]" />
              <span className="relative bottom-1 text-[#374151]">Privacy</span>
              <IoIosArrowForward className="" />
            </li> */}
            </ul>
          </div>
        </div>
        {view === 0 && <Personal studentData={studentData} fetchStudent={fetchStudent} />}
        {/* {view === 1 && <Language />} */}
        {view === 3 && <Help />}
      </div>
    </>
  );
};

export default Settings;
