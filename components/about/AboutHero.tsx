"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function AboutHero() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const root = document.documentElement;
      setIsDark(root.classList.contains("dark"));
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end">
          <div className="flex-1 space-y-6">
            <div className="max-w-lg overflow-hidden">
              <h1 className="animate-slide-up text-5xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl lg:text-7xl">
                ABOUT
              </h1>
            </div>
            <p className="text-lg font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-xl">
              Learn more about my journey, interests, and what drives me in product management and design.
            </p>
          </div>

          <div className="flex-1 overflow-hidden rounded-3xl bg-white dark:bg-[#0a0a0a] max-w-md">
            <div className="relative flex h-full min-h-[400px] items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#B76BFC33_0%,#B76BFC1f_38%,#B76BFC0d_60%,transparent_82%)]" />
              <Image
                src={isDark ? "/nd logo dark.png" : "/nd logo light.png"}
                alt="Namita Dhawan logo"
                width={480}
                height={480}
                priority
                className="relative z-[1] h-56 w-56 sm:h-64 sm:w-64 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

