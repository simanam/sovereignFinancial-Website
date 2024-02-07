import React from "react";
import ServiceCard from "./ServiceCard";
import { Service } from "../types/formTypes";

const services: Service[] = [
  {
    id: 1,
    title: "Home Mortgage",
    description:
      "Home mortgage for purchasing primary or investment properties.",
    icon: "/mortgage.svg", // Replace with your actual icon path
    link: "/services/home-mortgage",
  },
  {
    id: 2,
    title: "Refinancing Residential Properties",
    description:
      "Refinancing of residential properties to help you save money.",
    icon: "/refinance.svg", // Replace with your actual icon path
    link: "/services/refinancing",
  },
  {
    id: 3,
    title: "Investor Friendly Lending",
    description:
      "Flexible investor friendly lending options for your unique needs.",
    icon: "/lending.svg", // Replace with your actual icon path
    link: "/services/investor-lending",
  },
  {
    id: 4,
    title: "DSCR & Fix and Flip",
    description:
      "DSCR products, fix and flip products for investment property purchases and refinancing.",
    icon: "/flip.svg", // Replace with your actual icon path
    link: "/services/dscr-fix-flip",
  },
  {
    id: 5,
    title: "Home Equity Cash Outs",
    description:
      "Home equity cash outs on both primary and investment properties.",
    icon: "/cashout.svg", // Replace with your actual icon path
    link: "/services/home-equity-cash-outs",
  },
];

const Services = () => {
  return (
    <div className="max-container padding-container flex flex-col gap-20 py-10 pb-24 md:gap-20 lg:py-10  justify-center items-center">
      <h2 className="font-pt-serif font-bold text-3xl lg:text-4xl  text-gray-100 text-center ">
        Comprehensive Mortgage Services
      </h2>
      <div className="flex flex-wrap justify-center">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
