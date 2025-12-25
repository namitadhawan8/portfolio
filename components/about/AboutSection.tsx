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

  // Collage configs with individual SVGs so each item can be hovered/scaled independently
  const collageConfig: Record<
    string,
    {
      aspectClass: string;
      items: { src: string; alt: string; className: string }[];
    }
  > = {
    about: {
      aspectClass: "aspect-[2365/3234]",
      items: [
        { src: "/architecture.svg", alt: "Architecture", className: "w-42 sm:w-48 rotate-[-1deg] top-[14%] left-[26%]" },
        { src: "/journalism.svg", alt: "Architecture journalism", className: "w-42 sm:w-48 rotate-[2deg] top-[32%] left-[52%]" },
        { src: "/product design.svg", alt: "Product design", className: "w-46 sm:w-52 rotate-[-2deg] top-[52%] left-[28%]" },
        { src: "/product management.svg", alt: "Product management", className: "w-46 sm:w-52 rotate-[1deg] top-[70%] left-[54%]" },
      ],
    },
    interests: {
      aspectClass: "aspect-[2365/3212]",
      items: [
        { src: "/gym.svg", alt: "Gym", className: "w-42 sm:w-48 rotate-[-3deg] top-[14%] left-[26%]" },
        { src: "/books.svg", alt: "Books", className: "w-42 sm:w-48 rotate-[2deg] top-[32%] left-[52%]" },
        { src: "/art.svg", alt: "Art", className: "w-46 sm:w-52 rotate-[-2deg] top-[52%] left-[28%]" },
        { src: "/podcast.svg", alt: "Podcasts", className: "w-46 sm:w-52 rotate-[2deg] top-[70%] left-[54%]" },
      ],
    },
  };

  const collage = collageConfig[section.id];

  return (
    <section className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div
          className={`grid gap-12 ${needsImageColumn ? "lg:grid-cols-2" : "lg:grid-cols-1"} lg:items-center lg:gap-16 ${
            !isImageLeft && needsImageColumn ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Image/Illustration Column */}
          {needsImageColumn && collage && (
            <div
              className={`relative overflow-hidden rounded-3xl bg-white dark:bg-[#0a0a0a] ${
                collage.aspectClass
              } min-h-[320px] ${
                !isImageLeft ? "lg:col-start-2" : ""
              } p-4 sm:p-6 md:p-8`}
            >
              <div className="relative h-full w-full">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(183,107,252,0.35) 0%, rgba(183,107,252,0.22) 36%, rgba(183,107,252,0.06) 65%, rgba(183,107,252,0) 82%)",
                  }}
                />
                {collage.items.map((item, idx) => (
                  <div
                    key={item.alt + idx}
                    className={`absolute ${item.className} transition-transform duration-300 ease-out hover:scale-150`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={260}
                      height={260}
                      className="h-full w-full object-contain"
                      priority={index === 0}
                    />
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

