"use client";
import React, { useState, useEffect } from 'react';

const logos = [
  { 
    name: "Microsoft", 
    src: "https://th.bing.com/th/id/OIP.baaPUaWyzc95KKjKt-DClwHaHN?rs=1&pid=ImgDetMain",
    color: "from-blue-500/20 to-blue-600/20"
  },
  { 
    name: "Goldman Sachs", 
    src: "https://th.bing.com/th/id/OIP.RwrVEqGQ1GgKpT6UjjZQ1AHaHa?rs=1&pid=ImgDetMain",
    color: "from-blue-400/20 to-indigo-500/20"
  },
  { 
    name: "Goa University", 
    src: "https://th.bing.com/th/id/OIP.8X5qKVILdYvR_u_PBUCryQHaHo?rs=1&pid=ImgDetMain",
    color: "from-purple-500/20 to-purple-600/20"
  },
  { 
    name: "IISc", 
    src: "https://th.bing.com/th/id/OIP.OLNhwq1r-Rq6njDFrfNmVAHaIS?w=768&h=860&rs=1&pid=ImgDetMain",
    color: "from-indigo-500/20 to-indigo-600/20"
  },
  { 
    name: "IISER Pune", 
    src: "https://www.univariety.com/uploads/university/images/logo/56052dd0_logo.jpg",
    color: "from-sky-500/20 to-sky-600/20"
  },
  { 
    name: "Manipal University", 
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
    <div className="relative w-full bg-gradient-to-b from-slate-900 to-slate-950 py-8 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(49,46,129,0.15),transparent)]" />
      
      {/* Header - Responsive text sizes */}
      <div className="relative z-20 mb-8 md:mb-16 flex flex-col items-center px-4">
        <span className="text-indigo-400 text-xs md:text-base font-medium mb-2 md:mb-4 tracking-widest uppercase">
          Our Community members are from
        </span>
        <h2 className="text-2xl md:text-5xl font-bold text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          Community Network
        </h2>
        <div className="mt-4 md:mt-6 w-16 md:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 overflow-hidden">
        {/* Gradient Overlays - Adjusted for mobile */}
        <div className="absolute left-0 top-0 w-12 md:w-20 h-full bg-gradient-to-r from-slate-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-12 md:w-20 h-full bg-gradient-to-l from-slate-900 to-transparent z-10" />
        
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
                    rounded-xl md:rounded-2xl 
                    overflow-hidden 
                    transition-all duration-500 
                    hover:scale-105 
                    active:scale-95
                    transform-gpu
                  ">
                    {/* Background */}
                    <div className={`
                      absolute inset-0 
                      bg-gradient-to-br ${logo.color} 
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