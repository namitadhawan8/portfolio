"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animateCursor = () => {
      setCursorPosition((prev) => {
        const dx = mousePositionRef.current.x - prev.x;
        const dy = mousePositionRef.current.y - prev.y;
        // Lag effect: move 20% of the distance each frame for playful delay
        return {
          x: prev.x + dx * 0.2,
          y: prev.y + dy * 0.2,
        };
      });
      animationFrameRef.current = requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    animationFrameRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          {/* Outer circle outline */}
          <div className="h-8 w-8 rounded-full border-2 border-[#EE73DE] dark:border-[#B76BFC]"></div>
          {/* Inner solid circle */}
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EE73DE] dark:bg-[#B76BFC]"></div>
        </div>
      </div>
    </>
  );
}

