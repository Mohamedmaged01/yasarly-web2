'use client'
import React, { useState, useEffect } from "react";
import { updateStudent } from "@/actions/student";
const Personal = ({ studentData, fetchStudent }) => {
  const [fullname, setFullName] = useState(studentData?.studentName || '');
  const [email, setEmail] = useState(studentData?.studentEmail || '');
  const [password, setPassword] = useState(studentData?.studentPassword || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setFullName(studentData?.studentName || '');
    setEmail(studentData?.studentEmail || '');
    setPassword(studentData?.studentPassword || '');
  }, [studentData]);


  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('studentName', fullname);
    formData.append('studentEmail', email);
    formData.append('studentPassword', password);
    // Add other fields if needed, such as the profile image if changed

    await updateStudent(studentData.studentId, formData);
    fetchStudent(studentData.studentId)
  };
  return (
    <div className="mt-24 mr-32 ml-12 border-[#9CA3AF] border-[1px] rounded-xl p-4 shadow w-full h-[650px]">
      <h1 className="font-bold text-[24px] mb-10 p-8">Personal Details </h1>
      <div className="flex gap-32 w-full h-[300px] p-5 ">
        <div className="flex flex-col ">
          <img
            src={`https://yassrly-001-site1.ftempurl.com${studentData?.studentImage}`}
            alt="Profile"
            className="w-24 h-24 rounded-full z-0"
          />
          <img
            src="camera.png"
            className="z-10 relative w-8 h-8 bottom-4 left-14 "
          />
          <button className="font-bold flex justify-start text-[#1E2857]">
            Change Picture
          </button>
        </div>
        <div className="flex justify-center p-6 ">
          <div className="flex justify-between max-h-20 gap-6 flex-col ">
            <div className="flex items-center justify-between">
              <div className="flex flex-col ">
                <label className="block text-sm font-medium text-[#6B7280] ">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border px-4 py-2"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

            </div>
            <div>
              <label className="block text-sm font-medium text-[#6B7280]">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border   px-4 py-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center ">
              <div className="">
                <label className="block text-sm font-medium text-[#6B7280]">
                  Password
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full border rounded-md px-5 py-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end relative ">
        <button onClick={handleSubmit} className="bg-[#0A90B0] text-white  rounded-full w-[200px] h-[48px]">
          Apply
        </button>
      </div>
    </div>
  );
};
export default Personal;
