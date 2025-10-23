"use client";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import React, { useState } from "react";
import { RiEyeOffLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
export default function SignUp() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div className="flex relative bottom-36 items-center justify-center min-h-screen border-2">
      <div className="bg-white p-8 rounded-lg  max-w-sm  ">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <img src="/logo.png" />
          </div>
          <h2 className="text-[28px] font-[700] text-gray-800">Sign Uppp</h2>
          <p className="text-[#97A9BD] m-3">
            Join us to benefit from a dynamic learning environment that helps
            you develop professionally
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only text-[#9CA3AF]">
              Your Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="block w-full pl-10 p-3   rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                placeholder="Your name"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoPersonOutline className="text-[#9CA3AF]" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only text-[#9CA3AF]">
              Your Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="block w-full pl-10 p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                placeholder="Your email"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdOutlineMailOutline className="text-[#9CA3AF]" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only text-[#9CA3AF]">
              Min. 8 characters
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="block w-full pl-10 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Min. 8 characters"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <RiLockPasswordLine className="text-[#9CA3AF]" />
              </div>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-[#9CA3AF]">
                {visible ? (
                  <FaRegEye onClick={handleClick} />
                ) : (
                  <RiEyeOffLine onClick={handleClick} />
                )}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="phone-number" className="sr-only text-[#9CA3AF]">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="password"
                id="phone-number"
                className="block w-full pl-10 p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Phone number"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiPhone className="text-[#9CA3AF]" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full  bg-[#0A90B0]  text-white font-semibold p-4 rounded-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>
          <p className="justify-center items-center text-center">
            By signing up you agree to{" "}
            <span className="font-bold">
              Yasrly Terms of Services and Privacy Policy.
            </span>
          </p>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-[#0A90B0] hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
