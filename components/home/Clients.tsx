import Image from "next/image";
import type { CSSProperties } from "react";

import { clientLogos } from "@/lib/homeData";

export function Clients() {
  return (
    <section className="border-y border-zinc-900/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-12 bg-zinc-900/60" />
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
            My Clients
          </span>
        </div>

        <div className="relative overflow-hidden">
          {[0, 1].map((index) => {
            const style = { "--marquee-duration": "30s" } as CSSProperties;
            return (
              <div
                key={index}
                className="marquee-track marquee-direction-left gap-12"
                style={style}
                aria-hidden={index === 1}
              >
              {clientLogos.map((logo, logoIndex) => (
                <Image
                  key={`${logo}-${logoIndex}-${index}`}
                  src={logo}
                  alt="Client logo"
                  width={160}
                  height={40}
                  className="h-12 w-auto object-contain"
                />
              ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

