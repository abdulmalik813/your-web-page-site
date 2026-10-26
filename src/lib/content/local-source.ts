import { ContentSource, normalizePath } from "./source";
import { PageRecord, ArticleRecord, ServiceSummary } from "@/lib/types";
import { initialPages, initialArticles, initialServices } from "@/lib/data";

/**
 * LocalContentSource
 * 
 * Default implementation of ContentSource that reads from the local
 * typed records in lib/data.ts. Fast, zero-dependency, and deterministic.
 */
export class LocalContentSource implements ContentSource {
  private pages: PageRecord[];
  private articles: ArticleRecord[];
  private services: ServiceSummary[];

  constructor(
    pages: PageRecord[] = initialPages,
    articles: ArticleRecord[] = initialArticles,
    services: ServiceSummary[] = initialServices
  ) {
    this.pages = pages;
    this.articles = articles;
    this.services = services;
  }

  async getPageByPath(rawPath: string): Promise<PageRecord | null> {
    const canonical = normalizePath(rawPath);
    const found = this.pages.find(
      (p) => p.status === "published" && normalizePath(p.path) === canonical
    );
    return found || null;
  }

  async getAllPublishedPages(): Promise<PageRecord[]> {
    return this.pages.filter((p) => p.status === "published");
  }

  async getAllPublishedPaths(): Promise<string[]> {
    return this.pages
      .filter((p) => p.status === "published")
      .map((p) => normalizePath(p.path));
  }

  async getPublishedArticles(): Promise<ArticleRecord[]> {
    return this.articles.filter((a) => a.status === "published");
  }

  async getArticleBySlug(slug: string): Promise<ArticleRecord | null> {
    const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
    const found = this.articles.find(
      (a) => a.status === "published" && a.slug === cleanSlug
    );
    return found || null;
  }

  async getServicesList(): Promise<ServiceSummary[]> {
    return this.services;
  }
}
