import test from "node:test";
import assert from "node:assert/strict";
import { normalizePath } from "./content/source";
import { LocalContentSource } from "./content/local-source";
import { initialPages, initialArticles, initialServices } from "./data";
import { validateContentSuite } from "./validation";
import { businessConfig } from "./business";

test("normalizePath handles root and nested slug permutations", () => {
  assert.equal(normalizePath(undefined), "/");
  assert.equal(normalizePath(""), "/");
  assert.equal(normalizePath([]), "/");
  assert.equal(normalizePath(["about"]), "/about");
  assert.equal(normalizePath(["services", "website-design"]), "/services/website-design");
  assert.equal(normalizePath("/services/website-design/"), "/services/website-design");
  assert.equal(normalizePath("hosting/compare"), "/hosting/compare");
});

test("LocalContentSource resolves root homepage and nested paths", async () => {
  const source = new LocalContentSource(initialPages, initialArticles, initialServices);

  // Root homepage
  const home = await source.getPageByPath("/");
  assert.ok(home, "Home page should be found");
  assert.equal(home?.id, "page-home");
  assert.equal(home?.status, "published");

  // Nested service page
  const webDesign = await source.getPageByPath("/services/website-design");
  assert.ok(webDesign, "Website design service page should be found");
  assert.equal(webDesign?.id, "service-page-website-design");

  // Unknown path returns null
  const notFound = await source.getPageByPath("/non-existent-random-path");
  assert.equal(notFound, null);

  // Blog article path
  const articlePage = await source.getPageByPath("/blog/how-to-plan-a-business-website");
  assert.ok(articlePage, "Blog article page should resolve through the content source");
});

test("LocalContentSource retrieves articles and services", async () => {
  const source = new LocalContentSource(initialPages, initialArticles, initialServices);

  const articles = await source.getPublishedArticles();
  assert.ok(articles.length >= 10, "Should have at least 10 published articles");

  const singleArticle = await source.getArticleBySlug("what-website-hosting-does");
  assert.ok(singleArticle, "Should find article by slug");
  assert.equal(singleArticle?.title, "What Website Hosting Does");

  const services = await source.getServicesList();
  assert.ok(services.length >= 22, "Should have at least 22 published services");
});

test("Master Content Data Suite passes strict validation with zero errors", () => {
  const result = validateContentSuite(initialPages, initialArticles, initialServices);

  if (!result.valid) {
    console.error("Validation errors detected:", result.errors);
  }

  assert.equal(result.valid, true, "Content suite must be 100% valid with zero errors");
  assert.equal(result.summary.errorCount, 0, "No validation errors allowed");
  assert.ok(result.summary.publishedCount >= 60, "Must have over 60 published pages");
});

test("Pricing policy is strictly respected (zero public prices)", () => {
  const priceRegex = /\$\s*\d+|\b\d+\s*(?:dollars|CAD|USD)\b/i;
  
  for (const page of initialPages) {
    assert.equal(
      priceRegex.test(page.title),
      false,
      `Page ${page.id} title contains public price!`
    );
    assert.equal(
      priceRegex.test(page.description),
      false,
      `Page ${page.id} description contains public price!`
    );
  }
});

test("Business identity matches exact requirements", () => {
  assert.equal(businessConfig.brandName, "Your Web Page");
  assert.equal(businessConfig.legalEntity, "NightTech Service Inc.");
  assert.equal(businessConfig.email, "hello@yourwebpage.ca");
  assert.equal(businessConfig.phone, "902-629-9691");
  assert.equal(businessConfig.appointmentHoursTimezone, "America/Halifax");
});

test("Schedule an appointment page resolves with appointmentScheduler block", async () => {
  const source = new LocalContentSource(initialPages, initialArticles, initialServices);
  const schedulePage = await source.getPageByPath("/schedule-an-appointment");
  assert.ok(schedulePage, "Schedule appointment page must exist");
  assert.equal(schedulePage?.slug, "schedule-an-appointment");
  const hasSchedulerBlock = schedulePage?.blocks.some((b) => b.type === "appointmentScheduler");
  assert.equal(hasSchedulerBlock, true, "Must contain appointmentScheduler block");
});

test("Home-based business and servicing businesses anywhere messaging is present", () => {
  assert.match(businessConfig.appointmentNotice, /home-based business/i);
  assert.match(businessConfig.widerMarket, /service businesses anywhere/i);
});

