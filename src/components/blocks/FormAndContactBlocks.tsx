import React from "react";
import Link from "next/link";
import {
  ContactInfoBlock as ContactInfoType,
  BusinessHoursBlock as BusinessHoursType,
  ContactFormBlock as ContactFormType,
  QuoteFormBlock as QuoteFormType,
  CallToActionBlock as CallToActionType,
  FinalConversionBlock as FinalConversionType,
  AppointmentSchedulerBlock as AppointmentSchedulerType,
} from "@/lib/types";
import { businessConfig } from "@/lib/business";
import { ContactForm } from "@/components/forms/ContactForm";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { AppointmentScheduler } from "@/components/forms/AppointmentScheduler";
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export function ContactInfoBlock({ block }: { block: ContactInfoType }) {
  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-secondary)] py-12 sm:py-16">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3">
            <div className="flex items-center gap-2 text-[var(--text-primary)] font-mono font-bold text-sm">
              <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
              <span>Office Address</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed font-mono">
              {businessConfig.address.street}
              <br />
              {businessConfig.address.city}, {businessConfig.address.province} {businessConfig.address.postalCode}
              <br />
              {businessConfig.address.country}
            </p>
            {block.showAppointmentNotice && (
              <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-primary)] font-semibold">
                * {businessConfig.appointmentNotice}
              </div>
            )}
          </div>

          {/* Direct Communication */}
          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3">
            <div className="flex items-center gap-2 text-[var(--text-primary)] font-mono font-bold text-sm">
              <Phone className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
              <span>Direct Phone</span>
            </div>
            <p className="text-sm font-mono font-bold text-[var(--text-primary)]">
              <a href={businessConfig.phoneLink} className="hover:underline">
                {businessConfig.phone}
              </a>
            </p>
            <div className="pt-2 border-t border-[var(--border-subtle)] space-y-1">
              <div className="text-[11px] font-mono text-[var(--text-muted)]">Direct Email:</div>
              <a
                href={businessConfig.emailLink}
                className="text-xs font-mono font-bold text-[var(--text-primary)] hover:underline block"
              >
                {businessConfig.email}
              </a>
            </div>
          </div>

          {/* Regional Market */}
          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3">
            <div className="flex items-center gap-2 text-[var(--text-primary)] font-mono font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
              <span>Service Area</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed font-mono">
              Primary: <strong className="text-[var(--text-primary)]">{businessConfig.primaryMarket}</strong>
              <br />
              Wider: {businessConfig.widerMarket}
            </p>
            <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
              Trade name of {businessConfig.legalEntity}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BusinessHoursBlock({ block }: { block: BusinessHoursType }) {
  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
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

        {/* Appointment Notice Callout */}
        <div className="p-4 border-l-4 border-[var(--accent)] bg-[var(--bg-secondary)] text-xs font-mono text-[var(--text-primary)] font-bold">
          {businessConfig.appointmentNotice}
        </div>

        <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="p-4 bg-[var(--bg-primary)] border-b border-[var(--border-color)] flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Day of Week
            </span>
            <span>Appointment Window ({businessConfig.appointmentHoursTimezone})</span>
          </div>

          <div className="divide-y divide-[var(--border-subtle)] font-mono text-xs">
            {businessConfig.appointmentHours.map((schedule, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:px-6 flex items-center justify-between hover:bg-[var(--bg-primary)]/50 transition-colors"
              >
                <span className="font-bold text-[var(--text-primary)]">{schedule.day}</span>
                <span
                  className={schedule.closed ? "text-red-500 font-semibold" : "text-[var(--text-muted)]"}
                >
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactFormBlock({ block }: { block: ContactFormType }) {
  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          {block.eyebrow && (
            <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">
              {block.eyebrow}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            {block.heading}
          </h2>
          <p className="text-base text-[var(--text-muted)] mt-2">{block.description}</p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export function QuoteFormBlock({ block }: { block: QuoteFormType }) {
  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          {block.eyebrow && (
            <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">
              {block.eyebrow}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            {block.heading}
          </h2>
          <p className="text-base text-[var(--text-muted)] mt-2">{block.description}</p>
        </div>

        <QuoteForm defaultService={block.defaultService} />
      </div>
    </section>
  );
}

export function CallToActionBlock({ block }: { block: CallToActionType }) {
  const isDark = block.boxStyle === "monochrome-dark";

  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 sm:p-12 border ${
            isDark
              ? "bg-[#111111] text-white border-[#2B2B2B]"
              : "bg-[var(--bg-secondary)] text-[var(--text-primary)] border-[var(--border-color)]"
          } space-y-6`}
        >
          {block.eyebrow && (
            <div
              className={`font-mono text-xs uppercase tracking-wider ${
                isDark ? "text-neutral-400" : "text-[var(--text-muted)]"
              }`}
            >
              {block.eyebrow}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
            {block.heading}
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
              isDark ? "text-neutral-300" : "text-[var(--text-muted)]"
            }`}
          >
            {block.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href={block.primaryAction.href}
              className={`inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider ${
                isDark
                  ? "bg-white text-black hover:bg-neutral-200"
                  : "bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90"
              }`}
            >
              <span>{block.primaryAction.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {block.secondaryAction && (
              <Link
                href={block.secondaryAction.href}
                className={`inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider border ${
                  isDark
                    ? "border-neutral-700 text-white hover:bg-neutral-900"
                    : "border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-primary)]"
                }`}
              >
                <span>{block.secondaryAction.label}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalConversionBlock({ block }: { block: FinalConversionType }) {
  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-secondary)] py-16 sm:py-20 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {block.eyebrow && (
          <div className="inline-block px-3 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
            {block.eyebrow}
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
          {block.heading}
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
          {block.description}
        </p>

        <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
          <Link
            href={block.primaryAction.href}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold uppercase tracking-wider border border-[var(--accent)] hover:opacity-90"
          >
            <span>{block.primaryAction.label}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {block.secondaryAction && (
            <Link
              href={block.secondaryAction.href}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--bg-primary)] text-[var(--text-primary)] font-mono text-xs font-bold uppercase tracking-wider border border-[var(--border-color)] hover:bg-[var(--bg-secondary)]"
            >
              <span>{block.secondaryAction.label}</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function AppointmentSchedulerBlock({ block }: { block: AppointmentSchedulerType }) {
  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
            <p className="text-base text-[var(--text-muted)] mt-2">{block.description}</p>
          )}
        </div>

        <AppointmentScheduler />
      </div>
    </section>
  );
}
