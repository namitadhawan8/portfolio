"use client";

import Image from "next/image";
import Link from "next/link";

import { services, servicesIntro } from "@/lib/homeData";

export function Services() {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-10">
            <Image
              src={servicesIntro.badgeIcon}
              alt=""
              width={50}
              height={50}
              className="h-12 w-12"
              style={{
                filter: 'brightness(0) saturate(100%) invert(73%) sepia(64%) saturate(2878%) hue-rotate(280deg) brightness(100%) contrast(95%)'
              }}
            />
            <div className="space-y-2">
              {servicesIntro.title.map((line) => (
                <h2
                  key={line}
                  className="text-4xl font-black uppercase tracking-[0.35em] text-zinc-900 dark:text-zinc-100 md:text-5xl"
                >
                  {line}
                </h2>
              ))}
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-[#EE73DE]/20 dark:border-[#B76BFC]/20 bg-white dark:bg-zinc-900 p-5 shadow-sm">
              <Image
                src={servicesIntro.person.avatar}
                alt={servicesIntro.person.name}
                width={80}
                height={80}
                className="h-16 w-16 rounded-2xl object-cover"
              />
              <div>
                <p className="text-base font-semibold uppercase tracking-[0.4em] text-zinc-900 dark:text-zinc-100">
                  {servicesIntro.person.name}
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                  {servicesIntro.person.role}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="sticky flex flex-col gap-8 rounded-3xl border border-[#EE73DE]/30 dark:border-[#B76BFC]/30 bg-white dark:bg-zinc-900 p-12 shadow-lg transition-all hover:shadow-xl hover:border-[#EE73DE]/60 dark:hover:border-[#B76BFC]/60"
                  style={{
                    top: `${80 + index * 40}px`,
                    zIndex: index + 1,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={service.icon}
                      alt=""
                      width={50}
                      height={50}
                      className="h-12 w-12"
                      style={{
                        filter: 'brightness(0) saturate(100%) invert(73%) sepia(64%) saturate(2878%) hue-rotate(280deg) brightness(100%) contrast(95%)'
                      }}
                    />
                    <h3 className="text-xl font-semibold uppercase tracking-[0.35em] text-zinc-900 dark:text-zinc-100">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-700 dark:text-zinc-300 transition hover:text-[#EE73DE] dark:hover:text-[#B76BFC]"
                  >
                    View Work
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



