"use client";

import React, { useState } from "react";
import {
  FaqAccordionBlock as FaqAccordionType,
  FaqListBlock as FaqListType,
  ComparisonTableBlock as ComparisonTableType,
} from "@/lib/types";
import { ChevronDown, Check, X } from "lucide-react";

export function FaqAccordionBlock({ block }: { block: FaqAccordionType }) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // Open first item by default

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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

        <div className="border border-[var(--border-color)] divide-y divide-[var(--border-color)] bg-[var(--bg-secondary)]">
          {block.items.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 font-mono text-sm font-bold text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[var(--accent)]" : "text-[var(--text-muted)]"
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] font-sans">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FaqListBlock({ block }: { block: FaqListType }) {
  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          {block.eyebrow && (
            <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">
              {block.eyebrow}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            {block.heading}
          </h2>
        </div>

        <div className="space-y-6">
          {block.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2"
            >
              <h3 className="text-base font-bold font-mono text-[var(--text-primary)]">
                {item.question}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComparisonTableBlock({ block }: { block: ComparisonTableType }) {
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

        {/* Responsive Table Container */}
        <div className="overflow-x-auto border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <table className="w-full text-left text-sm font-mono border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-[var(--border-color)] bg-[var(--bg-primary)] text-xs uppercase tracking-wider text-[var(--text-primary)]">
                {block.headers.map((header, idx) => (
                  <th
                    key={idx}
                    className={`p-4 ${idx === 0 ? "w-1/3" : "w-1/3"} font-bold border-r border-[var(--border-color)] last:border-r-0`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              {block.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-[var(--bg-primary)]/50 transition-colors">
                  <td className="p-4 font-bold text-xs uppercase text-[var(--text-primary)] border-r border-[var(--border-color)] bg-[var(--bg-secondary)]/50">
                    {row.feature}
                  </td>
                  {row.values.map((val, vIdx) => (
                    <td
                      key={vIdx}
                      className="p-4 text-xs text-[var(--text-muted)] leading-relaxed border-r border-[var(--border-color)] last:border-r-0 font-sans"
                    >
                      {typeof val === "boolean" ? (
                        val ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs">
                            <Check className="w-4 h-4" /> Yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[var(--text-muted)] font-mono text-xs">
                            <X className="w-4 h-4" /> No
                          </span>
                        )
                      ) : (
                        <span>{val}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {block.note && (
          <div className="p-4 border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-xs font-mono text-[var(--text-muted)]">
            * {block.note}
          </div>
        )}
      </div>
    </section>
  );
}
