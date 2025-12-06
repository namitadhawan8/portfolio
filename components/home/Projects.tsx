import Image from "next/image";
import Link from "next/link";

import { projects } from "@/lib/homeData";

export function Projects() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="space-y-4">
              <Link href={project.href} className="group block">
                <div className="relative overflow-hidden rounded-3xl border border-zinc-900/10 bg-zinc-50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-500 group-hover:bg-black/30 group-hover:opacity-100">
                    <span className="rounded-full border border-white/80 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
                      View
                    </span>
                  </div>
                </div>
              </Link>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold uppercase tracking-[0.4em] text-zinc-900">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
                  {project.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



