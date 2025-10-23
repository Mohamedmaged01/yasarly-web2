"use client";

import { useState, useEffect } from "react";
import CoursesMain from "@/app/components/Courses/CoursesMain";
import FixedSidebarLayout from "./components/FixedSidebarLayout";

const  Home = () =>  {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(!setVisible);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);
  console.log(visible);
  return (
    <FixedSidebarLayout>
      <CoursesMain/>
    </FixedSidebarLayout>
  );
}
export default Home