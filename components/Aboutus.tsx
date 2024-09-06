import React from "react";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div className="max-container padding-container flex flex-col-reverse gap-10 py-20 pb-10 md:gap-10  lg:pl-0 lg:py-20 lg:flex-row justify-center items-start">
      <div className="min-w-[60%]">
        <Image
          src="/buyinghome.jpg"
          alt="buying home"
          width={800}
          height={500}
          className="rounded-xl"
        />
      </div>
      <div className="relative z-20 flex  flex-col gap-8">
        <Image
          src="/drawer.png"
          alt="3dhome"
          width={180}
          height={180}
          className="absolute left-[-40px] top-[-60px] w-[90px]"
        />
        <h2 className="font-pt-serif font-bold text-3xl lg:text-4xl  text-gray-100 ">
          Your Local Mortgage Specialists
        </h2>
        <p className="font-poppins text-gray-700 text-base">
          Welcome to <span className="text-blue-80">Sovereign Financial</span>,
          where we turn your homeownership dreams into reality. Based in the
          heart of Central Valley, California, we are dedicated to providing
          personalized mortgage solutions tailored to each client's unique
          needs.
        </p>
        <p className="font-poppins text-gray-700 text-base">
          At Sovereign Financial, we understand that choosing a{" "}
          <span className="text-blue-80">mortgage provider</span> is a
          significant decision. That's why we go above and beyond to ensure that
          our clients not only find a loan that suits their needs but also feel
          supported throughout their homeownership journey.
        </p>
        <p className="font-poppins text-gray-700 text-base">
          Proudly Serving{" "}
          <span className="text-blue-80">Fresno, Madera, Bakersfield</span> and
          surrounding areas.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
