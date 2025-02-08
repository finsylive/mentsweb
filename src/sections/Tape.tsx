"use client";
import React, { useState, useEffect } from 'react';
import grainImage from "@/assets/images/grain.jpg";

const logos = [
  { 
    name: "IIT Bombay", 
    src: "https://th.bing.com/th/id/OIP.baaPUaWyzc95KKjKt-DClwHaHN?rs=1&pid=ImgDetMain",
    color: "from-blue-500/20 to-blue-600/20"
  },
  { 
    name: "IIT Madras", 
    src: "https://th.bing.com/th/id/OIP.RwrVEqGQ1GgKpT6UjjZQ1AHaHa?rs=1&pid=ImgDetMain",
    color: "from-blue-400/20 to-indigo-500/20"
  },
  { 
    name: "IIT Goa", 
    src: "https://th.bing.com/th/id/OIP.8X5qKVILdYvR_u_PBUCryQHaHo?rs=1&pid=ImgDetMain",
    color: "from-purple-500/20 to-purple-600/20"
  },
  { 
    name: "IIT KGP", 
    src: "https://th.bing.com/th/id/OIP.OLNhwq1r-Rq6njDFrfNmVAHaIS?w=768&h=860&rs=1&pid=ImgDetMain",
    color: "from-emerald-500/20 to-sky-600/20"
  },
  { 
    name: "SRCC", 
    src: "https://www.univariety.com/uploads/university/images/logo/56052dd0_logo.jpg",
    color: "from-sky-500/20 to-sky-600/20"
  },
  { 
    name: "Hindu CollegeS", 
    src: "https://www.pngkit.com/png/full/247-2476940_hindu-college-delhi-university-logo.png",
    color: "from-violet-500/20 to-violet-600/20"
  }
];

export function LogoMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full bg-gray-800 py-8 md:py-24 overflow-hidden">
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      
      {/* Header section */}
      <div className="relative z-15 mb-8 md:mb-16 flex flex-col items-center px-4">
        <span className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
          Our Community members are from
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-white">
          Community Network
        </h2>
        <div className="mt-4 md:mt-6 w-16 md:w-24 h-1 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full" />
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-12 md:w-20 h-full bg-gradient-to-r from-gray-800 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-12 md:w-20 h-full bg-gradient-to-l from-gray-800 to-transparent z-10" />
        
        <div 
          className="flex overflow-x-hidden touch-pan-y"
          onMouseEnter={() => !isMobile && setIsPaused(true)}
          onMouseLeave={() => !isMobile && setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className={`flex ${isPaused ? 'pause-animation' : 'animate-marquee'}`}
              style={{
                animationDuration: '25s',
                animationTimingFunction: 'linear',
                animationDelay: groupIndex * -12.5 + 's'
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div 
                  key={`${groupIndex}-${index}`} 
                  className="relative mx-3 md:mx-8"
                >
                  <div className="
                    w-24 h-24 md:w-44 md:h-44 
                    relative group 
                    rounded-3xl 
                    overflow-hidden 
                    transition-all duration-500 
                    hover:scale-105 
                    active:scale-95
                    transform-gpu
                    after:z-10 after:content-[''] 
                    after:absolute after:inset-0 
                    after:outline-2 after:outline 
                    after:-outline-offset-2 
                    after:rounded-3xl 
                    after:outline-white/20
                  ">
                    {/* Background */}
                    <div className={`
                      absolute inset-0 
                      bg-gray-800
                      backdrop-blur-xl 
                      border border-white/10 
                      group-hover:border-white/20 
                      transition-all duration-500
                    `} />
                    
                    {/* Logo Container */}
                    <div className="
                      relative 
                      w-full h-full 
                      p-3 md:p-8 
                      flex items-center justify-center
                    ">
                      <div className="
                        w-full h-full 
                        rounded-lg 
                        flex items-center justify-center 
                        bg-white/5 
                        group-hover:bg-white/10 
                        transition-all duration-300 
                        p-2 md:p-4
                      ">
                        <img
                          src={logo.src}
                          alt={logo.name}
                          className="
                            w-full h-full 
                            object-contain 
                            opacity-90 
                            group-hover:opacity-100 
                            transition-all duration-300 
                            filter contrast-125
                          "
                        />
                      </div>
                    </div>

                    {/* Hover/Touch Overlay */}
                    <div className="
                      absolute inset-0 
                      flex items-center justify-center 
                      bg-black/40 
                      opacity-0 group-hover:opacity-100 
                      transition-all duration-300
                    ">
                      <div className="
                        px-2 md:px-4 
                        py-1 md:py-2 
                        bg-black/60 
                        backdrop-blur-sm 
                        rounded-full 
                        transform 
                        scale-90 group-hover:scale-100 
                        transition-all duration-300
                      ">
                        <span className="text-white text-xs md:text-base font-medium whitespace-nowrap">
                          {logo.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
          min-width: max-content;
          will-change: transform;
        }
        .pause-animation {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-timing-function: linear;
          }
        }
      `}</style>
    </div>
  );
}