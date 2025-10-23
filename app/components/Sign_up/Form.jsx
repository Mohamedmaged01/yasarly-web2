"use client";
import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiEyeOffLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
const Form = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="flex relative bottom-32 items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg  max-w-sm w-full">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div>
              <img src="logo.png" />
            </div>
          </div>
          <h2 className="text-[28px] font-[700] text-gray-800">
            Hi! Welcome Back
          </h2>
          <p className="text-[#97A9BD]">
            We are happy to see you again! To use your account, you should sign
            in first.
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="block w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your email"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdOutlineMail />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="block w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your password"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <RiLockPasswordLine />
              </div>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {visible ? (
                  <FaRegEye onClick={handleClick} />
                ) : (
                  <RiEyeOffLine onClick={handleClick} />
                )}
              </div>
            </div>
          </div>
          <div className="text-left">
            <a
              href="#"
              className="text-sm font-[500] p-2 text-[#0A90B0] hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0A90B0]  text-white font-semibold py-3 rounded-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign In
          </button>
          <p className="flex justify-center items-center text-[#9CA3AF]">
            Or with Email
          </p>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600 font-[500]">
            Don’t have an account? <span></span>
            <a href="#" className="text-[#09C1E0]  hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Form;
