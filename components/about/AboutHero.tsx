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
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end">
          <div className="flex-1 space-y-6">
            <div className="max-w-lg overflow-hidden">
              <h1 className="animate-slide-up text-5xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl lg:text-7xl">
                ABOUT
              </h1>
            </div>
            <p className="text-lg font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-xl">
              Everything about me, my interests, background and my journey so far in design and management.
            </p>
          </div>

          <div className="flex-1 overflow-hidden rounded-3xl bg-white dark:bg-zinc-950 max-w-md">
            <div className="relative w-full aspect-square sm:min-h-[400px] overflow-hidden bg-white dark:bg-zinc-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#B76BFC33_0%,#B76BFC1f_38%,#B76BFC0d_60%,transparent_82%)]" />
              <div className="absolute inset-0">
                <Image
                  src={isDark ? "/nd logo dark.png" : "/nd logo light.png"}
                  alt="Namita Dhawan logo"
                  fill
                  priority
                  className="object-cover sm:object-contain sm:object-bottom"
                  sizes="(max-width: 640px) 100vw, 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

