import React, { useState } from "react";
import Image from "next/image";

const TeamCard = ({ name, role, image, aboutMe }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-blue-50 text-center flex flex-col">
      <div className="h-0 pb-[100%] relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          objectPosition="center 30%"
        />
      </div>
      <div className="p-6 flex-grow text-left">
        <h4 className="text-xl font-semibold mb-2">{name}</h4>
        <p className="text-gray-600 mb-4">{role}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          {isExpanded ? "Hide" : "Show"} About Me
        </button>
        {isExpanded && <p className="mt-4 text-sm text-gray-700">{aboutMe}</p>}
      </div>
    </div>
  );
};

export default TeamCard;
