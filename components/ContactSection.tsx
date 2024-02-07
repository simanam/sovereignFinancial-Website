"use client";
import React from "react";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const ContactSection = () => {
  return (
    <div className="  max-container padding-container flex flex-col gap-10 py-10 pb-20 md:gap-28 lg:py-20 xl:flex-row justify-center">
      <div className="relative z-20 flex  flex-col gap-10">
        <Image
          src="/contact.svg"
          alt="3dhome"
          width={90}
          height={90}
          className="absolute left-[-40px] top-[-60px] w-[40px]"
        />
        <h2 className="font-pt-serif font-bold text-3xl lg:text-4xl text-center lg:text-left text-gray-100 max-w-[520px]">
          Get in Touch with Us
        </h2>
        <p className="hidden lg:block">
          Questions? Ready to start your mortgage journey? Contact Sovereign
          Financial today! Our team is here to provide you with expert advice,
          answer any queries, and guide you through every step of the mortgage
          process. Reach out via phone, email, or fill out our contact form for
          a swift response. Let’s make your dream home a reality together.
        </p>
      </div>
      <div className="lg:p-10 p-2 rounded-2xl justify-center flex">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
