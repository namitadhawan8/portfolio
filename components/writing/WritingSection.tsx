import Image from "next/image";
import Link from "next/link";

import type { WritingSection as WritingSectionType } from "@/lib/writingData";

type WritingSectionProps = {
  section: WritingSectionType;
};

export function WritingSection({ section }: WritingSectionProps) {
  return (
    <section className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mb-12 space-y-4">
          <h2 className="text-3xl font-black uppercase tracking-[0.3em] text-zinc-900 dark:text-zinc-100 md:text-4xl">
            {section.title}
          </h2>
          {section.description && (
            <p className="text-lg font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-xl">
              {section.description}
            </p>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {section.articles.map((article) => (
            <Link
              key={article.id}
              href={article.articleUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 transition-all hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-xl"
            >
              {/* Preview Image */}
              <div className="relative h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-800 sm:h-72">
                <Image
                  src={article.previewImage}
                  alt={article.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-zinc-900/80 via-white/20 dark:via-zinc-900/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 md:text-2xl">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between">
                  {article.platform && (
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                      {article.platform}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B76BFC] dark:text-[#B76BFC] transition group-hover:gap-3">
                    Check Article
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

