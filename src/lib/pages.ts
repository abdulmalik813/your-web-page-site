import { contentSource, normalizePath } from "@/lib/content";
import { PageRecord, ArticleRecord, ServiceSummary } from "@/lib/types";

/**
 * Resolves a published page record by URL path.
 * Normalizes input so trailing slashes or parameter arrays match consistently.
 */
export async function getPageByPath(pathOrSegments?: string | string[]): Promise<PageRecord | null> {
  const normalized = normalizePath(pathOrSegments);
  return contentSource.getPageByPath(normalized);
}

/**
 * Returns all published URL paths for dynamic static params and sitemaps.
 */
export async function getAllPublishedPaths(): Promise<string[]> {
  return contentSource.getAllPublishedPaths();
}

/**
 * Returns all published page records.
 */
export async function getAllPublishedPages(): Promise<PageRecord[]> {
  return contentSource.getAllPublishedPages();
}

/**
 * Returns all published blog articles.
 */
export async function getPublishedArticles(): Promise<ArticleRecord[]> {
  return contentSource.getPublishedArticles();
}

/**
 * Returns an article by its slug.
 */
export async function getArticleBySlug(slug: string): Promise<ArticleRecord | null> {
  return contentSource.getArticleBySlug(slug);
}

/**
 * Returns all available services.
 */
export async function getServicesList(): Promise<ServiceSummary[]> {
  return contentSource.getServicesList();
}
