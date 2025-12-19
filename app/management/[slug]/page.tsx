import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { managementCases } from "@/lib/managementData";
import type { ManagementCase } from "@/lib/managementData";

type ManagementCasePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return managementCases.map((managementCase) => ({
    slug: managementCase.slug,
  }));
}

export default async function ManagementCasePage({ params }: ManagementCasePageProps) {
  const { slug } = await params;
  const managementCase = managementCases.find((mc) => mc.slug === slug);

  if (!managementCase) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 dark:text-zinc-100">
      <Header />
      {/* Back Button */}
      <div className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl px-4 pt-6 pb-2 sm:px-6">
          <Link
            href="/management"
            aria-label="Back to Management"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-lg font-semibold text-zinc-700 transition-all hover:border-[#B76BFC] hover:text-[#B76BFC] hover:scale-105 dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-[#B76BFC] dark:hover:text-[#B76BFC]"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
          </Link>
        </div>
      </div>
      <main>
        <ManagementCaseDetail managementCase={managementCase} />
      </main>
      <Footer />
    </div>
  );
}

type ManagementCaseDetailProps = {
  managementCase: ManagementCase;
};

function ManagementCaseDetail({ managementCase }: ManagementCaseDetailProps) {
  // Split role into individual tags
  const roleTags = managementCase.meta.role
    ? managementCase.meta.role.split(",").map((tag) => tag.trim())
    : [];

  return (
    <article className="bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-black italic leading-tight text-zinc-900 dark:text-zinc-100 md:text-5xl lg:text-6xl">
                {managementCase.title}
              </h1>
              <p className="text-xl font-semibold leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-2xl">
                {managementCase.subtitle}
              </p>
            </div>

            {/* Client Section */}
            {managementCase.meta.client && (
              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  Client
                </p>
                <p className="text-base font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                  {managementCase.meta.client}
                </p>
              </div>
            )}

            {/* Role Tags */}
            {roleTags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-3">
                {roleTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-700 shadow-sm transition-all hover:border-[#B76BFC]/50 hover:bg-[#B76BFC]/5 hover:text-[#B76BFC] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-[#B76BFC]/50 dark:hover:bg-[#B76BFC]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 shadow-lg transition-shadow hover:shadow-xl">
            <Image
              src={managementCase.heroImage}
              alt={managementCase.title}
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="space-y-20">
          {/* Background */}
          {managementCase.background && (
            <div className="space-y-5">
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">Background</h2>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {managementCase.background}
              </p>
            </div>
          )}

          {/* Problem Statement */}
          {managementCase.problemStatement && (
            <div className="space-y-5">
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
                Problem Statement
              </h2>
              <blockquote className="border-l-4 border-[#B76BFC] dark:border-[#B76BFC] pl-6 text-lg italic leading-relaxed text-zinc-700 dark:text-zinc-300">
                {managementCase.problemStatement}
              </blockquote>
            </div>
          )}

          {/* Target Users */}
          {managementCase.targetUsers && (
            <div className="space-y-5">
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
                Target Users
              </h2>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {managementCase.targetUsers}
              </p>
            </div>
          )}

          {/* Sections */}
          {managementCase.sections.map((section, idx) => (
            <div key={idx} className="space-y-5">
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
                {section.title}
              </h2>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {section.description}
              </p>
              {section.bullets && (
                <ul className="space-y-4 pl-6">
                  {section.bullets.map((bullet, bulletIdx) => {
                    const colonIndex = bullet.indexOf(":");
                    const hasHeader = colonIndex > 0;
                    const header = hasHeader ? bullet.substring(0, colonIndex) : "";
                    const rest = hasHeader ? bullet.substring(colonIndex) : bullet;

                    return (
                      <li
                        key={bulletIdx}
                        className="relative text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 before:absolute before:-left-6 before:text-[#B76BFC] before:content-['→']"
                      >
                        {hasHeader ? (
                          <>
                            <span className="font-bold">{header}</span>
                            {rest}
                          </>
                        ) : (
                          bullet
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}

          {/* Outcomes */}
          {managementCase.outcomes && managementCase.outcomes.length > 0 && (
            <div className="space-y-5">
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">Outcomes</h2>
              <ul className="space-y-4">
                {managementCase.outcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="flex gap-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#B76BFC] dark:bg-[#B76BFC]" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Takeaways */}
          {managementCase.takeaways && managementCase.takeaways.length > 0 && (
            <div className="space-y-5">
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">Takeaways</h2>
              <ul className="space-y-4">
                {managementCase.takeaways.map((takeaway, idx) => (
                  <li
                    key={idx}
                    className="flex gap-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#B76BFC] dark:bg-[#B76BFC]" />
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

