import React from "react";
import Link from "next/link";
import {
  PageIntroBlock as PageIntroType,
  RichTextBlock as RichTextType,
  HeadingParagraphBlock as HeadingParagraphType,
  ImageWithTextBlock as ImageWithTextType,
  BenefitsListBlock as BenefitsListType,
  TwoColumnContentBlock as TwoColumnType,
  SplitContentBlock as SplitContentType,
  CalloutBlock as CalloutType,
  DividerBlock as DividerType,
  NoticeBannerBlock as NoticeBannerType,
  EmptyStateBlock as EmptyStateType,
} from "@/lib/types";
import { ArrowRight, Check, AlertCircle, Info } from "lucide-react";

export function PageIntroBlock({ block }: { block: PageIntroType }) {
  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {block.eyebrow && (
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] font-mono text-[11px] text-[var(--text-muted)] tracking-wider uppercase">
            <span>{block.eyebrow}</span>
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] max-w-4xl">
          {block.heading}
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-3xl leading-relaxed">
          {block.lead}
        </p>

        {block.metadata && block.metadata.length > 0 && (
          <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono">
            {block.metadata.map((item, idx) => (
              <div
                key={idx}
                className="px-3 py-1.5 border border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
              >
                <span className="text-[var(--text-muted)] mr-1.5 uppercase tracking-wider">{item.label}:</span>
                <span className="font-semibold text-[var(--text-primary)]">{item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function RichTextBlock({ block }: { block: RichTextType }) {
  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {block.eyebrow && (
          <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
            {block.eyebrow}
          </div>
        )}
        {block.heading && (
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            {block.heading}
          </h2>
        )}

        <div className="space-y-4 text-base text-[var(--text-primary)] leading-relaxed">
          {block.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {block.listItems && block.listItems.length > 0 && (
          <ul className="space-y-2 border-l-2 border-[var(--accent)] pl-4 my-6 text-sm text-[var(--text-muted)]">
            {block.listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 shrink-0 text-[var(--accent)] mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {block.callout && (
          <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] text-sm font-mono text-[var(--text-primary)]">
            {block.callout}
          </div>
        )}
      </div>
    </section>
  );
}

export function HeadingParagraphBlock({ block }: { block: HeadingParagraphType }) {
  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {block.eyebrow && (
          <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
            {block.eyebrow}
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          {block.heading}
        </h2>
        <p className="text-base text-[var(--text-muted)] leading-relaxed">{block.paragraph}</p>
        {block.action && (
          <div className="pt-2">
            <Link
              href={block.action.href}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold text-[var(--accent)] hover:underline"
            >
              <span>{block.action.label}</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function TwoColumnContentBlock({ block }: { block: TwoColumnType }) {
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="p-6 sm:p-8 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-4">
            <h3 className="text-lg font-bold font-mono uppercase tracking-tight text-[var(--text-primary)]">
              {block.leftCol.heading}
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{block.leftCol.text}</p>
            {block.leftCol.points && block.leftCol.points.length > 0 && (
              <ul className="space-y-2 pt-2 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)]">
                {block.leftCol.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0 mt-1.5" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Column */}
          <div className="p-6 sm:p-8 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-4">
            <h3 className="text-lg font-bold font-mono uppercase tracking-tight text-[var(--text-primary)]">
              {block.rightCol.heading}
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{block.rightCol.text}</p>
            {block.rightCol.points && block.rightCol.points.length > 0 && (
              <ul className="space-y-2 pt-2 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)]">
                {block.rightCol.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0 mt-1.5" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SplitContentBlock({ block }: { block: SplitContentType }) {
  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            {block.eyebrow && (
              <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                {block.eyebrow}
              </div>
            )}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {block.heading}
            </h2>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">{block.description}</p>
            {block.action && (
              <div className="pt-4">
                <Link
                  href={block.action.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold uppercase tracking-wider border border-[var(--accent)] hover:opacity-90"
                >
                  <span>{block.action.label}</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-4">
            {block.checklistHeading && (
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2">
                {block.checklistHeading}
              </div>
            )}
            <ul className="space-y-3 text-sm text-[var(--text-primary)]">
              {block.checkpoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 shrink-0 text-[var(--accent)] mt-0.5" aria-hidden="true" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BenefitsListBlock({ block }: { block: BenefitsListType }) {
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
            <p className="text-base text-[var(--text-muted)] max-w-3xl mt-2">{block.description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {block.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3"
            >
              {benefit.highlight && (
                <span className="inline-block px-2 py-0.5 bg-[var(--bg-primary)] border border-[var(--border-color)] font-mono text-[10px] uppercase font-bold text-[var(--accent)]">
                  {benefit.highlight}
                </span>
              )}
              <h3 className="text-base font-bold font-mono text-[var(--text-primary)]">
                {benefit.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CalloutBlock({ block }: { block: CalloutType }) {
  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-secondary)] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            {block.eyebrow && (
              <div className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                {block.eyebrow}
              </div>
            )}
            <h3 className="text-xl font-bold font-mono tracking-tight text-[var(--text-primary)]">
              {block.title}
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{block.text}</p>
          </div>

          {block.action && (
            <Link
              href={block.action.href}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold uppercase tracking-wider border border-[var(--accent)] hover:opacity-90"
            >
              <span>{block.action.label}</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function DividerBlock({ block }: { block: DividerType }) {
  if (block.style === "labeled" && block.label) {
    return (
      <div className="w-full py-6 flex items-center gap-4 text-xs font-mono text-[var(--text-muted)] px-4">
        <div className="flex-1 border-t border-[var(--border-color)]" />
        <span className="uppercase tracking-wider">{block.label}</span>
        <div className="flex-1 border-t border-[var(--border-color)]" />
      </div>
    );
  }

  return (
    <div
      className={`w-full border-t ${
        block.style === "dashed" ? "border-dashed" : "border-solid"
      } border-[var(--border-color)] my-4`}
    />
  );
}

export function NoticeBannerBlock({ block }: { block: NoticeBannerType }) {
  return (
    <div className="w-full border-b border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-3 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[var(--text-primary)]">
          <Info className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>{block.message}</span>
        </div>
        {block.action && (
          <Link
            href={block.action.href}
            className="underline font-bold text-[var(--text-primary)] hover:opacity-80"
          >
            {block.action.label}
          </Link>
        )}
      </div>
    </div>
  );
}

export function EmptyStateBlock({ block }: { block: EmptyStateType }) {
  return (
    <div className="p-12 text-center border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-4">
      <h3 className="text-lg font-bold font-mono text-[var(--text-primary)]">{block.title}</h3>
      <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto">{block.message}</p>
      {block.action && (
        <Link
          href={block.action.href}
          className="inline-block px-4 py-2 bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs uppercase font-bold"
        >
          {block.action.label}
        </Link>
      )}
    </div>
  );
}
