"use client";

import { useEffect, useState } from "react";

export function FloatingBanner() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setRotation(scrollPercentage * 360);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="floating-banner fixed bottom-6 right-6 z-40 flex h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 items-center justify-center rounded-full bg-[#B76BFC] dark:bg-[#B76BFC] shadow-lg transition hover:shadow-xl"
      aria-label="Hire Me. Connect"
      data-primary-accent
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 200 200"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <defs>
          <path
            id="top-arc"
            d="M 30, 100 A 70,70 0 0,1 170,100"
            fill="none"
          />
          <path
            id="bottom-arc"
            d="M 170, 100 A 70,70 0 0,1 30,100"
            fill="none"
          />
        </defs>
        
        {/* Top curved text - HIRE ME */}
        <text
          fill="white"
          fontSize="18"
          fontWeight="700"
          letterSpacing="0.2em"
          className="uppercase"
        >
          <textPath href="#top-arc" startOffset="25%">
            HIRE ME
          </textPath>
        </text>
        
        {/* Right separator */}
        <text
          x="170"
          y="100"
          fill="white"
          fontSize="14"
          fontWeight="700"
          textAnchor="middle"
          className="uppercase"
        >
          ×
        </text>
        
        {/* Bottom curved text - CONNECT */}
        <text
          fill="white"
          fontSize="18"
          fontWeight="700"
          letterSpacing="0.2em"
          className="uppercase"
        >
          <textPath href="#bottom-arc" startOffset="25%">
            CONNECT
          </textPath>
        </text>
        
        {/* Left separator */}
        <text
          x="30"
          y="100"
          fill="white"
          fontSize="14"
          fontWeight="700"
          textAnchor="middle"
          className="uppercase"
        >
          ×
        </text>
        
        {/* Center four-pointed star */}
        <g transform="translate(100, 100)">
          <path
            d="M 0,-18 L 5,-5 L 18,-5 L 7,0 L 18,5 L 5,5 L 0,18 L -5,5 L -18,5 L -7,0 L -18,-5 L -5,-5 Z"
            fill="white"
          />
        </g>
      </svg>
    </button>
  );
}



