// // Testimonials.tsx
// import React from "react";
// import testimonials from "@/types/testimonials";
// import TestimonialsCard from "./TestimonialsCard";

// const Testimonials = () => {
//   const testimonialsData = [...testimonials, ...testimonials];
//   return (
//     <div className="py-10 px-5">
//       <h2 className="text-center text-3xl font-semibold mb-8">
//         What Our Clients Say
//       </h2>
//       <div
//         className="flex overflow-x-auto hide-scrollbar"
//         style={{ display: "flex", animation: "scroll 20s linear infinite" }}
//       >
//         {testimonialsData.map(({ id, author, content }, index) => (
//           <TestimonialsCard key={index} author={author} content={content} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

// Testimonials.tsx

"use client";
import React, { useRef, useEffect } from "react";
import { testimonials, Testimonial } from "../types/testimonials"; // Adjust the import path as needed
import TestimonialsCard from "./TestimonialsCard";

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    let isScrolling: boolean;
    const startScroll = () => {
      isScrolling = true;
      const step = () => {
        if (!isScrolling || !scrollContainer) return;
        scrollContainer.scrollLeft += 1; // Adjust speed if necessary
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    startScroll();
    return () => {
      isScrolling = false;
    };
  }, []);

  return (
    <div className=" flex flex-col gap-20 py-10 pb-24 md:gap-20 lg:py-10">
      <h2 className="font-pt-serif font-bold text-3xl lg:text-4xl  text-gray-100 text-center ">
        Hear from Our Satisfied Clients
      </h2>
      <div
        ref={containerRef}
        className="flex overflow-x-auto hide-scrollbar"
        // style={{ whiteSpace: "nowrap" }}
      >
        {testimonials
          .concat(testimonials)
          .map((testimonial: Testimonial, index: number) => (
            <TestimonialsCard
              key={index}
              author={testimonial.author}
              content={testimonial.content}
            />
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
