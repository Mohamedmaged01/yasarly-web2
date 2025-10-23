
import { IoIosArrowRoundBack } from "react-icons/io";
const CardComponent = () => {
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
          <img
            src="/characterbro.png"
            alt="bro"
            layout="fill"
         
          />
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
          <button className="p-2 justify-center border-2 border-solid rounded-[50%] text-white w-fit h-fit">
            <IoIosArrowRoundBack size={"30px"} />
          </button>
          <button className="bg-white w-[fit] h-[fit] m-auto  text-[#165D74] py-[8px] px-[56px] rounded-[40px] font-bold transition-transform transform hover:scale-105 hover:bg-gray-200 duration-300">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
