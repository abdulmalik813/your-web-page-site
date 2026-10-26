// Core Types for Your Web Page content-driven architecture
// Strict, typed, CMS-ready data models

export type PublicationStatus = "published" | "draft" | "archived";

export interface PageBreadcrumb {
  label: string;
  href?: string;
}

export interface PageSeo {
  title?: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

// ----------------------------------------------------
// Reusable Content Blocks (Discriminated Union)
// ----------------------------------------------------

export interface ActionLink {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface HeroBlock {
  id: string;
  type: "hero";
  eyebrow?: string;
  heading: string;
  description: string;
  primaryAction?: ActionLink;
  secondaryAction?: ActionLink;
  badges?: string[];
  stats?: Array<{ label: string; value: string }>;
}

export interface PageIntroBlock {
  id: string;
  type: "pageIntro";
  eyebrow?: string;
  heading: string;
  lead: string;
  metadata?: Array<{ label: string; value: string }>;
}

export interface RichTextBlock {
  id: string;
  type: "richText";
  eyebrow?: string;
  heading?: string;
  paragraphs: string[];
  callout?: string;
  listItems?: string[];
}

export interface HeadingParagraphBlock {
  id: string;
  type: "headingParagraph";
  eyebrow?: string;
  heading: string;
  paragraph: string;
  action?: ActionLink;
}

export interface ImageWithTextBlock {
  id: string;
  type: "imageWithText";
  eyebrow?: string;
  heading: string;
  paragraph: string;
  imagePosition?: "left" | "right";
  points?: string[];
  action?: ActionLink;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName?: string;
  badge?: string;
}

export interface FeatureGridBlock {
  id: string;
  type: "featureGrid";
  eyebrow?: string;
  heading: string;
  description?: string;
  columns?: 2 | 3 | 4;
  features: FeatureItem[];
}

export interface ServiceGridBlock {
  id: string;
  type: "serviceGrid";
  eyebrow?: string;
  heading: string;
  description?: string;
  serviceSlugs?: string[];
}

export interface ServiceListBlock {
  id: string;
  type: "serviceList";
  eyebrow?: string;
  heading: string;
  description?: string;
  items: Array<{
    title: string;
    description: string;
    href: string;
    iconName?: string;
  }>;
}

export interface IconTextListBlock {
  id: string;
  type: "iconTextList";
  eyebrow?: string;
  heading: string;
  description?: string;
  items: Array<{
    iconName: string;
    title: string;
    text: string;
  }>;
}

export interface BenefitsListBlock {
  id: string;
  type: "benefitsList";
  eyebrow?: string;
  heading: string;
  description?: string;
  benefits: Array<{
    title: string;
    description: string;
    highlight?: string;
  }>;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  details?: string[];
}

export interface ProcessStepsBlock {
  id: string;
  type: "processSteps";
  eyebrow?: string;
  heading: string;
  description?: string;
  steps: ProcessStep[];
}

export interface TwoColumnContentBlock {
  id: string;
  type: "twoColumnContent";
  eyebrow?: string;
  heading: string;
  leftCol: {
    heading: string;
    text: string;
    points?: string[];
  };
  rightCol: {
    heading: string;
    text: string;
    points?: string[];
  };
}

export interface SplitContentBlock {
  id: string;
  type: "splitContent";
  eyebrow?: string;
  heading: string;
  description: string;
  checklistHeading?: string;
  checkpoints: string[];
  action?: ActionLink;
}

export interface CalloutBlock {
  id: string;
  type: "callout";
  eyebrow?: string;
  title: string;
  text: string;
  tone?: "standard" | "highlight" | "notice";
  action?: ActionLink;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FaqAccordionBlock {
  id: string;
  type: "faqAccordion";
  eyebrow?: string;
  heading: string;
  description?: string;
  items: FaqItem[];
}

export interface FaqListBlock {
  id: string;
  type: "faqList";
  eyebrow?: string;
  heading: string;
  description?: string;
  items: FaqItem[];
}

export interface ComparisonRow {
  feature: string;
  values: (string | boolean)[];
  note?: string;
}

export interface ComparisonTableBlock {
  id: string;
  type: "comparisonTable";
  eyebrow?: string;
  heading: string;
  description?: string;
  headers: string[];
  rows: ComparisonRow[];
  note?: string;
}

export interface HostingComparisonPlan {
  name: string;
  tagline: string;
  bestFor: string;
  specs: Array<{ label: string; value: string }>;
  features: string[];
  setupTime: string;
  maintenanceNote: string;
  quoteActionHref: string;
}

export interface HostingComparisonBlock {
  id: string;
  type: "hostingComparison";
  eyebrow?: string;
  heading: string;
  description?: string;
  plans: HostingComparisonPlan[];
}

export interface TechDetailsBlock {
  id: string;
  type: "techDetails";
  eyebrow?: string;
  heading: string;
  description?: string;
  categories: Array<{
    name: string;
    items: string[];
  }>;
}

export interface RelatedServicesBlock {
  id: string;
  type: "relatedServices";
  eyebrow?: string;
  heading: string;
  description?: string;
  serviceSlugs: string[];
}

export interface RelatedArticlesBlock {
  id: string;
  type: "relatedArticles";
  eyebrow?: string;
  heading: string;
  description?: string;
  articleSlugs: string[];
}

export interface ArticleListBlock {
  id: string;
  type: "articleList";
  eyebrow?: string;
  heading: string;
  description?: string;
  limit?: number;
}

export interface BlogArticleBodyBlock {
  id: string;
  type: "blogArticleBody";
  articleSlug: string;
  sections: Array<{
    heading?: string;
    paragraphs: string[];
    keyTakeaway?: string;
    listItems?: string[];
  }>;
}

export interface BreadcrumbsBlock {
  id: string;
  type: "breadcrumbs";
  items: PageBreadcrumb[];
}

export interface ContactInfoBlock {
  id: string;
  type: "contactInfo";
  eyebrow?: string;
  heading: string;
  description?: string;
  showHours?: boolean;
  showAppointmentNotice?: boolean;
}

export interface BusinessHoursBlock {
  id: string;
  type: "businessHours";
  eyebrow?: string;
  heading: string;
  description?: string;
}

export interface ServiceAreaListBlock {
  id: string;
  type: "serviceAreaList";
  eyebrow?: string;
  heading: string;
  description?: string;
}

export interface SocialLinksBlock {
  id: string;
  type: "socialLinks";
  eyebrow?: string;
  heading: string;
  description?: string;
}

export interface CallToActionBlock {
  id: string;
  type: "callToAction";
  eyebrow?: string;
  heading: string;
  description: string;
  primaryAction: ActionLink;
  secondaryAction?: ActionLink;
  boxStyle?: "monochrome-dark" | "monochrome-bordered";
}

export interface FinalConversionBlock {
  id: string;
  type: "finalConversion";
  eyebrow?: string;
  heading: string;
  description: string;
  primaryAction: ActionLink;
  secondaryAction?: ActionLink;
}

export interface DividerBlock {
  id: string;
  type: "divider";
  style?: "solid" | "dashed" | "labeled";
  label?: string;
}

export interface NoticeBannerBlock {
  id: string;
  type: "noticeBanner";
  message: string;
  badge?: string;
  action?: ActionLink;
}

export interface EmptyStateBlock {
  id: string;
  type: "emptyState";
  title: string;
  message: string;
  action?: ActionLink;
}

export interface ContactFormBlock {
  id: string;
  type: "contactForm";
  eyebrow?: string;
  heading: string;
  description: string;
}

export interface AppointmentSchedulerBlock {
  id: string;
  type: "appointmentScheduler";
  eyebrow?: string;
  heading: string;
  description?: string;
}

export interface QuoteFormBlock {
  id: string;
  type: "quoteForm";
  eyebrow?: string;
  heading: string;
  description: string;
  defaultService?: string;
}

// Master ContentBlock Discriminated Union
export type ContentBlock =
  | HeroBlock
  | PageIntroBlock
  | RichTextBlock
  | HeadingParagraphBlock
  | ImageWithTextBlock
  | FeatureGridBlock
  | ServiceGridBlock
  | ServiceListBlock
  | IconTextListBlock
  | BenefitsListBlock
  | ProcessStepsBlock
  | TwoColumnContentBlock
  | SplitContentBlock
  | CalloutBlock
  | FaqAccordionBlock
  | FaqListBlock
  | ComparisonTableBlock
  | HostingComparisonBlock
  | TechDetailsBlock
  | RelatedServicesBlock
  | RelatedArticlesBlock
  | ArticleListBlock
  | BlogArticleBodyBlock
  | BreadcrumbsBlock
  | ContactInfoBlock
  | BusinessHoursBlock
  | ServiceAreaListBlock
  | SocialLinksBlock
  | CallToActionBlock
  | FinalConversionBlock
  | DividerBlock
  | NoticeBannerBlock
  | EmptyStateBlock
  | ContactFormBlock
  | QuoteFormBlock
  | AppointmentSchedulerBlock;

export type BlockType = ContentBlock["type"];

// ----------------------------------------------------
// Page and Article Records
// ----------------------------------------------------

export interface PageRecord {
  id: string;
  slug: string;
  path: string; // Canonical path, e.g. "/" or "/services/website-design"
  title: string;
  description: string;
  status: PublicationStatus;
  template?: "standard" | "article" | "landing" | "form" | "legal";
  seo?: PageSeo;
  breadcrumbs?: PageBreadcrumb[];
  blocks: ContentBlock[];
  publishedAt?: string;
  updatedAt?: string;
  redirectFrom?: string[];
}

export interface ServiceSummary {
  id: string;
  slug: string;
  path: string;
  title: string;
  shortDescription: string;
  category: "design-dev" | "cms-maintenance" | "hosting-infrastructure" | "seo-growth" | "automation";
  iconName: string;
  featured?: boolean;
}

export interface ArticleRecord {
  id: string;
  slug: string;
  path: string;
  title: string;
  summary: string;
  status: PublicationStatus;
  publishedAt: string;
  updatedAt?: string;
  author: {
    name: string;
    role: string;
  };
  readTime: string;
  category: string;
  tags: string[];
  relatedArticleSlugs?: string[];
  seo?: PageSeo;
}

export interface BusinessConfig {
  brandName: string;
  legalEntity: string;
  tradeNotice: string;
  siteUrl: string;
  email: string;
  emailLink: string;
  phone: string;
  phoneLink: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    fullFormatted: string;
  };
  primaryMarket: string;
  widerMarket: string;
  appointmentNotice: string;
  appointmentHoursTimezone: string;
  appointmentHours: Array<{
    day: string;
    hours: string;
    closed?: boolean;
  }>;
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  pricingPolicyNotice: string;
}
