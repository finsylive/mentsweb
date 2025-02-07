"use client";
import React from "react";

const logos = [
  { name: "Microsoft", src: "/logos/microsoft.png" },
  { name: "Goldman Sachs", src: "/logos/goldman.png" },
  { name: "Goa University", src: "/logos/goa-university.png" },
  { name: "IISc", src: "/logos/iisc.png" },
  { name: "IISER Pune", src: "/logos/iiser-pune.png" },
  { name: "Manipal University", src: "/logos/manipal.png" },
];

export function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 py-10">
      <h2 className="text-center text-3xl font-bold mb-8 text-white tracking-wide">
        OUR COMMUNITY MEMBERS COME FROM
      </h2>
      <div className="relative flex overflow-hidden whitespace-nowrap">
        {/* Wrapping the marquee for smooth looping */}
        <div className="animate-marquee flex space-x-14 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-52 h-28 p-2 bg-white/10 backdrop-blur-md rounded-lg shadow-md">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
