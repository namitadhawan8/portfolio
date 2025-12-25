"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Marquee } from "@/components/ui/Marquee";
import { heroContent, heroMarqueeItems } from "@/lib/homeData";

const floatingTags = [
  { text: "Product Management", position: "top-[12%] left-[50%] md:top-[10%] md:left-[50%]", rotate: "rotate-4", delay: 0 },
  { text: "Product Design", position: "top-[28%] left-[12%] md:top-[26%] md:left-[12%]", rotate: "-rotate-8", delay: 0.1 },
  { text: "Graphic Design", position: "top-[28%] left-[88%] md:top-[26%] md:left-[88%]", rotate: "-rotate-6", delay: 0.2 },
  { text: "UI/UX Design", position: "top-[54%] left-[88%] md:top-[52%] md:left-[88%]", rotate: "rotate-4", delay: 0.3 },
  { text: "Marketing", position: "top-[76%] left-[88%] md:top-[78%] md:left-[88%]", rotate: "-rotate-6", delay: 0.4 },
  { text: "Communication", position: "top-[76%] left-[12%] md:top-[78%] md:left-[12%]", rotate: "rotate-6", delay: 0.5 },
  { text: "Writing", position: "top-[54%] left-[12%] md:top-[52%] md:left-[12%]", rotate: "-rotate-8", delay: 0.6 },
];

export function Hero() {
  const portraitSrc = heroContent.portraitImage || heroContent.heroImage;
  const portraitAlt = heroContent.portraitImageAlt || heroContent.heroImageAlt;

  return (
    <section className="bg-white dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-12 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-center lg:text-left">
            <div className="max-w-xl overflow-hidden lg:mx-0 mx-auto">
              <h1 className="animate-slide-up text-5xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl lg:text-7xl">
                {heroContent.headline}
              </h1>
            </div>
            <p className="text-lg font-semibold uppercase tracking-[0.55em] text-zinc-500 dark:text-zinc-400">
              {heroContent.subheading}
            </p>
            <h3 className="text-xl font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-2xl">
              I lead cross-functional teams from ideation to launch, focusing on design systems, measurable growth, and exceptional user outcomes.
            </h3>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full mx-auto">
              <div className="relative aspect-[4/3] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[18/10] w-full overflow-hidden rounded-3xl bg-white dark:bg-zinc-900">
                {/* Radial gradient placed behind the portrait/image */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,#B76BFCcc_0%,#B76BFC99_38%,#B76BFC66_65%,transparent_90%)]" />
                <div className="absolute inset-0 z-[1] flex items-end justify-center">
                  <div className="scale-[0.48] sm:scale-[0.52] md:scale-[0.54] lg:scale-[0.56] origin-bottom">
                    <Image
                      src={heroContent.backgroundImage}
                      alt={heroContent.heroImageAlt}
                      width={800}
                      height={1000}
                      sizes="(min-width: 1024px) 600px, (min-width: 768px) 500px, 400px"
                      className="h-auto w-auto max-h-full rounded-3xl object-contain object-bottom origin-bottom"
                      priority
                    />
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-[8%] z-10 md:inset-[8%] lg:inset-[8%]">
                  {floatingTags.map((tag) => (
                    <motion.div
                      key={tag.text}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 ${tag.position}`}
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                        delay: tag.delay,
                      }}
                    >
                      <span
                        className={`whitespace-nowrap rounded-full border border-[#B76BFC]/30 bg-[#B76BFC]/25 px-4 py-2 text-sm font-semibold text-zinc-900 opacity-90 shadow-sm backdrop-blur-[1px] dark:border-[#B76BFC]/40 dark:bg-[#B76BFC]/30 dark:text-zinc-100 sm:px-5 sm:py-2.5 sm:text-base ${tag.rotate ?? ""}`}
                      >
                        {tag.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-y border-[#B76BFC]/20 bg-[#B76BFC] py-2 dark:border-[#B76BFC]/20 dark:bg-[#B76BFC]">
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

