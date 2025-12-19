import Image from "next/image";

import { servicesIntro } from "@/lib/homeData";

export function Experience() {
  const areasOfInterest = [
    "Health, Wellness, and Lifestyle products.",
    "Sustainable living and ethical consumption technology.",
    "The design of rituals and habit-forming products that make people's lives better.",
  ];

  return (
    <section className="bg-white dark:bg-zinc-950">
      {/* Horizontal Divider */}
      <div className="mx-auto max-w-6xl border-t border-zinc-300 dark:border-zinc-700 px-4 sm:px-6"></div>
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        {/* Heading */}
        <div className="mb-16 space-y-10">
          {/* Star icon - pink in light, purple in dark */}
          <div>
            <Image
              src={servicesIntro.badgeIcon}
              alt=""
              width={50}
              height={50}
              className="h-12 w-12 star-icon-purple"
            />
          </div>
          <h2 className="text-4xl font-black uppercase tracking-[0.35em] text-zinc-900 dark:text-zinc-100 md:text-5xl">
            Experience at a Glance
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left Column - Content */}
          <div className="space-y-12">
            {/* Paragraph 1 */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                I bring 3.5+ years of experience spanning multiple disciplines: architecture, design writing, product management, and UI/UX design. I am comfortable owning the full product lifecycle, from conducting user research and defining complex user flows to driving strategic product thinking and execution.
              </p>
            </div>

            {/* Areas of Interest */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Areas of Interest
              </h3>
              <div className="grid gap-4">
                {areasOfInterest.map((area, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 p-6 shadow-sm transition hover:shadow-md"
                  >
                    <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {area}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="flex items-center justify-center lg:items-start">
            <div className="relative w-full max-w-lg rounded-3xl border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
              {/* Video - Square aspect ratio, fills the container */}
              <div className="relative w-full aspect-square overflow-hidden">
                <video
                  src="/Scene.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  aria-label="Experience illustration video"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Open to Roles - Single line below both columns */}
        <div className="mt-12">
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            <span className="font-bold text-zinc-900 dark:text-zinc-100">Open to Roles:</span>{" "}
            I am actively seeking roles as a Product Manager, Associate Product Manager (APM), Product Operations, or Founder's Associate.
          </p>
        </div>
      </div>
    </section>
  );
}

