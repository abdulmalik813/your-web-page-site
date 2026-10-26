import type { Metadata } from "next";
import { PageRecord } from "./types";
import { normalizePath } from "./content";
import { businessConfig } from "./business";

const SITE_URL = businessConfig.siteUrl;

/**
 * Builds standard Next.js Metadata for any published PageRecord.
 */
export function buildPageMetadata(page: PageRecord): Metadata {
  const canonicalPath = normalizePath(page.path);
  const fullCanonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
  
  const title = page.seo?.title || page.title;
  const description = page.seo?.description || page.description;
  const ogImage = page.seo?.ogImage || `${SITE_URL}/brand/og-image.svg`;
  const isNoIndex = page.seo?.noIndex || page.status !== "published";

  return {
    title,
    description,
    alternates: {
      canonical: page.seo?.canonical || fullCanonicalUrl,
    },
    robots: {
      index: !isNoIndex,
      follow: !isNoIndex,
      nocache: false,
      googleBot: {
        index: !isNoIndex,
        follow: !isNoIndex,
      },
    },
    openGraph: {
      title,
      description,
      url: fullCanonicalUrl,
      siteName: businessConfig.brandName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${businessConfig.brandName} - ${title}`,
        },
      ],
      locale: "en_CA",
      type: page.template === "article" ? "article" : "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Generates JSON-LD Structured Data script tags for SEO
 */
export function generateStructuredData(page: PageRecord) {
  const canonicalPath = normalizePath(page.path);
  const fullUrl = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;

  // Organization & LocalBusiness
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: businessConfig.brandName,
    legalName: businessConfig.legalEntity,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo-dark.svg`,
    image: `${SITE_URL}/brand/og-image.svg`,
    email: businessConfig.email,
    telephone: `+1-${businessConfig.phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.province,
      postalCode: businessConfig.address.postalCode,
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Prince Edward Island" },
      { "@type": "AdministrativeArea", name: "Nova Scotia" },
      { "@type": "AdministrativeArea", name: "New Brunswick" },
      { "@type": "AdministrativeArea", name: "Newfoundland and Labrador" },
    ],
    sameAs: [
      businessConfig.socials.facebook,
      businessConfig.socials.instagram,
      businessConfig.socials.linkedin,
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
        opens: "13:00",
        closes: "20:00",
      },
    ],
  };

  // Breadcrumbs schema
  const breadcrumbListSchema = page.breadcrumbs && page.breadcrumbs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: page.breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: crumb.label,
          item: crumb.href ? `${SITE_URL}${crumb.href}` : fullUrl,
        })),
      }
    : null;

  return {
    organizationSchema,
    breadcrumbListSchema,
  };
}
