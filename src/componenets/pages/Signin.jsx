import React from "react";

const Signin = () => {
  return (
    <div className="p-x5 ">
      <div className="grid xl:grid-cols-5  w-full h-screen">
        <div className="hidden xl:grid col-span-2 SingnIn  ">
          <h1 className="text-[#FFF] font-[Jost] py-3 text-[25px] not-italic font-normal leading-[25px] tracking-[1.6px] px-3 ">
            Find 3D Objects, Mockups and Illustration here.
          </h1>
        </div>
        <div className=" grid xl:grid col-span-3  p-14  ">
          <h1 className="text-[#000] font-[Jost] text-xl not-italic font-semibold leading-[25px] tracking-[1.8px]">
            Create Account
            <div className="flex items-center justify-center gap-[80px] mt-10 ">
              <div className=" flex items-center justify-center gap-2 google px-[16px] py-[19px] shadow-sm">
                <img src="/google.png" alt="logo" width={42} height={47} />
                <h1 className="hidden md:flex">Sign up with google</h1>
              </div>
              <div className=" flex items-center justify-center google gap-2 px-[16px] py-[19px] shadow-sm">
                <img src="/facebook.png" alt="logo" width={42} height={47} />
                <h1 className="hidden md:flex">Sign up with facebook</h1>
              </div>
            </div>
            <h1 className="text-[#000] text-center font-[TharLon] text-2xl not-italic font-normal leading-[25px] tracking-[1.2px] mt-11">
              -OR-
            </h1>
            <div className="space-y-11">
              <input
                type="text"
                className="w-full py-2 outline-none border-b-2 "
                placeholder="Your Name"
              />
              <input
                type="email"
                className="w-full py-2 outline-none border-b-2 "
                placeholder="Your email"
              />
              <input
                type="Password"
                className="w-full py-2 outline-none border-b-2 "
                placeholder="Your Password"
              />
              <button className="submit w-full py-[22px] text-white ">
                Create Account
              </button>
            </div>
            <h1 className="text-[#000] text-center font-[Jost] text-xl not-italic font-normal leading-[25px] tracking-[1px] mt-3">
              Allready have an account?{" "}
              <span className="text-[#0500FF] font-[Jost] text-xl not-italic font-normal leading-[25px] tracking-[1px]">
                Log In
              </span>
            </h1>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signin;
