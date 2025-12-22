import Image from "next/image";
import Link from "next/link";

import { projects } from "@/lib/homeData";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="flex flex-col gap-6 sm:gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block"
            >
              <article
                className={cn(
                  "grid w-full grid-cols-1 gap-6 sm:gap-8 overflow-hidden rounded-3xl border border-zinc-300 dark:border-zinc-400 bg-white dark:bg-zinc-900 p-4 sm:p-6 lg:grid-cols-[1fr,1.2fr] lg:gap-12 lg:p-8 shadow-lg transition-all hover:border-[#B76BFC] hover:shadow-xl",
                )}
              >
                {/* Left Side - Image */}
                <div className="relative h-40 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 sm:h-56 md:h-72 lg:h-72">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                  {/* Purple View CTA on hover */}
                  <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="rounded-full border-2 border-[#B76BFC] bg-[#B76BFC] px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
                      View
                    </span>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex flex-col justify-center space-y-4 lg:space-y-6">
                  <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-3xl lg:text-4xl">
                    {project.title}
                  </h1>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
                    {project.category}
                  </p>
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B76BFC] px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-900 transition-colors group-hover:border-[#B76BFC] group-hover:bg-[#B76BFC]/10 group-hover:text-[#B76BFC] dark:border-[#B76BFC] dark:text-zinc-100">
                    View Case Study
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}



