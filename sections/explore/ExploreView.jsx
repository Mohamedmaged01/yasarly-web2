'use client'
import React, { useState, useEffect } from 'react'
import { CiGrid2H } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import CourseList from '@/app/components/explore/CourseList';
import InstructorList from '@/app/components/explore/Instructor/InstructorList';
import { fetchAllCourses } from '@/actions/course';
import { docsFetch } from '@/actions/doctor';
const ExploreView = () => {
  const [courses, setCourses] = useState([]);

  const [instructors, setInstructors] = useState([]);
  // const courses = [
  //   {
  //     image: "explore1.png",
  //     category: "UX Design",
  //     title: "User Experience Design Essentials: Figma UI UX Design",
  //     price: "89.00",
  //     rating: "4.8",
  //     reviews: "31,882",
  //   },
  //   {
  //     image: "/explore2.png",
  //     category: "UX Design",
  //     title: "Master Digital Product Design: UX Research & UI Design",
  //     price: "69.00",
  //     rating: "4.5",
  //     reviews: "1,705",
  //   },
  //   {
  //     image: "/explore3.png",
  //     category: "UX Design",
  //     title: "UX Design for Beginners: The Essential of UX Usability",
  //     price: "111.99",
  //     rating: "4.3",
  //     reviews: "986",
  //   },
  //   {
  //     image: "/explore4.png",
  //     category: "UX Design",
  //     title: "UI UX Design Mastery from Figma to Live Website",
  //     price: "99.99",
  //     rating: "4.4",
  //     reviews: "3,736",
  //   },
  //   {
  //     image: "/explore5.png",
  //     category: "UX Design",
  //     title: "Motion Design with Figma: Animation, Motion, UI UX",
  //     price: "69.00",
  //     rating: "4.5",
  //     reviews: "1,765",
  //   },
  // ];

  // const instructors = [
  //   {
  //     image: "Avatar.png",
  //     name: "John Doe",
  //     title: "Senior UX Designer",
  //     courses: "12",
  //     students: "585K studnets",
  //     rating: "4.5",
  //   },
  //   {
  //     image: "Avatar.png",
  //     name: "John Doe",
  //     title: "Senior UX Designer",
  //     courses: "12",
  //     students: "585K studnets",
  //     rating: "4.5",
  //   },
  //   {
  //     image: "Avatar.png",
  //     name: "John Doe",
  //     title: "Senior UX Designer",
  //     courses: "12",
  //     students: "585K studnets",
  //     rating: "4.5",
  //   },
  //   {
  //     image: "Avatar.png",
  //     name: "John Doe",
  //     title: "Senior UX Designer",
  //     courses: "12",
  //     students: "585K studnets",
  //     rating: "4.5",
  //   },
  // ];

  const [layout, setLayout] = useState("list");
  const [selectedOption, setSelectedOption] = useState("Instructor"); // Tracks the dropdown selection


  useEffect(() => {
    const loadCourses = async () => {
      try {
        const fetchedCourses = await fetchAllCourses();
        console.log(fetchedCourses)
        setCourses(fetchedCourses); // Assuming fetchedCourses is in the format you need
      } catch (error) {
        console.log(error)
      }
    };

    loadCourses();
  }, []);


  useEffect(() => {
    const loadDocs = async () => {
      try {
        const fetchedDocs = await docsFetch();
        console.log(fetchedDocs)
        setInstructors(fetchedDocs); // Assuming fetchedCourses is in the format you need
      } catch (error) {
        console.log(error)
      }
    };

    loadDocs();
  }, []);




  return (
    <>
  

      <div className=' '>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <div className="container">
            <div className="flex items-center gap-4 justify-between">
              <h1 className="font-[700] text-[40px]">Explore</h1>
              <div className="relative flex items-center w-full ml-9">
                {/* Search Icon */}
                <div className="absolute left-4 text-gray-500">
                  <FiSearch className="h-5 w-5" />
                </div>

                <input
                  type="text"
                  placeholder="Looking for ...."
                  className="w-full p-3 pl-12 pr-24 rounded-lg text-[#64748B] bg-[#EEEFF2]"
                />
                <select
                  className="absolute right-0 bg-[#0A90B0] text-[#093343] border-2 p-3  outline-none rounded-lg"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="Instructor">Instructor</option>
                  <option value="Courses">Courses</option>
                </select>
              </div>
            </div>
            <div>
              <h1 className="mt-10  w-fit font-bold text-[23px] text-[#6B7280]">
                10,000 results
              </h1>
            </div>
            <div className="flex relative justify-end right-10 bottom-8 ">
              <CiGrid41
                className={` cursor-pointer  ${layout === "list" ? `text-[#9CA3AF] ` : `text-[#080d21]`}`}
                size={30}
                onClick={() => setLayout("grid")}
              />
              <CiGrid2H
                className={` cursor-pointer ${layout === "list" ? `text-[#080d21] ` : `text-[#9CA3AF]`}`}
                size={30}
                onClick={() => setLayout("list")}
              />
            </div>
            <hr />
          </div>

          <div className="mt-4 container">
            {selectedOption === "Courses" ?
              <CourseList courses={courses} layout={layout} /> :
              <InstructorList instructors={instructors} />}
          </div>
        </div>
      </div>
    </>
  )
}


export default ExploreView