// TestimonialsCard.tsx
import React from "react";

interface TestimonialsCardProps {
  author: string;
  content: string;
}

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  author,
  content,
}) => {
  return (
    <div className="min-w-[300px] bg-gray-10 p-6 shadow-md m-4 overflow-hidden">
      <p className="italic break-words">{content}</p>
      <span className="block mt-4 text-right font-bold">{author}</span>
    </div>
  );
};

export default TestimonialsCard;
