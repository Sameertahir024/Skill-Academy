import React from "react";

const Whyus = () => {
  return (
    <div className="px-5">
      {" "}
      <div className="lg:flex items-center justify-center gap-8 mt-24">
        <div className="lg:w-1/3">
          <h1 className="text-[#010851] font-[Jost] text-[40px] not-italic font-bold">
            Why we are better than others
          </h1>
          <p className="text-[#707070] font-[Jost] text-base not-italic font-semibold">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence, is called the
            “topic sentence.”
          </p>
        </div>
        <div className="lg:w-2/3 grid lg:grid-cols-2 xl:grid-cols-3 place-content-center place-items-center gap-12 mt-8 ">
          <div className="max-w-[300px] max-h-[400px] space-y-10 card-bg p-[35px]">
            <img src="/whyus.png" alt="logo" width={230} height={149} />
            <h4 className="text-[#010851] font-[Jost] text-[32px] not-italic font-bold">
              Conventient study schedule
            </h4>
          </div>
          <div className="max-w-[300px] max-h-[400px] space-y-10 card-bg  p-[35px] lg:mt-52 xl:mt-32">
            <img src="/whyus.png" alt="logo" width={230} height={149} />
            <h4 className="text-[#010851] font-[Jost] text-[32px] not-italic font-bold">
              Conventient study schedule
            </h4>
          </div>
          <div className="max-w-[300px] max-h-[400px] space-y-10 card-bg  p-[35px]">
            <img src="/whyus.png" alt="logo" width={230} height={149} />
            <h4 className="text-[#010851] font-[Jost] text-[32px] not-italic font-bold">
              Conventient study schedule
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
