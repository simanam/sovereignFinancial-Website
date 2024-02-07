import React from "react";
import CTACompo from "./CTACompo";
interface HeroProps {
  scrollToWhyUs?: () => void; // Function that scrolls to Why Us section
  // Add scrollToCalc only if it is expected to be used by Hero
}

const CtaSection: React.FC<HeroProps> = ({ scrollToWhyUs }) => {
  return (
    <div className="max-container padding-container flex flex-col gap-20 py-10 pb-24 md:gap-28 lg:py-10 xl:flex-col justify-center items-center">
      <CTACompo scrollToWhyUs={scrollToWhyUs} />
    </div>
  );
};

export default CtaSection;
