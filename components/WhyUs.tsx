"use client";
import React from "react";
import { InlineWidget } from "react-calendly";
import Image from "next/image";

const WhyUs = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="why-us-section max-container  flex flex-col gap-0 pb-0 md:pb-16 md:gap-10  rounded-t-2xl"
    >
      <div className=" bg-blue-20 h-[30vh] flex justify-center items-center rounded-t-2xl relative">
        <Image
          src="/calendar.svg"
          alt="3dhome"
          width={180}
          height={180}
          className="absolute right-[60px] top-[40px] w-[90px]"
        />
        <h2 className="font-pt-serif font-bold text-3xl lg:text-4xl  text-gray-100 text-center ">
          Schedule a call with us
        </h2>
        <Image
          src="/staticArrow.svg"
          alt="3dhome"
          width={180}
          height={180}
          className="absolute left-[-60px] top-[70px] w-[350px] lg:rotate-[-45deg]"
        />
      </div>
      <div className="">
        <InlineWidget url="https://calendly.com/aman1381singh/30min?" />
      </div>
    </div>
  );
});

export default WhyUs;
