// FAQList.tsx
import React from "react";
import FAQItem from "./FAQItem";
import { FAQItemProps } from "@/types/formTypes";

type FAQListProps = {
  faqs: FAQItemProps[];
};

const FAQList: React.FC<FAQListProps> = ({ faqs }) => {
  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
