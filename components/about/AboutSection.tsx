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

  return (
    <section className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div
          className={`grid gap-12 ${needsImageColumn ? "lg:grid-cols-2" : "lg:grid-cols-1"} lg:items-center lg:gap-16 ${
            !isImageLeft && needsImageColumn ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Image/Illustration Column - Reserved for collages you'll add */}
          {needsImageColumn && (
            <div
              className={`relative min-h-[400px] overflow-hidden rounded-3xl border border-zinc-300 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-900 ${
                !isImageLeft ? "lg:col-start-2" : ""
              }`}
            >
              {/* You'll add your collage here */}
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

