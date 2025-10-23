'use client';
import React, { useState, useEffect } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine, RiEyeOffLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";
import { useRouter } from 'next/navigation';

const LoginForm = ({ handleStepP }) => {
  const [studentPhone, setStudentPhone] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleClick = () => {
    setVisible(!visible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const response = await axios.post("https://yassrly-001-site1.ftempurl.com/api/Student/Student/Login", {
        studentPhone,
        studentPassword
      });

      if (response.status === 200) {
        const studentId = response.data.studentId;

        if (studentId) {
          localStorage.setItem('studentId', studentId);
          router.push('/'); // Redirect to the dashboard or home page
        } else {
          setError("Email or password is wrong"); // Display error if studentId is missing
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || "Login failed");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };





  return (
    <>


      <div className="flex relative items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg border-2 w-[400px] shadow-md">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <img src="logo.png" alt="Logo" />
            </div>
            <h2 className="text-[28px] font-[700] text-gray-800">Hi! Welcome Back</h2>
            <p className="text-[#97A9BD]">We are happy to see you again! To use your account, you should sign in first.</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <div className="text-red-500">{error}</div>} {/* Display error message */}

            <div>
              <label htmlFor="phone" className="sr-only">Phone</label>
              <div className="relative">
                <input
                  type="text"
                  id="phone"
                  className="block w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your phone number"
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineMail />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <input
                  type={visible ? "text" : "password"}
                  id="password"
                  className="block w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your password"
                  value={studentPassword}
                  onChange={(e) => setStudentPassword(e.target.value)}
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiLockPasswordLine />
                </div>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={handleClick}>
                  {visible ? <FaRegEye /> : <RiEyeOffLine />}
                </div>
              </div>
            </div>

            <div className="text-left">
              <a href="#" className="text-sm font-[500] p-2 text-[#0A90B0] hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0A90B0] text-white font-semibold py-3 rounded-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Sign In
            </button>

            <p className="flex justify-center items-center text-[#9CA3AF]">Or with Email</p>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 font-[500]">
              Don’t have an account? <span></span>
              <button className="text-[#09C1E0] hover:underline">Sign Up</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
