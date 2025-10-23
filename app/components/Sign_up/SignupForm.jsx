'use client'
import React, { useState } from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { RiEyeOffLine, RiLockPasswordLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { signupStudent } from '@/actions/login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
const SignupForm = ({ handleStep }) => {
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({
        StudentName: '',
        StudentEmail: '',
        StudentPassword: '',
        StudentPhone: ''
    });
    const router = useRouter();

    const handleClick = () => {
        setVisible(!visible);
    };

    // Update form data state on input change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the signupStudent API function
            const response = await signupStudent(formData);
            console.log('Signup response:', response);
            toast.success("user added successfuly! you must login now to join!")
            router.push('/signin');
        } catch (error) {
            console.error('Signup failed:', error);
            // toast.error('Signup failed. Please try again.'); // Show error message (optional)
        }
    };

    return (
        <>
            <div className="flex relative tems-center justify-center mt-[50px]">
                <div className="bg-white p-8 rounded-lg max-w-sm border-2 w-[400px] shadow-md">
                    <div className="text-center mb-6">
                        <div className="flex items-center justify-center mb-4">
                            <img src="/logo.png" alt="Logo" />
                        </div>
                        <h2 className="text-[28px] font-[700] text-gray-800">Sign Up</h2>
                        <p className="text-[#97A9BD] m-3">
                            Join us to benefit from a dynamic learning environment that
                            helps you develop professionally
                        </p>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="StudentName" className="sr-only text-[#9CA3AF]">
                                Your Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="StudentName"
                                    value={formData.StudentName}
                                    onChange={handleInputChange}
                                    className="block w-full pl-10 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border"
                                    placeholder="Your name"
                                    required
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <IoPersonOutline className="text-[#9CA3AF]" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="StudentEmail" className="sr-only text-[#9CA3AF]">
                                Your Email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="StudentEmail"
                                    value={formData.StudentEmail}
                                    onChange={handleInputChange}
                                    className="block w-full pl-10 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border"
                                    placeholder="Your email"
                                    required
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MdOutlineMailOutline className="text-[#9CA3AF]" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="StudentPassword" className="sr-only text-[#9CA3AF]">
                                Min. 8 characters
                            </label>
                            <div className="relative">
                                <input
                                    type={visible ? "text" : "password"}
                                    id="StudentPassword"
                                    value={formData.StudentPassword}
                                    onChange={handleInputChange}
                                    className="block w-full pl-10 p-3 rounded-md focus:outline-none focus:ring-2 border focus:ring-blue-500"
                                    placeholder="Min. 8 characters"
                                    required
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
                            <label htmlFor="StudentPhone" className="sr-only text-[#9CA3AF]">
                                Phone Number
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="StudentPhone"
                                    value={formData.StudentPhone}
                                    onChange={handleInputChange}
                                    className="block w-full pl-10 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Phone number"
                                    required
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiPhone className="text-[#9CA3AF]" />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#0A90B0] text-white font-semibold p-4 rounded-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
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
                            <button
                                onClick={handleStep}
                                className="text-[#0A90B0] hover:underline"
                            >
                                Sign In
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default SignupForm;
