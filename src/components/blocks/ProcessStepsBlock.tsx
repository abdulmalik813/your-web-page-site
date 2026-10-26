import React from "react";
import { ProcessStepsBlock as ProcessStepsType } from "@/lib/types";
import { Check } from "lucide-react";

export function ProcessStepsBlock({ block }: { block: ProcessStepsType }) {
  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          {block.eyebrow && (
            <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">
              {block.eyebrow}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            {block.heading}
          </h2>
          {block.description && (
            <p className="text-base text-[var(--text-muted)] max-w-2xl mt-2">{block.description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {block.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="font-mono text-2xl font-bold text-[var(--accent)] border-b border-[var(--border-subtle)] pb-2">
                  {step.stepNumber}
                </div>
                <h3 className="text-base font-bold font-mono text-[var(--text-primary)]">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {step.details && step.details.length > 0 && (
                <ul className="space-y-1.5 pt-3 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
                  {step.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 shrink-0 text-[var(--accent)] mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
