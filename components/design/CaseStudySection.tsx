import Image from "next/image";
import Link from "next/link";

import type { CaseStudy } from "@/lib/designData";
import { cn } from "@/lib/utils";

type CaseStudySectionProps = {
  caseStudy: CaseStudy;
  index: number;
};

export function CaseStudySection({ caseStudy, index }: CaseStudySectionProps) {
  const topOffset = 80 + index * 64; // staggered cascade similar to services

  return (
    <article
      className={cn(
        "sticky grid w-full max-w-4xl grid-cols-1 gap-8 overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6 shadow-lg transition-all hover:shadow-xl lg:grid-cols-[1fr,1.2fr] lg:gap-12 lg:p-8",
      )}
      style={{ top: `${topOffset}px`, zIndex: index + 1 }}
    >
      {/* Left Side - Image */}
      <div className="relative h-64 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 sm:h-80 lg:h-72">
        <Image
          src={caseStudy.heroImage}
          alt={caseStudy.title}
          width={800}
          height={600}
          className="h-full w-full object-cover"
          priority={index === 0}
        />
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
          className="group inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-100 transition hover:text-[#EE73DE] dark:hover:text-[#B76BFC]"
        >
          View Project
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
