import Image from "next/image";

import { servicesIntro } from "@/lib/homeData";
import { CareerTrajectory } from "@/components/home/CareerTrajectory";

export function Experience() {
  const interestChips = [
    "Product Designer",
    "Product Manager",
    "UX Strategy",
    "Preventive Healthcare",
    "Lifestyle Products",
    "Design Systems",
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

            {/* Open to Roles */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  Open to Roles
                </h3>
                <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  Product Design & Product Management Roles
                </h4>
              </div>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  I'm seeking roles where I can work at the intersection of product design, strategy, and execution.
                </p>
                <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  I thrive in teams where I can translate ambiguous problems into clear product directions, design intuitive user-centred experiences, and collaborate closely with engineers and stakeholders.
                </p>
                <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  I'm particularly interested in product-based companies in the preventive healthcare and lifestyle space, where thoughtful design and strong product thinking can meaningfully improve everyday well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="flex items-center justify-center lg:items-start">
            <div className="relative w-full max-w-3xl">
              <CareerTrajectory />
            </div>
          </div>
        </div>

        {/* Interest Chips - Below both columns */}
        <div className="mt-12">
          <div className="flex flex-wrap items-center gap-3">
            {interestChips.map((chip, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

