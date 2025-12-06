import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button";
import {
  callToAction,
  footerGroups,
  secondaryCta,
} from "@/lib/homeData";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-200">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1fr,2fr]">
          <div>
            <Link href="/" aria-label="Navigate home" className="inline-flex">
              <span className="text-xl font-semibold text-white">NAMITA DHAWAN</span>
            </Link>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Pages Section */}
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-400">
                  {group.title}
                </h3>
                <nav className="space-y-3">
                  {group.links.map((link) => {
                    const isExternal = link.isExternal ?? false;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="flex items-center text-sm font-medium uppercase tracking-[0.3em] text-zinc-300 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ))}

            {/* Social & Contact Section */}
            <div className="space-y-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-400">
                Connect
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="mb-3 text-sm text-zinc-400">
                    Get in touch
                  </p>
                  <a
                    href={`mailto:${callToAction.email}`}
                    className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-300 transition hover:text-white"
                  >
                    {callToAction.email}
                  </a>
                </div>
                <div>
                  <p className="mb-3 text-sm text-zinc-400">
                    Social
                  </p>
                  <div className="flex flex-col gap-2">
                    {callToAction.socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-300 transition hover:text-white"
                      >
                        {social.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-end">
          <ButtonLink
            href={secondaryCta.href}
            variant="secondary"
            className="text-xs font-semibold uppercase tracking-[0.4em]"
          >
            {secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
}



