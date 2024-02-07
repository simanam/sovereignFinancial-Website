import React from "react";
import FAQList from "@/components/FAQList";
import faqs from "@/public/faqData.json";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Sovereign Financial",
  description:
    "Questions? Ready to start your mortgage journey? Contact Sovereign Financial today! Our team is here to provide you with expert advice, answer any queries, and guide you through every step of the mortgage process. Reach out via phone, email, or fill out our contact form for a swift response. Let’s make your dream home a reality together.",
};

const ContactPage = () => {
  return (
    <>
      <ContactSection />

      <div className="max-container padding-container flex flex-col justify-center gap-8 mb-10 ">
        <h2 className="font-pt-serif font-bold text-3xl lg:text-4xl  lg:text-left text-gray-100 text-center">
          Frequently Asked Questions
        </h2>
        <FAQList faqs={faqs} />
      </div>
      <CtaSection />
    </>
  );
};

export default ContactPage;
