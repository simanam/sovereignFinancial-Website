"use client";
import React, { useCallback } from "react";
import MortgageCalculator from "./MortgageCalculator";
import Image from "next/image";
import Button from "./Button";
import { useLottie } from "lottie-react";
import arrow from "../public/arrow.json";
interface HeroProps {
  scrollToWhyUs: () => void; // Function that scrolls to Why Us section
  // Add scrollToCalc only if it is expected to be used by Hero
  scrollToCalc?: () => void; // Optional prop for scrolling to Calculator section
}

const Hero: React.FC<HeroProps> = ({ scrollToWhyUs, scrollToCalc }) => {
  const optionsLottie = {
    animationData: arrow,
    loop: true,
  };

  const { View } = useLottie(optionsLottie);
  return (
    <section
      className="max-container padding-container flex flex-col gap-20 py-24 pb-24 md:gap-28 lg:py-10 xl:flex-col justify-center items-center relative"
      style={{
        backgroundImage: "url('/calihouse.jpg')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 backdrop-sm bg-white/60"></div>
      <div className="relative z-20 flex  flex-col lg:mt-[80px] justify-center items-center">
        {/* <Image
          src="/3dhome.png"
          alt="3dhome"
          width={50}
          height={50}
          className="absolute left-[10px] top-[-50px] w-10 lg:w-[50px]"
        /> */}
        {/* <h1 className="font-pt-serif font-bold text-5xl lg:text-6xl  text-white text-center">
          Your Path to <span className="text-blue-80">Homeownership</span>{" "}
          Starts Here
        </h1> */}
        {/* <h1 className="font-pt-serif font-bold text-5xl lg:text-6xl text-white text-center leading-relaxed lg:leading-tight">
          Your Path to{" "}
          <span className="inline-block text-blue-80 bg-white px-2 py-1.5 rounded-md shadow-md my-1">
            Homeownership
          </span>{" "}
          Starts Here
        </h1> */}
        <h1 className="font-pt-serif font-bold text-5xl lg:text-6xl text-gray-60 text-center ">
          The Perfect{" "}
          <span className="inline-block text-blue-80  px-1 py-1.5  ">
            Mortgage Solution
          </span>{" "}
          for Your Dream Home
        </h1>
        <p className="font-poppins mt-6 text-gray-60 text-center sm:max-w-[900px] leading-loose">
          Fast, Transparent, and Personalized Experience{" "}
          <span className="p-1 bg-blue-80 text-gray-10 text-lg font-semibold rounded">
            – Just for You.
          </span>{" "}
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row justify-center my-11 ">
          <Button
            type="button"
            title="Calculate Rate"
            variant="btn_dark_black_outline"
            onClick={scrollToCalc}
          />
          <Button
            type="button"
            title="Schedule a call"
            variant="btn_yellow"
            onClick={scrollToWhyUs}
          />
        </div>
        <div className="flex justify-center lg:justify-between w-[100%] mr-40px  mt-[-20px] lg:mt-[-60px]">
          <div className="w-[500px] h-[250px] hidden lg:block  rotate-45">
            {View}
          </div>
          <div className="w-[200px] h-[250px] right-[-100px] grid grid-cols-2 gap-2">
            <Image
              src="/singh.png"
              alt="3dhome"
              width={80}
              height={80}
              className=""
            />
            <Image
              src="/key.png"
              alt="3dhome"
              width={120}
              height={120}
              className=""
            />
            <div className="flex items-center justify-start space-x-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full" />
              <div className="w-3 h-3 border-2 border-blue-500 rounded-full" />
            </div>
            <Image
              src="/mam.png"
              alt="3dhome"
              width={80}
              height={80}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
