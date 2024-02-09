import React from "react";
import { CalculatorData } from "../types/formTypes";

interface GraphProps {
  data: CalculatorData | null;
}

const Graph: React.FC<GraphProps> = ({ data }) => {
  return <div>Graph</div>;
};

export default Graph;
