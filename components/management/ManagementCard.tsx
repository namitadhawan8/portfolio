import Link from "next/link";

import type { ManagementCase } from "@/lib/managementData";
import { cn } from "@/lib/utils";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

type ManagementCardProps = {
  managementCase: ManagementCase;
  index: number;
};

export function ManagementCard({ managementCase, index }: ManagementCardProps) {
  const topOffset = 80 + index * 64; // staggered cascade similar to design page

  return (
    <Link
      href={`/management/${managementCase.slug}`}
      className="group block sticky"
      style={{ top: `${topOffset}px`, zIndex: index + 1 }}
    >
      <article
        className={cn(
          "grid w-full max-w-4xl mx-auto grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 p-4 shadow-lg transition-all hover:border-[#B76BFC] hover:shadow-xl sm:gap-8 sm:p-6 lg:grid-cols-[1fr,1.2fr] lg:gap-12 lg:p-8",
        )}
      >
        {/* Left Side - Image */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
          <ResponsiveImage
            src={managementCase.heroImage}
            alt={managementCase.title}
            width={800}
            height={600}
            className="w-full h-auto"
            priority={index === 0}
            objectFit="contain"
          />
          {/* Centered View CTA on hover */}
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full border-2 border-[#B76BFC] bg-[#B76BFC] px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
              View
            </span>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center space-y-4 lg:space-y-6">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-3xl lg:text-4xl">
            {managementCase.title}
          </h1>
          <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 lg:text-lg">
            {managementCase.summary}
          </p>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B76BFC] px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-900 transition-colors group-hover:border-[#B76BFC] group-hover:bg-[#B76BFC]/10 group-hover:text-[#B76BFC] dark:border-[#B76BFC] dark:text-zinc-100">
            View Case Study
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

