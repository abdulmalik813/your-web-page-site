import React from "react";
import Link from "next/link";
import {
  ArticleListBlock as ArticleListType,
  BlogArticleBodyBlock as BlogArticleBodyType,
  RelatedArticlesBlock as RelatedArticlesType,
  RelatedServicesBlock as RelatedServicesType,
  BreadcrumbsBlock as BreadcrumbsType,
} from "@/lib/types";
import { allArticlesList } from "@/lib/data/blog-articles";
import { allServicesList } from "@/lib/data/services-summary";
import { ArrowRight, Calendar, Clock, User, ChevronRight, Check } from "lucide-react";

export function BreadcrumbsBlock({ block }: { block: BreadcrumbsType }) {
  if (!block.items || block.items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="w-full border-b border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-2.5 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2 text-[var(--text-muted)]">
        {block.items.map((crumb, idx) => {
          const isLast = idx === block.items.length - 1;
          return (
            <React.Fragment key={idx}>
              {idx > 0 && <ChevronRight className="w-3 h-3 text-[var(--border-color)] shrink-0" />}
              {isLast || !crumb.href ? (
                <span className="text-[var(--text-primary)] font-semibold truncate max-w-xs sm:max-w-md">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className="hover:text-[var(--text-primary)] transition-colors">
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}

import { ArticleListInteractive } from "./ArticleListInteractive";

export function ArticleListBlock({ block }: { block: ArticleListType }) {
  const articles = block.limit ? allArticlesList.slice(0, block.limit) : allArticlesList;

  // On full list views (like /blog), render search and pagination
  return (
    <ArticleListInteractive
      articles={articles}
      heading={block.heading}
      eyebrow={block.eyebrow}
      description={block.description}
      defaultPageSize={4}
    />
  );
}

export function BlogArticleBodyBlock({ block }: { block: BlogArticleBodyType }) {
  const articleMeta = allArticlesList.find((a) => a.slug === block.articleSlug);

  return (
    <article className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Article Meta Header */}
        {articleMeta && (
          <div className="space-y-4 border-b border-[var(--border-color)] pb-8">
            <div className="inline-block px-2.5 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] font-mono text-xs text-[var(--accent)] uppercase font-bold">
              {articleMeta.category}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              {articleMeta.title}
            </h1>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              {articleMeta.summary}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[var(--text-muted)]">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[var(--text-primary)]" />
                <span>{articleMeta.author.name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[var(--text-primary)]" />
                <span>Published {articleMeta.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[var(--text-primary)]" />
                <span>{articleMeta.readTime}</span>
              </div>
            </div>
          </div>
        )}

        {/* Article Sections */}
        <div className="space-y-10 text-base leading-relaxed text-[var(--text-primary)]">
          {block.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4">
              {section.heading && (
                <h2 className="text-2xl font-bold font-mono tracking-tight text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2">
                  {section.heading}
                </h2>
              )}

              <div className="space-y-4 font-sans text-[var(--text-primary)] leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {section.listItems && section.listItems.length > 0 && (
                <ul className="space-y-2 border-l-2 border-[var(--accent)] pl-4 my-4 text-sm text-[var(--text-muted)] font-mono">
                  {section.listItems.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 shrink-0 text-[var(--accent)] mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.keyTakeaway && (
                <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] text-sm font-mono text-[var(--text-primary)]">
                  <strong className="uppercase tracking-wider text-[11px] block mb-1 text-[var(--accent)]">
                    Key Takeaway:
                  </strong>
                  {section.keyTakeaway}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function RelatedArticlesBlock({ block }: { block: RelatedArticlesType }) {
  const articles = allArticlesList.filter((a) => block.articleSlugs.includes(a.slug));
  if (articles.length === 0) return null;

  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-secondary)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold font-mono tracking-tight text-[var(--text-primary)]">
            {block.heading}
          </h2>
          {block.description && (
            <p className="text-xs text-[var(--text-muted)] font-mono mt-1">{block.description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((art) => (
            <Link
              key={art.slug}
              href={art.path}
              className="p-5 border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent)] transition-all space-y-2 block"
            >
              <div className="text-[10px] font-mono uppercase text-[var(--accent)] font-bold">
                {art.category} • {art.readTime}
              </div>
              <h3 className="text-base font-bold font-mono text-[var(--text-primary)]">{art.title}</h3>
              <p className="text-xs text-[var(--text-muted)] line-clamp-2">{art.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedServicesBlock({ block }: { block: RelatedServicesType }) {
  const services = allServicesList.filter((s) => block.serviceSlugs.includes(s.slug));
  if (services.length === 0) return null;

  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-secondary)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold font-mono tracking-tight text-[var(--text-primary)]">
            {block.heading}
          </h2>
          {block.description && (
            <p className="text-xs text-[var(--text-muted)] font-mono mt-1">{block.description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={svc.path}
              className="p-5 border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent)] transition-all space-y-2 block"
            >
              <h3 className="text-sm font-bold font-mono text-[var(--text-primary)] flex items-center justify-between">
                <span>{svc.title}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-40" />
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{svc.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
