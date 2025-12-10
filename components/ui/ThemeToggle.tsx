"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Sync with what's already set by the blocking script
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    const savedTheme = (localStorage.getItem("theme") || "light") as "light" | "dark";
    
    console.log("🔍 ThemeToggle mounted - isDark:", isDark, "savedTheme:", savedTheme);
    
    // On mount: Add theme classes ONLY to accent elements, not cards
    if (!isDark) {
      setTimeout(() => {
        const accentSelectors = [
          '.floating-banner',
          '[data-primary-accent]',
          '.custom-cursor',
        ];
        
        accentSelectors.forEach(selector => {
          try {
            document.querySelectorAll(selector).forEach((el) => {
              if (el instanceof HTMLElement && 
                  !el.closest('[class*="bg-zinc-50"]') &&
                  !el.closest('[class*="rounded-3xl"]')) {
                el.classList.add('force-pink-theme');
              }
            });
          } catch (e) {}
        });
      }, 100);
    }
    
    setTheme(isDark ? "dark" : "light");
    setMounted(true);
  }, []);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const root = document.documentElement;
    const isCurrentlyDark = root.classList.contains("dark");
    const newTheme = isCurrentlyDark ? "light" : "dark";
    
    console.log("🔄 TOGGLE CLICKED!");
    console.log("Current state - Has dark class:", isCurrentlyDark);
    console.log("Switching to:", newTheme);
    
    // FORCE remove dark class first
    root.classList.remove("dark");
    
    // Then add it only if switching to dark
    if (newTheme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      root.style.setProperty("--background", "#0a0a0a", "important");
      root.style.setProperty("--foreground", "#ededed", "important");
      root.style.setProperty("--primary", "#B76BFC", "important");
      document.body.style.backgroundColor = "#0a0a0a";
      document.body.style.color = "#ededed";
    } else {
      // FORCE light mode - ensure dark is removed
      root.classList.remove("dark");
      root.style.colorScheme = "light";
      root.style.setProperty("--background", "#ffffff", "important");
      root.style.setProperty("--foreground", "#111111", "important");
      root.style.setProperty("--primary", "#B76BFC", "important");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#111111";
      
      // After hydration: Add theme classes ONLY to accent elements (FAB, cursor, marquee, buttons)
      // DO NOT affect cards, form fields, or other elements
      setTimeout(() => {
        // Only target specific accent elements, not cards
        const accentSelectors = [
          '.floating-banner',
          '[data-primary-accent]',
          '.custom-cursor',
          '[class*="bg-\\[#B76BFC\\]"]',
          '[class*="bg-\\[#B76BFC\\]"]',
        ];
        
        accentSelectors.forEach(selector => {
          try {
            document.querySelectorAll(selector).forEach((el) => {
              if (el instanceof HTMLElement && 
                  el.tagName !== 'INPUT' && 
                  el.tagName !== 'TEXTAREA' && 
                  el.tagName !== 'SELECT' &&
                  !el.closest('form') &&
                  !el.closest('[class*="bg-zinc-50"]') && // Don't affect cards
                  !el.closest('[class*="rounded-3xl"]')) { // Don't affect cards
                if (newTheme === "light") {
                  el.classList.add('force-pink-theme');
                  el.classList.remove('force-purple-theme');
                } else {
                  el.classList.add('force-purple-theme');
                  el.classList.remove('force-pink-theme');
                }
              }
            });
          } catch (e) {
            // Skip invalid selectors
          }
        });
      }, 100);
      
      void root.offsetHeight;
    }
    
    // Update state and storage FIRST
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    root.setAttribute("data-theme", newTheme);
    
    console.log("✅ After toggle - Has dark class:", root.classList.contains("dark"));
    console.log("✅ localStorage theme:", localStorage.getItem("theme"));
    console.log("✅ data-theme attribute:", root.getAttribute("data-theme"));
    
    // Force reflow
    void root.offsetHeight;
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-900/10 bg-white transition hover:border-[#B76BFC] dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-[#B76BFC] cursor-pointer z-50 relative"
      aria-label={mounted ? (theme === "light" ? "Switch to dark mode" : "Switch to light mode") : "Toggle theme"}
      style={{ pointerEvents: 'auto', cursor: 'pointer' }}
    >
      {!mounted || theme === "light" ? (
        // Sun icon for light mode
        <svg
          className="h-5 w-5 text-zinc-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          className="h-5 w-5 text-zinc-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
