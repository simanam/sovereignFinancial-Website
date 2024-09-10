import React from "react";
import Image from "next/image";

// Mock data for team leads and members
const teamLeads = [
  { name: "Manraj Singh", role: "CEO" },
  { name: "Jane Smith", role: "CTO" },
  { name: "Mike Wilson", role: "CMO" },
];

const teamMembers = [
  { name: "Alice Smith", role: "COO" },
  { name: "Bob Johnson", role: "CFO" },
];

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>

      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <p className="text-lg">
            Our company is dedicated to innovation and excellence. We strive to
            create cutting-edge solutions that make a difference in people's
            lives. With a team of passionate professionals, we're committed to
            pushing the boundaries of what's possible in our industry.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/aboutt.jpeg"
            alt="About our company"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-6">Our Team</h2>

      <h3 className="text-2xl font-semibold mb-4">Team Leads</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {teamLeads.map((lead, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-blue-20 text-center flex flex-col"
          >
            <div className="h-0 pb-[100%] relative">
              <Image
                src={`/manraj.jpeg`}
                alt={lead.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-grow text-left">
              <h4 className="text-xl font-semibold mb-2">{lead.name}</h4>
              <p className="text-gray-600">{lead.role}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-4">Team Members</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-blue-20 text-center flex flex-col"
          >
            <div className="h-0 pb-[100%] relative">
              <Image
                src={`/manraj.jpeg`}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-grow text-left">
              <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
