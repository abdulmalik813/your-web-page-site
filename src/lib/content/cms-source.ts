import { ContentSource, normalizePath } from "./source";
import { PageRecord, ArticleRecord, ServiceSummary } from "@/lib/types";

/**
 * CmsContentSource
 * 
 * Example implementation of ContentSource designed to fetch pages, articles,
 * and services from a remote Headless CMS (such as Sanity, Strapi, Contentful, or Decap).
 * 
 * To switch the entire website to a headless CMS:
 * 1. Set CMS API credentials in environment variables (CMS_API_URL, CMS_READ_TOKEN).
 * 2. Map remote CMS document schemas to our PageRecord and ContentBlock types in fetchRemotePage().
 * 3. Update lib/content/index.ts to export `new CmsContentSource()` instead of LocalContentSource.
 * 
 * The single dynamic route `app/[[...slug]]/page.tsx` and the `BlockRenderer` require
 * ZERO changes because both sources implement the identical ContentSource interface.
 */
export class CmsContentSource implements ContentSource {
  private apiUrl: string;
  private apiToken?: string;

  constructor(apiUrl?: string, apiToken?: string) {
    this.apiUrl = apiUrl || process.env.CMS_API_URL || "";
    this.apiToken = apiToken || process.env.CMS_READ_TOKEN;
  }

  async getPageByPath(path: string): Promise<PageRecord | null> {
    const canonical = normalizePath(path);
    if (!this.apiUrl) {
      // In local mode without CMS env vars, fall back gracefully
      return null;
    }

    try {
      const res = await fetch(`${this.apiUrl}/pages?path=${encodeURIComponent(canonical)}`, {
        headers: this.apiToken ? { Authorization: `Bearer ${this.apiToken}` } : {},
        next: { revalidate: 60 },
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data?.page || null;
    } catch {
      return null;
    }
  }

  async getAllPublishedPages(): Promise<PageRecord[]> {
    if (!this.apiUrl) return [];
    try {
      const res = await fetch(`${this.apiUrl}/pages?status=published`, {
        headers: this.apiToken ? { Authorization: `Bearer ${this.apiToken}` } : {},
      });
      if (!res.ok) return [];
      const data = await res.json();
      return data?.pages || [];
    } catch {
      return [];
    }
  }

  async getAllPublishedPaths(): Promise<string[]> {
    const pages = await this.getAllPublishedPages();
    return pages.map((p) => normalizePath(p.path));
  }

  async getPublishedArticles(): Promise<ArticleRecord[]> {
    if (!this.apiUrl) return [];
    try {
      const res = await fetch(`${this.apiUrl}/articles?status=published`, {
        headers: this.apiToken ? { Authorization: `Bearer ${this.apiToken}` } : {},
      });
      if (!res.ok) return [];
      const data = await res.json();
      return data?.articles || [];
    } catch {
      return [];
    }
  }

  async getArticleBySlug(slug: string): Promise<ArticleRecord | null> {
    if (!this.apiUrl) return null;
    try {
      const res = await fetch(`${this.apiUrl}/articles/${encodeURIComponent(slug)}`, {
        headers: this.apiToken ? { Authorization: `Bearer ${this.apiToken}` } : {},
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data?.article || null;
    } catch {
      return null;
    }
  }

  async getServicesList(): Promise<ServiceSummary[]> {
    if (!this.apiUrl) return [];
    try {
      const res = await fetch(`${this.apiUrl}/services`, {
        headers: this.apiToken ? { Authorization: `Bearer ${this.apiToken}` } : {},
      });
      if (!res.ok) return [];
      const data = await res.json();
      return data?.services || [];
    } catch {
      return [];
    }
  }
}
