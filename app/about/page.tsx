"use client";
import React from "react";
import Image from "next/image";
import TeamCard from "@/components/TeamCard";

// Mock data for team leads and members
const teamLeads = [
  {
    name: "Manraj Singh",
    role: "Broker Partner ",
    image: "/Manraj.jpg",
    aboutMe:
      "Hey there, I'm Manraj Singh, your go-to mortgage partner right here in Fresno, CA! With a Bachelor's degree in Accounting and years of experience, I’m all about making the mortgage process not just smooth but exciting—whether you're a first-time homebuyer or an experienced investor. I treat every client like family, helping you make the smartest decision for your financial future. When I’m not helping people achieve their homeownership dreams, you’ll find me cheering on the New York Knicks (yes, I’m a die-hard fan!) or spending time in my garden. I love giving back through community service and staying active with sports. Let's connect and make your home-buying journey a slam dunk!",
  },
  {
    name: "Kiran Brar",
    role: "Broker Partner ",
    image: "/Kiran.jpg",
    aboutMe:
      "With 27 years of experience in business and finance, I am a dedicated mother of two and a passionate lover of all things real estate. As a broker partner, I specialize in providing tailored financing solutions that meet the unique needs of my clients. I prioritize building strong relationships and guiding individuals through the lending process with expertise and care. I am deeply committed to community service and believe in giving back to the neighborhoods we serve. My goal is to not only help clients achieve their financial aspirations but also to contribute positively to our community. I thrive on finding innovative solutions and consistently strive to create win-win outcomes. I firmly believe that there’s always a way to achieve mutually beneficial results, and I take pride in connecting people with the resources they need for success. Whether you’re a first-time homebuyer or a seasoned investor, I am here to support you every step of the way.",
  },
  {
    name: "Kanwarbir Bhandal",
    role: "Broker Partner ",
    image: "/Kanwar.jpg",
    aboutMe:
      "My name is Kanwarbir Bhandal, and as a broker partner at Sovereign Financial, I’m committed to helping you achieve financial freedom with honesty and transparency. With 4 years of experience in the mortgage industry and a diverse background in Finance, Business Administration, and other industries, I bring a broad perspective to ensure your financial journey is seamless and stress-free. Outside of work, I’m a big fan of the Lakers and Giants, love traveling, binge-watching TV shows, and experimenting with new recipes in the kitchen.",
  },
];

const teamMembers = [
  {
    name: "Amarjeet Singh",
    role: "Loan Officer",
    image: "/Amarjeet.jpg",
    aboutMe:
      "Amarjeet Singh is a dedicated Loan Officer at Sovereign Financial with four years of experience in the loan industry. Committed to helping families achieve their dream of becoming homeowners, Amarjeet leverages extensive knowledge and expertise to provide personalized and effective mortgage solutions. With a Bachelor’s degree in Business Finance, Amarjeet combines a strong foundation of financial principles with practical experience. He works closely with clients to navigate the complexities of the loan process, ensuring each client finds the best mortgage options tailored to their needs. Whether working with first-time homebuyers or seasoned investors, Amarjeet’s clients benefit from his attention to detail, thorough understanding of financial products, and unwavering commitment to their success. Outside of work, Amarjeet enjoys hanging out with friends, traveling, and hiking, which helps him maintain a well-rounded and balanced approach to life and work.",
  },
  ,
];

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Story</h1>

      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 gap-8">
          <p className="text-lg">
            Sovereign Financial was born out of a shared vision to redefine the
            mortgage experience in Central Valley, California. Our team brings
            together decades of collective experience in finance, real estate,
            and business. With members like Manraj Singh, Kiran Brar, Kanwarbir
            Bhandal, and Amarjeet Singh leading the way, we are passionate about
            helping our clients achieve their homeownership goals with
            personalized solutions and expert guidance.
          </p>
          <p className="text-lg">
            Each of us shares a commitment to honesty, transparency, and
            community. Whether you’re a first-time homebuyer or a seasoned
            investor, we’re here to support you through every step of the
            mortgage process. Sovereign Financial is more than just a mortgage
            provider – we’re a partner in your journey toward financial freedom
            and homeownership.
          </p>
          <p className="text-lg">
            Together, we’re building a company that prioritizes relationships,
            innovation, and a deep connection to the communities we serve, from
            Fresno to Madera, Bakersfield, and beyond. This is just the
            beginning of our story, and we’re excited to grow with you.
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

      <h3 className="text-2xl font-semibold mb-4">Leadership</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {teamLeads.map((lead, index) => (
          <TeamCard key={index} {...lead} />
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-4">Team Members</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
