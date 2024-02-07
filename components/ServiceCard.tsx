import React from "react";
import Image from "next/image";

// Define the Service type
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // This should be a path or URL to the icon image
  link: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4 hover:bg-blue-20">
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-blue-500 text-white">
          <Image
            src={service.icon}
            alt="Service Icon"
            width={50}
            height={50}
            className="w-20 h-10"
          />
        </div>
        <div>
          <h2 className="font-bold text-xl mb-2">{service.title}</h2>
          <p className="text-gray-700 text-base">{service.description}</p>
        </div>
      </div>
      {/* <div className="mt-4">
        <a href={service.link} className="text-blue-500 hover:text-blue-400">
          More details &rarr;
        </a>
      </div> */}
    </div>
  );
};

export default ServiceCard;
