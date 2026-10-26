"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export function ContactForm({ submitEndpoint = "/api/contact" }: { submitEndpoint?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacy: false,
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        setServerMessage(data.message || "Failed to submit form. Please check your inputs.");
      } else {
        setStatus("success");
        setServerMessage(data.message);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          privacy: false,
          honeypot: "",
        });
      }
    } catch {
      setStatus("error");
      setServerMessage("A network connection error occurred. Please check your internet connection and retry.");
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
          <h3 className="text-lg font-bold font-mono uppercase tracking-tight">Message Received</h3>
        </div>
        <p className="text-sm text-[var(--text-primary)] leading-relaxed">{serverMessage}</p>
        <p className="text-xs text-[var(--text-muted)] font-mono">
          We will review your inquiry and respond to your email. For urgent matters, you may call us directly at{" "}
          <a href="tel:+19026299691" className="underline font-bold text-[var(--text-primary)]">
            902-629-9691
          </a>
          .
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="px-4 py-2 border border-[var(--border-color)] bg-[var(--bg-primary)] font-mono text-xs uppercase font-bold hover:bg-[var(--bg-secondary)]"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
      {/* Hidden spam bot trap */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_hp">Do not fill this field</label>
        <input
          type="text"
          id="website_hp"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border ${
              errors.name ? "border-red-500" : "border-[var(--border-color)]"
            } focus:border-[var(--accent)] text-[var(--text-primary)] transition-colors`}
            placeholder="Jane Doe"
          />
          {errors.name && (
            <p id="contact-name-error" className="text-xs text-red-500 font-mono">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border ${
              errors.email ? "border-red-500" : "border-[var(--border-color)]"
            } focus:border-[var(--accent)] text-[var(--text-primary)] transition-colors`}
            placeholder="jane@example.com"
          />
          {errors.email && (
            <p id="contact-email-error" className="text-xs text-red-500 font-mono">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label htmlFor="contact-subject" className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          className={`w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border ${
            errors.subject ? "border-red-500" : "border-[var(--border-color)]"
          } focus:border-[var(--accent)] text-[var(--text-primary)] transition-colors`}
          placeholder="Website question, consultation inquiry, or hosting advice"
        />
        {errors.subject && (
          <p id="contact-subject-error" className="text-xs text-red-500 font-mono">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border ${
            errors.message ? "border-red-500" : "border-[var(--border-color)]"
          } focus:border-[var(--accent)] text-[var(--text-primary)] transition-colors`}
          placeholder="Please describe how we can assist you..."
        />
        {errors.message && (
          <p id="contact-message-error" className="text-xs text-red-500 font-mono">
            {errors.message}
          </p>
        )}
      </div>

      {/* Privacy Acknowledgement */}
      <div className="space-y-1.5">
        <label className="flex items-start gap-2.5 text-xs text-[var(--text-muted)] cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            required
            aria-describedby={errors.privacy ? "contact-privacy-error" : undefined}
            className="mt-0.5 rounded-none border border-[var(--border-color)] text-[var(--accent)] focus:ring-0"
          />
          <span>
            I acknowledge that my inquiry details will be processed securely in accordance with the{" "}
            <Link href="/privacy" className="underline text-[var(--text-primary)] font-semibold">
              Privacy Policy
            </Link>
            . Details will never be shared publicly or sold.
          </span>
        </label>
        {errors.privacy && (
          <p id="contact-privacy-error" className="text-xs text-red-500 font-mono">
            {errors.privacy}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold uppercase tracking-wider border border-[var(--accent)] hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" aria-hidden="true" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
