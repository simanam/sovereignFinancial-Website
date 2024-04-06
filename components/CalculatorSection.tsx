import React, { useState } from "react";
import Image from "next/image";
import MortgageCalculator from "./MortgageCalculator";
import { CalculatorData } from "../types/formTypes";
import Graph from "./Graph";

const CalculatorSection = React.forwardRef<HTMLDivElement>((props, ref) => {
  // State to manage calculator visibility
  const [showCalculator, setShowCalculator] = useState(true);
  // State to store calculator data
  const [calculatorData, setCalculatorData] = useState<CalculatorData | null>(
    null
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // // Function to handle calculator submission and show graph
  // const handleCalculatorSubmit = (data: CalculatorData) => {
  //   console.log(data, "csl sec");
  //   setCalculatorData(data); // Assume data is the calculated result or relevant data for the graph
  //   setShowCalculator(false); // Hide calculator and show graph
  // };

  const handleCalculatorSubmit = async (data: CalculatorData) => {
    console.log(data);
    setCalculatorData(data);
    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URI_M as string, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(data),
      });
      console.log("Form submitted successfully");
      setIsSubmitted(true); // Update state to indicate submission success
      setSubmitMessage(
        "Thank you for contacting us, we will be in touch soon!"
      ); // Set a success message
      setShowCalculator(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitted(false);
      setSubmitMessage(
        "There was an error submitting the form. Please try again later."
      ); // Set an error message
    }
  };

  return (
    <div
      ref={ref}
      className=" clac-section max-container padding-container flex flex-col gap-10 py-10 pb-20 md:gap-28 lg:py-20 xl:flex-row justify-center items-center"
    >
      <div className="relative z-20 flex  flex-col gap-10">
        <Image
          src="/chair.png"
          alt="3dhome"
          width={180}
          height={180}
          className="absolute left-[-40px] top-[-60px] w-[90px]"
        />
        <h2 className="font-pt-serif font-bold text-3xl lg:text-4xl  text-gray-100 max-w-[520px]">
          Calculate your mortgage rate. It's completely free
        </h2>
        <p className="hidden lg:block">
          Effortlessly calculate your{" "}
          <span className="text-blue-80">mortgage rate</span> with our free,
          user-friendly tool. Gain instant insights into your potential monthly
          payments and explore various mortgage options tailored to fit your
          financial situation. No fees, no obligations—just clear, concise
          information to help you make informed decisions about your home
          financing.
        </p>
      </div>
      <div className="lg:p-10 p-2 rounded-2xl bg-blue-20 justify-center flex">
        {showCalculator ? (
          <MortgageCalculator onFinalSubmit={handleCalculatorSubmit} />
        ) : (
          <Graph data={calculatorData} />
        )}
        {/* <Graph data={calculatorData} /> */}
      </div>
    </div>
  );
});

export default CalculatorSection;
