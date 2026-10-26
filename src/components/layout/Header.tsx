"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [hostingDropdownOpen, setHostingDropdownOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg-primary)]/95 backdrop-blur-xs border-b border-[var(--border-color)]">
      {/* Top micro-bar for office and trade notice */}
      <div className="border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-4 py-1 text-[11px] font-mono text-[var(--text-muted)] flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-emerald-500 rounded-none" aria-hidden="true" />
          <span>Charlottetown, PEI • Home-Based Business • Servicing Businesses Anywhere</span>
          <span className="hidden md:inline text-[var(--border-color)]">|</span>
          <span className="hidden md:inline">Visits by appointment only</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:+19026299691"
            className="hover:text-[var(--text-primary)] transition-colors"
            aria-label="Call 902-629-9691"
          >
            902-629-9691
          </a>
          <span className="hidden sm:inline text-[var(--border-color)]">|</span>
          <a
            href="mailto:hello@yourwebpage.ca"
            className="hidden sm:inline hover:text-[var(--text-primary)] transition-colors"
          >
            hello@yourwebpage.ca
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-[var(--text-primary)] hover:opacity-90 transition-opacity focus-visible:outline-2"
            aria-label="Your Web Page - Home"
          >
            {/* Inline SVG Mark for instant crisp rendering */}
            <svg
              className="w-9 h-9 shrink-0 text-[var(--text-primary)]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="42" height="42" stroke="currentColor" strokeWidth="2.5" fill="none" />
              <line x1="3" y1="14" x2="45" y2="14" stroke="currentColor" strokeWidth="2" />
              <rect x="8" y="7" width="3" height="3" fill="currentColor" />
              <rect x="14" y="7" width="3" height="3" fill="currentColor" />
              <rect x="20" y="7" width="3" height="3" fill="currentColor" />
              <rect x="10" y="20" width="12" height="18" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="10" y1="28" x2="22" y2="28" stroke="currentColor" strokeWidth="2" />
              <rect x="26" y="20" width="12" height="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="26" y1="30" x2="26" y2="38" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight leading-tight uppercase font-mono">
                Your Web Page
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
                NightTech Service Inc.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs uppercase" aria-label="Main Navigation">
            <Link
              href="/"
              className={`px-3 py-2 border transition-colors ${
                pathname === "/"
                  ? "border-[var(--accent)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold"
                  : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-color)]"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 px-3 py-2 border transition-colors ${
                  isActive("/services")
                    ? "border-[var(--accent)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold"
                    : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-color)]"
                }`}
                aria-haspopup="true"
                aria-expanded={servicesDropdownOpen}
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-xs py-2 grid grid-cols-1 divide-y divide-[var(--border-subtle)] text-xs">
                  <div className="p-2 bg-[var(--bg-secondary)] font-bold text-[10px] text-[var(--text-muted)] tracking-wider">
                    POPULAR SERVICES
                  </div>
                  <Link
                    href="/services/website-design"
                    className="p-2.5 hover:bg-[var(--bg-secondary)] flex items-center justify-between text-[var(--text-primary)] normal-case font-sans"
                  >
                    <span>Website Design</span>
                    <ArrowRight className="w-3 h-3 opacity-40" />
                  </Link>
                  <Link
                    href="/services/web-development"
                    className="p-2.5 hover:bg-[var(--bg-secondary)] flex items-center justify-between text-[var(--text-primary)] normal-case font-sans"
                  >
                    <span>Web Development</span>
                    <ArrowRight className="w-3 h-3 opacity-40" />
                  </Link>
                  <Link
                    href="/services/website-maintenance"
                    className="p-2.5 hover:bg-[var(--bg-secondary)] flex items-center justify-between text-[var(--text-primary)] normal-case font-sans"
                  >
                    <span>Website Maintenance</span>
                    <ArrowRight className="w-3 h-3 opacity-40" />
                  </Link>
                  <Link
                    href="/services/cms-integration"
                    className="p-2.5 hover:bg-[var(--bg-secondary)] flex items-center justify-between text-[var(--text-primary)] normal-case font-sans"
                  >
                    <span>CMS Integration</span>
                    <ArrowRight className="w-3 h-3 opacity-40" />
                  </Link>
                  <Link
                    href="/services"
                    className="p-2.5 bg-[var(--bg-secondary)] font-mono text-[10px] uppercase text-[var(--accent)] font-bold flex items-center gap-1"
                  >
                    View All 22 Services →
                  </Link>
                </div>
              )}
            </div>

            {/* Hosting Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHostingDropdownOpen(true)}
              onMouseLeave={() => setHostingDropdownOpen(false)}
            >
              <Link
                href="/hosting"
                className={`flex items-center gap-1 px-3 py-2 border transition-colors ${
                  isActive("/hosting")
                    ? "border-[var(--accent)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold"
                    : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-color)]"
                }`}
                aria-haspopup="true"
                aria-expanded={hostingDropdownOpen}
              >
                Hosting
                <ChevronDown className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
              </Link>

              {hostingDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-xs py-2 grid grid-cols-1 divide-y divide-[var(--border-subtle)] text-xs">
                  <Link
                    href="/hosting/shared-cloud-hosting"
                    className="p-2.5 hover:bg-[var(--bg-secondary)] flex items-center justify-between text-[var(--text-primary)] normal-case font-sans"
                  >
                    <span>Shared Cloud Hosting</span>
                    <ArrowRight className="w-3 h-3 opacity-40" />
                  </Link>
                  <Link
                    href="/hosting/dedicated-vm"
                    className="p-2.5 hover:bg-[var(--bg-secondary)] flex items-center justify-between text-[var(--text-primary)] normal-case font-sans"
                  >
                    <span>Dedicated VM</span>
                    <ArrowRight className="w-3 h-3 opacity-40" />
                  </Link>
                  <Link
                    href="/hosting/compare"
                    className="p-2.5 hover:bg-[var(--bg-secondary)] flex items-center justify-between text-[var(--text-primary)] normal-case font-sans"
                  >
                    <span>Hosting Comparison</span>
                    <ArrowRight className="w-3 h-3 opacity-40" />
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-3 py-2 border transition-colors ${
                isActive("/about")
                  ? "border-[var(--accent)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold"
                  : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-color)]"
              }`}
            >
              About
            </Link>

            <Link
              href="/work"
              className={`px-3 py-2 border transition-colors ${
                isActive("/work")
                  ? "border-[var(--accent)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold"
                  : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-color)]"
              }`}
            >
              Work
            </Link>

            <Link
              href="/blog"
              className={`px-3 py-2 border transition-colors ${
                isActive("/blog")
                  ? "border-[var(--accent)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold"
                  : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-color)]"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 border transition-colors ${
                isActive("/contact")
                  ? "border-[var(--accent)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold"
                  : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-color)]"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/schedule-an-appointment"
              className={`px-3 py-2 border transition-colors ${
                isActive("/schedule-an-appointment")
                  ? "border-[var(--accent)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold"
                  : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-color)]"
              }`}
            >
              Schedule
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/request-a-quote"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 border border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 font-mono text-xs uppercase font-bold tracking-wider transition-opacity"
            >
              Request a Quote
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-6 space-y-4 font-mono text-sm">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 border-b border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 border-b border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
            >
              Services (All 22 Capabilities)
            </Link>
            <Link
              href="/hosting"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 border-b border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
            >
              Cloud Hosting &amp; Dedicated VMs
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 border-b border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
            >
              About the Business
            </Link>
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 border-b border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
            >
              Project Overview
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 border-b border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
            >
              Blog &amp; Knowledge
            </Link>
            <Link
              href="/schedule-an-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 border-b border-[var(--border-subtle)] text-[var(--accent)] font-bold hover:bg-[var(--bg-secondary)]"
            >
              Schedule an Appointment
            </Link>
            <Link
              href="/faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 border-b border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
            >
              Frequently Asked Questions
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 border-b border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
            >
              Contact &amp; Location
            </Link>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/schedule-an-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-2.5 bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold uppercase tracking-wider text-xs border border-[var(--border-color)]"
            >
              Schedule an Appointment
            </Link>
            <Link
              href="/request-a-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 bg-[var(--accent)] text-[var(--accent-contrast)] font-bold uppercase tracking-wider text-xs border border-[var(--accent)]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
