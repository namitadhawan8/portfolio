import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { designCaseStudies } from "@/lib/designData";
import type { CaseStudy } from "@/lib/designData";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return designCaseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
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
      {/* Hero Section */}
      <section className="border-b border-zinc-200 dark:border-zinc-700">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="space-y-8">
            <div className="space-y-4">
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

            <div className="grid gap-6 border-t border-zinc-200 dark:border-zinc-700 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  Project Year
                </p>
                <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {caseStudy.year}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  Timeline
                </p>
                <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {caseStudy.meta.duration}
                </p>
              </div>
              {caseStudy.meta.client && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                    Client
                  </p>
                  <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {caseStudy.meta.client}
                  </p>
                </div>
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  Team
                </p>
                <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {caseStudy.meta.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg">
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
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
            </div>
          )}

          {/* Problem Statement */}
          {caseStudy.problemStatement && (
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-zinc-900 dark:text-zinc-100">
                Problem Statement
              </h2>
              <blockquote className="border-l-4 border-[#EE73DE] dark:border-[#B76BFC] pl-6 text-lg italic leading-relaxed text-zinc-700 dark:text-zinc-300">
                {caseStudy.problemStatement}
              </blockquote>
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

          {/* Sections */}
          {caseStudy.sections.map((section, idx) => (
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
            </div>
          ))}

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
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#EE73DE] dark:bg-[#B76BFC]" />
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
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#EE73DE] dark:bg-[#B76BFC]" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <div className="flex items-center justify-between">
            <Link
              href="/design"
              className="group inline-flex items-center gap-2 text-base font-semibold uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300 transition hover:text-[#EE73DE] dark:hover:text-[#B76BFC]"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              Back to Design
            </Link>
            <Link
              href={caseStudy.behanceUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-base font-semibold uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300 transition hover:text-[#EE73DE] dark:hover:text-[#B76BFC]"
            >
              View on Behance
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

