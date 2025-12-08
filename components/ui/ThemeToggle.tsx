"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  const applyTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement;
    
    // Force remove dark class first
    root.classList.remove("dark");
    
    // Then add it only if dark mode
    if (newTheme === "dark") {
      root.classList.add("dark");
    }
    
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    // Force a reflow to ensure the change takes effect
    void root.offsetHeight;
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = saved === "dark" ? "dark" : "light";
    applyTheme(initial);
    setTheme(initial);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    // Update state immediately
    setTheme(newTheme);
    
    // Apply theme with force
    const root = document.documentElement;
    root.classList.remove("dark");
    if (newTheme === "dark") {
      root.classList.add("dark");
    }
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    // Force reflow
    void root.offsetHeight;
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-900/10 bg-white transition hover:border-[#EE73DE] dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-[#B76BFC]"
        aria-label="Toggle theme"
      >
        {/* Sun icon for default/light mode */}
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
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-900/10 bg-white transition hover:border-[#EE73DE] dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-[#B76BFC]"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        // Sun icon when in light mode
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
        // Moon icon when in dark mode
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

