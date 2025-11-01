/* eslint-disable react/no-unescaped-entities */
"use client"; // Ensure this component runs on the client side

import React, { useEffect, useState } from "react";
import { getMyCourseById } from "@/actions/course";
import Link from "next/link";

const MyCoursesView = () => {
  const [myCourses, setMyCourses] = useState([]);
  const [error, setError] = useState(null);
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    // Ensure this code only runs on the client
    if (typeof window !== "undefined") {
      const storedStudentId = localStorage.getItem("studentId");
      setStudentId(storedStudentId);
    }
  }, []);

  useEffect(() => {
    if (studentId) {
      const fetchCourses = async () => {
        try {
          const courseData = await getMyCourseById(studentId);
          setMyCourses(courseData);
          // Cache all courses in localStorage
          if (typeof window !== "undefined") {
            localStorage.setItem("cachedCourses", JSON.stringify(courseData));
          }
        } catch (err) {
          // If backend fails, try to load from cache
          if (typeof window !== "undefined") {
            const cached = localStorage.getItem("cachedCourses");
            if (cached) {
              setMyCourses(JSON.parse(cached));
            }
          }
          setError(err.message);
        }
      };
      fetchCourses();
    }
  }, [studentId]);

  return (
    <>
      <div className="mt-5 flex gap-10 w-full flex-col p-8">
        {myCourses.length > 0 ? (
          <>
            <div className="flex flex-col gap-5">
              <h2 className="text-[#0F172A] font-bold flex justify-start text-[40px]">
                {" "}
                My courses
              </h2>
              <h2 className="text-[#0F172A] font-bold flex justify-start text-[30px]">
                {" "}
                Active Progress
              </h2>
              {myCourses?.map((course) => (
                <Link
                  href={`mycourse/${course.courseId}`}
                  key={course?.courseId}
                >
                  <div className="w-full items-center flex gap-2 h-[200px] border-2 rounded-md bg-[#000000] p-2">
                    <div className="flex flex-col">
                      <img
                        src={`https://yassrly-001-site1.ftempurl.com${course?.courseImage}`}
                        className="w-[100px] h-[60px] rounded-md"
                      />
                      <p className="text-[#6B7280] text-[15px] font-medium">
                        {course?.lessonFrom} Of {course?.lessonTo} Lessons
                      </p>
                    </div>
                    <div>
                      <h2 className="text-[#111827] text-[25px] font-bold">
                        {course.courseName}
                      </h2>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="mt-5 flex gap-10 w-full flex-col p-8">
            <h2 className="text-[#0F172A] font-bold flex justify-start text-[30px]">
              {" "}
              My courses
            </h2>
            <div className="flex items-center justify-center flex-col gap-5">
              <img src="/notfound.png" className="w-[170px] h-[170px]" />
              <h2 className="text-[#111827] font-bold text-[30px]">
                There are no courses yet
              </h2>
              <p className="text-[#97A9BD] font-medium text-[20px]">
                {" "}
                You don't have an active course yet. Check your saved list or
                try to find another course{" "}
              </p>
              <Link href="/explore">
                <button className="p-3 rounded-full font-bold flex items-center justify-center bg-[#0A90B0]">
                  <span className="font-bold text-[#FFFFFF]">
                    {" "}
                    Find a Course
                  </span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyCoursesView;
