"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Laptop } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Theme mode switcher"
      className="inline-flex items-center border border-[var(--border-color)] bg-[var(--bg-secondary)] p-0.5 text-xs font-mono"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Light theme"
        className={`flex items-center gap-1 px-2 py-1 transition-colors ${
          theme === "light"
            ? "bg-[var(--accent)] text-[var(--accent-contrast)]"
            : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        }`}
      >
        <Sun className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="sr-only sm:not-sr-only">Light</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Dark theme"
        className={`flex items-center gap-1 px-2 py-1 transition-colors ${
          theme === "dark"
            ? "bg-[var(--accent)] text-[var(--accent-contrast)]"
            : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        }`}
      >
        <Moon className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="sr-only sm:not-sr-only">Dark</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme("auto")}
        aria-label="System theme"
        className={`flex items-center gap-1 px-2 py-1 transition-colors ${
          theme === "auto"
            ? "bg-[var(--accent)] text-[var(--accent-contrast)]"
            : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        }`}
      >
        <Laptop className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="sr-only sm:not-sr-only">Auto</span>
      </button>
    </div>
  );
}
