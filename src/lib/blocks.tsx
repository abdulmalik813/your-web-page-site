import React from "react";
import { ContentBlock } from "@/lib/types";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import {
  PageIntroBlock,
  RichTextBlock,
  HeadingParagraphBlock,
  TwoColumnContentBlock,
  SplitContentBlock,
  BenefitsListBlock,
  CalloutBlock,
  DividerBlock,
  NoticeBannerBlock,
  EmptyStateBlock,
} from "@/components/blocks/ContentBlocks";
import {
  FeatureGridBlock,
  ServiceGridBlock,
  ServiceAreaListBlock,
  SocialLinksBlock,
} from "@/components/blocks/GridBlocks";
import { ProcessStepsBlock } from "@/components/blocks/ProcessStepsBlock";
import {
  FaqAccordionBlock,
  FaqListBlock,
  ComparisonTableBlock,
} from "@/components/blocks/FaqAndComparisonBlocks";
import {
  BreadcrumbsBlock,
  ArticleListBlock,
  BlogArticleBodyBlock,
  RelatedArticlesBlock,
  RelatedServicesBlock,
} from "@/components/blocks/BlogBlocks";
import {
  ContactInfoBlock,
  BusinessHoursBlock,
  ContactFormBlock,
  QuoteFormBlock,
  CallToActionBlock,
  FinalConversionBlock,
  AppointmentSchedulerBlock,
} from "@/components/blocks/FormAndContactBlocks";

/**
 * Maps a single typed ContentBlock to its dedicated React component.
 * Safely handles unknown or invalid block types without crashing.
 */
function renderBlock(block: ContentBlock) {
  switch (block.type) {
    case "hero":
      return <HeroBlock block={block} />;

    case "pageIntro":
      return <PageIntroBlock block={block} />;

    case "richText":
      return <RichTextBlock block={block} />;

    case "headingParagraph":
      return <HeadingParagraphBlock block={block} />;

    case "twoColumnContent":
      return <TwoColumnContentBlock block={block} />;

    case "splitContent":
      return <SplitContentBlock block={block} />;

    case "benefitsList":
      return <BenefitsListBlock block={block} />;

    case "callout":
      return <CalloutBlock block={block} />;

    case "featureGrid":
      return <FeatureGridBlock block={block} />;

    case "serviceGrid":
      return <ServiceGridBlock block={block} />;

    case "processSteps":
      return <ProcessStepsBlock block={block} />;

    case "faqAccordion":
      return <FaqAccordionBlock block={block} />;

    case "faqList":
      return <FaqListBlock block={block} />;

    case "comparisonTable":
    case "hostingComparison":
      // Both table types use the structured ComparisonTableBlock
      return <ComparisonTableBlock block={block as any} />;

    case "breadcrumbs":
      return <BreadcrumbsBlock block={block} />;

    case "articleList":
      return <ArticleListBlock block={block} />;

    case "blogArticleBody":
      return <BlogArticleBodyBlock block={block} />;

    case "relatedArticles":
      return <RelatedArticlesBlock block={block} />;

    case "relatedServices":
      return <RelatedServicesBlock block={block} />;

    case "contactInfo":
      return <ContactInfoBlock block={block} />;

    case "businessHours":
      return <BusinessHoursBlock block={block} />;

    case "serviceAreaList":
      return <ServiceAreaListBlock block={block} />;

    case "socialLinks":
      return <SocialLinksBlock block={block} />;

    case "callToAction":
      return <CallToActionBlock block={block} />;

    case "finalConversion":
      return <FinalConversionBlock block={block} />;

    case "divider":
      return <DividerBlock block={block} />;

    case "noticeBanner":
      return <NoticeBannerBlock block={block} />;

    case "emptyState":
      return <EmptyStateBlock block={block} />;

    case "contactForm":
      return <ContactFormBlock block={block} />;

    case "quoteForm":
      return <QuoteFormBlock block={block} />;

    case "appointmentScheduler":
      return <AppointmentSchedulerBlock block={block} />;

    default: {
      const unknownBlock = block as any;
      console.warn(`[BlockRenderer] Unknown or unhandled block type: "${unknownBlock?.type}"`);
      return (
        <div className="p-4 border border-dashed border-red-500 bg-red-500/10 text-xs font-mono text-red-600 dark:text-red-400">
          Unknown block type: {unknownBlock?.type} (ID: {unknownBlock?.id})
        </div>
      );
    }
  }
}

/**
 * BlockRenderer Component
 * 
 * Central block dispatcher that renders an ordered list of typed blocks.
 * Preserves block sequence, uses stable keys, and supports server-rendered execution.
 */
export function BlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  if (!blocks || blocks.length === 0) {
    return (
      <div className="p-12 text-center text-xs font-mono text-[var(--text-muted)]">
        No content blocks defined for this page.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      {blocks.map((block, index) => {
        const key = block.id || `block-${block.type}-${index}`;
        return <React.Fragment key={key}>{renderBlock(block)}</React.Fragment>;
      })}
    </div>
  );
}

export default BlockRenderer;
