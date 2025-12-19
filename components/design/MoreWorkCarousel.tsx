"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { designMoreWork } from "@/lib/designData";

export function MoreWorkCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.85;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <h2 className="mb-8 text-3xl font-black uppercase tracking-[0.3em] text-zinc-900 dark:text-zinc-100 md:text-4xl">
          MORE WORK
        </h2>

        <div className="relative flex items-center gap-4">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-lg font-semibold transition hover:border-[#B76BFC] dark:hover:border-[#B76BFC] hover:text-[#B76BFC] dark:hover:text-[#B76BFC] sm:flex"
            aria-label="Scroll left"
          >
            ←
          </button>

          {/* Carousel Container */}
          <div className="flex-1 overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-6 pr-10 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:pr-12"
            >
              {designMoreWork.map((item) => (
                <Link
                  key={item.title}
                  href={item.behanceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group more-work-card relative flex w-[340px] shrink-0 flex-col rounded-3xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 p-5 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] sm:w-[360px]"
                >
                  <div className="relative h-48 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 sm:h-56">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B76BFC] text-[11px] font-semibold uppercase tracking-[0.25em] text-white shadow">
                        ↗
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-700 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold uppercase tracking-[0.25em] text-zinc-900 dark:text-zinc-100">
                        {item.title}
                      </h3>
                      <span className="text-sm font-semibold text-[#B76BFC] dark:text-[#B76BFC]">
                        ↗
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-lg font-semibold transition hover:border-[#B76BFC] dark:hover:border-[#B76BFC] hover:text-[#B76BFC] dark:hover:text-[#B76BFC] sm:flex"
            aria-label="Scroll right"
          >
            →
          </button>

          {/* Mobile Arrows */}
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-lg font-semibold transition hover:border-[#B76BFC] dark:hover:border-[#B76BFC] hover:text-[#B76BFC] dark:hover:text-[#B76BFC]"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-lg font-semibold transition hover:border-[#B76BFC] dark:hover:border-[#B76BFC] hover:text-[#B76BFC] dark:hover:text-[#B76BFC]"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
