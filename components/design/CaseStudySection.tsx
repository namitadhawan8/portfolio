import Image from "next/image";
import Link from "next/link";

import type { CaseStudy } from "@/lib/designData";
import { cn } from "@/lib/utils";

type CaseStudySectionProps = {
  caseStudy: CaseStudy;
  index: number;
};

export function CaseStudySection({ caseStudy, index }: CaseStudySectionProps) {
  const topOffset = 80 + index * 64; // staggered cascade for md+

  return (
    <article
      className={cn(
        "group grid w-full max-w-4xl mx-auto grid-cols-1 gap-6 sm:gap-8 overflow-hidden rounded-3xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 p-4 sm:p-6 lg:grid-cols-[1fr,1.2fr] lg:gap-12 lg:p-8 shadow-lg transition-all hover:shadow-xl sticky",
      )}
      style={{ top: `${topOffset}px`, zIndex: index + 1 }}
    >
      {/* Left Side - Image */}
      <div className="relative h-40 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 sm:h-56 md:h-72 lg:h-72">
        <Image
          src={caseStudy.heroImage}
          alt={caseStudy.title}
          width={800}
          height={600}
          className="h-full w-full object-cover"
          priority={index === 0}
        />
        {/* Purple View CTA on hover */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="rounded-full border-2 border-[#B76BFC] bg-[#B76BFC] px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
            View
          </span>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col justify-center space-y-4 lg:space-y-6">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-3xl lg:text-4xl">
          {caseStudy.title}
        </h1>
        <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 lg:text-lg">
          {caseStudy.summary}
        </p>
        <Link
          href={`/design/${caseStudy.slug}`}
          className="group inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-100 transition-colors hover:text-[#B76BFC] dark:hover:text-[#B76BFC]"
        >
          View Case Study
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
