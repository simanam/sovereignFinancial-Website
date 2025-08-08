"use client";
import React, { useRef, useEffect, useState } from "react";
import TestimonialsCard from "./TestimonialsCard";

// Google Places API
const fetchGoogleReviews = async () => {
  const placeId = "ChIJhY1lTfxplIAR7_nVY4ypUU0"; // Replace with your Google Place ID
  const response = await fetch(`/api/google-reviews?placeId=${placeId}`);
  const data = await response.json();

  return data.reviews || [];
};

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [googleReviews, setGoogleReviews] = useState<any[]>([]); // For storing Google Reviews

  useEffect(() => {
    // Fetch Google reviews when component mounts
    const fetchReviews = async () => {
      const reviews = await fetchGoogleReviews();
      console.log(reviews, "reviewe");
      setGoogleReviews(reviews || []);
    };

    fetchReviews();

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
      <div ref={containerRef} className="flex overflow-x-auto hide-scrollbar">
        {googleReviews.map((review, index) => (
          <TestimonialsCard
            key={index}
            author={review.author_name}
            content={review.text}
            profilePhoto={review.profile_photo_url}
            rating={review.rating}
            relativeTime={review.relative_time_description}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
