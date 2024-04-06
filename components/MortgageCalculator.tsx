"use client";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { MortgageFormData, CalculatorData } from "../types/formTypes";
import Button from "./Button";

interface MortgageCalculatorProps {
  onFinalSubmit?: (data: CalculatorData) => void; // Adjust based on actual usage
}

const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({
  onFinalSubmit,
}) => {
  const { control, handleSubmit, watch, register } =
    useForm<MortgageFormData>();
  const [formStage, setFormStage] = useState(1);
  const [downPaymentAmount, setDownPaymentAmount] = useState<number>(0);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(6);

  const purchasePrice = watch("purchasePrice");

  useEffect(() => {
    if (purchasePrice > 0) {
      setDownPaymentPercentage((downPaymentAmount / purchasePrice) * 100);
    }
  }, [downPaymentAmount, purchasePrice]);

  useEffect(() => {
    if (purchasePrice > 0) {
      setDownPaymentAmount((downPaymentPercentage / 100) * purchasePrice);
    }
  }, [downPaymentPercentage, purchasePrice]);

  const onSubmit = (data: MortgageFormData) => {
    if (formStage === 1) {
      setFormStage(2); // Move to the next stage
    } else {
      // Prepare data for final submission
      const dataToPass: CalculatorData = {
        purchasePrice: data.purchasePrice,
        creditScore: data.creditScore,
        loanTerm: data.loanTerm,
        downPaymentAmount,
        downPaymentPercentage,
        interestRate,
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        zipCode: data.zipCode,
        // Omit personal information if not needed for CalculatorData
      };

      // Ensure you're calling a prop or another function for final submission
      if (onFinalSubmit) onFinalSubmit(dataToPass);
    }
  };
  const handleGoBack = () => {
    setFormStage(1);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" p-2 shadow-md w-full max-w-[450px] min-w-[350px] sm:min-w-[450px] min-h-[590px] flex flex-col justify-between bg-white  border-8 border-gray-100 rounded-2xl"
    >
      <h6 className="font-league-gothic text-2xl text-navyblue-100 mt-2 mb-2 w-full text-center">
        {" "}
        Get your rate
      </h6>
      {formStage === 1 && (
        // Render the initial form fields (zip code, purchase price, etc.)
        <>
          <div className="mb-4">
            <label
              htmlFor="zipCode"
              className="block text-sm text-gray-700 font-bold"
            >
              Zip Code
            </label>
            <Controller
              {...register("zipCode", { required: "Zip Code is required" })}
              name="zipCode"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
                />
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="purchasePrice"
              className="block text-sm text-gray-700 font-bold"
            >
              Purchase Price
            </label>
            <Controller
              {...register("purchasePrice", {
                required: "Purchase Price is required",
              })}
              name="purchasePrice"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
                />
              )}
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="downPaymentAmount"
                className="block text-sm text-gray-700 font-bold"
              >
                Downpayment Amount
              </label>
              <input
                type="number"
                value={downPaymentAmount}
                onChange={(e) => setDownPaymentAmount(Number(e.target.value))}
                className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
              />
            </div>
            <div>
              <label
                htmlFor="downPaymentPercentage"
                className="block text-sm text-gray-700 font-bold"
              >
                Downpayment Percentage
              </label>
              <input
                type="number"
                value={downPaymentPercentage}
                onChange={(e) =>
                  setDownPaymentPercentage(Number(e.target.value))
                }
                className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="creditScore"
              className="block text-sm text-gray-700 font-bold"
            >
              Credit Score
            </label>
            <Controller
              {...register("creditScore", {
                required: "Credit Score is required",
              })}
              name="creditScore"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select
                  {...field}
                  className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
                >
                  <option value="">Select Credit Score</option>
                  {[...Array(5)].map((_, index) => {
                    const score = 780 - index * 50;
                    return (
                      <option key={score} value={score.toString()}>
                        {score <= 580 ? "580 or below" : score.toString()}
                      </option>
                    );
                  })}
                </select>
              )}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 font-bold">
              Loan Term
            </label>
            <div className="mt-2 flex gap-3">
              {["30", "20", "15", "10"].map((term) => (
                <div key={term}>
                  <label>
                    <input
                      type="checkbox"
                      value={term}
                      {...register("loanTerm", {
                        required: "Loan Term is required",
                      })}
                      className="mr-2"
                    />
                    {term} years
                  </label>
                </div>
              ))}
            </div>
          </div>
        </>
      )}{" "}
      {formStage === 2 && (
        <>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm text-gray-700 font-bold"
            >
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-gray-700 font-bold"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm text-gray-700 font-bold"
            >
              Phone Number
            </label>
            <input
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
              type="tel"
              className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
            />
          </div>
          <button type="button" onClick={handleGoBack} className="...">
            Go Back
          </button>
        </>
      )}
      <Button
        type="submit"
        title={formStage === 1 ? "Calculate" : "View Rates"}
        variant="btn_blue"
      />
    </form>
  );
};

export default MortgageCalculator;
