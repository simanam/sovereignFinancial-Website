// // TestimonialsCard.tsx
// import React from "react";

// interface TestimonialsCardProps {
//   author: string;
//   content: string;
// }

// const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
//   author,
//   content,
// }) => {
//   return (
//     <div className="min-w-[300px] bg-gray-10 p-6 shadow-md m-4 overflow-hidden">
//       <p className="italic break-words">{content}</p>
//       <span className="block mt-4 text-right font-bold">{author}</span>
//     </div>
//   );
// };

// export default TestimonialsCard;

import React from "react";
import Image from "next/image";

interface TestimonialsCardProps {
  author: string;
  content: string;
  profilePhoto: string;
  rating: number;
  relativeTime: string;
}

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  author,
  content,
  profilePhoto,
  rating,
  relativeTime,
}) => {
  return (
    <div className="min-w-[300px] bg-white p-6 shadow-lg m-4 rounded-lg flex flex-col gap-4">
      {/* Header with Profile Photo and Name */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative">
          <Image
            src={profilePhoto}
            alt={`${author}'s profile`}
            className="rounded-full object-cover border border-gray-300"
            fill
            sizes="48px"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-sm text-gray-500">{relativeTime}</p>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={index < rating ? "#FFD700" : "#e4e5e9"}
            className="w-5 h-5"
          >
            <path d="M12 .587l3.668 7.573L24 9.423l-6 5.847 1.417 8.253L12 18.896l-7.417 4.627L6 15.27.001 9.423l8.332-1.263L12 .587z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="italic text-gray-700">{content}</p>
    </div>
  );
};

export default TestimonialsCard;
