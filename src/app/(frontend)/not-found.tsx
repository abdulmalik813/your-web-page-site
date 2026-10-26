import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="w-full min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[var(--bg-primary)]">
      <div className="max-w-xl w-full border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 sm:p-12 text-center space-y-6">
        <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold">
          404 Error • Page Not Found
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-[var(--text-primary)]">
          The requested page does not exist.
        </h1>

        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          The URL you navigated to could not be located in our published page directory. It may have moved,
          been renamed, or is temporarily unavailable.
        </p>

        <div className="pt-4 flex flex-wrap justify-center items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs uppercase font-bold tracking-wider hover:opacity-90"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-color)] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[var(--bg-secondary)]"
          >
            <Search className="w-4 h-4" />
            <span>Explore Services</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)]">
          Need immediate assistance? Call our Charlottetown office at{" "}
          <a href="tel:+19026299691" className="underline font-bold text-[var(--text-primary)]">
            902-629-9691
          </a>
          .
        </div>
      </div>
    </main>
  );
}
