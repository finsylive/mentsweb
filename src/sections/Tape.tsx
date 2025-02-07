"use client";
import React from "react";

const logos = [
  { name: "Microsoft", src: "https://th.bing.com/th/id/OIP.baaPUaWyzc95KKjKt-DClwHaHN?rs=1&pid=ImgDetMain" },
  { name: "Goldman Sachs", src: "https://th.bing.com/th/id/OIP.RwrVEqGQ1GgKpT6UjjZQ1AHaHa?rs=1&pid=ImgDetMain" },
  { name: "Goa University", src: "https://th.bing.com/th/id/OIP.8X5qKVILdYvR_u_PBUCryQHaHo?rs=1&pid=ImgDetMain" },
  { name: "IISc", src: "https://th.bing.com/th/id/OIP.OLNhwq1r-Rq6njDFrfNmVAHaIS?w=768&h=860&rs=1&pid=ImgDetMain" },
  { name: "IISER Pune", src: "https://www.univariety.com/uploads/university/images/logo/56052dd0_logo.jpg" },
  { name: "Manipal University", src: "https://www.pngkit.com/png/full/247-2476940_hindu-college-delhi-university-logo.png" },
];

export function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden bg-black py-10">
      <h2 className="text-center text-3xl font-bold mb-8 text-white">
        OUR COMMUNITY MEMBERS FROM
      </h2>
      <div className="flex overflow-x-hidden">
        <div className="flex animate-marquee">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="mx-4 w-40 h-40 flex items-center justify-center bg-white/10 rounded-lg"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  );
}