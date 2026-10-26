"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type ThemeMode = "auto" | "light" | "dark";

interface ThemeContextType {
  theme: ThemeMode;
  resolvedTheme: "light" | "dark";
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "auto",
  resolvedTheme: "light",
  setTheme: () => {},
});

function getThemeSnapshot(): ThemeMode {
  if (typeof window === "undefined") return "auto";
  try {
    const saved = localStorage.getItem("ywp_theme") as ThemeMode | null;
    if (saved === "light" || saved === "dark" || saved === "auto") return saved;
  } catch {
    // LocalStorage access not allowed
  }
  return "auto";
}

function getThemeServerSnapshot(): ThemeMode {
  return "auto";
}

function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);

  const setTheme = (mode: ThemeMode) => {
    try {
      localStorage.setItem("ywp_theme", mode);
      window.dispatchEvent(new Event("storage"));
    } catch {
      // Storage access disabled
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function applyDOMTheme() {
      const active = theme === "auto" ? (mediaQuery.matches ? "dark" : "light") : theme;
      if (active === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    applyDOMTheme();
    mediaQuery.addEventListener("change", applyDOMTheme);
    return () => mediaQuery.removeEventListener("change", applyDOMTheme);
  }, [theme]);

  const resolvedTheme: "light" | "dark" =
    typeof window !== "undefined"
      ? theme === "auto"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme
      : "light";

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
