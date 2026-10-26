import { PageRecord } from "@/lib/types";

function createSolutionPage(config: {
  slug: string;
  title: string;
  headline: string;
  lead: string;
  challengesText: string;
  challenges: string[];
  features: Array<{ title: string; description: string; highlight?: string }>;
  considerations: string[];
  recommendedServices: string[];
}): PageRecord {
  const path = `/solutions/${config.slug}`;
  return {
    id: `solution-page-${config.slug}`,
    slug: `solutions/${config.slug}`,
    path,
    title: `${config.title} Solutions | Your Web Page`,
    description: config.lead.slice(0, 155),
    status: "published",
    template: "standard",
    seo: {
      title: `${config.title} Solutions | Your Web Page`,
      description: config.lead.slice(0, 155),
      canonical: `https://yourwebpage.ca${path}`,
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/services" },
      { label: config.title, href: path },
    ],
    blocks: [
      {
        id: `${config.slug}-intro`,
        type: "pageIntro",
        eyebrow: "Industry Solution",
        heading: config.headline,
        lead: config.lead,
        metadata: [
          { label: "Focus", value: "Operational Efficiency" },
          { label: "Pricing", value: "Quote-Based" },
          { label: "Location", value: "Atlantic Canada" },
        ],
      },
      {
        id: `${config.slug}-challenges`,
        type: "twoColumnContent",
        eyebrow: "Industry Context",
        heading: "Common Operational Roadblocks",
        leftCol: {
          heading: "What Businesses Face",
          text: config.challengesText,
          points: config.challenges,
        },
        rightCol: {
          heading: "How Our Solutions Help",
          text: "We build websites specifically focused on solving these practical hurdles, saving administrative time and presenting your business clearly.",
          points: [
            "Tailored intake forms that ask the right questions upfront",
            "Fast mobile layouts for on-the-go customers",
            "Clean technical SEO so local customers can find your business",
          ],
        },
      },
      {
        id: `${config.slug}-features`,
        type: "benefitsList",
        eyebrow: "Key Features",
        heading: "High-Impact Website Features",
        description: "Website capabilities that deliver tangible value for this industry.",
        benefits: config.features,
      },
      {
        id: `${config.slug}-considerations`,
        type: "splitContent",
        eyebrow: "Planning",
        heading: "What to Plan Before Building",
        description: "Key elements to organize to ensure your website project succeeds:",
        checklistHeading: "Planning Checklist",
        checkpoints: config.considerations,
        action: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
      {
        id: `${config.slug}-related`,
        type: "relatedServices",
        heading: "Recommended Services for This Industry",
        description: "Services commonly combined to create complete web solutions.",
        serviceSlugs: config.recommendedServices,
      },
      {
        id: `${config.slug}-cta`,
        type: "finalConversion",
        eyebrow: "Start a Conversation",
        heading: `Ready to improve your ${config.title.toLowerCase()} website?`,
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  };
}

export const solutionsPages: PageRecord[] = [
  createSolutionPage({
    slug: "small-business",
    title: "Small Business",
    headline: "Professional web design and hosting for independent businesses.",
    lead: "Local small businesses need websites that look credible, explain services clearly, and make contacting the team effortless across smartphones and computers.",
    challengesText: "Many small businesses struggle with outdated templates, missing contact details, and slow sites that fail to represent their real quality of work.",
    challenges: [
      "Customers cannot quickly find operating hours, location, or direct phone numbers",
      "Template builders impose expensive recurring fees without adequate support",
      "Mobile visitors bounce due to small unreadable text and broken contact forms",
    ],
    features: [
      { title: "Direct Contact Clarity", description: "Prominent phone links, interactive maps, and mobile-friendly inquiry forms.", highlight: "Conversion" },
      { title: "Structured Local Information", description: "Clear business hours, appointment policies, and regional coverage lists.", highlight: "Local Presence" },
      { title: "Low Maintenance Burden", description: "Managed cloud hosting and proactive updates so you can focus on running your business.", highlight: "Hands-Free" },
    ],
    considerations: [
      "Gather clear descriptions of your core services and primary target customer",
      "Decide whether customers should call, email, or fill out a quote form",
      "Confirm accurate business hours and appointment policies",
    ],
    recommendedServices: ["website-design", "web-development", "local-seo", "website-maintenance"],
  }),

  createSolutionPage({
    slug: "trades",
    title: "Trades & Contractors",
    headline: "Websites for electricians, plumbers, builders, and trades professionals.",
    lead: "Homeowners and general contractors need to see proof of quality, licensing, and straightforward ways to request service estimates while on job sites.",
    challengesText: "Contractors are busy in the field and don't have time to answer calls for jobs outside their service area or gather incomplete job details.",
    challenges: [
      "Inquiries lack essential details (address, project scope, timeline), requiring multiple phone calls",
      "Websites lack proof of past craftsmanship or verified service categories",
      "Competitors dominate regional search results for key trade keywords",
    ],
    features: [
      { title: "Smart Project Intake Forms", description: "Collect photo uploads, job site addresses, and timeline estimates upfront.", highlight: "Pre-Qualified Leads" },
      { title: "Work Portfolio Galleries", description: "Clean, fast-loading project showcases categorized by residential and commercial work.", highlight: "Visual Proof" },
      { title: "One-Tap Mobile Calling", description: "Floating call buttons for emergency and urgent trade inquiries.", highlight: "Tap to Call" },
    ],
    considerations: [
      "Take clean photos of completed projects before, during, and after",
      "Specify your exact geographic service radius and travel policies",
      "Determine what questions your intake form must ask to qualify a lead",
    ],
    recommendedServices: ["website-design", "local-seo", "business-automation"],
  }),

  createSolutionPage({
    slug: "tourism-hospitality",
    title: "Tourism & Hospitality",
    headline: "Fast, captivating websites for seasonal attractions, inns, and tours.",
    lead: "In Prince Edward Island and Atlantic Canada, seasonal tourism businesses rely heavily on mobile-friendly websites that convey authentic charm and drive advance bookings.",
    challengesText: "Tourism visitors research destinations on mobile phones with spotty seasonal cellular reception, making fast page loads critical.",
    challenges: [
      "Heavy image galleries cause slow load times on mobile cellular networks",
      "Seasonal operating dates, rates, and cancellation policies are hard to locate",
      "Third-party booking widgets fail to render properly on small phone screens",
    ],
    features: [
      { title: "Optimized Visual Galleries", description: "High-resolution photos compressed with modern WebP technology for lightning-fast loads.", highlight: "Speed & Beauty" },
      { title: "Clear Seasonal Schedules", description: "Prominent seasonal dates, check-in details, and local attraction guides.", highlight: "Visitor Clarity" },
      { title: "Booking Engine Integration", description: "Clean integration with platforms like Checkfront, FareHarbor, or direct inquiries.", highlight: "Booking Integration" },
    ],
    considerations: [
      "High-quality seasonal photography showing accommodations or tour experiences",
      "Exact opening and closing dates for the upcoming operating season",
      "Clear policies regarding deposits, weather cancellations, and pets",
    ],
    recommendedServices: ["website-design", "speed-optimization", "api-integration"],
  }),

  createSolutionPage({
    slug: "ecommerce-businesses",
    title: "E-Commerce Businesses",
    headline: "Streamlined online retail storefronts built for conversion.",
    lead: "Whether selling artisanal local goods, specialty equipment, or digital products, your online store must load instantly, navigate cleanly, and process payments securely.",
    challengesText: "Complex multi-step checkout processes and sluggish product catalog filters cause customers to abandon their carts.",
    challenges: [
      "High checkout abandonment rates due to unexpected shipping calculations or slow scripts",
      "Managing product variants (sizes, colors, materials) becomes cumbersome",
      "Manual order fulfillment data entry creates shipping errors",
    ],
    features: [
      { title: "Frictionless Checkout", description: "Clean, mobile-optimized checkout supporting credit cards, Apple Pay, and Google Pay.", highlight: "Frictionless" },
      { title: "Real-Time Stock Tracking", description: "Automated inventory management preventing out-of-stock orders.", highlight: "Inventory Sync" },
      { title: "Automated Shipping Rules", description: "Accurate regional shipping rates calculated during checkout.", highlight: "Automated Shipping" },
    ],
    considerations: [
      "How many total product SKUs and categories will your store launch with?",
      "What shipping carrier accounts or flat-rate options will you offer?",
      "Do you have high-quality product images on neutral backgrounds?",
    ],
    recommendedServices: ["ecommerce", "web-development", "api-integration", "website-maintenance"],
  }),

  createSolutionPage({
    slug: "non-profits",
    title: "Non-Profits & Associations",
    headline: "Accessible, transparent websites for community organizations and non-profits.",
    lead: "Non-profit organizations, charities, and industry associations need websites that clearly articulate their mission, facilitate donations or memberships, and keep members informed.",
    challengesText: "Non-profits often operate with constrained budgets and volunteer teams who find technical site maintenance intimidating.",
    challenges: [
      "Staff struggle to publish meeting minutes, annual reports, and event notices",
      "Donation or membership forms look outdated or lack secure encryption",
      "Accessibility barriers prevent members with visual impairments from accessing documents",
    ],
    features: [
      { title: "Intuitive Content Publishing", description: "A simple CMS that allows volunteers to add news and event notices without code.", highlight: "Volunteer-Friendly" },
      { title: "Secure Donation Processing", description: "Integrated donation forms that process contributions with transparent receipts.", highlight: "Secure Donations" },
      { title: "WCAG 2.2 AA Accessibility", description: "Universal accessibility compliance so all community members can participate.", highlight: "Inclusive" },
    ],
    considerations: [
      "What key documents (bylaws, annual reports) must be downloadable for members?",
      "What payment or donation provider does the organization have registered?",
      "How many volunteers or staff members will need publishing privileges?",
    ],
    recommendedServices: ["website-design", "cms-integration", "accessibility"],
  }),
];
