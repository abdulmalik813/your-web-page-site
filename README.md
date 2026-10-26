# Your Web Page — Production Architecture & Documentation

Production website for **Your Web Page**, a registered trade name of **NightTech Service Inc.**, located in Charlottetown, Prince Edward Island, Canada.

Built with Next.js 15 App Router, TypeScript, and Tailwind CSS using a **single optional catch-all route** (`app/[[...slug]]/page.tsx`), a **reusable block rendering system**, and a **CMS-ready decoupled content architecture**.

---

## Architecture Overview

```
                                      [ Browser Request ]
                                               │
                                               ▼
                              [ app/[[...slug]]/page.tsx ]
                         (Single Dynamic Route for All Pages)
                                               │
                       ┌───────────────────────┴───────────────────────┐
                       ▼                                               ▼
              [ lib/metadata.ts ]                             [ lib/pages.ts ]
          (Dynamic SEO, OpenGraph,                                     │
           JSON-LD Structured Data)                                    ▼
                                                             [ ContentSource ]
                                                                (Interface)
                                                                       │
                                                       ┌───────────────┴───────────────┐
                                                       ▼                               ▼
                                            [ LocalContentSource ]           [ CmsContentSource ]
                                             (lib/data.ts records)         (Future headless CMS)
                                                       │
                                                       ▼
                                            [ PageRecord Resolved ]
                                                       │
                                                       ▼
                                            [ lib/blocks.tsx ]
                                             (BlockRenderer)
                                                       │
               ┌───────────────────────┬───────────────┴───────────────┬───────────────────────┐
               ▼                       ▼                               ▼                       ▼
        [ HeroBlock ]          [ FeatureGrid ]                  [ FaqAccordion ]        [ Forms & Contact ]
```

### Key Principles

1. **One Public Content Route (`app/[[...slug]]/page.tsx`)**: Resolves the root homepage (`/`), all 22 website service pages, all 7 hosting pages, all 5 solution pages, all 6 regional pages, all 10 blog articles, and legal pages without duplicating route components.
2. **Strict Separation of Data and Presentation**: `lib/data.ts` contains pure typed data records and configuration. No JSX components or arbitrary executable code are stored in the data source.
3. **Decoupled ContentSource Interface (`lib/content/source.ts`)**: Enables zero-code-change migration to any headless CMS (Sanity, Contentful, Strapi, Decap) by swapping the adapter in `lib/content/index.ts`.
4. **Boxy Monochrome Design System**: Engineered using crisp borders, rectangular panels, sharp grid geometry, and high-contrast typography in black (`#111111`), dark panel (`#1D1D1D`), and white (`#FFFFFF`).
5. **Full Theme Persistence**: Auto (system device preference), Light, and Dark modes with anti-flash script initialization in the document `<head>`.
6. **Strict Pricing Policy**: All pricing is strictly quote-based. Zero public prices, hourly rates, or false guarantees appear anywhere in the content or metadata.
7. **Production SEO**: Automated XML sitemap (`app/sitemap.ts`), robots directives (`app/robots.ts`), and LocalBusiness/BreadcrumbList JSON-LD schemas.

---

## 1. Installation

Ensure you have Node.js 18.18+ or 20+ and `pnpm` installed.

```bash
pnpm install
```

---

## 2. Running Locally

Start the local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 3. How to Add a New Page by Editing Content Data

Adding a new page **never requires creating a new React file or route component**. Follow these steps:

1. Open `lib/data/main-pages.ts` (or the relevant category sub-file).
2. Append a new typed `PageRecord`:
   ```ts
   {
     id: "page-client-onboarding",
     slug: "client-onboarding",
     path: "/client-onboarding",
     title: "Client Onboarding Guide | Your Web Page",
     description: "How our onboarding process works for new website projects.",
     status: "published", // Set to "draft" while in progress
     template: "standard",
     breadcrumbs: [
       { label: "Home", href: "/" },
       { label: "Onboarding", href: "/client-onboarding" }
     ],
     blocks: [
       {
         id: "onboard-intro",
         type: "pageIntro",
         eyebrow: "Welcome",
         heading: "New Client Onboarding",
         lead: "Everything you need to know about our project kickoff."
       },
       {
         id: "onboard-steps",
         type: "processSteps",
         heading: "Kickoff Milestones",
         steps: [
           { stepNumber: "01", title: "Access Checklist", description: "Providing domain credentials." },
           { stepNumber: "02", title: "Content Delivery", description: "Assembling approved text and imagery." }
         ]
       },
       {
         id: "onboard-cta",
         type: "finalConversion",
         heading: "Have questions before kickoff?",
         description: "Contact your assigned engineer directly.",
         primaryAction: { label: "Contact Us", href: "/contact" }
       }
     ]
   }
   ```
3. Save the file.
4. Navigate to `http://localhost:3000/client-onboarding`. The page immediately resolves, renders with full SEO metadata, and is automatically added to the dynamic sitemap (`/sitemap.xml`).

---

## 4. How to Add or Update a Blog Article

1. Add the article summary record to `lib/data/blog-articles.ts` in `allArticlesList`.
2. Add the corresponding page record to `lib/data/article-pages.ts` in `articlePages`:
   ```ts
   {
     id: "page-article-new-topic",
     slug: "blog/new-topic-guide",
     path: "/blog/new-topic-guide",
     title: "New Topic Guide | Your Web Page",
     description: "Practical guide explaining this web concept.",
     status: "published",
     template: "article",
     breadcrumbs: [
       { label: "Home", href: "/" },
       { label: "Blog", href: "/blog" },
       { label: "New Topic", href: "/blog/new-topic-guide" }
     ],
     blocks: [
       {
         id: "new-topic-body",
         type: "blogArticleBody",
         articleSlug: "new-topic-guide",
         sections: [
           {
             heading: "Introduction",
             paragraphs: ["First paragraph...", "Second paragraph..."],
             keyTakeaway: "Essential summary takeaway."
           }
         ]
       },
       {
         id: "new-topic-cta",
         type: "finalConversion",
         heading: "Discuss this architecture",
         description: "Request a quote tailored to your business.",
         primaryAction: { label: "Request a Quote", href: "/request-a-quote" }
       }
     ]
   }
   ```
3. The article is automatically listed on `/blog` and accessible directly at `/blog/new-topic-guide`.

---

## 5. Reusable Block Catalog

The following blocks are available in `components/blocks/` and registered in `lib/blocks.tsx`:

| Block Type | Component | Typical Use Case |
|---|---|---|
| `hero` | `HeroBlock` | Homepage and top-level landing pages |
| `pageIntro` | `PageIntroBlock` | Clean header section for content pages |
| `richText` | `RichTextBlock` | Longform legal or informational text |
| `twoColumnContent` | `TwoColumnContentBlock` | Side-by-side comparative explanations |
| `splitContent` | `SplitContentBlock` | Lead text on left with bullet points on right |
| `featureGrid` | `FeatureGridBlock` | 2, 3, or 4-column feature highlights with icons |
| `serviceGrid` | `ServiceGridBlock` | Catalog grid of website services |
| `benefitsList` | `BenefitsListBlock` | 3-column highlighted value propositions |
| `processSteps` | `ProcessStepsBlock` | 4-step execution timeline |
| `faqAccordion` | `FaqAccordionBlock` | Collapsible questions and answers |
| `comparisonTable` | `ComparisonTableBlock` | Technical feature/hosting comparison matrix |
| `articleList` | `ArticleListBlock` | Grid of published articles |
| `blogArticleBody` | `BlogArticleBodyBlock` | Formatted multi-section article body |
| `breadcrumbs` | `BreadcrumbsBlock` | Accessible navigational trail |
| `contactInfo` | `ContactInfoBlock` | Address, phone, email, and appointment rules |
| `businessHours` | `BusinessHoursBlock` | America/Halifax appointment schedule table |
| `serviceAreaList` | `ServiceAreaListBlock` | Regional coverage links for PEI & Atlantic Canada |
| `contactForm` | `ContactFormBlock` | Accessible contact form with live validation |
| `quoteForm` | `QuoteFormBlock` | Comprehensive Request a Quote form |
| `callToAction` | `CallToActionBlock` | Standalone conversion callout box |
| `finalConversion` | `FinalConversionBlock` | Bottom-of-page conversion section |

---

## 6. How to Create a New Block Type

If a genuinely new presentation is required:

1. Define its TypeScript interface in `lib/types.ts`:
   ```ts
   export interface StatsBannerBlock {
     id: string;
     type: "statsBanner";
     eyebrow?: string;
     stats: Array<{ number: string; label: string }>;
   }
   ```
2. Add it to the `ContentBlock` union in `lib/types.ts`.
3. Create the component in `components/blocks/StatsBannerBlock.tsx`.
4. Register the new case in `lib/blocks.tsx`:
   ```tsx
   case "statsBanner":
     return <StatsBannerBlock block={block} />;
   ```
5. You can now use `type: "statsBanner"` in any page record!

---

## 7. Form Delivery & Server-Side Security

The application includes working server-side API endpoints:
- `app/api/contact/route.ts`
- `app/api/quote/route.ts`

### Protections Included:
- **Server-Side Validation**: Ensures required fields, valid email syntax, and minimum lengths.
- **Spam Bot Trap**: Hidden honeypot fields silently catch automated submissions.
- **Privacy Compliance**: Submissions are strictly private and never displayed publicly.

### Connecting an External Email Service:
Set `EMAIL_PROVIDER_API_KEY` in `.env` (e.g. Resend, SendGrid, or Postmark). When configured, form submissions trigger outbound notifications to `hello@yourwebpage.ca`. In local development mode without an API key, valid submissions are logged to the console safely without errors.

---

## 8. Environment Variables

Copy `.env.example` to `.env`:

```bash
# Form Delivery (Optional external provider):
EMAIL_PROVIDER_API_KEY="re_123456789"
CONTACT_EMAIL_RECIPIENT="hello@yourwebpage.ca"

# Public Site URL
NEXT_PUBLIC_SITE_URL="https://yourwebpage.ca"

# CMS Configuration (Optional when ready to connect headless CMS):
CMS_API_URL=""
CMS_READ_TOKEN=""
```

---

## 9. Building & Testing

### Run Unit Tests
```bash
npx --yes tsx --test lib/content.test.ts
```
Verifies path normalization, content source resolution, duplicate path/ID checks, and pricing policy rules.

### Production Build
```bash
pnpm build
```
Compiles and statically optimizes all 60+ pages through the single dynamic route.

---

## 10. Deployment

This application deploys seamlessly to standard cloud hosting:
- **Vercel / Cloud Run / Netlify / Node VM**:
  ```bash
  pnpm build
  pnpm start
  ```

---

## 11. Future Headless CMS Migration Guide

The website was designed from day one to be CMS-agnostic:

1. Install your preferred CMS client SDK (e.g. `@sanity/client` or `contentful`).
2. Open `lib/content/cms-source.ts`.
3. Implement `getPageByPath()`, `getAllPublishedPages()`, and `getPublishedArticles()` by querying your CMS and returning data shaped as `PageRecord`.
4. In `lib/content/index.ts`, change:
   ```ts
   // export const contentSource: ContentSource = new LocalContentSource();
   export const contentSource: ContentSource = new CmsContentSource();
   ```
5. Done! `app/[[...slug]]/page.tsx`, `lib/blocks.tsx`, and all UI components will immediately display content from your CMS without code modifications.

---

## Business Identity & Legal

- **Brand**: Your Web Page
- **Legal Entity**: Your Web Page is a trade name of NightTech Service Inc.
- **Headquarters**: 44 Beach Grove Road, Unit 3, Charlottetown, PE C1E 1Y5, Canada
- **Phone**: 902-629-9691
- **Email**: hello@yourwebpage.ca
- **Appointment Notice**: Visits by appointment only. Please contact us before visiting.
- **Hours**: America/Halifax timezone. Monday–Thursday, Saturday–Sunday: 1:00 PM–8:00 PM (Fridays closed for appointments).
