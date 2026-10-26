import React from "react";
import Link from "next/link";
import {
  FeatureGridBlock as FeatureGridType,
  ServiceGridBlock as ServiceGridType,
  ServiceListBlock as ServiceListType,
  IconTextListBlock as IconTextListType,
  TechDetailsBlock as TechDetailsType,
  ServiceAreaListBlock as ServiceAreaListType,
  SocialLinksBlock as SocialLinksType,
} from "@/lib/types";
import { allServicesList } from "@/lib/data/services-summary";
import { businessConfig } from "@/lib/business";
import {
  ArrowRight,
  ArrowUpRight,
  Layout,
  Code2,
  RefreshCw,
  ShoppingBag,
  Monitor,
  Wrench,
  ArrowRightLeft,
  Layers,
  Database,
  Boxes,
  FileCode,
  Search,
  MapPin,
  Zap,
  ShieldCheck,
  Lock,
  CloudLightning,
  Clock,
  Plug,
  Sliders,
  Cpu,
  MessageSquare,
  Building2,
  Server,
  Activity,
  CheckCircle,
  Smartphone,
  Cloud,
} from "lucide-react";

// Safe dynamic icon resolver
function getIconComponent(name?: string) {
  switch (name) {
    case "Layout": return Layout;
    case "Code2":
    case "Code": return Code2;
    case "RefreshCw": return RefreshCw;
    case "ShoppingBag": return ShoppingBag;
    case "Monitor": return Monitor;
    case "Wrench": return Wrench;
    case "ArrowRightLeft": return ArrowRightLeft;
    case "Layers": return Layers;
    case "Database": return Database;
    case "Boxes": return Boxes;
    case "FileCode": return FileCode;
    case "Search": return Search;
    case "MapPin": return MapPin;
    case "Zap": return Zap;
    case "ShieldCheck":
    case "Shield": return ShieldCheck;
    case "Lock": return Lock;
    case "CloudLightning":
    case "Cloud": return CloudLightning;
    case "Clock": return Clock;
    case "Plug": return Plug;
    case "Sliders": return Sliders;
    case "Cpu": return Cpu;
    case "MessageSquare": return MessageSquare;
    case "Building2": return Building2;
    case "Server": return Server;
    case "Activity": return Activity;
    case "Smartphone": return Smartphone;
    default: return CheckCircle;
  }
}

export function FeatureGridBlock({ block }: { block: FeatureGridType }) {
  const colClasses = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[block.columns || 3];

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

        <div className={`grid grid-cols-1 ${colClasses} gap-6`}>
          {block.features.map((feature, idx) => {
            const Icon = getIconComponent(feature.iconName);
            return (
              <div
                key={idx}
                className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3"
              >
                <div className="w-10 h-10 border border-[var(--border-color)] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)]">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold font-mono text-[var(--text-primary)]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceGridBlock({ block }: { block: ServiceGridType }) {
  // If specific service slugs are requested, filter, otherwise show all services
  const displayedServices = block.serviceSlugs && block.serviceSlugs.length > 0
    ? allServicesList.filter((s) => block.serviceSlugs?.includes(s.slug))
    : allServicesList;

  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
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

          <Link
            href="/services"
            className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase text-[var(--accent)] hover:underline"
          >
            <span>All 22 Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((svc) => {
            const Icon = getIconComponent(svc.iconName);
            return (
              <Link
                key={svc.slug}
                href={svc.path}
                className="group p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 border border-[var(--border-color)] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--text-primary)] group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-contrast)] transition-colors">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold font-mono text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors flex items-center justify-between">
                    <span>{svc.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {svc.shortDescription}
                  </p>
                </div>
                <div className="pt-2 border-t border-[var(--border-subtle)] text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  Quote-based • Learn more →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceAreaListBlock({ block }: { block: ServiceAreaListType }) {
  const areas = [
    { name: "Charlottetown, PEI", slug: "charlottetown", desc: "Headquarters & in-person consultation by appointment." },
    { name: "Summerside, PEI", slug: "summerside", desc: "Serving Prince County contractors, manufacturing, and commerce." },
    { name: "Prince Edward Island", slug: "prince-edward-island", desc: "Queens, Prince, and Kings county businesses." },
    { name: "Nova Scotia", slug: "nova-scotia", desc: "Halifax, Dartmouth, Truro, and Annapolis Valley clients." },
    { name: "New Brunswick", slug: "new-brunswick", desc: "Moncton, Saint John, and Fredericton enterprises." },
    { name: "Newfoundland & Labrador", slug: "newfoundland-and-labrador", desc: "St. John's and regional commercial operations." },
  ];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="group p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent)] transition-all space-y-2 block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[var(--text-primary)] font-mono font-bold text-sm">
                  <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                  <span>{area.name}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{area.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialLinksBlock({ block }: { block: SocialLinksType }) {
  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <span className="text-[var(--text-muted)] uppercase tracking-wider">{block.heading}</span>
        <div className="flex items-center gap-6">
          <a
            href={businessConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] flex items-center gap-1 text-[var(--text-muted)]"
          >
            <span>Facebook</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={businessConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] flex items-center gap-1 text-[var(--text-muted)]"
          >
            <span>Instagram</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={businessConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] flex items-center gap-1 text-[var(--text-muted)]"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
