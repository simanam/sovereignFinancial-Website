"use client";
import React, { useRef, useEffect, useState } from "react";
import TestimonialsCard from "./TestimonialsCard";

// Loading Card Component
const LoadingCard: React.FC = () => {
  return (
    <div className="flex-shrink-0 w-80 p-6 bg-white rounded-lg shadow-md mx-4 animate-pulse">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div className="ml-3 flex-1">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-gray-200 rounded mr-1"></div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
        <div className="h-3 bg-gray-200 rounded w-3/6"></div>
      </div>
      <div className="mt-4">
        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  );
};

// Google Reviews CTA Card Component
const GoogleReviewsCTACard: React.FC<{ googleBusinessUrl: string }> = ({
  googleBusinessUrl,
}) => {
  return (
    <div className="flex-shrink-0 w-80 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md mx-4 border-2 border-blue-200 hover:shadow-lg transition-shadow duration-300">
      <div className="text-center">
        {/* Google Icon */}
        <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
          <svg className="w-8 h-8" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        </div>

        {/* Content */}
        <h3 className="font-bold text-xl text-gray-800 mb-2">
          See All Reviews
        </h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          Read more customer reviews and share your experience on Google
          Business
        </p>

        {/* CTA Button */}
        <a
          href={googleBusinessUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:scale-105"
        >
          <span>View on Google</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

// Simple API call - no pagination needed
const fetchGoogleReviews = async () => {
  const placeId = "ChIJhY1lTfxplIAR7_nVY4ypUU0";
  const response = await fetch(`/api/google-reviews?placeId=${placeId}`);
  const data = await response.json();
  return data.reviews || [];
};

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [googleReviews, setGoogleReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);

  // Google Business URL
  const googleBusinessUrl = "https://maps.app.goo.gl/G1DdbxioMAEqtN8Z9";

  // Load reviews once
  useEffect(() => {
    const loadReviews = async () => {
      setLoading(true);
      try {
        const reviews = await fetchGoogleReviews();
        console.log("✅ Loaded reviews:", reviews.length);
        console.log(
          "📝 Reviews:",
          reviews.map((r) => r.author_name)
        );
        setGoogleReviews(reviews);
      } catch (error) {
        console.error("❌ Error loading reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  // Simple auto-scroll
  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer || !autoScroll || loading) return;

    let animationId: number;
    const scroll = () => {
      if (scrollContainer && autoScroll) {
        scrollContainer.scrollLeft += 1;

        // Reset when reaching end
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          setTimeout(() => {
            if (scrollContainer && autoScroll) {
              scrollContainer.scrollLeft = 0;
            }
          }, 2000);
        }

        animationId = requestAnimationFrame(scroll);
      }
    };

    const timer = setTimeout(() => {
      animationId = requestAnimationFrame(scroll);
    }, 2000);

    return () => {
      clearTimeout(timer);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [autoScroll, loading]);

  // Handle manual scroll
  const handleScroll = () => {
    setAutoScroll(false);
    clearTimeout((window as any).scrollTimeout);
    (window as any).scrollTimeout = setTimeout(() => {
      setAutoScroll(true);
    }, 4000);
  };

  return (
    <div className="flex flex-col gap-20 py-10 pb-24 md:gap-20 lg:py-10">
      <div className="text-center">
        <h2 className="font-pt-serif font-bold text-3xl lg:text-4xl text-gray-100 mb-4">
          Hear from Our Satisfied Clients
        </h2>
        {!loading && googleReviews.length > 0 && (
          <p className="text-gray-600 text-sm">
            Recent Google Reviews •{" "}
            <span className="text-blue-600">Scroll to see more</span>
          </p>
        )}
      </div>

      <div
        ref={containerRef}
        className="flex overflow-x-auto hide-scrollbar gap-4"
        onScroll={handleScroll}
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Loading state */}
        {loading &&
          [...Array(3)].map((_, index) => (
            <LoadingCard key={`loading-${index}`} />
          ))}

        {/* Reviews */}
        {!loading &&
          googleReviews.map((review, index) => (
            <TestimonialsCard
              key={`review-${index}-${review.author_name}`}
              author={review.author_name}
              content={review.text}
              profilePhoto={review.profile_photo_url}
              rating={review.rating}
              relativeTime={review.relative_time_description}
            />
          ))}

        {/* Google CTA Card */}
        {!loading && googleReviews.length > 0 && (
          <GoogleReviewsCTACard googleBusinessUrl={googleBusinessUrl} />
        )}
      </div>

      {/* Debug info */}
      {!loading && (
        <div className="text-center text-xs text-gray-400">
          Showing {googleReviews.length} reviews + Google link
        </div>
      )}
    </div>
  );
};

export default Testimonials;
