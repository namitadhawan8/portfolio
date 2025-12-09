import Image from "next/image";
import type { AboutSection as AboutSectionType } from "@/lib/aboutData";

type AboutSectionProps = {
  section: AboutSectionType;
  index: number;
};

export function AboutSection({ section, index }: AboutSectionProps) {
  const isImageLeft = index % 2 === 0;

  return (
    <section className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div
          className={`grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 ${
            !isImageLeft ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Image/Illustration */}
          <div
            className={`relative h-64 overflow-hidden rounded-3xl border border-zinc-900/10 dark:border-zinc-700/50 bg-zinc-100 dark:bg-zinc-900 sm:h-80 lg:h-96 ${
              !isImageLeft ? "lg:col-start-2" : ""
            }`}
          >
            <div className="flex h-full items-center justify-center">
              <p className="text-center text-sm text-zinc-500">
                {section.illustration || "Illustration placeholder"}
                <br />
                (Add your illustration here)
              </p>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 ${!isImageLeft ? "lg:col-start-1" : ""}`}>
            <h2 className="text-3xl font-black uppercase tracking-[0.3em] text-zinc-900 dark:text-zinc-100 md:text-4xl">
              {section.title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {section.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            {section.quote && (
              <blockquote className="border-l-4 border-[#EE73DE] dark:border-[#B76BFC] pl-6 text-lg italic leading-relaxed text-zinc-700 dark:text-zinc-300">
                {section.quote}
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

