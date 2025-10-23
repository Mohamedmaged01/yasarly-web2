"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import CourseCard from "./CourseCard";

const CourseCarousel = ({ courses }) => {
  return (
    <Splide
      options={{
        type: "slide",
        perPage: 4,
        breakpoints: {
          640: { perPage: 1 },
          768: { perPage: 2 },
          1024: { perPage: 3 },
          1280: { perPage: 4 },
        },
        gap: "150px",
        pagination: true,
        arrows: true,
      }}
    >
      {courses?.map((course, index) => (
        <SplideSlide key={index}>
          <CourseCard {...course} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default CourseCarousel;
