"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [innerPosition, setInnerPosition] = useState({ x: 0, y: 0 });
  const [outerPosition, setOuterPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);
  const velocityRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const prevX = mousePositionRef.current.x;
      const prevY = mousePositionRef.current.y;
      
      // Calculate velocity for playful effects
      velocityRef.current = {
        x: e.clientX - prevX,
        y: e.clientY - prevY,
      };
      
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animateCursor = () => {
      // Inner circle: moves faster and leads (60% interpolation - more responsive)
      setInnerPosition((prev) => {
        const dx = mousePositionRef.current.x - prev.x;
        const dy = mousePositionRef.current.y - prev.y;
        return {
          x: prev.x + dx * 0.6,
          y: prev.y + dy * 0.6,
        };
      });

      // Outer circle: follows slower (15% interpolation - more lag)
      setOuterPosition((prev) => {
        const dx = mousePositionRef.current.x - prev.x;
        const dy = mousePositionRef.current.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });

      animationFrameRef.current = requestAnimationFrame(animateCursor);
    };

    // Initialize cursor as visible by default
    setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    animationFrameRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  // Calculate scale based on velocity for playful bounce effect
  const speed = Math.sqrt(velocityRef.current.x ** 2 + velocityRef.current.y ** 2);
  const scale = Math.min(1 + speed * 0.01, 1.3);

  return (
    <>
      {/* Outer circle - follows slower */}
      <div
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${outerPosition.x}px, ${outerPosition.y}px)`,
        }}
        data-primary-accent
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div 
            className="h-8 w-8 rounded-full border-2 border-[#B76BFC] dark:border-[#B76BFC] transition-transform duration-75 ease-out"
            style={{
              transform: `scale(${1 + (scale - 1) * 0.3})`,
            }}
          ></div>
        </div>
      </div>
      
      {/* Inner circle - leads and moves faster */}
      <div
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] transition-transform duration-50 ease-out"
        style={{
          transform: `translate(${innerPosition.x}px, ${innerPosition.y}px)`,
        }}
        data-primary-accent
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div 
            className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B76BFC] dark:bg-[#B76BFC] transition-transform duration-50 ease-out"
            style={{
              transform: `translate(-50%, -50%) scale(${scale})`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

