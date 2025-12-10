"use client";

import { useState } from "react";
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
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
          "relative rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] bg-white text-zinc-900 transition-colors hover:text-[#B76BFC] dark:bg-transparent dark:text-zinc-200 dark:hover:text-[#B76BFC]",
          isActive && "text-[#B76BFC] dark:text-[#B76BFC] font-semibold"
        )}
        onClick={closeMenu}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900/10 bg-white dark:border-zinc-700/50 dark:bg-zinc-950/80">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-placeholder.svg"
            alt="Namita Dhawan logo"
            width={60}
            height={60}
            priority
            className="h-12 w-12 object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex md:flex-1 md:justify-center">
          {navigationLinks.map((item) => renderNavLink(item))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <ButtonLink
            href={secondaryCta.href}
            variant="secondary"
          >
            {secondaryCta.label}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-900/10 md:hidden"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="relative flex h-4 w-6 flex-col justify-between">
            <span
              className={cn(
                "h-0.5 w-full bg-zinc-900 dark:bg-zinc-100 transition-transform",
                isOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-zinc-900 dark:bg-zinc-100 transition-opacity",
                isOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-zinc-900 dark:bg-zinc-100 transition-transform",
                isOpen && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "md:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="border-t border-zinc-900/10 bg-white dark:border-zinc-700/50 dark:bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
                  Theme
                </span>
                <ThemeToggle />
              </div>
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
                      "rounded-full px-4 py-2 text-base font-semibold uppercase tracking-[0.35em] bg-white text-zinc-900 transition-colors hover:text-[#B76BFC] dark:bg-transparent dark:text-zinc-100 dark:hover:text-[#B76BFC]",
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

