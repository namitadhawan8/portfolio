"use client";

import { useEffect, useRef } from "react";
import lottie, { type AnimationItem } from "lottie-web";

export function CareerTrajectory() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animation: AnimationItem | undefined;
    let cancelled = false;

    const loadAnimation = async () => {
      try {
        const response = await fetch("/experience%20animation.json");
        if (!response.ok) throw new Error("Failed to load animation json");
        const data = await response.json();
        if (cancelled || !containerRef.current) return;

        animation = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: data,
        });
      } catch (error) {
        console.error("CareerTrajectory animation load error", error);
      }
    };

    loadAnimation();

    return () => {
      cancelled = true;
      animation?.destroy();
    };
  }, []);

  return (
    <div className="relative w-full aspect-[2400/1893] overflow-hidden rounded-3xl border border-zinc-300 bg-white dark:bg-black dark:border-zinc-700 transition-colors">
      <div ref={containerRef} className="absolute inset-0" aria-hidden />
      <div className="sr-only">Animated career trajectory illustration</div>
    </div>
  );
}

