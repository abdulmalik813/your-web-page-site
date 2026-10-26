import { PageRecord, ArticleRecord, ServiceSummary } from "@/lib/types";

/**
 * ContentSource Interface
 * 
 * Defines the contract for retrieving pages, articles, and services.
 * Both the default LocalContentSource (backed by lib/data.ts) and any future
 * CmsContentSource (backed by Sanity, Contentful, Strapi, etc.) implement this contract.
 * The Next.js single dynamic route [[...slug]] and block renderer interact ONLY
 * with this interface, guaranteeing seamless future CMS migration.
 */
export interface ContentSource {
  /**
   * Retrieves a published page record by normalized canonical path (e.g. "/" or "/services/website-design")
   */
  getPageByPath(path: string): Promise<PageRecord | null>;

  /**
   * Returns all published pages (for sitemap, search, static generation)
   */
  getAllPublishedPages(): Promise<PageRecord[]>;

  /**
   * Returns all valid published URL paths
   */
  getAllPublishedPaths(): Promise<string[]>;

  /**
   * Returns all published blog articles
   */
  getPublishedArticles(): Promise<ArticleRecord[]>;

  /**
   * Returns an article by its slug
   */
  getArticleBySlug(slug: string): Promise<ArticleRecord | null>;

  /**
   * Returns summary list of all services
   */
  getServicesList(): Promise<ServiceSummary[]>;
}

/**
 * Normalizes any route param or input path to a canonical leading slash format.
 * Examples:
 *   undefined => "/"
 *   [] => "/"
 *   ["services", "website-design"] => "/services/website-design"
 *   "services/website-design/" => "/services/website-design"
 */
export function normalizePath(input?: string | string[]): string {
  if (!input) return "/";
  if (Array.isArray(input)) {
    if (input.length === 0) return "/";
    return `/${input.join("/").replace(/\/+/g, "/").replace(/\/$/, "")}`;
  }
  const clean = input.trim().replace(/\/+/g, "/");
  if (!clean || clean === "/") return "/";
  const withLeading = clean.startsWith("/") ? clean : `/${clean}`;
  return withLeading.endsWith("/") ? withLeading.slice(0, -1) : withLeading;
}
