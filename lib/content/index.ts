import { ContentSource } from "./source";
import { LocalContentSource } from "./local-source";

/**
 * Default content source instance
 * 
 * In standard mode, LocalContentSource reads directly from lib/data.ts.
 * If a CMS is later configured, instantiate CmsContentSource here instead.
 */
export const contentSource: ContentSource = new LocalContentSource();

export * from "./source";
export * from "./local-source";
export * from "./cms-source";
