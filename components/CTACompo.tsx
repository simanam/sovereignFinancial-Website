import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
interface HeroProps {
  scrollToWhyUs?: () => void;
  title: string; // Function that scrolls to Why Us section
  // Add scrollToCalc only if it is expected to be used by Hero
}

const CTACompo: React.FC<HeroProps> = ({ scrollToWhyUs, title }) => {
  const router = useRouter();

  const defaultAction = () => {
    console.log("Default action executed");
    // For example, navigate to the contact page
    router.push("/contact");
  };
  return (
    <div className="flex flex-col gap-8 lg:flex-row justify-between p-6 lg:py-24 lg:px-16 rounded-2xl items-center w-full bg-opacity-90 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800">
      <div>
        <h6 className="text-white font-pt-serif text-2xl lg:text-4xl text-center lg:text-left ">
          Speak with your very own Mortgage Expert today
        </h6>
      </div>
      <div>
        <Button
          type="button"
          title={title}
          variant="btn_yellow"
          onClick={scrollToWhyUs || defaultAction}
        />
      </div>
    </div>
  );
};

export default CTACompo;
