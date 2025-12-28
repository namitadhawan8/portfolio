"use client";

import { useState } from "react";
import Image from "next/image";
import type { AboutSection as AboutSectionType } from "@/lib/aboutData";

type AboutSectionProps = {
  section: AboutSectionType;
  index: number;
  isLast?: boolean;
};

export function AboutSection({ section, index, isLast = false }: AboutSectionProps) {
  const isImageLeft = index % 2 === 0;
  // About and Interests sections will have collages - use 2 column layout
  const needsImageColumn = section.id === "about" || section.id === "interests";
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  // Collage configs with individual SVGs - natural collage composition with overlapping
  const collageConfig: Record<
    string,
    {
      aspectClass: string;
      items: { 
        src: string; 
        alt: string; 
        position: string; 
        rotation: string; 
        size: string;
        zIndex: string;
      }[];
    }
  > = {
    about: {
      aspectClass: "aspect-[3/4] sm:aspect-[4/3] lg:aspect-[4/3]",
      items: [
        { 
          src: "/architecture.svg", 
          alt: "Architecture", 
          position: "top-[4%] left-[4%] lg:top-[4%] lg:left-[4%]", 
          rotation: "-rotate-3", 
          size: "w-44 sm:w-60 md:w-72 lg:w-72",
          zIndex: "z-1"
        },
        { 
          src: "/journalism.svg", 
          alt: "Architecture journalism", 
          position: "top-[20%] right-[4%] lg:top-[20%] lg:right-[4%]", 
          rotation: "rotate-4", 
          size: "w-44 sm:w-60 md:w-72 lg:w-72",
          zIndex: "z-2"
        },
        { 
          src: "/product design.svg", 
          alt: "Product design", 
          position: "top-[48%] left-[4%] lg:top-[48%] lg:left-[4%]", 
          rotation: "-rotate-2", 
          size: "w-48 sm:w-64 md:w-80 lg:w-80",
          zIndex: "z-3"
        },
        { 
          src: "/product management.svg", 
          alt: "Product management", 
          position: "top-[64%] right-[4%] lg:top-[64%] lg:right-[4%]", 
          rotation: "rotate-3", 
          size: "w-48 sm:w-64 md:w-80 lg:w-80",
          zIndex: "z-4"
        },
      ],
    },
    interests: {
      aspectClass: "aspect-[3/4] sm:aspect-[4/3] lg:aspect-[4/3]",
      items: [
        { 
          src: "/gym.svg", 
          alt: "Gym", 
          position: "top-[4%] left-[4%] lg:top-[2%] lg:left-[2%]", 
          rotation: "-rotate-4", 
          size: "w-44 sm:w-60 md:w-72 lg:w-72",
          zIndex: "z-1"
        },
        { 
          src: "/books.svg", 
          alt: "Books", 
          position: "top-[20%] right-[4%] lg:top-[15%] lg:right-[2%]", 
          rotation: "rotate-3", 
          size: "w-44 sm:w-60 md:w-72 lg:w-72",
          zIndex: "z-2"
        },
        { 
          src: "/art.svg", 
          alt: "Art", 
          position: "top-[48%] left-[4%] lg:top-[45%] lg:left-[2%]", 
          rotation: "-rotate-2", 
          size: "w-48 sm:w-64 md:w-80 lg:w-80",
          zIndex: "z-3"
        },
        { 
          src: "/podcast.svg", 
          alt: "Podcasts", 
          position: "top-[64%] right-[4%] lg:top-[58%] lg:right-[2%]", 
          rotation: "rotate-4", 
          size: "w-48 sm:w-64 md:w-80 lg:w-80",
          zIndex: "z-4"
        },
      ],
    },
  };

  const collage = collageConfig[section.id];

  const handleImageClick = (idx: number) => {
    setFocusedIndex(focusedIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-20">
        <div
          className={`grid gap-12 ${needsImageColumn ? "lg:grid-cols-2" : "lg:grid-cols-1"} lg:items-stretch lg:gap-16 ${
            !isImageLeft && needsImageColumn ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Image/Illustration Column */}
          {needsImageColumn && collage && (
            <div
              className={`relative rounded-3xl bg-white dark:bg-[#0a0a0a] ${
                collage.aspectClass
              } lg:aspect-auto lg:h-full ${
                !isImageLeft ? "lg:col-start-2" : ""
              } overflow-hidden p-4 sm:p-10 lg:p-10 lg:pb-12`}
            >
              <div className="relative h-full w-full">
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(183,107,252,0.35) 0%, rgba(183,107,252,0.22) 36%, rgba(183,107,252,0.06) 65%, rgba(183,107,252,0) 82%)",
                  }}
                />
                {collage.items.map((item, idx) => (
                  <div
                    key={item.alt + idx}
                    onClick={() => handleImageClick(idx)}
                    className={`absolute ${item.position} ${item.rotation} ${item.size} ${item.zIndex} cursor-pointer touch-manipulation transition-all duration-300 ease-out origin-center ${
                      focusedIndex === idx
                        ? "scale-[1.4] sm:scale-[1.3] md:scale-[1.25] z-50"
                        : focusedIndex !== null
                        ? "scale-90 opacity-40 z-10"
                        : "hover:scale-[1.15] z-10"
                    }`}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={260}
                        height={260}
                        className="h-full w-full object-contain drop-shadow-lg"
                        priority={index === 0 && idx === 0}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content - Full width if no image column, otherwise half */}
          <div className={`space-y-6 ${!isImageLeft && needsImageColumn ? "lg:col-start-1" : ""} ${!needsImageColumn ? "max-w-4xl" : ""}`}>
            <h2 className="text-3xl font-black uppercase tracking-[0.3em] text-zinc-900 dark:text-zinc-100 md:text-4xl">
              {section.title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {section.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            {section.quote && (
              <blockquote className="border-l-4 border-[#B76BFC] dark:border-[#B76BFC] pl-6 text-lg italic leading-relaxed text-zinc-700 dark:text-zinc-300">
                {section.quote}
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

