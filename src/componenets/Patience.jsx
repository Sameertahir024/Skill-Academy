import React from "react";

const Patience = () => {
  return (
    <div className="px-5">
      <div className=" grid lg:grid-cols-2 place-items-center justify-items-center mt-24">
        <div className="space-y-[17px] text-center lg:text-start">
          <h1 className="text-[#010851] font-[Jost] text-[52px] not-italic font-bold ">
            You can Practice at any
            <span className="text-[#9A7AF1] font-[Jost] text-[52px] not-italic font-bold">
              time convinent for you.
            </span>
          </h1>
          <p className="text-[#707070] font-[Jost] text-2xl not-italic font-medium">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="btn py-3 px-3">Get Started</button>
        </div>
        <div>
          <img
            src="/patient.png"
            alt="logo"
            className="text-center"
            width={736}
            height={564}
          />
        </div>
      </div>
    </div>
  );
};

export default Patience;
