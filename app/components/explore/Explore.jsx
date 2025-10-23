import SearchBar from "./SearchBar";
import CourseList from "./CourseList";
import DropDownMenu from "../DropDownMenu";
import InstructorCard from "./Instructor/InstructorCard";
import InstructorList from "./Instructor/InstructorList";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useState } from "react";
const Explore = () => {
  const [layout, setLayout] = useState("list");
  const [view, setView] = useState("instructor");

  const courses = [
    {
      image: "explore1.png",
      category: "UX Design",
      title: "User Experience Design Essentials: Figma UI UX Design",
      price: "89.00",
      rating: "4.8",
      reviews: "31,882",
    },
    {
      image: "/explore2.png",
      category: "UX Design",
      title: "Master Digital Product Design: UX Research & UI Design",
      price: "69.00",
      rating: "4.5",
      reviews: "1,705",
    },
    {
      image: "/explore3.png",
      category: "UX Design",
      title: "UX Design for Beginners: The Essential of UX Usability",
      price: "111.99",
      rating: "4.3",
      reviews: "986",
    },
    {
      image: "/explore4.png",
      category: "UX Design",
      title: "UI UX Design Mastery from Figma to Live Website",
      price: "99.99",
      rating: "4.4",
      reviews: "3,736",
    },
    {
      image: "/explore5.png",
      category: "UX Design",
      title: "Motion Design with Figma: Animation, Motion, UI UX",
      price: "69.00",
      rating: "4.5",
      reviews: "1,765",
    },
  ];
  const instructors = [
    {
      image: "Avatar.png",
      name: "John Doe",
      title: "Senior UX Designer",
      courses: "12",
      students: "585K studnets",
      rating: "4.5",
    },
    {
      image: "Avatar.png",
      name: "John Doe",
      title: "Senior UX Designer",
      courses: "12",
      students: "585K studnets",
      rating: "4.5",
    },
    {
      image: "Avatar.png",
      name: "John Doe",
      title: "Senior UX Designer",
      courses: "12",
      students: "585K studnets",
      rating: "4.5",
    },
    {
      image: "Avatar.png",
      name: "John Doe",
      title: "Senior UX Designer",
      courses: "12",
      students: "585K studnets",
      rating: "4.5",
    },
  ];
  return (
    <div className="flex flex-col  m-20">
      <SearchBar layout={layout} setLayout={setLayout} />
 
      {view === "courses" ? (
        <CourseList courses={courses} layout={layout} />
      ) : (
        <InstructorList instructors={instructors} />
      )}
    </div>
  );
};
export default Explore;
