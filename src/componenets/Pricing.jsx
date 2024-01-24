import React from "react";
import { MdOutlineToggleOff } from "react-icons/md";

const Pricing = () => {
  return (
    <div className="px-5">
      <div className="text-center space-y-5 mt-10 ">
        <h1 className="text-[#010851] font-[Jost] text-[64px] not-italic font-bold">
          Here are all our plans
        </h1>
        <p className="text-[#707070] text-center font-[Jost] text-base not-italic font-semibold">
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence.
        </p>
        <div className="flex items-center justify-center lg:gap-14 gap-2">
          <h1 className="text-[#010851] font-[Jost] text-[40px] not-italic font-bold">
            Monthly
          </h1>
          <h1 className="text-[#010851] font-[Jost] text-[40px] not-italic font-bold">
            <MdOutlineToggleOff size={40} />
          </h1>
          <h1 className="text-[#010851] font-[Jost] text-[40px] not-italic font-bold">
            Yearly
          </h1>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-10 mt-14 ">
        <div className="text-center Pricing-Card p-[18px]">
          <h1 className="text-[#010851] font-[Jost] text-[40px] not-italic font-extrabold">
            Start
          </h1>
          <p className="text-[#707070]  font-[Jost] text-base not-italic font-semibold">
            A simple paragraph is comprised of three major components. The which
            is often a declarative sentence.
          </p>
          <h1 className="text-[#9A7AF1] font-[Jost] text-[64px] not-italic font-extrabold">
            50$
            <span className="text-[#000] font-[Jost] text-lg not-italic font-normal">
              /Monthly
            </span>
          </h1>
          <div className="space-y-6 mt-4">
            <div className="flex gap-4 ">
              <img
                src="/Rectangle.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Video of Lessons
              </h5>
            </div>
            <div className="flex gap-4">
              <img
                src="/Rectangle.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Homework check
              </h5>
            </div>
            <div className="flex gap-4">
              <img
                src="/RectangleRed.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Additional practical task
              </h5>
            </div>
            <div className="flex gap-4">
              <img
                src="/RectangleRed.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Monthly conferences
              </h5>
            </div>
            <div className="flex gap-4">
              <img
                src="/RectangleRed.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Copy Personal from teachers
              </h5>
            </div>
          </div>
          <button className="btn px-7 py-2 mt-5">Start</button>
        </div>
        <div className="text-center Pricing-Card p-[18px]">
          <h1 className="text-[#010851] font-[Jost] text-[40px] not-italic font-extrabold">
            Advance
          </h1>
          <p className="text-[#707070]  font-[Jost] text-base not-italic font-semibold">
            A simple paragraph is comprised of three major components. The which
            is often a declarative sentence.
          </p>
          <h1 className="text-[#9A7AF1] font-[Jost] text-[64px] not-italic font-extrabold">
            85$
            <span className="text-[#000] font-[Jost] text-lg not-italic font-normal">
              /Monthly
            </span>
          </h1>
          <div className="space-y-6 mt-4">
            <div className="flex gap-4 ">
              <img
                src="/Rectangle.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Video of Lessons
              </h5>
            </div>
            <div className="flex gap-4">
              <img
                src="/Rectangle.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Homework check
              </h5>
            </div>
            <div className="flex gap-4">
              <img
                src="/RectangleRed.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Additional practical task
              </h5>
            </div>
            <div className="flex gap-4">
              <img
                src="/RectangleRed.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Monthly conferences
              </h5>
            </div>
            <div className="flex gap-4">
              <img
                src="/RectangleRed.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Copy Personal from teachers
              </h5>
            </div>
          </div>
          <button className="btn px-7 py-2 mt-5">Start</button>
        </div>
        <div className="text-center Pricing-Card p-[18px]">
          <h1 className="text-[#010851] font-[Jost] text-[40px] not-italic font-extrabold">
            Start
          </h1>
          <p className="text-[#707070]  font-[Jost] text-base not-italic font-semibold">
            A simple paragraph is comprised of three major components. The which
            is often a declarative sentence.
          </p>
          <h1 className="text-[#9A7AF1] font-[Jost] text-[64px] not-italic font-extrabold">
            100$
            <span className="text-[#000] font-[Jost] text-lg not-italic font-normal">
              /Premium
            </span>
          </h1>
          <div className="space-y-6 mt-4">
            <div className="flex gap-4 ">
              <img
                src="/Rectangle.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Video of Lessons
              </h5>
            </div>
            <div className="flex gap-4">
              <img
                src="/Rectangle.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Homework check
              </h5>
            </div>
            <div className="flex gap-4">
              <img
                src="/RectangleRed.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Additional practical task
              </h5>
            </div>
            <div className="flex gap-4">
              <img
                src="/RectangleRed.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Monthly conferences
              </h5>
            </div>
            <div className="flex gap-4">
              <img
                src="/RectangleRed.png"
                alt="logo"
                className="text-center"
                width={28}
                height={20}
              />
              <h5 className="text-[#000] font-[Jost] text-xl not-italic font-medium">
                Copy Personal from teachers
              </h5>
            </div>
          </div>
          <button className="btn px-7 py-2 mt-5">Start</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
