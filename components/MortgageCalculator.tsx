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
  const [downPaymentAmount, setDownPaymentAmount] = useState<number | string>(
    ""
  );
  const [downPaymentPercentage, setDownPaymentPercentage] = useState<
    number | string
  >("");
  const [interestRate, setInterestRate] = useState<number>(6);

  const purchasePrice = watch("purchasePrice");

  useEffect(() => {
    if (purchasePrice && purchasePrice > 0) {
      setDownPaymentPercentage(
        ((+downPaymentAmount || 0) / purchasePrice) * 100
      );
    }
  }, [downPaymentAmount, purchasePrice]);

  useEffect(() => {
    if (purchasePrice && purchasePrice > 0) {
      setDownPaymentAmount(
        ((+downPaymentPercentage || 0) / 100) * purchasePrice
      );
    }
  }, [downPaymentPercentage, purchasePrice]);

  const onSubmit = (data: MortgageFormData) => {
    if (formStage === 1) {
      setFormStage(2);
    } else {
      const dataToPass: CalculatorData = {
        purchasePrice: data.purchasePrice,
        creditScore: data.creditScore,
        loanTerm: data.loanTerm,
        downPaymentAmount: +downPaymentAmount || 0,
        downPaymentPercentage: +downPaymentPercentage || 0,
        interestRate,
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        zipCode: data.zipCode,
      };

      if (onFinalSubmit) onFinalSubmit(dataToPass);
    }
  };

  const handleGoBack = () => {
    setFormStage(1);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-2 shadow-md w-full max-w-[450px] min-w-[350px] sm:min-w-[450px] min-h-[590px] flex flex-col justify-between bg-white border-8 border-gray-100 rounded-2xl"
    >
      <h6 className="font-league-gothic text-2xl text-navyblue-100 mt-2 mb-2 w-full text-center">
        Get your rate
      </h6>
      {formStage === 1 && (
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
              defaultValue=""
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  placeholder="0"
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
              defaultValue=""
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  placeholder="0"
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
                onChange={(e) =>
                  setDownPaymentAmount(
                    e.target.value === "" ? "" : +e.target.value
                  )
                }
                placeholder="0"
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
                  setDownPaymentPercentage(
                    e.target.value === "" ? "" : +e.target.value
                  )
                }
                placeholder="0"
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
        </>
      )}
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

// const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({
//   onFinalSubmit,
// }) => {
//   const { control, handleSubmit, watch, register } =
//     useForm<MortgageFormData>();
//   const [formStage, setFormStage] = useState(1);
//   const [downPaymentAmount, setDownPaymentAmount] = useState<number | string>(
//     ""
//   );
//   const [downPaymentPercentage, setDownPaymentPercentage] = useState<
//     number | string
//   >("");
//   const [interestRate, setInterestRate] = useState<number>(6);

//   const purchasePrice = watch("purchasePrice");

//   useEffect(() => {
//     if (purchasePrice && purchasePrice > 0) {
//       setDownPaymentPercentage(
//         ((+downPaymentAmount || 0) / purchasePrice) * 100
//       );
//     }
//   }, [downPaymentAmount, purchasePrice]);

//   useEffect(() => {
//     if (purchasePrice && purchasePrice > 0) {
//       setDownPaymentAmount(
//         ((+downPaymentPercentage || 0) / 100) * purchasePrice
//       );
//     }
//   }, [downPaymentPercentage, purchasePrice]);

//   const onSubmit = (data: MortgageFormData) => {
//     if (formStage === 1) {
//       setFormStage(2);
//     } else {
//       const dataToPass: CalculatorData = {
//         purchasePrice: data.purchasePrice,
//         creditScore: data.creditScore,
//         loanTerm: data.loanTerm,
//         downPaymentAmount: +downPaymentAmount || 0,
//         downPaymentPercentage: +downPaymentPercentage || 0,
//         interestRate,
//         name: data.name,
//         email: data.email,
//         phoneNumber: data.phoneNumber,
//         zipCode: data.zipCode,
//       };

//       if (onFinalSubmit) onFinalSubmit(dataToPass);
//     }
//   };

//   const handleGoBack = () => {
//     setFormStage(1);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="p-2 shadow-md w-full max-w-[450px] min-w-[350px] sm:min-w-[450px] min-h-[590px] flex flex-col justify-between bg-white border-8 border-gray-100 rounded-2xl"
//     >
//       <h6 className="font-league-gothic text-2xl text-navyblue-100 mt-2 mb-2 w-full text-center">
//         Get your rate
//       </h6>
//       {formStage === 1 && (
//         <>
//           <div className="mb-4">
//             <label
//               htmlFor="zipCode"
//               className="block text-sm text-gray-700 font-bold"
//             >
//               Zip Code
//             </label>
//             <Controller
//               {...register("zipCode", { required: "Zip Code is required" })}
//               name="zipCode"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="number"
//                   {...field}
//                   placeholder="0"
//                   className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
//                 />
//               )}
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="purchasePrice"
//               className="block text-sm text-gray-700 font-bold"
//             >
//               Purchase Price
//             </label>
//             <Controller
//               {...register("purchasePrice", {
//                 required: "Purchase Price is required",
//               })}
//               name="purchasePrice"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="number"
//                   {...field}
//                   placeholder="0"
//                   className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
//                 />
//               )}
//             />
//           </div>

//           <div className="mb-4 grid grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="downPaymentAmount"
//                 className="block text-sm text-gray-700 font-bold"
//               >
//                 Downpayment Amount
//               </label>
//               <input
//                 type="number"
//                 value={downPaymentAmount}
//                 onChange={(e) =>
//                   setDownPaymentAmount(
//                     e.target.value === "" ? "" : +e.target.value
//                   )
//                 }
//                 placeholder="0"
//                 className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="downPaymentPercentage"
//                 className="block text-sm text-gray-700 font-bold"
//               >
//                 Downpayment Percentage
//               </label>
//               <input
//                 type="number"
//                 value={downPaymentPercentage}
//                 onChange={(e) =>
//                   setDownPaymentPercentage(
//                     e.target.value === "" ? "" : +e.target.value
//                   )
//                 }
//                 placeholder="0"
//                 className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="creditScore"
//               className="block text-sm text-gray-700 font-bold"
//             >
//               Credit Score
//             </label>
//             <Controller
//               {...register("creditScore", {
//                 required: "Credit Score is required",
//               })}
//               name="creditScore"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <select
//                   {...field}
//                   className="mt-1 block w-full border-2 border-gray-400 p-3 shadow-sm sm:text-sm rounded-md font-pt-serif"
//                 >
//                   <option value="">Select Credit Score</option>
//                   {[...Array(5)].map((_, index) => {
//                     const score = 780 - index * 50;
//                     return (
//                       <option key={score} value={score.toString()}>
//                         {score <= 580 ? "580 or below" : score.toString()}
//                       </option>
//                     );
//                   })}
//                 </select>
//               )}
//             />
//           </div>
//         </>
//       )}
//       {formStage === 2 && <>{/* Stage 2 Fields */}</>}
//       <Button
//         type="submit"
//         title={formStage === 1 ? "Calculate" : "View Rates"}
//         variant="btn_blue"
//       />
//     </form>
//   );
// };

// export default MortgageCalculator;
