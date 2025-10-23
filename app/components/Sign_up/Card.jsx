const Card = () => {
  return (
    <div className="flex w-[935px] h-[664px] mx-auto bg-white rounded-lg  overflow-hidden ">
      {/* Left Section: Image and Logo */}
      <div className="w-1/2 p-8 flex flex-col items-center justify-center  bg-white">
        {/* Logo */}
        <div className="top-[100px] left-[390px] absolute m-6  ">
          <img src="/logo.png" alt="logo" width={105.84} height={47.88} />
        </div>
        {/* Image */}
        <div className="relative w-64 h-64">
          <img src="/bro.png" alt="bro" layout="fill"  />
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
        <button className="bg-white w-[fit] h-[fit] m-auto mt-6  text-[#165D74] py-[8px] px-[60px] rounded-[40px] font-bold transition-transform transform hover:scale-105 hover:bg-gray-200 duration-300">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Card;
