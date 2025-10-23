import React from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link"
const CourseCard = ({ image, category, title, price, rating, reviews, courseId }) => {
  return (
    <Link href={`courseDetails/${courseId}`}>
      <div className="bg-white rounded-lg p-4 w-[292px]  h-[300px]  border shadow-lg">
        <img
          src={`https://yassrly-001-site1.ftempurl.com${image}`}
          alt={title}
          className="rounded-lg w-full h-[130px] object-fill mb-4"
        />
        <span className="text-xs text-red-500">{category}</span>
        <h3 className="text-lg font-semibold mt-1">{title}</h3>
        <p className="text-lg text-blue-600 font-bold mt-2 relative top-8">
          ${price}
        </p>
        <div className="flex justify-end mt-2 ">
          <span className="text-gray-600 font-[600] relative bottom-[2px] flex gap-2 ">
            <div>
              <FaStar className="text-yellow-400 relative top-1" />
            </div>
            {rating}
          </span>
          <span className="ml-2 text-sm text-gray-500">({reviews})</span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
