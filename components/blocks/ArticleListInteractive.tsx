"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArticleRecord } from "@/lib/types";
import { Search, X, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export function ArticleListInteractive({
  articles,
  heading,
  eyebrow,
  description,
  defaultPageSize = 4,
}: {
  articles: ArticleRecord[];
  heading?: string;
  eyebrow?: string;
  description?: string;
  defaultPageSize?: number;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = defaultPageSize;

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const a of articles) {
      if (a.category) set.add(a.category);
    }
    return ["All", ...Array.from(set)];
  }, [articles]);

  // Filter articles based on search query and category
  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return articles.filter((art) => {
      const matchesCategory =
        selectedCategory === "All" || art.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!q) return true;

      const titleMatch = art.title.toLowerCase().includes(q);
      const summaryMatch = art.summary.toLowerCase().includes(q);
      const tagMatch = art.tags?.some((t) => t.toLowerCase().includes(q));
      const categoryMatch = art.category?.toLowerCase().includes(q);

      return titleMatch || summaryMatch || tagMatch || categoryMatch;
    });
  }, [articles, searchQuery, selectedCategory]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredArticles.length / pageSize) || 1;
  const validCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);

  const paginatedArticles = useMemo(() => {
    const start = (validCurrentPage - 1) * pageSize;
    return filteredArticles.slice(start, start + pageSize);
  }, [filteredArticles, validCurrentPage, pageSize]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1 on search
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setCurrentPage(1);
  };

  const startIndex = filteredArticles.length > 0 ? (validCurrentPage - 1) * pageSize + 1 : 0;
  const endIndex = Math.min(validCurrentPage * pageSize, filteredArticles.length);

  return (
    <section className="w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          {eyebrow && (
            <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
              {eyebrow}
            </div>
          )}
          {heading && (
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {heading}
            </h2>
          )}
          {description && (
            <p className="text-base text-[var(--text-muted)] max-w-2xl">{description}</p>
          )}
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="p-4 sm:p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search articles by title, keyword, or topic..."
                aria-label="Search articles"
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)] font-sans transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="hidden md:flex items-center px-4 border border-[var(--border-color)] bg-[var(--bg-primary)] font-mono text-xs text-[var(--text-muted)] whitespace-nowrap">
              <span>
                {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"} found
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="space-y-1.5">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Filter by Category:
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategorySelect(cat)}
                  className={`px-3 py-1.5 border transition-colors ${
                    selectedCategory === cat
                      ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-contrast)] font-bold"
                      : "border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-3">
          <div>
            {filteredArticles.length > 0 ? (
              <span>
                Showing <strong className="text-[var(--text-primary)]">{startIndex}–{endIndex}</strong> of{" "}
                <strong className="text-[var(--text-primary)]">{filteredArticles.length}</strong> articles
                {searchQuery && (
                  <span>
                    {" "}for &ldquo;<span className="text-[var(--text-primary)]">{searchQuery}</span>&rdquo;
                  </span>
                )}
              </span>
            ) : (
              <span>No articles found</span>
            )}
          </div>

          {(searchQuery || selectedCategory !== "All") && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-[var(--accent)] underline hover:opacity-80 font-bold"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Article Cards Grid */}
        {paginatedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paginatedArticles.map((art) => (
              <Link
                key={art.slug}
                href={art.path}
                className="group p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2">
                    <span className="uppercase text-[var(--accent)] font-bold">{art.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {art.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-mono tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed font-sans line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-primary)] font-bold">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="p-12 text-center border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-4">
            <div className="w-12 h-12 border border-[var(--border-color)] bg-[var(--bg-primary)] mx-auto flex items-center justify-center text-[var(--text-muted)]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-mono text-[var(--text-primary)]">
              No articles match your search
            </h3>
            <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto">
              We could not find any guides matching &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleClearFilters}
                className="px-6 py-2.5 bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs uppercase font-bold tracking-wider border border-[var(--accent)] hover:opacity-90"
              >
                Clear Search &amp; Show All
              </button>
            </div>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs"
          >
            <div className="text-[var(--text-muted)]">
              Page <strong className="text-[var(--text-primary)]">{validCurrentPage}</strong> of{" "}
              <strong className="text-[var(--text-primary)]">{totalPages}</strong>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Previous Button */}
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={validCurrentPage === 1}
                aria-label="Previous page"
                className="px-3 py-2 border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-primary)] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>

              {/* Page Number Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  aria-label={`Go to page ${pageNum}`}
                  aria-current={pageNum === validCurrentPage ? "page" : undefined}
                  className={`w-8 h-8 flex items-center justify-center border ${
                    pageNum === validCurrentPage
                      ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-contrast)] font-bold"
                      : "border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-primary)]"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              {/* Next Button */}
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={validCurrentPage === totalPages}
                aria-label="Next page"
                className="px-3 py-2 border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-primary)] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        )}
      </div>
    </section>
  );
}
