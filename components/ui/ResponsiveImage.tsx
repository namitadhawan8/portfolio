"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getMobileImagePath } from "@/lib/imageUtils";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
};

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes,
  objectFit = "cover",
}: ResponsiveImageProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Use mobile image on mobile devices, desktop image otherwise
  const imageSrc = mounted && isMobile ? getMobileImagePath(src) : src;
  const objectFitClass = objectFit === "cover" ? "object-cover" : 
                         objectFit === "contain" ? "object-contain" : 
                         objectFit === "fill" ? "object-fill" : 
                         objectFit === "none" ? "object-none" : 
                         "object-scale-down";

  if (fill) {
    return (
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className={`${className} ${objectFitClass}`}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${objectFitClass}`}
      priority={priority}
      sizes={sizes}
    />
  );
}

