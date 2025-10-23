import Image from "next/image";
const GetStarted = () => {
  return (
    <div className="flex w-[935px] h-[664px] mx-auto bg-white rounded-lg  overflow-hidden ">
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
          <p className=" mb-32 text-[20px]">Let`&apos;`s Start your First Lesson</p>
        </div>
        {/* Button */}
        <button className="bg-white w-[fit] h-[fit]  mt-6  text-[#165D74] py-[18px] px-[120px] rounded-[40px] font-bold transition-transform transform hover:scale-105 hover:bg-gray-200 duration-300">
          Get started
        </button>
        <div className="flex w-[100%] items-center justify-center p-10  ">
          <hr className="flex-1" />
          <span className="relative px-4">Sign in with</span>
          <hr className="flex-1 " />
        </div>
        <div>
          <p>
            Don`&apos;`t have an account?
            <span className="text-[#00DDFF]">SignUp</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
