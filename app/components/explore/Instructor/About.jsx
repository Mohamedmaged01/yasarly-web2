import React from "react";
import BTabs from "../../usable/Tabs";

const About = () => {
  const reviews = [
    {
      id: 1,
      name: "Instructor intro ",
      rating: 4.6,
      img: "/review.png",
      date: "3 weeks ago",
      content:
        "Pulvinar nisl blandit cras lacus diam posuere. Varius sem vestibulum egestas ultricies. Gravida aliquam nibh ultricies risus augue a enim nulla.",
    },
    {
      id: 2,
      name: "Instructor intro ",
      img: "/review.png",
      date: "3 weeks ago",
      rating: 4.6,
      content:
        "Pulvinar nisl blandit cras lacus diam posuere. Varius sem vestibulum egestas ultricies. Gravida aliquam nibh ultricies risus augue a enim nulla.",
    },
    {
      id: 3,
      name: "Instructor intro ",
      img: "/review.png",
      date: "3 weeks ago",
      rating: 4.6,
      content:
        "Pulvinar nisl blandit cras lacus diam posuere. Varius sem vestibulum egestas ultricies. Gravida aliquam nibh ultricies risus augue a enim nulla.",
    },
    {
      id: 4,
      name: "Instructor intro ",
      img: "/review.png",
      date: "3 weeks ago",
      rating: 4.6,
      content:
        "Pulvinar nisl blandit cras lacus diam posuere. Varius sem vestibulum egestas ultricies. Gravida aliquam nibh ultricies risus augue a enim nulla.",
    },
    {
      id: 5,
      name: "Instructor intro ",
      rating: 4.6,
      img: "/review.png",
      date: "3 weeks ago",
      content:
        "Pulvinar nisl blandit cras lacus diam posuere. Varius sem vestibulum egestas ultricies. Gravida aliquam nibh ultricies risus augue a enim nulla.",
    },
  ];

  const lessons = [
    {
      id: 1,
      name: "Instructor intro ",
    },
    {
      id: 2,
      name: "Instructor intro ",
    },
    {
      id: 3,
      name: "Instructor intro ",
    },
    {
      id: 4,
      name: "Instructor intro ",
    },
    {
      id: 5,
      name: "Instructor intro ",
    },
  ];
  const points = [
    {
      id: 1,
      desc: "John Doe",
    },
    {
      id: 2,
      desc: "John Doe",
    },
    {
      id: 3,
      desc: "John Doe",
    },
    {
      id: 3,
      desc: "John Doe",
    },
    {
      id: 4,
      desc: "John Doe",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="">
        <img className="m-10 rounded-[12px]" src="bg.png" />
        <BTabs points={points} lessons={lessons} reviews={reviews} />
      </div>
    </div>
  );
};

export default About;
