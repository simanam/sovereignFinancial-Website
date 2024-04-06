import React from "react";
import { CalculatorData } from "../types/formTypes";
import { useLottie } from "lottie-react";
import house from "../public/house.json";

interface GraphProps {
  data: CalculatorData | null;
}

const Graph: React.FC<GraphProps> = ({ data }) => {
  console.log(data, "graph");
  const optionsLottie = {
    animationData: house,
    loop: true,
  };

  const { View } = useLottie(optionsLottie);
  return (
    <div className="max-w-[450px] min-w-[350px] sm:min-w-[450px] min-h-[590px] flex flex-col gap-8">
      {" "}
      <h6 className="font-pt-serif font-bold text-2xl  text-gray-100 max-w-[520px] flex flex-col ">
        We received your information. One of our experts will reach out to you
        soon. Thank you!
      </h6>
      <div>{View}</div>
    </div>
  );
};

export default Graph;
