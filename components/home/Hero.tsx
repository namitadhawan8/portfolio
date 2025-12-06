"use client";

import Image from "next/image";

import { Marquee } from "@/components/ui/Marquee";
import { heroContent, heroMarqueeItems } from "@/lib/homeData";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end">
          <div className="flex-1 space-y-6">
            <div className="max-w-lg overflow-hidden">
              <h1 className="animate-slide-up text-5xl font-bold text-zinc-900 sm:text-6xl lg:text-7xl">
                {heroContent.headline}
              </h1>
            </div>
            <p className="text-lg font-semibold uppercase tracking-[0.55em] text-zinc-500">
              {heroContent.subheading}
            </p>
            <h3 className="text-xl font-medium leading-relaxed text-zinc-700 md:text-2xl">
              I lead cross-functional teams from ideation to launch, focusing on design systems, measurable growth, and exceptional user outcomes.
            </h3>
          </div>

          <div className="flex-1 overflow-hidden rounded-3xl border border-zinc-900/10 bg-zinc-100">
            <Image
              src={heroContent.heroImage}
              alt={heroContent.heroImageAlt}
              width={1280}
              height={960}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="w-full border-y border-[#EE73DE]/20 bg-[#EE73DE] py-2">
        <div className="w-full overflow-hidden">
          <Marquee
            items={heroMarqueeItems}
            separator="·"
            className="w-full"
            textClassName="text-base font-bold text-white whitespace-nowrap"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

