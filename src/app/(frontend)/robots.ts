import { MetadataRoute } from "next";
import { businessConfig } from "@/lib/business";

const SITE_URL = businessConfig.siteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
