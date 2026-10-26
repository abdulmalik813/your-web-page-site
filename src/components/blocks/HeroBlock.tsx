import React from "react";
import Link from "next/link";
import { HeroBlock as HeroBlockType } from "@/lib/types";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroBlock({ block }: { block: HeroBlockType }) {
  return (
    <section className="relative w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] overflow-hidden">
      {/* Boxy architectural grid pattern */}
      <div className="absolute inset-0 box-grid opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-4xl space-y-8">
          {/* Eyebrow / Trade Notice Badge */}
          {block.eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase">
              <span className="w-2 h-2 bg-[var(--accent)] shrink-0" aria-hidden="true" />
              <span>{block.eyebrow}</span>
            </div>
          )}

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] font-sans">
            {block.heading}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl">
            {block.description}
          </p>

          {/* Primary / Secondary CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {block.primaryAction && (
              <Link
                href={block.primaryAction.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold uppercase tracking-wider border border-[var(--accent)] hover:opacity-90 transition-opacity"
              >
                <span>{block.primaryAction.label}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            )}

            {block.secondaryAction && (
              <Link
                href={block.secondaryAction.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--bg-primary)] text-[var(--text-primary)] font-mono text-xs font-bold uppercase tracking-wider border border-[var(--border-color)] hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <span>{block.secondaryAction.label}</span>
              </Link>
            )}
          </div>

          {/* Verified Business Badges */}
          {block.badges && block.badges.length > 0 && (
            <div className="pt-6 border-t border-[var(--border-color)] flex flex-wrap gap-2 text-xs font-mono text-[var(--text-muted)]">
              {block.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[var(--bg-secondary)] border border-[var(--border-subtle)]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          )}

          {/* Quick Stats Grid */}
          {block.stats && block.stats.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {block.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-1"
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    {stat.label}
                  </div>
                  <div className="text-base font-bold font-mono text-[var(--text-primary)]">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
