import React from "react";
import Link from "next/link";
import { businessConfig } from "@/lib/business";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)]">
      {/* Top Banner Notice */}
      <div className="border-b border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-xs font-mono text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[var(--text-primary)] font-semibold">
            <span className="inline-block w-2.5 h-2.5 bg-[var(--accent)]" aria-hidden="true" />
            <span>{businessConfig.appointmentNotice}</span>
          </div>
          <span className="text-[var(--text-muted)] text-[11px]">
            Home-Based Studio in Charlottetown, PEI • Servicing Businesses Anywhere
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1: Identity & Legal notice */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-[var(--text-primary)]"
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
              <div>
                <span className="font-bold text-lg font-mono uppercase tracking-tight block">
                  {businessConfig.brandName}
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider uppercase block">
                  {businessConfig.tradeNotice}
                </span>
              </div>
            </div>

            <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-sm">
              Your Web Page is a home-based business in Charlottetown, PEI. We service businesses anywhere—locally across Prince Edward Island, Atlantic Canada, Canada-wide, and internationally. All visits strictly by prior appointment.
            </p>

            <div className="pt-2 border-t border-[var(--border-subtle)] space-y-2 text-xs font-mono text-[var(--text-muted)]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-[var(--text-primary)] mt-0.5" aria-hidden="true" />
                <span>{businessConfig.address.fullFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[var(--text-primary)]" aria-hidden="true" />
                <a href={businessConfig.phoneLink} className="hover:text-[var(--text-primary)]">
                  {businessConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-[var(--text-primary)]" aria-hidden="true" />
                <a href={businessConfig.emailLink} className="hover:text-[var(--text-primary)]">
                  {businessConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3 font-mono">
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1.5">
              Services
            </div>
            <ul className="space-y-2 text-xs text-[var(--text-muted)]">
              <li>
                <Link href="/services/website-design" className="hover:text-[var(--text-primary)] transition-colors">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-[var(--text-primary)] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/website-redesign" className="hover:text-[var(--text-primary)] transition-colors">
                  Website Redesign
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="hover:text-[var(--text-primary)] transition-colors">
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cms-integration" className="hover:text-[var(--text-primary)] transition-colors">
                  CMS Integration
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-[var(--text-primary)] transition-colors">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/website-maintenance" className="hover:text-[var(--text-primary)] transition-colors">
                  Website Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[var(--accent)] font-semibold hover:underline">
                  All 22 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hosting & Solutions */}
          <div className="space-y-3 font-mono">
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1.5">
              Cloud Hosting
            </div>
            <ul className="space-y-2 text-xs text-[var(--text-muted)]">
              <li>
                <Link href="/hosting/shared-cloud-hosting" className="hover:text-[var(--text-primary)] transition-colors">
                  Shared Cloud Hosting
                </Link>
              </li>
              <li>
                <Link href="/hosting/dedicated-vm" className="hover:text-[var(--text-primary)] transition-colors">
                  Dedicated Virtual Machines
                </Link>
              </li>
              <li>
                <Link href="/hosting/compare" className="hover:text-[var(--text-primary)] transition-colors">
                  Hosting Comparison
                </Link>
              </li>
              <li>
                <Link href="/hosting/migrations" className="hover:text-[var(--text-primary)] transition-colors">
                  Hosting Migrations
                </Link>
              </li>
              <li>
                <Link href="/hosting/backups" className="hover:text-[var(--text-primary)] transition-colors">
                  Automated Backups
                </Link>
              </li>
              <li>
                <Link href="/hosting/management" className="hover:text-[var(--text-primary)] transition-colors">
                  Managed Hosting
                </Link>
              </li>
            </ul>

            <div className="pt-2 text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1.5">
              Service Areas
            </div>
            <ul className="space-y-1.5 text-xs text-[var(--text-muted)]">
              <li>
                <Link href="/service-areas/charlottetown" className="hover:text-[var(--text-primary)]">
                  Charlottetown, PEI
                </Link>
              </li>
              <li>
                <Link href="/service-areas/summerside" className="hover:text-[var(--text-primary)]">
                  Summerside, PEI
                </Link>
              </li>
              <li>
                <Link href="/service-areas/prince-edward-island" className="hover:text-[var(--text-primary)]">
                  Prince Edward Island
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Appointment Hours & Socials */}
          <div className="space-y-3 font-mono">
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Appointment Hours</span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)]">
              All times America/Halifax. Strictly by prior appointment.
            </p>
            <ul className="space-y-1 text-[11px] text-[var(--text-muted)]">
              <li className="flex justify-between">
                <span>Mon – Thu:</span>
                <span className="text-[var(--text-primary)]">1:00 PM – 8:00 PM</span>
              </li>
              <li className="flex justify-between text-red-500/80">
                <span>Friday:</span>
                <span>No appointments</span>
              </li>
              <li className="flex justify-between">
                <span>Sat – Sun:</span>
                <span className="text-[var(--text-primary)]">1:00 PM – 8:00 PM</span>
              </li>
            </ul>

            <Link
              href="/schedule-an-appointment"
              className="inline-flex items-center justify-between w-full px-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent)] text-xs text-[var(--text-primary)] font-semibold transition-colors font-mono"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </Link>

            <div className="pt-2 text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1.5">
              Connect
            </div>
            <div className="flex flex-col space-y-1 text-xs">
              <a
                href={businessConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)] flex items-center justify-between text-[var(--text-muted)]"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <a
                href={businessConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)] flex items-center justify-between text-[var(--text-muted)]"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <a
                href={businessConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)] flex items-center justify-between text-[var(--text-muted)]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} {businessConfig.brandName}. All rights reserved. {businessConfig.tradeNotice}.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[var(--text-primary)] transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link href="/cookies" className="hover:text-[var(--text-primary)] transition-colors">
              Cookies
            </Link>
            <span>•</span>
            <Link href="/accessibility" className="hover:text-[var(--text-primary)] transition-colors">
              Accessibility
            </Link>
            <span>•</span>
            <Link href="/how-we-work" className="hover:text-[var(--text-primary)] transition-colors">
              How We Work
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
