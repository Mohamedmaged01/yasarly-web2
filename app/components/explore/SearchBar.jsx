import React, { useState } from "react";
import { FaThLarge, FaThList } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import DropDownMenu from "../DropDownMenu";
import { CiGrid2H } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ layout, setLayout }) => {
  const [view, setView] = useState("courses");
  return (
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
      <select className="absolute right-0 bg-[#0A90B0] text-[#093343] border-2 p-3  outline-none rounded-lg">
        <option value="">Instructor</option>
        <option value="option1">Courses</option>
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
          className={` mr-2 cursor-pointer ${
            layout === "grid" ? "text-[#080d21]" : "text-[#9CA3AF]"
          }`}
          size={30}
          onClick={() => setLayout("grid")}
        />
        <CiGrid2H
          className={` cursor-pointer ${
            layout === "list" ? "text-[#080d21]" : "text-[#9CA3AF]"
          }`}
          size={30}
          onClick={() => setLayout("list")}
        />
      </div>
      <hr />
    </div>
  );
};
export default SearchBar;
