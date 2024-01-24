import React from "react";
import { TbWorld } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-5">
      <div className=" mt-4 flex items-center justify-between  ">
        <div className="flex items-center justify-center gap-[5.5rem]">
          <div className="flex items-center justify-center gap-3">
            <img src="/Rectangle 9.png" alt="logo" width={75} height={75} />
            <h1 className="text-[#010851] font-[Jost] text-4xl not-italic font-bold">
              xyz
            </h1>
          </div>
          <ul className="hidden md:flex items-center gap-[3.8125rem] capitalize text-[#010851] font-[Jost] text-xl not-italic font-semibold">
            <li>
              <NavLink to="/SignIn">overview</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/SignIn">about</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/SignIn">pricing</NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex gap-[3.75rem] items-center ">
          <div className="hidden lg:flex items-center gap-2">
            <TbWorld size={20} />
            <span className="font-[Jost] text-xl not-italic font-semibold">
              language
            </span>
          </div>
          <div>
            <button className="text-[#010851] font-[Jost] text-xl not-italic font-semibold px-[.75rem] py-2 bg-[#9A7AF1]">
              <NavLink to="/SignIn">Sign in</NavLink>
            </button>
          </div>
        </div>
        <div className="flex md:hidden">
          <FiMenu size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
