import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { designCaseStudies } from "@/lib/designData";
import type { CaseStudy } from "@/lib/designData";
import { FigmaPrototypeEmbed } from "@/components/ui/FigmaPrototypeEmbed";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://namitadhawan.com";

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-white/80 dark:border-zinc-600 dark:bg-zinc-900/70 shadow-sm">
      <div className="aspect-[16/9] w-full bg-gradient-to-br from-zinc-100 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-800" />
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
          {label}
        </p>
      </div>
    </div>
  );
}

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return designCaseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = designCaseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return {};
  }

  return {
    alternates: {
      canonical: `${baseUrl}/design/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = designCaseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Header />
      {/* Back Button */}
      <div className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl px-4 pt-6 pb-2 sm:px-6">
          <Link
            href="/design"
            aria-label="Back to Design"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-lg font-semibold text-zinc-700 transition-all hover:border-[#B76BFC] hover:text-[#B76BFC] hover:scale-105 dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-[#B76BFC] dark:hover:text-[#B76BFC]"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
          </Link>
        </div>
      </div>
      <main>
        <CaseStudyDetail caseStudy={caseStudy} />
      </main>
      <Footer />
    </div>
  );
}

type CaseStudyDetailProps = {
  caseStudy: CaseStudy;
};

function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <article className="bg-white dark:bg-zinc-950">
      {/* Navigation */}
      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                {caseStudy.year}
              </p>
              <h1 className="text-4xl font-black italic text-zinc-900 dark:text-zinc-100 md:text-5xl lg:text-6xl">
                {caseStudy.title}
              </h1>
              <p className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 md:text-2xl">
                {caseStudy.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["UX Design", "Product Strategy", "Research", "Information Architecture"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-700 shadow-sm transition-all hover:border-[#B76BFC]/50 hover:bg-[#B76BFC]/5 hover:text-[#B76BFC] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-[#B76BFC]/50 dark:hover:bg-[#B76BFC]/10"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 shadow-md">
            <ResponsiveImage
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              width={1600}
              height={900}
              className="h-auto w-full"
              priority
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="space-y-16">
          {/* Background */}
          {caseStudy.background && (
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-zinc-900 dark:text-zinc-100">Background</h2>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {caseStudy.background}
              </p>
              {caseStudy.previewImages && caseStudy.previewImages[0] && (
                <div className="relative overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 shadow-md">
                  <Image
                    src={caseStudy.previewImages[0]}
                    alt="Design system"
                    width={1600}
                    height={900}
                    className="h-auto w-full object-cover"
                  />
                </div>
              )}
            </div>
          )}

          {/* Problem Statement */}
          {caseStudy.problemStatement && (
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-zinc-900 dark:text-zinc-100">
                Problem Statement
              </h2>
              <blockquote className="border-l-4 border-[#B76BFC] dark:border-[#B76BFC] pl-6 text-lg italic leading-relaxed text-zinc-700 dark:text-zinc-300">
                {caseStudy.problemStatement}
              </blockquote>
            </div>
          )}

          {/* Competitive Analysis */}
          {caseStudy.slug === "event-booking-app-definition-design" && (
            <div className="relative overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 shadow-md">
              <Image
                src="/ux 01.png"
                alt="Competitive Analysis"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                unoptimized
              />
            </div>
          )}

          {/* Target Users */}
          {caseStudy.targetUsers && (
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-zinc-900 dark:text-zinc-100">
                Target Users
              </h2>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {caseStudy.targetUsers}
              </p>
            </div>
          )}

          {/* Persona and Empathy Maps */}
          {caseStudy.slug === "event-booking-app-definition-design" && (
            <div className="space-y-8">
              <div className="relative overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 shadow-md">
                <Image
                  src="/ux 03.png"
                  alt="Persona"
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover"
                  unoptimized
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 shadow-md">
                <Image
                  src="/ux 04.png"
                  alt="Empathy Maps"
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          )}

          {/* Sections */}
          {caseStudy.sections.map((section, idx) => {
            const isLastSection = idx === caseStudy.sections.length - 1;
            return (
              <div key={idx} className="space-y-4">
                <h2 className="text-3xl font-black text-zinc-900 dark:text-zinc-100">
                  {section.title}
                </h2>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {section.description}
                </p>
                {section.bullets && (
                  <ul className="space-y-3 pl-6">
                    {section.bullets.map((bullet, bulletIdx) => (
                      <li
                        key={bulletIdx}
                        className="relative text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 before:absolute before:-left-6 before:content-['→']"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {caseStudy.slug === "event-booking-app-definition-design" && section.title === "The Challenge & Opportunity" && (
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 shadow-md">
                    <Image
                      src="/ux 05.png"
                      alt="Journey Map"
                      width={1600}
                      height={900}
                      className="h-auto w-full object-cover"
                      unoptimized
                    />
                  </div>
                )}
                {caseStudy.slug === "event-booking-app-definition-design" && section.title === "Key Design Solutions" && (
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 shadow-md">
                    <Image
                      src="/ux 06.png"
                      alt="User Flow"
                      width={1600}
                      height={900}
                      className="h-auto w-full object-cover"
                      unoptimized
                    />
                  </div>
                )}
                {caseStudy.slug === "event-co-marketing-website" && section.title === "The Strategic Mandate" ? (
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 shadow-md">
                    <FigmaPrototypeEmbed url="https://www.figma.com/proto/XBAkiy6UN5MY7KmiQOd5rl/Event---Co-Website?page-id=0%3A1&node-id=2-33&p=f&viewport=551%2C594%2C0.72&t=L8zzYZAdlXJlzNu5-1&scaling=contain&content-scaling=fixed" />
                  </div>
                ) : (
                  !isLastSection && caseStudy.previewImages && caseStudy.previewImages[idx + 1] && (
                    <div className="relative overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 shadow-md">
                      <Image
                        src={caseStudy.previewImages[idx + 1]}
                        alt={section.title}
                        width={1600}
                        height={900}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  )
                )}
              </div>
            );
          })}

          {/* Outcomes */}
          {caseStudy.outcomes && caseStudy.outcomes.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-zinc-900 dark:text-zinc-100">Outcomes</h2>
              <ul className="space-y-3">
                {caseStudy.outcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#B76BFC] dark:bg-[#B76BFC]" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Takeaways */}
          {caseStudy.takeaways && caseStudy.takeaways.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-zinc-900 dark:text-zinc-100">Takeaways</h2>
              <ul className="space-y-3">
                {caseStudy.takeaways.map((takeaway, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#B76BFC] dark:bg-[#B76BFC]" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

    </article>
  );
}

