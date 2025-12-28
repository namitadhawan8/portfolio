"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  mobileNavigationLinks,
  navigationLinks,
  secondaryCta,
} from "@/lib/homeData";
import { designCaseStudies } from "@/lib/designData";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const isDesignDetail = pathname?.startsWith("/design/");
  const designSlug = isDesignDetail ? pathname?.split("/")?.[2] : undefined;
  const designCase = designCaseStudies.find((cs) => cs.slug === designSlug);

  useEffect(() => {
    const checkTheme = () => {
      const root = document.documentElement;
      setIsDark(root.classList.contains("dark"));
    };

    // Check initial theme
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const renderNavLink = (item: (typeof navigationLinks)[number]) => {
    const isExternal = item.isExternal ?? false;
    const isActive = pathname === item.href || (item.href === "/" && pathname === "/");
    return (
      <Link
        key={item.label}
        href={item.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={cn(
          "relative rounded-full px-2 py-2 text-sm font-medium uppercase tracking-[0.3em] bg-white text-zinc-900 transition-colors hover:text-[#B76BFC] dark:bg-transparent dark:text-zinc-200 dark:hover:text-[#B76BFC]",
          isActive && "text-[#B76BFC] dark:text-[#B76BFC] font-semibold"
        )}
        onClick={closeMenu}
      >
        {item.label}
      </Link>
    );
  };

  const mobileCta = (
    <ButtonLink
      href={secondaryCta.href}
      variant="secondary"
      className="min-w-[160px] justify-center"
      onClick={closeMenu}
      target={secondaryCta.isExternal ? "_blank" : undefined}
      rel={secondaryCta.isExternal ? "noreferrer" : undefined}
      download
    >
      {secondaryCta.label}
    </ButtonLink>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-300 bg-white/95 backdrop-blur-sm dark:border-zinc-600 dark:bg-zinc-950/95 dark:backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4 gap-3">
        <Link href="/" className="flex items-center flex-shrink-0">
          {isDark ? (
            <Image
              src="/nd logo dark.png"
              alt="Namita Dhawan logo"
              width={64}
              height={64}
              priority
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
            />
          ) : (
            <Image
              src="/nd logo light.png"
              alt="Namita Dhawan logo"
              width={64}
              height={64}
              priority
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
            />
          )}
        </Link>

        <nav className="hidden items-center gap-2 md:flex mx-6 flex-wrap">
          {navigationLinks.map((item) => renderNavLink(item))}
        </nav>

        <div className="hidden items-center gap-2 md:flex flex-shrink-0">
          <ThemeToggle />
          <ButtonLink
            href={secondaryCta.href}
            variant="secondary"
            className="min-w-[210px] justify-center"
            target={secondaryCta.isExternal ? "_blank" : undefined}
            rel={secondaryCta.isExternal ? "noreferrer" : undefined}
            download
          >
            {secondaryCta.label}
          </ButtonLink>
          {isDesignDetail && designCase?.behanceUrl && (
            <ButtonLink
              href={designCase.behanceUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="min-w-[210px] justify-center border-zinc-300 text-zinc-900 hover:border-[#B76BFC] hover:text-white"
            >
              View on Behance
            </ButtonLink>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden flex-shrink-0">
          <ThemeToggle />
          {mobileCta}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-600"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="relative flex h-4 w-6 flex-col justify-between">
              <span
                className={cn(
                  "h-0.5 w-full bg-zinc-900 dark:bg-zinc-900 transition-transform",
                  isOpen && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-zinc-900 dark:bg-zinc-900 transition-opacity",
                  isOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-zinc-900 dark:bg-zinc-900 transition-transform",
                  isOpen && "-translate-y-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="fixed inset-x-0 top-[72px] border-t border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-950 shadow-lg">
          <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                Menu
              </span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-600"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <span className="relative flex h-4 w-6 flex-col justify-between">
                  <span className="h-0.5 w-full bg-zinc-900 dark:bg-zinc-900 rotate-45 translate-y-1" />
                  <span className="h-0.5 w-full bg-zinc-900 dark:bg-zinc-900 -rotate-45 -translate-y-1" />
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {mobileNavigationLinks.map((item) => {
                const isExternal = item.isExternal ?? false;
                const isActive = pathname === item.href || (item.href === "/" && pathname === "/");
                if (item.isButton) {
                  return (
                    <ButtonLink
                      key={item.label}
                      href={item.href}
                      variant="secondary"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </ButtonLink>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className={cn(
                      "px-1 py-2 text-base font-semibold uppercase tracking-[0.35em] text-zinc-900 transition-colors hover:text-[#B76BFC] dark:text-zinc-100 dark:hover:text-[#B76BFC]",
                      isActive && "text-[#B76BFC] dark:text-[#B76BFC] font-bold"
                    )}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

