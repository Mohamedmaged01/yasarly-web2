'use client'
import React, { useState, useEffect } from "react";
import ProgressCard from "./ProgressCard";
import CourseSection from "./CourseSection";
import { fetchCourses } from "@/actions/course";
import { useRouter } from "next/navigation"; // Import the useRouter hook


export default function CoursesMain() {
  const [courses, setCourses] = useState({ recently: [], popular: [] });
  const [studentId, setStudentId] = useState(null);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data.data); // Set the state with the full response
        console.log(data.data, "data")
      } catch (error) {
        console.log(error)
      }
    };

    getCourses();

    // Only access localStorage in the client
    const storedStudentId = localStorage.getItem("studentId");

    if (!storedStudentId) {
      // If studentId is not found, redirect to login
      router.push("/login");
    } else {
      setStudentId(storedStudentId); // Save it in state
    }

    console.log(storedStudentId);

  }, [router]);

  const continueLearningCourses = [
    {
      title: "Fundamentals of HTML & CSS",
      subtitle: "23 of 33 lessons",
      progress: 75,
      type: "website",
    },
    {
      title: "Fundamentals of HTML & CSS",
      subtitle: "23 of 33 lessons",
      progress: 75,
      type: "website",
    },
    {
      title: "Fundamentals of HTML & CSS",
      subtitle: "23 of 33 lessons",
      progress: 75,
      type: "website",
    },
  ];

  const recentlyAddedCourses = courses.recently.map(course => ({
    image: course.courseImage,
    category: course.subjectName,
    title: course.courseName,
    price: course.coursePrice.toFixed(2),
    rating: course.studentCourseEvaluation.toFixed(1),
    reviews: 'N/A', // If you have review counts, replace this,
    courseId: course.courseId
  }));

  const popularCourses = courses.popular.map(course => ({
    image: course.courseImage,
    category: course.subjectName,
    title: course.courseName,
    price: course.coursePrice.toFixed(2),
    rating: course.studentCourseEvaluation.toFixed(1),
    reviews: 'N/A', // If you have review counts, replace this
    courseId: course.courseId

  }));




  return (
    <>


      <div className="container ">
        <div className=" w-full h-[30%] bg-gradient-to-r from-[#003C4D] to-[#10738E] absolute z-[-1]"></div>
        <section className="mb-12  ">
          <h2 className="text-[28px]  relative top-24 left-32 font-bold mb-6 text-white">
            Continue Learning
          </h2>
          {/* <div className=" grid grid-cols-3 gap-20 relative top-12  p-24">
          {continueLearningCourses.map((course, index) => (
            <ProgressCard key={index} {...course} />
          ))}
        </div> */}
        </section>
        <CourseSection title="Recently added" courses={recentlyAddedCourses} />
        <CourseSection title="Popular courses" courses={popularCourses} />
      </div>
    </>
  );
}

