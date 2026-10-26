"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Video,
  Phone,
  Home,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { businessConfig } from "@/lib/business";

export function AppointmentScheduler({
  submitEndpoint = "/api/appointment",
}: {
  submitEndpoint?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    meetingType: "Video Call (Remote - Anywhere)",
    preferredDay: "Monday",
    preferredTime: "1:00 PM – 3:00 PM",
    topic: "New Website Planning & Quote",
    notes: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        setServerMessage(data.message || "Failed to submit appointment request.");
      } else {
        setStatus("success");
        setServerMessage(data.message);
      }
    } catch {
      setStatus("error");
      setServerMessage("A network communication error occurred. Please retry.");
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
          <h3 className="text-xl font-bold font-mono uppercase tracking-tight">
            Appointment Request Submitted
          </h3>
        </div>
        <p className="text-sm text-[var(--text-primary)] leading-relaxed">{serverMessage}</p>

        <div className="p-4 bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs font-mono space-y-2">
          <div className="font-bold text-[var(--text-primary)] uppercase tracking-wider">
            Important Appointment Details:
          </div>
          <ul className="list-disc list-inside space-y-1 text-[var(--text-muted)]">
            <li>
              <strong>Home-Based Business Notice:</strong> All visits to our Charlottetown office are strictly by appointment only. Please contact us before visiting.
            </li>
            <li>
              <strong>Remote Clients:</strong> If you selected video or phone, we will email you the Google Meet or phone call invite details.
            </li>
            <li>
              <strong>Timezone:</strong> All hours are America/Halifax (Atlantic Time).
            </li>
          </ul>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="px-4 py-2 border border-[var(--border-color)] bg-[var(--bg-primary)] font-mono text-xs uppercase font-bold hover:bg-[var(--bg-secondary)]"
          >
            Schedule Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
      {/* Hidden honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="appt_hp">Leave empty</label>
        <input
          type="text"
          id="appt_hp"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Prominent Home-Based & Serving Anywhere Policy Notice */}
      <div className="p-4 border-2 border-[var(--border-color)] bg-[var(--bg-secondary)] text-xs font-mono space-y-1.5">
        <div className="flex items-center gap-2 font-bold text-[var(--text-primary)] uppercase tracking-wider">
          <Home className="w-4 h-4 text-[var(--accent)] shrink-0" />
          <span>Home-Based Business • Servicing Businesses Anywhere</span>
        </div>
        <p className="text-[var(--text-muted)] leading-relaxed font-sans">
          We operate as a home-based web development studio located in Charlottetown, PEI. We service businesses anywhere (Prince Edward Island, Atlantic Canada, across Canada, and internationally). <strong>Visits are strictly by appointment only. Please contact us before visiting.</strong>
        </p>
      </div>

      {status === "error" && serverMessage && (
        <div
          role="alert"
          className="p-4 border border-red-500 bg-red-500/10 text-red-600 dark:text-red-400 text-xs flex items-start gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{serverMessage}</span>
        </div>
      )}

      {/* Step 1: Meeting Format */}
      <div className="p-4 sm:p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1.5">
          1. Choose Meeting Format
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Option A: Video Call */}
          <label
            className={`p-4 border cursor-pointer flex flex-col justify-between space-y-2 transition-colors ${
              formData.meetingType.includes("Video")
                ? "border-[var(--accent)] bg-[var(--bg-primary)] shadow-xs"
                : "border-[var(--border-color)] bg-[var(--bg-primary)]/50 hover:bg-[var(--bg-primary)]"
            }`}
          >
            <div className="flex items-center justify-between">
              <Video className="w-4 h-4 text-[var(--accent)]" />
              <input
                type="radio"
                name="meetingType"
                value="Video Call (Remote - Anywhere)"
                checked={formData.meetingType.includes("Video")}
                onChange={handleChange}
                className="rounded-none border-[var(--border-color)]"
              />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[var(--text-primary)]">
                Remote Video Call
              </div>
              <p className="text-[11px] text-[var(--text-muted)] font-sans mt-0.5">
                Recommended for clients anywhere (Canada or abroad via Google Meet).
              </p>
            </div>
          </label>

          {/* Option B: Phone Consultation */}
          <label
            className={`p-4 border cursor-pointer flex flex-col justify-between space-y-2 transition-colors ${
              formData.meetingType.includes("Phone")
                ? "border-[var(--accent)] bg-[var(--bg-primary)] shadow-xs"
                : "border-[var(--border-color)] bg-[var(--bg-primary)]/50 hover:bg-[var(--bg-primary)]"
            }`}
          >
            <div className="flex items-center justify-between">
              <Phone className="w-4 h-4 text-[var(--accent)]" />
              <input
                type="radio"
                name="meetingType"
                value="Phone Consultation"
                checked={formData.meetingType.includes("Phone")}
                onChange={handleChange}
                className="rounded-none border-[var(--border-color)]"
              />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[var(--text-primary)]">
                Phone Consultation
              </div>
              <p className="text-[11px] text-[var(--text-muted)] font-sans mt-0.5">
                Direct phone discussion of your requirements and quote.
              </p>
            </div>
          </label>

          {/* Option C: In-Person Office */}
          <label
            className={`p-4 border cursor-pointer flex flex-col justify-between space-y-2 transition-colors ${
              formData.meetingType.includes("In-Person")
                ? "border-[var(--accent)] bg-[var(--bg-primary)] shadow-xs"
                : "border-[var(--border-color)] bg-[var(--bg-primary)]/50 hover:bg-[var(--bg-primary)]"
            }`}
          >
            <div className="flex items-center justify-between">
              <Home className="w-4 h-4 text-[var(--accent)]" />
              <input
                type="radio"
                name="meetingType"
                value="In-Person (Charlottetown Home Office - Appointment Only)"
                checked={formData.meetingType.includes("In-Person")}
                onChange={handleChange}
                className="rounded-none border-[var(--border-color)]"
              />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[var(--text-primary)]">
                In-Person Visit
              </div>
              <p className="text-[11px] text-[var(--text-muted)] font-sans mt-0.5">
                Charlottetown home office. Strictly by appointment only.
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Step 2: Preferred Appointment Time Window */}
      <div className="p-4 sm:p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1.5 flex items-center justify-between">
          <span>2. Select Day &amp; Time Window</span>
          <span className="text-[10px] text-[var(--text-muted)] lowercase font-normal">
            ({businessConfig.appointmentHoursTimezone})
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="appt-day"
              className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]"
            >
              Preferred Day <span className="text-red-500">*</span>
            </label>
            <select
              id="appt-day"
              name="preferredDay"
              value={formData.preferredDay}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)] font-sans"
            >
              <option value="Monday">Monday (1:00 PM – 8:00 PM)</option>
              <option value="Tuesday">Tuesday (1:00 PM – 8:00 PM)</option>
              <option value="Wednesday">Wednesday (1:00 PM – 8:00 PM)</option>
              <option value="Thursday">Thursday (1:00 PM – 8:00 PM)</option>
              <option value="Saturday">Saturday (1:00 PM – 8:00 PM)</option>
              <option value="Sunday">Sunday (1:00 PM – 8:00 PM)</option>
              <option value="Friday" disabled>
                Friday (Closed for appointments)
              </option>
            </select>
            {errors.preferredDay && (
              <p className="text-xs text-red-500 font-mono">{errors.preferredDay}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="appt-time"
              className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]"
            >
              Time Window <span className="text-red-500">*</span>
            </label>
            <select
              id="appt-time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)] font-sans"
            >
              <option value="1:00 PM – 3:00 PM">Early Afternoon (1:00 PM – 3:00 PM)</option>
              <option value="3:00 PM – 5:00 PM">Late Afternoon (3:00 PM – 5:00 PM)</option>
              <option value="5:00 PM – 8:00 PM">Evening (5:00 PM – 8:00 PM)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Step 3: Your Contact Details */}
      <div className="p-4 sm:p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1.5">
          3. Contact Information &amp; Discussion Topic
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="appt-name"
              className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="appt-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)]"
              placeholder="Jane Doe"
            />
            {errors.name && <p className="text-xs text-red-500 font-mono">{errors.name}</p>}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="appt-email"
              className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="appt-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)]"
              placeholder="jane@example.com"
            />
            {errors.email && <p className="text-xs text-red-500 font-mono">{errors.email}</p>}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="appt-phone"
              className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="appt-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)]"
              placeholder="902-555-0188"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="appt-topic"
              className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]"
            >
              Discussion Topic <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="appt-topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)]"
              placeholder="E.g. New website redesign & hosting requirements"
            />
            {errors.topic && <p className="text-xs text-red-500 font-mono">{errors.topic}</p>}
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <label
              htmlFor="appt-notes"
              className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]"
            >
              Additional Project Notes or Questions
            </label>
            <textarea
              id="appt-notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)]"
              placeholder="Tell us any specific features or questions you would like to go over..."
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold uppercase tracking-wider border border-[var(--accent)] hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>Submitting Request...</span>
          </>
        ) : (
          <>
            <Calendar className="w-4 h-4" />
            <span>Confirm Appointment Request</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
