import React from "react";

const TrustedPartners = () => {
  return (
    <div className="flex overflow-x-auto py-10 ml-4 mr-4 pb-24 gap-4 sm:justify-start md:gap-24 lg:py-10 lg:justify-center items-center">
      <div className="min-w-[220px] max-w-[220px] flex-shrink-0 flex flex-col justify-center items-center gap-2">
        <h6 className="font-pt-serif text-6xl text-center">
          1 <span className="italic font-thin">on</span> 1
        </h6>
        <p className="font-poppins font-medium text-center text-[10px]">
          Free consultation to discuss your mortgage options with an expert.
        </p>
      </div>
      <div className="min-w-[220px] max-w-[220px] flex-shrink-0 flex flex-col justify-center items-center gap-2">
        <h6 className="font-pt-serif text-6xl text-center">
          15 <span className="italic font-thin">min</span>
        </h6>
        <p className="font-poppins font-medium text-center text-[10px]">
          Your journey home with our streamlined application process.
        </p>
      </div>
      <div className="min-w-[220px] max-w-[220px] flex-shrink-0 flex flex-col justify-center items-center gap-2">
        <h6 className="font-pt-serif text-6xl text-center">
          80 <span className="italic font-thin">+</span>
        </h6>
        <p className="font-poppins font-medium text-center text-[10px]">
          Broad network to find the perfect mortgage match for you.
        </p>
      </div>
    </div>
  );
};

export default TrustedPartners;
