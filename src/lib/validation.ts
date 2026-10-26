import { PageRecord, ContentBlock, ArticleRecord, ServiceSummary } from "./types";
import { normalizePath } from "./content";

export interface ValidationError {
  type: "error" | "warning";
  code: string;
  message: string;
  targetId?: string;
  targetPath?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  summary: {
    totalChecked: number;
    publishedCount: number;
    errorCount: number;
    warningCount: number;
  };
}

/**
 * Validates the complete content suite for data integrity, broken links,
 * missing titles, duplicate paths, duplicate IDs, and pricing policy violations.
 */
export function validateContentSuite(
  pages: PageRecord[],
  articles: ArticleRecord[],
  services: ServiceSummary[]
): ValidationResult {
  const errors: ValidationError[] = [];
  const knownPaths = new Set<string>();
  const knownPageIds = new Set<string>();
  const knownBlockIds = new Set<string>();
  const knownArticleSlugs = new Set<string>();
  const knownServiceSlugs = new Set<string>();

  // Register services
  for (const s of services) {
    knownServiceSlugs.add(s.slug);
  }

  // Register articles
  for (const a of articles) {
    if (knownArticleSlugs.has(a.slug)) {
      errors.push({
        type: "error",
        code: "DUPLICATE_ARTICLE_SLUG",
        message: `Duplicate article slug found: "${a.slug}"`,
        targetId: a.id,
      });
    }
    knownArticleSlugs.add(a.slug);
  }

  // Validate pages
  for (const page of pages) {
    // Check duplicate ID
    if (knownPageIds.has(page.id)) {
      errors.push({
        type: "error",
        code: "DUPLICATE_PAGE_ID",
        message: `Duplicate page id: "${page.id}"`,
        targetId: page.id,
        targetPath: page.path,
      });
    }
    knownPageIds.add(page.id);

    // Check duplicate path
    const canonicalPath = normalizePath(page.path);
    if (knownPaths.has(canonicalPath)) {
      errors.push({
        type: "error",
        code: "DUPLICATE_PAGE_PATH",
        message: `Duplicate canonical page path: "${canonicalPath}"`,
        targetId: page.id,
        targetPath: canonicalPath,
      });
    }
    knownPaths.add(canonicalPath);

    // Required title & description
    if (!page.title || page.title.trim().length === 0) {
      errors.push({
        type: "error",
        code: "MISSING_TITLE",
        message: `Page "${page.id}" is missing a required title`,
        targetId: page.id,
        targetPath: page.path,
      });
    }

    if (!page.description || page.description.trim().length === 0) {
      errors.push({
        type: "warning",
        code: "MISSING_DESCRIPTION",
        message: `Page "${page.id}" is missing an SEO description`,
        targetId: page.id,
        targetPath: page.path,
      });
    }

    // Validate blocks
    if (!Array.isArray(page.blocks) || page.blocks.length === 0) {
      errors.push({
        type: "error",
        code: "EMPTY_PAGE_BLOCKS",
        message: `Page "${page.id}" has no content blocks defined`,
        targetId: page.id,
        targetPath: page.path,
      });
    } else {
      for (const block of page.blocks) {
        validateBlock(block, page, knownBlockIds, knownServiceSlugs, knownArticleSlugs, errors);
      }
    }
  }

  // Pricing policy audit: ensure no price amounts appear in titles or descriptions
  const priceRegex = /\$\s*\d+|\b\d+\s*(?:dollars|CAD|USD)\b/i;
  for (const page of pages) {
    if (priceRegex.test(page.title) || priceRegex.test(page.description)) {
      errors.push({
        type: "error",
        code: "PRICING_POLICY_VIOLATION",
        message: `Page "${page.id}" contains public price figures, violating quote-only policy.`,
        targetId: page.id,
        targetPath: page.path,
      });
    }
  }

  const errorCount = errors.filter((e) => e.type === "error").length;
  const warningCount = errors.filter((e) => e.type === "warning").length;

  return {
    valid: errorCount === 0,
    errors,
    summary: {
      totalChecked: pages.length,
      publishedCount: pages.filter((p) => p.status === "published").length,
      errorCount,
      warningCount,
    },
  };
}

function validateBlock(
  block: ContentBlock,
  page: PageRecord,
  knownBlockIds: Set<string>,
  knownServiceSlugs: Set<string>,
  knownArticleSlugs: Set<string>,
  errors: ValidationError[]
) {
  if (!block.id) {
    errors.push({
      type: "error",
      code: "MISSING_BLOCK_ID",
      message: `A block of type "${block.type}" in page "${page.id}" is missing an id`,
      targetId: page.id,
      targetPath: page.path,
    });
  } else {
    if (knownBlockIds.has(block.id)) {
      errors.push({
        type: "error",
        code: "DUPLICATE_BLOCK_ID",
        message: `Duplicate block id "${block.id}" found in page "${page.id}"`,
        targetId: block.id,
        targetPath: page.path,
      });
    }
    knownBlockIds.add(block.id);
  }

  // Check related service references
  if (block.type === "relatedServices" && Array.isArray(block.serviceSlugs)) {
    for (const slug of block.serviceSlugs) {
      if (!knownServiceSlugs.has(slug)) {
        errors.push({
          type: "warning",
          code: "UNKNOWN_SERVICE_REFERENCE",
          message: `Block "${block.id}" references uncataloged service slug "${slug}"`,
          targetId: block.id,
          targetPath: page.path,
        });
      }
    }
  }

  // Check related article references
  if (block.type === "relatedArticles" && Array.isArray(block.articleSlugs)) {
    for (const slug of block.articleSlugs) {
      if (!knownArticleSlugs.has(slug)) {
        errors.push({
          type: "warning",
          code: "UNKNOWN_ARTICLE_REFERENCE",
          message: `Block "${block.id}" references uncataloged article slug "${slug}"`,
          targetId: block.id,
          targetPath: page.path,
        });
      }
    }
  }
}
