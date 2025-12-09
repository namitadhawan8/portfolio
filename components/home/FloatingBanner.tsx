"use client";

import Link from "next/link";
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

  return (
    <Link
      href="/contact"
      className="floating-banner fixed bottom-6 right-6 z-40 hidden h-40 w-40 items-center justify-center rounded-full bg-[#EE73DE] dark:bg-[#B76BFC] shadow-lg transition hover:shadow-xl sm:flex"
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
    </Link>
  );
}



