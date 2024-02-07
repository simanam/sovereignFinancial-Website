// FAQItem.tsx
import React, { useState } from "react";
import { FAQItemProps } from "@/types/formTypes";

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="flex justify-between  w-full p-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-start font-bold">{question}</span>
        <svg
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && <div className="p-5">{answer}</div>}
    </div>
  );
};

export default FAQItem;
