/* eslint-disable react/no-unescaped-entities */
"use client";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { RiEyeOffLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import React from "react";
import { useState, useEffect } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import SignupForm from "@/app/components/Sign_up/SignupForm";
import LoginForm from "@/app/components/Sign_up/LoginForm";

const LoginView = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const handleStep = () => {
    setStep(5);
  };
  const handleStepP = () => {
    setStep(4);
  };


  return (
    <>

      <div className="container m-auto relative ">
        {step === 1 && (
          <div className="flex w-[935px] h-[664px] mt-10 mx-auto bg-white rounded-lg  overflow-hidden ">
            {/* Left Section: Image and Logo */}
            <div className="w-1/2 p-8 flex flex-col items-center justify-center  bg-white">
              {/* Logo */}
              <div className="top-[100px] left-[390px] absolute m-6  ">
                <img src="/logo.png" alt="logo" width={105.84} height={47.88} />
              </div>
              {/* Image */}
              <div className="relative w-64 h-64">
                <img src="/bro.png" alt="bro" layout="fill" />
              </div>
            </div>
            {/* Right Section: Text and Button */}
            <div className="  w-1/2 bg-[#10738E] pt-20 px-9 text-white flex flex-col justify-between">
              <div>
                <h3 className="  text-[28px] font-inter font-bold mb-4 text-[#00DDFF]">
                  All What You Need in One Place
                </h3>
                <p className=" mb-32 text-[20px]">
                  Learn from the best in the field. Our instructors are industry
                  leaders and subject matter experts committed to your success.
                </p>
              </div>
              {/* Progress Bar */}
              <div className="relative h-1 bg-white rounded-full mt-8 mb-0">
                <div
                  className="absolute top-0 left-0 h-full bg-[#00DDFF] rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
              {/* Button */}
              <button
                onClick={handleNext}
                className="bg-white w-[fit] h-[fit] m-auto mt-6  text-[#165D74] py-[8px] px-[60px] rounded-[40px] font-bold transition-transform transform hover:scale-105 hover:bg-gray-200 duration-300"
              >
                Continue
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="flex w-[935px] h-[664px] mx-auto bg-white rounded-lg mt-10 overflow-hidden ">
            {/* Left Section: Image and Logo */}
            <div className="w-1/2 p-8 flex flex-col items-center justify-center  bg-white">
              {/* Logo */}
              <div className="top-[150px] left-[390px] absolute m-6  ">
                <img src="/logo.png" alt="logo" width={105.84} height={47.88} />
              </div>
              {/* Image */}
              <div className="relative w-64 h-64">
                <img src="/characterbro.png" alt="bro" layout="fill" />
              </div>
            </div>

            {/* Right Section: Text and Button */}
            <div className="  w-1/2 bg-[#10738E] pt-20 px-9 text-white flex flex-col justify-between">
              <div>
                <h3 className="  text-[28px] font-inter font-bold mb-4 text-[#00DDFF]">
                  Study according to your plan
                </h3>
                <p className=" mb-32 text-[20px]">
                  Study according to the time that suits you, anytime and anywhere{" "}
                </p>
              </div>
              {/* Progress Bar */}
              <div className="relative h-1  bg-[#00DDFF] rounded-full mt-8 mb-0">
                <div
                  className="absolute top-0 left-0 h-full bg-white  rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
              {/* Button */}
              <div className="flex justify-between m-auto p-6 gap-10 mt-10 ">
                <button
                  onClick={handlePrev}
                  className="p-2 justify-center border-2 border-solid rounded-[50%] text-white w-fit h-fit"
                >
                  <IoIosArrowRoundBack size={"30px"} />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white w-[fit] h-[fit] m-auto  text-[#165D74] py-[8px] px-[56px] rounded-[40px] font-bold transition-transform transform hover:scale-105 hover:bg-gray-200 duration-300"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex w-[935px] h-[664px] mx-auto mt-10 bg-white rounded-lg  overflow-hidden ">
            {/* Left Section: Image and Logo */}
            <div className="w-1/2 p-8 flex flex-col items-center justify-center  bg-white">
              {/* Logo */}
              <div className="top-[150px] left-[390px] absolute m-6  ">
                <img src="/logo.png" alt="logo" width={105.84} height={47.88} />
              </div>
              {/* Image */}
              <div className="relative w-64 h-64">
                <img src="/cuate.png" alt="bro" layout="fill" />
              </div>
            </div>

            {/* Right Section: Text and Button */}
            <div className="  w-1/2 bg-[#10738E] pt-20 px-9 text-white items-center flex flex-col justify-center">
              <div>
                <h3 className="  text-[28px] font-inter font-bold mb-4 text-[#00DDFF]">
                  Welcome to Yasrly
                </h3>
                <p className=" mb-32 text-[20px]">
                  Let's Start your First Lesson
                </p>
              </div>
              {/* Button */}
              <button
                onClick={handleNext}
                className="bg-white w-[fit] h-[fit]  mt-6  text-[#165D74] py-[18px] px-[120px] rounded-[40px] font-bold transition-transform transform hover:scale-105 hover:bg-gray-200 duration-300"
              >
                Get started
              </button>
              <div className="flex w-[100%] items-center justify-center p-10  ">
                <hr className="flex-1" />
                <span className="relative px-4">Sign in with</span>
                <hr className="flex-1 " />
              </div>
              <div>
                <p>
                  Don't have an account?
                  <button onClick={handleStepP} className="text-[#00DDFF]">
                    SignUp
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}
        {step === 5 && (
          // <div className="flex relative bottom-32 items-center justify-center min-h-screen ">
          //   <div className="bg-white p-8 rounded-lg border-2 w-[400px] shadow-md">
          //     <div className="text-center mb-6">
          //       <div className="flex items-center justify-center mb-4">
          //         <div>
          //           <img src="logo.png" />
          //         </div>
          //       </div>
          //       <h2 className="text-[28px] font-[700] text-gray-800">
          //         Hi! Welcome Back
          //       </h2>
          //       <p className="text-[#97A9BD]">
          //         We are happy to see you again! To use your account, you should
          //         sign in first.
          //       </p>
          //     </div>
          //     <form className="space-y-4">
          //       <div>
          //         <label htmlFor="email" className="sr-only">
          //           Email
          //         </label>
          //         <div className="relative">
          //           <input
          //             type="email"
          //             id="email"
          //             className="block w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          //             placeholder="Your email"
          //           />
          //           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          //             <MdOutlineMail />
          //           </div>
          //         </div>
          //       </div>
          //       <div>
          //         <label htmlFor="password" className="sr-only">
          //           Password
          //         </label>
          //         <div className="relative">
          //           <input
          //             type="password"
          //             id="password"
          //             className="block w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          //             placeholder="Your password"
          //           />
          //           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          //             <RiLockPasswordLine />
          //           </div>
          //           <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
          //             {visible ? (
          //               <FaRegEye onClick={handleClick} />
          //             ) : (
          //               <RiEyeOffLine onClick={handleClick} />
          //             )}
          //           </div>
          //         </div>
          //       </div>
          //       <div className="text-left">
          //         <a
          //           href="#"
          //           className="text-sm font-[500] p-2 text-[#0A90B0] hover:underline"
          //         >
          //           Forgot Password?
          //         </a>
          //       </div>
          //       <button
          //         type="submit"
          //         className="w-full bg-[#0A90B0]  text-white font-semibold py-3 rounded-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          //       >
          //         Sign In
          //       </button>
          //       <p className="flex justify-center items-center text-[#9CA3AF]">
          //         Or with Email
          //       </p>
          //     </form>
          //     <div className="mt-6 text-center">
          //       <p className="text-gray-600 font-[500]">
          //         Don’t have an account? <span></span>
          //         <button
          //           onClick={handleStepP}
          //           className="text-[#09C1E0]  hover:underline"
          //         >
          //           Sign Up
          //         </button>
          //       </p>
          //     </div>
          //   </div>
          // </div>
          <LoginForm />
        )}
        {step === 4 && (
          <SignupForm handleStep={handleStep} />

        )}
      </div>
    </>
  );
};

export default LoginView;
