import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPageByPath, getAllPublishedPaths } from "@/lib/pages";
import { BlockRenderer } from "@/lib/blocks";
import { buildPageMetadata, generateStructuredData } from "@/lib/metadata";
import { normalizePath } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

/**
 * Generate dynamic Next.js Metadata for every public content page
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = normalizePath(slug);
  const page = await getPageByPath(path);

  if (!page || page.status !== "published") {
    return {
      title: "Page Not Found | Your Web Page",
      description: "The requested page could not be located.",
      robots: { index: false, follow: false },
    };
  }

  return buildPageMetadata(page);
}

/**
 * Pre-generate static params for all published content pages at build time
 */
export async function generateStaticParams() {
  const paths = await getAllPublishedPaths();
  return paths.map((path) => {
    if (path === "/") {
      return { slug: [] };
    }
    const segments = path.replace(/^\/+|\/+$/g, "").split("/");
    return { slug: segments };
  });
}

/**
 * Single Optional Catch-All Route: app/[[...slug]]/page.tsx
 * 
 * Handles all public content pages:
 * - "/" (homepage when slug is undefined or empty)
 * - "/about"
 * - "/services", "/services/website-design", "/services/cms-integration", etc.
 * - "/hosting", "/hosting/shared-cloud-hosting", "/hosting/dedicated-vm", etc.
 * - "/blog", "/blog/how-to-plan-a-business-website", etc.
 * - "/contact", "/request-a-quote", "/faqs", "/work", "/resources", "/privacy", etc.
 */
export default async function DynamicContentPage({ params }: PageProps) {
  const { slug } = await params;
  const path = normalizePath(slug);

  const page = await getPageByPath(path);

  // Return a proper 404 response if the page does not exist or is unpublished
  if (!page || page.status !== "published") {
    notFound();
  }

  const { organizationSchema, breadcrumbListSchema } = generateStructuredData(page);

  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* Structured Data (JSON-LD) for Search Engine Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {breadcrumbListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
        />
      )}

      {/* Render the ordered collection of reusable blocks */}
      <BlockRenderer blocks={page.blocks} />
    </main>
  );
}
