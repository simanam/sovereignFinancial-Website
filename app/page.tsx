"use client";
import React, { useRef } from "react";
import Aboutus from "@/components/Aboutus";
import CalculatorSection from "@/components/CalculatorSection";
import CtaSection from "@/components/CtaSection";
import Hero from "@/components/Hero";
import OurTeam from "@/components/OurTeam";
import Testimonials from "@/components/Testimonials";
import TrustedPartners from "@/components/TrustedPartners";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";

export default function Home() {
  const whyUsRef = useRef<HTMLDivElement | null>(null);
  const calcRef = useRef<HTMLDivElement | null>(null);
  const scrollToWhyUs = () => {
    setTimeout(() => {
      whyUsRef.current?.scrollIntoView({
        behavior: "auto", // Smoothly scrolls the element into view
        block: "start", // Aligns the element at the top of the viewport
        inline: "nearest", // Aligns horizontally in the nearest position (useful for RTL languages)
      });
    }, 100);
  };
  const scrollToCalc = () => {
    setTimeout(() => {
      calcRef.current?.scrollIntoView({
        behavior: "auto", // Smoothly scrolls the element into view
        block: "start", // Aligns the element at the top of the viewport
        inline: "nearest", // Aligns horizontally in the nearest position (useful for RTL languages)
      });
    }, 100);
  };
  return (
    <>
      <Hero scrollToWhyUs={scrollToWhyUs} scrollToCalc={scrollToCalc} />
      <CalculatorSection ref={calcRef} />
      <Services />
      <Aboutus />
      <TrustedPartners />
      <CtaSection scrollToWhyUs={scrollToWhyUs} title="Schedule a call" />
      <Testimonials />
      <WhyUs ref={whyUsRef} />
      <CtaSection title="Contact Now" />
    </>
  );
}
