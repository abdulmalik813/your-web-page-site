import { MetadataRoute } from "next";
import { getAllPublishedPages } from "@/lib/pages";
import { normalizePath } from "@/lib/content";
import { businessConfig } from "@/lib/business";

const SITE_URL = businessConfig.siteUrl;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publishedPages = await getAllPublishedPages();

  return publishedPages.map((page) => {
    const canonicalPath = normalizePath(page.path);
    const url = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;

    // Determine priority based on page importance
    let priority = 0.7;
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly";

    if (canonicalPath === "/") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (canonicalPath.startsWith("/services") || canonicalPath.startsWith("/hosting")) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (canonicalPath.startsWith("/blog")) {
      priority = 0.8;
      changeFrequency = "monthly";
    }

    return {
      url,
      lastModified: page.updatedAt || page.publishedAt || new Date().toISOString(),
      changeFrequency,
      priority,
    };
  });
}
