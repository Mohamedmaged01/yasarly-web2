import React from 'react'
import About from "@/app/components/explore/Instructor/About";
import BTabs from '@/app/components/usable/Tabs';
const instructorView = () => {

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
    <div className='flex flex-col    mt-5 gap-3 '> 
        <div className=' w-full flex flex-col items-center justify-center'>
            <img src='/instructorView.png' className="" alt="cover" />
        </div>
        <div className='  '>
        <BTabs points={points} lessons={lessons} reviews={reviews} />
        </div>
    </div>
  )
}

export default instructorView