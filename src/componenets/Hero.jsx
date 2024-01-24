import React from "react";

const Hero = ({ image, title, desc, btn1, btn2 }) => {
  return (
    <div className="px-5">
      <div className="text-center lg:flex flex-row-reverse items-center justify-center lg:text-start mt-[3.125rem] hero-bg p-[42px] rounded-xl rounded-br-[130px] gap-[70px] ">
        <div className="flex items-center justify-center lg:w-1/3 text-center">
          <img
            src={image}
            alt="logo"
            className="text-center"
            width={429}
            height={386}
          />
        </div>
        <div className="lg:w-2/3">
          <h1 className="text-[#FFF] font-[Jost] text-4xl lg:text-6xl 2xl:text-8xl not-italic font-bold leading-[115%]">
            {title}
          </h1>
          <p className=" mt-[42px] text-[#EBEBEB] font-[Jost] text-xl lg:text-2xl not-italic font-medium">
            {desc}
          </p>
          <div className="mt-[42px] flex justify-center lg:justify-start gap-5 text-[#FFF] font-[Jost] text-lg lg:text-2xl not-italic font-bold">
            <button className="rounded-[4px] bg-[#9A7AF1] px-[1.25rem] py-[.4375rem] md:px-[2.9375rem] md:py-[.9375rem]">
              {btn1}
            </button>
            <button className="rounded-[4px] bg-[#9A7AF1]  px-[1.25rem] py-[.4375rem] md:px-[2.9375rem] md:py-[.9375rem]">
              {btn2}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
