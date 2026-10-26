"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { allServicesList } from "@/lib/data/services-summary";

export function QuoteForm({
  defaultService = "website-design",
  submitEndpoint = "/api/quote",
}: {
  defaultService?: string;
  submitEndpoint?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: defaultService,
    hasWebsite: "no",
    currentUrl: "",
    goals: "",
    budget: "not-specified",
    timeline: "flexible",
    additionalDetails: "",
    privacy: false,
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setServerMessage("");

    try {
      const res = await fetch(submitEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrors(data.errors || {});
        setServerMessage(data.message || "Failed to submit quote request. Please review your details.");
      } else {
        setStatus("success");
        setServerMessage(data.message);
      }
    } catch {
      setStatus("error");
      setServerMessage("A network communication error occurred. Please check your connection and retry.");
    }
  };

  if (status === "success") {
    return (
      <div
        role="alert"
        className="p-8 border-2 border-[var(--border-color)] bg-[var(--bg-secondary)] text-left space-y-4"
      >
        <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
          <h3 className="text-xl font-bold font-mono uppercase tracking-tight">Quote Request Received</h3>
        </div>
        <p className="text-sm text-[var(--text-primary)] leading-relaxed">{serverMessage}</p>
        <div className="p-4 bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs font-mono space-y-2">
          <div className="font-bold uppercase tracking-wider text-[var(--text-primary)]">What Happens Next:</div>
          <ol className="list-decimal list-inside space-y-1 text-[var(--text-muted)]">
            <li>Our engineering team reviews your goals and technical scope.</li>
            <li>We prepare a clear, itemized proposal with deliverables and milestones.</li>
            <li>We email you the quote within one business day. No pressure, no obligations.</li>
          </ol>
        </div>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="px-4 py-2 border border-[var(--border-color)] bg-[var(--bg-primary)] font-mono text-xs uppercase font-bold hover:bg-[var(--bg-secondary)]"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="quote_hp">Leave empty</label>
        <input
          type="text"
          id="quote_hp"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && serverMessage && (
        <div role="alert" className="p-4 border border-red-500 bg-red-500/10 text-red-600 dark:text-red-400 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{serverMessage}</span>
        </div>
      )}

      {/* Contact Information Group */}
      <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1.5">
          1. Your Contact Details
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="quote-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="quote-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              aria-describedby={errors.name ? "quote-name-error" : undefined}
              className={`w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border ${
                errors.name ? "border-red-500" : "border-[var(--border-color)]"
              } text-[var(--text-primary)] focus:border-[var(--accent)]`}
              placeholder="Jane Smith"
            />
            {errors.name && <p id="quote-name-error" className="text-xs text-red-500 font-mono">{errors.name}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="quote-business" className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Business / Organization Name <span className="text-[var(--text-muted)] font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="quote-business"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              autoComplete="organization"
              className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)]"
              placeholder="Smith Island Contracting Inc."
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="quote-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="quote-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              aria-describedby={errors.email ? "quote-email-error" : undefined}
              className={`w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border ${
                errors.email ? "border-red-500" : "border-[var(--border-color)]"
              } text-[var(--text-primary)] focus:border-[var(--accent)]`}
              placeholder="jane@smithcontracting.ca"
            />
            {errors.email && <p id="quote-email-error" className="text-xs text-red-500 font-mono">{errors.email}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="quote-phone" className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Phone Number <span className="text-[var(--text-muted)] font-normal">(Optional)</span>
            </label>
            <input
              type="tel"
              id="quote-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)]"
              placeholder="902-555-0199"
            />
          </div>
        </div>
      </div>

      {/* Project Scope Group */}
      <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1.5">
          2. Project Scope &amp; Service Needs
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5 sm:col-span-2">
            <label htmlFor="quote-service" className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Primary Service Needed <span className="text-red-500">*</span>
            </label>
            <select
              id="quote-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              aria-describedby={errors.service ? "quote-service-error" : undefined}
              className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)] font-sans"
            >
              <optgroup label="Website Services">
                {allServicesList.map((svc) => (
                  <option key={svc.slug} value={svc.slug}>
                    {svc.title}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Cloud Hosting">
                <option value="shared-cloud-hosting">Shared Cloud Hosting</option>
                <option value="dedicated-vm">Dedicated Virtual Machine (VM)</option>
                <option value="hosting-migration">Hosting Migration</option>
              </optgroup>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Do you have an existing website?
            </label>
            <div className="flex items-center gap-4 pt-1 text-sm font-mono">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="hasWebsite"
                  value="yes"
                  checked={formData.hasWebsite === "yes"}
                  onChange={handleChange}
                  className="rounded-none border-[var(--border-color)]"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="hasWebsite"
                  value="no"
                  checked={formData.hasWebsite === "no"}
                  onChange={handleChange}
                  className="rounded-none border-[var(--border-color)]"
                />
                <span>No (New project)</span>
              </label>
            </div>
          </div>

          {formData.hasWebsite === "yes" && (
            <div className="space-y-1.5">
              <label htmlFor="quote-url" className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                Current Website URL
              </label>
              <input
                type="url"
                id="quote-url"
                name="currentUrl"
                value={formData.currentUrl}
                onChange={handleChange}
                placeholder="https://example.com"
                className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)]"
              />
            </div>
          )}
        </div>

        {/* Goals */}
        <div className="space-y-1.5">
          <label htmlFor="quote-goals" className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
            Project Goals &amp; What You Want to Achieve <span className="text-red-500">*</span>
          </label>
          <textarea
            id="quote-goals"
            name="goals"
            rows={4}
            value={formData.goals}
            onChange={handleChange}
            required
            aria-describedby={errors.goals ? "quote-goals-error" : undefined}
            className={`w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border ${
              errors.goals ? "border-red-500" : "border-[var(--border-color)]"
            } text-[var(--text-primary)] focus:border-[var(--accent)]`}
            placeholder="E.g., We need a clean website for our contracting business that clearly displays our trade services in PEI and lets customers request estimates easily..."
          />
          {errors.goals && <p id="quote-goals-error" className="text-xs text-red-500 font-mono">{errors.goals}</p>}
        </div>

        {/* Budget & Timing (Optional Private Budget) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="quote-budget" className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Estimated Budget Range <span className="text-[var(--text-muted)] font-normal">(Optional guidance)</span>
            </label>
            <select
              id="quote-budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)] font-sans"
            >
              <option value="not-specified">Flexible / Quote to scope</option>
              <option value="under-2500">Targeting modest scope</option>
              <option value="2500-5000">Medium business scope</option>
              <option value="5000-10000">Comprehensive custom development</option>
              <option value="over-10000">Large application or multi-phase</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="quote-timeline" className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Desired Completion Timeline
            </label>
            <select
              id="quote-timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)] font-sans"
            >
              <option value="flexible">Flexible / Planning ahead</option>
              <option value="within-1-month">Within 1 month</option>
              <option value="1-to-3-months">1 to 3 months</option>
              <option value="urgent">Urgent / Need rapid turnaround</option>
            </select>
          </div>
        </div>
      </div>

      {/* Privacy Agreement */}
      <div className="space-y-1.5">
        <label className="flex items-start gap-2.5 text-xs text-[var(--text-muted)] cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            required
            aria-describedby={errors.privacy ? "quote-privacy-error" : undefined}
            className="mt-0.5 rounded-none border border-[var(--border-color)] text-[var(--accent)] focus:ring-0"
          />
          <span>
            I acknowledge that this information is submitted privately to Your Web Page (trade name of NightTech Service Inc.) for quotation purposes only, and will never appear publicly.
          </span>
        </label>
        {errors.privacy && <p id="quote-privacy-error" className="text-xs text-red-500 font-mono">{errors.privacy}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold uppercase tracking-wider border border-[var(--accent)] hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>Submitting Quote Request...</span>
          </>
        ) : (
          <>
            <span>Submit Quote Request</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
