import { PageRecord } from "@/lib/types";

// Helper to create consistent, high-utility service pages
function createServicePage(config: {
  slug: string;
  title: string;
  headline: string;
  lead: string;
  problemHeading: string;
  problemText: string;
  problemPoints: string[];
  benefitsHeading: string;
  benefits: Array<{ title: string; description: string; highlight?: string }>;
  processSteps: Array<{ stepNumber: string; title: string; description: string }>;
  considerations: string[];
  relatedSlugs: string[];
  faqs: Array<{ question: string; answer: string }>;
}): PageRecord {
  const path = `/services/${config.slug}`;
  return {
    id: `service-page-${config.slug}`,
    slug: `services/${config.slug}`,
    path,
    title: `${config.title} | Your Web Page`,
    description: config.lead.slice(0, 155),
    status: "published",
    template: "standard",
    seo: {
      title: `${config.title} | Services | Your Web Page`,
      description: config.lead.slice(0, 155),
      canonical: `https://yourwebpage.ca${path}`,
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: config.title, href: path },
    ],
    blocks: [
      {
        id: `${config.slug}-intro`,
        type: "pageIntro",
        eyebrow: "Website Service",
        heading: config.headline,
        lead: config.lead,
        metadata: [
          { label: "Pricing", value: "Custom Quote-Based" },
          { label: "Delivery", value: "Milestone-Driven" },
          { label: "Support", value: "Direct from Engineers" },
        ],
      },
      {
        id: `${config.slug}-problem`,
        type: "twoColumnContent",
        eyebrow: "The Problem We Address",
        heading: config.problemHeading,
        leftCol: {
          heading: "Common Challenges",
          text: config.problemText,
          points: config.problemPoints,
        },
        rightCol: {
          heading: "How We Help",
          text: "We provide structured engineering solutions designed specifically to eliminate these roadblocks, ensuring your site serves your customers effectively.",
          points: [
            "Tailored to your business operational workflow",
            "Clear documentation and maintainable code",
            "Direct communication without account manager layers",
          ],
        },
      },
      {
        id: `${config.slug}-benefits`,
        type: "benefitsList",
        eyebrow: "Value & Impact",
        heading: config.benefitsHeading,
        description: "Key advantages of our approach to this service.",
        benefits: config.benefits,
      },
      {
        id: `${config.slug}-process`,
        type: "processSteps",
        eyebrow: "Execution",
        heading: "What the Process Involves",
        description: "Clear steps from kickoff to delivery.",
        steps: config.processSteps,
      },
      {
        id: `${config.slug}-considerations`,
        type: "splitContent",
        eyebrow: "Client Preparation",
        heading: "What You Should Consider",
        description: "To make the most of this service and ensure a smooth project kickoff, consider these key factors:",
        checklistHeading: "Key Considerations",
        checkpoints: config.considerations,
        action: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
      {
        id: `${config.slug}-faqs`,
        type: "faqAccordion",
        eyebrow: "Frequently Asked Questions",
        heading: `Common Questions About ${config.title}`,
        items: config.faqs,
      },
      {
        id: `${config.slug}-related`,
        type: "relatedServices",
        heading: "Related Services",
        description: "Explore complementary services that frequently pair with this capability.",
        serviceSlugs: config.relatedSlugs,
      },
      {
        id: `${config.slug}-cta`,
        type: "finalConversion",
        eyebrow: "Get Started",
        heading: `Discuss your ${config.title.toLowerCase()} needs.`,
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
        secondaryAction: {
          label: "View All Services",
          href: "/services",
          variant: "outline",
        },
      },
    ],
  };
}

export const servicesPages: PageRecord[] = [
  createServicePage({
    slug: "website-design",
    title: "Website Design",
    headline: "Clean, purposeful website design focused on clarity.",
    lead: "We design websites that make it easy for your customers to understand what you do, find what they need, and get in touch. No cluttered templates or confusing gimmicks.",
    problemHeading: "Cluttered layouts confuse visitors and hurt conversions.",
    problemText: "Many websites try to do too much at once—overwhelming visitors with visual clutter, slow sliders, and buried contact information.",
    problemPoints: [
      "Visitors cannot quickly identify your core services or service area",
      "Mobile layouts look broken, cramped, or unreadable",
      "Buttons and forms are difficult to interact with on touchscreens",
    ],
    benefitsHeading: "Why Clear Design Matters",
    benefits: [
      {
        title: "Immediate Clarity",
        description: "Visitors understand your value proposition, services, and location within seconds.",
        highlight: "User-Focused",
      },
      {
        title: "Accessibility by Default",
        description: "High color contrast, legible typography, and semantic HTML ensure everyone can use your website.",
        highlight: "WCAG 2.2 AA",
      },
      {
        title: "Mobile-First Responsiveness",
        description: "Engineered specifically for smartphone screens without compromising the desktop experience.",
        highlight: "All Devices",
      },
    ],
    processSteps: [
      { stepNumber: "01", title: "Information Architecture", description: "Organizing your pages, navigation, and content hierarchy so visitors never feel lost." },
      { stepNumber: "02", title: "Design Systems & Wireframes", description: "Establishing boxy monochrome typography, layout grids, and clear call-to-action blocks." },
      { stepNumber: "03", title: "Interactive Review", description: "Reviewing actual responsive screens together to refine typography, spacing, and user flows." },
      { stepNumber: "04", title: "Final Asset Preparation", description: "Exporting clean vector graphics, optimized images, and responsive styling tokens." },
    ],
    considerations: [
      "Do you have high-resolution photos of your work, team, or facility?",
      "Who is your primary customer, and what is the single most common question they ask?",
      "What action do you want visitors to take (phone call, email, or quote form)?",
    ],
    relatedSlugs: ["web-development", "website-redesign", "seo"],
    faqs: [
      { question: "Do you use pre-made generic templates?", answer: "No. We design custom layouts tailored specifically to your content, business goals, and customer needs." },
      { question: "How long does a website design project typically take?", answer: "Timelines depend on scope and content availability, typically ranging from 2 to 6 weeks. We provide clear milestone dates in your quote." },
    ],
  }),

  createServicePage({
    slug: "web-development",
    title: "Web Development",
    headline: "Fast, accessible, and maintainable web development.",
    lead: "We build websites with clean, standards-compliant TypeScript and modern web frameworks. Every line of code is structured for performance, longevity, and security.",
    problemHeading: "Bloated code slows down sites and creates maintenance nightmares.",
    problemText: "Excessive third-party plugins and outdated themes cause sluggish load times, security vulnerabilities, and fragile websites that break during updates.",
    problemPoints: [
      "Slow load times drive potential customers away before the page even finishes loading",
      "Plugin conflicts cause unexpected layout shifts or form submission errors",
      "Rigid codebases make adding new features expensive and frustrating",
    ],
    benefitsHeading: "The Clean-Code Advantage",
    benefits: [
      { title: "Blazing Fast Speeds", description: "Server-side rendering and optimized bundles deliver instantaneous page transitions.", highlight: "Next.js" },
      { title: "Zero Plugin Dependency Bloat", description: "Custom, native implementations eliminate brittle third-party plugin vulnerabilities.", highlight: "Native Code" },
      { title: "Accessible Semantic Markup", description: "Proper ARIA roles, keyboard navigation, and semantic tags for universal access.", highlight: "Semantic HTML" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Architecture & Data Modeling", description: "Defining structured TypeScript models for your pages, services, and content." },
      { stepNumber: "02", title: "Component Development", description: "Building reusable, modular UI blocks and interactive form handling." },
      { stepNumber: "03", title: "Integration & Testing", description: "Hooking up APIs, forms, and validation rules; testing across browsers." },
      { stepNumber: "04", title: "Production Deployment", description: "Deploying to high-performance cloud hosting with SSL and caching configured." },
    ],
    considerations: [
      "What interactive features (calculators, quote tools, filters) does your site need?",
      "Does your development need to integrate with existing CRM or inventory software?",
      "Will your team require a headless CMS to update text independently?",
    ],
    relatedSlugs: ["website-design", "nextjs-development", "cms-integration"],
    faqs: [
      { question: "Will my website be mobile-friendly?", answer: "Yes, every website we build is responsive and thoroughly tested on mobile, tablet, and desktop screens." },
      { question: "Do you provide the source code?", answer: "Yes. Upon completion and final settlement, you own your custom code." },
    ],
  }),

  createServicePage({
    slug: "website-redesign",
    title: "Website Redesign",
    headline: "Revitalize your online presence without losing hard-earned SEO.",
    lead: "If your current website is difficult to update, looks outdated on modern screens, or fails to generate inquiries, we can rebuild it cleanly while protecting your search rankings.",
    problemHeading: "Outdated sites hurt credibility and lose search ground.",
    problemText: "Web standards, mobile usage habits, and search engine expectations have changed drastically. An old site often reflects poorly on an otherwise thriving business.",
    problemPoints: [
      "Broken mobile layouts frustrate customers browsing on phones",
      "Legacy software creates security risks and slow loading speeds",
      "Careless redesigns can accidentally destroy years of established Google search ranking",
    ],
    benefitsHeading: "Why Upgrade With Us",
    benefits: [
      { title: "SEO Preservation", description: "We map all historical URLs to new paths using 301 redirects to protect traffic.", highlight: "301 Mapping" },
      { title: "Modern Design Language", description: "Contemporary boxy monochrome aesthetics that look sharp and professional.", highlight: "Fresh UI" },
      { title: "Modern CMS Architecture", description: "Upgrade from clumsy legacy page builders to fast, intuitive content management.", highlight: "Easy Updates" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Content & SEO Audit", description: "Cataloging all existing URLs, indexed pages, and valuable content assets." },
      { stepNumber: "02", title: "New Structure & Design", description: "Creating a cleaner navigation hierarchy and responsive block-based layout." },
      { stepNumber: "03", title: "Content Migration & 301s", description: "Migrating approved text and configuring exact server-side redirect rules." },
      { stepNumber: "04", title: "Launch & Monitoring", description: "Switching DNS seamlessly and monitoring search consoles for zero crawl errors." },
    ],
    considerations: [
      "Do you have access to your current domain registrar and DNS settings?",
      "What parts of your current website are working well and must be retained?",
      "Are there pages or outdated services you want to remove entirely?",
    ],
    relatedSlugs: ["website-migration", "website-design", "seo"],
    faqs: [
      { question: "Will my current site experience downtime during the redesign?", answer: "No. We build and test the new website in a private staging environment. The cutover happens instantly with zero scheduled downtime." },
      { question: "Can we keep our existing domain and emails?", answer: "Yes. Your domain name and email accounts (Google Workspace, Microsoft 365, etc.) will remain completely unaffected." },
    ],
  }),

  createServicePage({
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    headline: "Straightforward online storefronts designed for smooth checkout.",
    lead: "Sell your products or services online with a clean, dependable e-commerce experience. We prioritize intuitive product browsing, fast cart flows, and secure payment processing.",
    problemHeading: "Complicated checkout flows cause high cart abandonment.",
    problemText: "Slow product pages, confusing navigation, and clunky mobile checkout forms cause prospective buyers to leave before completing their purchase.",
    problemPoints: [
      "Mobile shoppers struggle with small form inputs and hidden cart controls",
      "Payment gateways fail or throw confusing error messages",
      "Inventory updates are slow and error-prone",
    ],
    benefitsHeading: "E-Commerce Features",
    benefits: [
      { title: "Frictionless Checkout", description: "Streamlined single-page or stepped checkouts that minimize abandoned carts.", highlight: "High Conversion" },
      { title: "Secure Payment Processing", description: "PCI-compliant integration with Stripe, Square, or Moneris.", highlight: "Secure" },
      { title: "Inventory & Order Sync", description: "Real-time stock tracking and automated order notification webhooks.", highlight: "Automated" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Catalog Architecture", description: "Structuring categories, product variants, and tax/shipping configurations." },
      { stepNumber: "02", title: "Storefront Development", description: "Building responsive product grids, filters, and cart components." },
      { stepNumber: "03", title: "Gateway Integration", description: "Connecting payment providers in secure test mode and testing live transactions." },
      { stepNumber: "04", title: "Fulfillment Setup", description: "Configuring automated email receipts, shipping rules, and admin notifications." },
    ],
    considerations: [
      "How many total products and variations (size, color) do you offer?",
      "What payment provider do you currently use or prefer?",
      "How do you plan to handle shipping calculations (flat rate, live carrier rates, or local pickup)?",
    ],
    relatedSlugs: ["web-development", "api-integration", "website-maintenance"],
    faqs: [
      { question: "Do you charge a percentage of my sales?", answer: "No. We charge only for our design, development, and hosting work. You pay your standard merchant processing fees directly to your payment gateway." },
    ],
  }),

  createServicePage({
    slug: "web-applications",
    title: "Web Applications",
    headline: "Custom portals, internal tools, and client dashboards.",
    lead: "When off-the-shelf software doesn't fit your operational workflow, we build purpose-driven web applications that automate tasks, manage client accounts, and centralize business data.",
    problemHeading: "Spreadsheets and manual handoffs slow down growing teams.",
    problemText: "Managing client projects, scheduling, or data processing across scattered spreadsheets leads to human error, duplicated effort, and lost time.",
    problemPoints: [
      "Staff waste hours copying data between unrelated applications",
      "Clients have no central place to view invoices, files, or project statuses",
      "Security and permissions cannot be easily managed across spreadsheets",
    ],
    benefitsHeading: "Custom Application Benefits",
    benefits: [
      { title: "Tailored to Your Workflow", description: "Built around how your team actually operates, not a rigid generic mold.", highlight: "Custom" },
      { title: "Role-Based Access Control", description: "Granular permissions for administrators, employees, and clients.", highlight: "Secure" },
      { title: "Cloud Scalability", description: "Hosted on dedicated virtual machines or serverless infrastructure for reliability.", highlight: "Scalable" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Workflow Analysis", description: "Mapping out data entities, user roles, inputs, and desired outputs." },
      { stepNumber: "02", title: "Data Architecture", description: "Designing secure schemas, APIs, and business validation rules." },
      { stepNumber: "03", title: "UI Implementation", description: "Building responsive dashboards, tables, filters, and interaction forms." },
      { stepNumber: "04", title: "Deployment & Training", description: "Launching onto dedicated cloud VMs with database backups and admin onboarding." },
    ],
    considerations: [
      "What specific manual tasks take up the most time each week?",
      "What user roles will access the system (clients, staff, managers)?",
      "What external software must the portal integrate with?",
    ],
    relatedSlugs: ["serverless", "api-integration", "business-automation"],
    faqs: [
      { question: "Can a web app be hosted on shared hosting?", answer: "Usually web applications require dedicated virtual machines or serverless architectures to handle custom runtimes, background jobs, and databases." },
    ],
  }),

  createServicePage({
    slug: "website-repairs",
    title: "Website Repairs & Diagnostics",
    headline: "Fast troubleshooting and resolution for broken websites.",
    lead: "If your website is displaying errors, failing to send contact forms, suffering from broken styling, or loading unpredictably, we can diagnose the root cause and repair it properly.",
    problemHeading: "A broken website costs inquiries and damages trust.",
    problemText: "Silent form failures or crashed pages often go unnoticed for days, resulting in lost business inquiries and frustrated visitors.",
    problemPoints: [
      "Contact or quote forms fail silently without delivering emails to your team",
      "Mobile menus fail to open or content elements overlap and cut off text",
      "Security warnings or broken SSL certificates scare visitors away",
    ],
    benefitsHeading: "How We Diagnose & Fix",
    benefits: [
      { title: "Root Cause Resolution", description: "We do not apply fragile band-aids; we fix the underlying code or server configuration.", highlight: "Permanent Fix" },
      { title: "Security Auditing", description: "We inspect logs for malicious code, injected scripts, or compromised permissions.", highlight: "Hardening" },
      { title: "Full Regression Testing", description: "We verify forms, links, and styling across browsers before closing the ticket.", highlight: "Verified" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Triage & Reproduction", description: "Replicating the error in a safe test environment and reviewing server error logs." },
      { stepNumber: "02", title: "Root Cause Identification", description: "Pinpointing broken scripts, expired tokens, database locks, or CSS conflicts." },
      { stepNumber: "03", title: "Code Repair & Testing", description: "Applying clean, documented code fixes and testing form submissions." },
      { stepNumber: "04", title: "Preventative Hardening", description: "Recommending preventative steps or maintenance routines to avoid recurrence." },
    ],
    considerations: [
      "When did the issue first start occurring, and were any recent updates made?",
      "Do you have hosting control panel or FTP/SSH access credentials?",
      "Is the error continuous or intermittent?",
    ],
    relatedSlugs: ["website-maintenance", "website-security", "speed-optimization"],
    faqs: [
      { question: "Can you fix sites built by another developer?", answer: "Yes. We frequently repair, optimize, and take over maintenance for existing websites built by previous agencies or internal teams." },
    ],
  }),

  createServicePage({
    slug: "website-migration",
    title: "Website Migration",
    headline: "Seamless migration of domains, hosts, and data with zero downtime.",
    lead: "Moving your website between hosting providers, domain registrars, or web frameworks requires careful planning. We handle DNS, files, databases, and emails with surgical precision.",
    problemHeading: "Unplanned migrations risk downtime, lost emails, and SEO drops.",
    problemText: "Mishandled DNS changes can take business emails offline, while unmapped URLs cause 404 errors that erase years of search engine visibility.",
    problemPoints: [
      "Incorrect MX records break company email delivery during DNS cutover",
      "Missing URL redirects destroy search rankings and incoming referral links",
      "Database corruption or missing media files lead to broken website functionality",
    ],
    benefitsHeading: "Migration Safeguards",
    benefits: [
      { title: "Zero Email Interruption", description: "We carefully separate website DNS records from critical business email records.", highlight: "Email Safe" },
      { title: "Comprehensive 301 Redirects", description: "Every legacy URL is mapped to its new equivalent to preserve search equity.", highlight: "SEO Intact" },
      { title: "Full Data Verification", description: "All database tables, image media, and customer records are verified post-move.", highlight: "Zero Loss" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Pre-Migration Audit", description: "Exporting all existing DNS records, pages, and database tables." },
      { stepNumber: "02", title: "Target Environment Setup", description: "Configuring the new cloud hosting or dedicated VM with SSL certificates." },
      { stepNumber: "03", title: "Data Transfer & Staging", description: "Migrating content, establishing redirect rules, and testing behind a staging URL." },
      { stepNumber: "04", title: "DNS Cutover & Monitoring", description: "Updating DNS records with low TTLs and actively monitoring global propagation." },
    ],
    considerations: [
      "Where is your domain currently registered, and who controls the login?",
      "Are your business emails hosted with Google Workspace, Microsoft 365, or cPanel?",
      "Are you also changing your domain name or simply moving hosting providers?",
    ],
    relatedSlugs: ["shared-cloud-hosting", "dedicated-vm", "website-redesign"],
    faqs: [
      { question: "Will our email stop working during the migration?", answer: "No. We ensure your mail exchange (MX) and authentication records (SPF, DKIM) remain completely intact." },
    ],
  }),

  createServicePage({
    slug: "nextjs-development",
    title: "Next.js Development",
    headline: "High-performance React web applications built with the Next.js App Router.",
    lead: "We specialize in modern Next.js architecture, delivering lightning-fast server rendering, optimal Core Web Vitals, and modular component design for ambitious web applications.",
    problemHeading: "Heavy client-side JavaScript harms user experience and SEO.",
    problemText: "Traditional single-page apps (SPAs) force visitors to download huge JavaScript bundles before seeing anything, hurting mobile speed and search engine crawlability.",
    problemPoints: [
      "Slow initial paint times increase bounce rates on mobile devices",
      "Search engine crawlers struggle to discover dynamically injected content",
      "Complex state management makes ongoing maintenance fragile",
    ],
    benefitsHeading: "Next.js Benefits",
    benefits: [
      { title: "Server Components by Default", description: "HTML is generated on the server, shipping minimal JavaScript to the client browser.", highlight: "Fast Paint" },
      { title: "Superior SEO & Crawlability", description: "Complete, semantic HTML is available to search engines immediately.", highlight: "SEO Ready" },
      { title: "Single Dynamic Route Architecture", description: "Maintainable CMS-ready routes where page data drives the layout cleanly.", highlight: "Clean Code" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Route & Architecture Design", description: "Setting up typed App Router structure and clean block rendering systems." },
      { stepNumber: "02", title: "Server Component Construction", description: "Building data-driven components that keep heavy logic on the server." },
      { stepNumber: "03", title: "Interactive Client Enhancements", description: "Adding focused client components only where real interaction requires them." },
      { stepNumber: "04", title: "Cloud Optimization", description: "Deploying with edge caching, automated asset compression, and security headers." },
    ],
    considerations: [
      "Do your pages require frequent real-time user updates or mostly content publishing?",
      "Are you looking to replace an older React or WordPress site with Next.js?",
    ],
    relatedSlugs: ["web-development", "cms-integration", "serverless"],
    faqs: [
      { question: "Can Next.js connect to our existing database or CMS?", answer: "Yes, Next.js connects effortlessly to REST APIs, GraphQL endpoints, SQL databases, or headless CMS platforms." },
    ],
  }),

  createServicePage({
    slug: "cms-integration",
    title: "CMS Integration",
    headline: "Empower your team to manage content without touching code.",
    lead: "We integrate intuitive, secure content management systems that allow your staff to publish blog articles, edit service descriptions, and update hours quickly and safely.",
    problemHeading: "Relying on developers for minor text updates causes delays.",
    problemText: "Waiting days for simple phone number corrections, staff profile updates, or new blog posts wastes time and keeps your website out of date.",
    problemPoints: [
      "Team members are afraid of accidentally breaking the website layout",
      "Outdated contact details or seasonal hours mislead customers",
      "Publishing new articles requires technical coding knowledge",
    ],
    benefitsHeading: "CMS Integration Highlights",
    benefits: [
      { title: "Intuitive Visual Editing", description: "Clean, structured form fields and preview tools designed for non-technical editors.", highlight: "Easy to Use" },
      { title: "Layout Safeguards", description: "Structured data prevents content editors from accidentally breaking responsive layouts.", highlight: "Foolproof" },
      { title: "Draft & Publishing Workflows", description: "Review changes in staging or draft mode before publishing live.", highlight: "Controlled" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Schema Modeling", description: "Defining structured content types for pages, services, articles, and navigation." },
      { stepNumber: "02", title: "CMS Provisioning", description: "Configuring the headless or embedded CMS environment and user permissions." },
      { stepNumber: "03", title: "Front-End Wiring", description: "Connecting the content API to your website's reusable block renderer." },
      { stepNumber: "04", title: "Staff Onboarding", description: "Providing straightforward training and documentation on managing content." },
    ],
    considerations: [
      "How many team members will need editing permissions?",
      "What types of content will you update most frequently (blog, services, hours, photos)?",
    ],
    relatedSlugs: ["headless-cms", "wordpress", "web-development"],
    faqs: [
      { question: "Will we be locked into a specific CMS forever?", answer: "No. Because our website architecture uses a decoupled content-source interface, your front-end can switch CMS backends in the future with minimal changes." },
    ],
  }),

  createServicePage({
    slug: "headless-cms",
    title: "Headless CMS Architecture",
    headline: "Decouple your content from presentation for unmatched security and speed.",
    lead: "Headless content management separates where your content is written from where it is displayed. This eliminates security vulnerabilities common in monolithic CMS platforms while enabling instantaneous page loads.",
    problemHeading: "Monolithic CMS platforms suffer from security vulnerabilities and sluggish speeds.",
    problemText: "Traditional CMS platforms mix backend database operations, admin dashboards, and front-end theme rendering together, exposing large attack surfaces.",
    problemPoints: [
      "Constant vulnerability patches and database exploits threaten site integrity",
      "Database queries on every page hit slow down browsing for visitors",
      "Content is trapped in proprietary theme layouts that cannot be reused elsewhere",
    ],
    benefitsHeading: "The Headless Benefit",
    benefits: [
      { title: "Virtually Unhackable Front-Ends", description: "Public visitors browse static or server-rendered HTML with no direct access to admin databases.", highlight: "Hardened Security" },
      { title: "Global CDN Distribution", description: "Pre-rendered pages are served from edge cloud networks around the world.", highlight: "Zero Latency" },
      { title: "Omnichannel Reusability", description: "Content can be pulled into web pages, mobile apps, or digital signage from one central hub.", highlight: "Omnichannel" },
    ],
    processSteps: [
      { stepNumber: "01", title: "API-First Content Design", description: "Designing pure data schemas independent of any particular visual presentation." },
      { stepNumber: "02", title: "Headless Platform Setup", description: "Deploying and configuring Sanity, Contentful, Strapi, or Git-based CMS engines." },
      { stepNumber: "03", title: "Webhook & Build Triggers", description: "Configuring instant incremental static regeneration (ISR) whenever content is updated." },
      { stepNumber: "04", title: "Verification & Training", description: "Verifying live content previews and onboarding your marketing team." },
    ],
    considerations: [
      "Do you prefer a hosted cloud CMS (Sanity, Contentful) or a self-hosted open-source CMS (Strapi)?",
      "How frequently will content be updated throughout the day?",
    ],
    relatedSlugs: ["cms-integration", "nextjs-development", "website-security"],
    faqs: [
      { question: "Does headless mean our editors cannot preview their changes?", answer: "Not at all. Modern headless setups provide real-time preview URLs so editors can see exactly how content looks before hitting publish." },
    ],
  }),

  createServicePage({
    slug: "wordpress",
    title: "WordPress Support & Customization",
    headline: "Professional maintenance, speed tuning, and secure customization for WordPress.",
    lead: "If your business relies on WordPress, we provide specialized code repairs, theme optimizations, security hardening, and hosting migration to keep it running smoothly and securely.",
    problemHeading: "Neglected WordPress installations become slow and vulnerable.",
    problemText: "With dozens of plugin updates released weekly, unmonitored WordPress sites frequently suffer from plugin conflicts, security compromises, or bloated database tables.",
    problemPoints: [
      "Outdated plugins and core files create severe security vulnerabilities",
      "Heavy page builders like Elementor or Divi cause sluggish mobile load times",
      "Theme updates cause unexpected layout breakage and broken forms",
    ],
    benefitsHeading: "WordPress Services",
    benefits: [
      { title: "Performance De-Bloat", description: "Pruning redundant plugins, optimizing database queries, and configuring caching.", highlight: "Faster Loads" },
      { title: "Security Hardening", description: "Firewalls, malware scanning, login security, and automated database backups.", highlight: "Protected" },
      { title: "Custom Code Extensions", description: "Building clean custom blocks and hooks without relying on fragile third-party add-ons.", highlight: "Clean Code" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Site Health Audit", description: "Reviewing active plugins, database size, security logs, and speed bottlenecks." },
      { stepNumber: "02", title: "Staging Environment Setup", description: "Creating an isolated clone of your site to safely test updates and modifications." },
      { stepNumber: "03", title: "Remediation & Upgrades", description: "Applying core updates, resolving plugin conflicts, and optimizing assets." },
      { stepNumber: "04", title: "Continuous Monitoring", description: "Enrolling the site in daily backups, uptime checks, and security alerts." },
    ],
    considerations: [
      "Do you have admin access to your WordPress dashboard and web hosting control panel?",
      "Are you interested in keeping WordPress or eventually migrating to a modern Next.js setup?",
    ],
    relatedSlugs: ["website-repairs", "website-maintenance", "speed-optimization"],
    faqs: [
      { question: "Can you help migrate our site away from WordPress later?", answer: "Yes. We frequently export WordPress content and rebuild it on modern Next.js and headless CMS architecture." },
    ],
  }),

  createServicePage({
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    headline: "Ethical, technical search engine optimization built on solid architecture.",
    lead: "We structure your website so search engines can easily crawl, understand, and index your content. No tricks, spam tactics, or false promises—just sound technical architecture and helpful content.",
    problemHeading: "Technical errors prevent search engines from ranking good businesses.",
    problemText: "Search engines penalize websites that have broken links, missing meta descriptions, duplicate URLs, or slow mobile loading times.",
    problemPoints: [
      "Search engines index the wrong pages or miss new services entirely",
      "Missing Open Graph tags make shared links look empty or broken on social media",
      "Slow loading speeds directly degrade search ranking potential",
    ],
    benefitsHeading: "Our Technical SEO Foundation",
    benefits: [
      { title: "Clean Technical Architecture", description: "Server-side rendering, valid HTML semantics, and clear URL structures.", highlight: "Crawlable" },
      { title: "Rich Structured Data (Schema)", description: "JSON-LD schema for local businesses, breadcrumbs, articles, and services.", highlight: "Rich Snippets" },
      { title: "Dynamic XML Sitemaps", description: "Automated sitemap generation that updates whenever new pages are published.", highlight: "Automated" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Technical Crawl Audit", description: "Auditing indexability, canonical tags, redirects, and robots directives." },
      { stepNumber: "02", title: "Structured Data Implementation", description: "Injecting valid schema markup for your business entity, services, and articles." },
      { stepNumber: "03", title: "Content Optimization", description: "Refining heading structures (H1, H2), metadata, and internal link pathways." },
      { stepNumber: "04", title: "Search Console Setup", description: "Submitting verified sitemaps and monitoring index coverage." },
    ],
    considerations: [
      "What specific services or geographic areas are most important to your business?",
      "Do you have an active Google Search Console property configured?",
    ],
    relatedSlugs: ["local-seo", "speed-optimization", "website-design"],
    faqs: [
      { question: "Do you guarantee a #1 ranking on Google?", answer: "No. Ethical professionals never guarantee specific rankings because Google's algorithms are private and constantly changing. We guarantee strict adherence to Google's Search Essentials guidelines." },
    ],
  }),

  createServicePage({
    slug: "local-seo",
    title: "Local SEO for Atlantic Canada",
    headline: "Help customers in Prince Edward Island and the Maritimes find you.",
    lead: "Local search optimization connects your business with customers actively searching for services in Charlottetown, Summerside, PEI, and across Atlantic Canada.",
    problemHeading: "Local customers cannot find you when local signals are inconsistent.",
    problemText: "Mismatched business addresses, inconsistent phone numbers, and lack of regional structured data prevent local search engines from ranking your business accurately.",
    problemPoints: [
      "Competitors appear above you in regional local service searches",
      "Business name, address, and phone number (NAP) are inconsistent across directories",
      "Your website lacks clear regional landing pages for surrounding communities",
    ],
    benefitsHeading: "Local Search Advantages",
    benefits: [
      { title: "Exact Regional Targeting", description: "Content structured around your primary service areas in PEI and Atlantic Canada.", highlight: "Local Focus" },
      { title: "LocalBusiness Schema", description: "Search engines understand your exact physical address, appointment hours, and geo-coordinates.", highlight: "Local Schema" },
      { title: "Consistent NAP Verification", description: "Clean, consistent contact data across your website header, footer, and contact blocks.", highlight: "Consistent" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Regional Audit", description: "Evaluating current search visibility across Charlottetown, PEI, and the Maritimes." },
      { stepNumber: "02", title: "Local Schema Configuration", description: "Deploying LocalBusiness JSON-LD markup with appointment hours and coordinates." },
      { stepNumber: "03", title: "Regional Page Architecture", description: "Creating purposeful regional service-area pages with authentic local details." },
      { stepNumber: "04", title: "Directory Guidance", description: "Guiding verification of your Google Business Profile and local directory listings." },
    ],
    considerations: [
      "What specific towns or counties do you physically serve or travel to?",
      "Do you have a physical location clients visit (by appointment), or are you purely mobile?",
    ],
    relatedSlugs: ["seo", "website-design", "contactInfo"],
    faqs: [
      { question: "Do you claim physical offices in cities where you don't have one?", answer: "No. We believe in strict truth in advertising. We clearly identify our primary office in Charlottetown, PEI, while articulating the wider geographic areas our team serves." },
    ],
  }),

  createServicePage({
    slug: "speed-optimization",
    title: "Speed & Performance Optimization",
    headline: "Accelerate your website to delight visitors and satisfy search engines.",
    lead: "Page load speed directly impacts user retention and search visibility. We audit bottlenecks, compress assets, eliminate render-blocking scripts, and configure high-performance caching.",
    problemHeading: "Slow pages lose visitors within seconds.",
    problemText: "Over 50% of mobile visitors abandon a website that takes longer than three seconds to load. Bloated scripts and uncompressed images are almost always the cause.",
    problemPoints: [
      "Massive uncompressed images consume excessive mobile cellular data",
      "Third-party tracking scripts block the browser from rendering content",
      "Poor Core Web Vitals scores trigger search ranking penalties",
    ],
    benefitsHeading: "Performance Gains",
    benefits: [
      { title: "Instant Mobile Paint", description: "Pre-rendered HTML displays immediately on mobile connections.", highlight: "Fast LCP" },
      { title: "Modern Image Formats", description: "Automated conversion to modern WebP and AVIF formats with responsive dimensions.", highlight: "Optimized Media" },
      { title: "Lean Script Delivery", description: "Removal of redundant libraries and deferred execution of non-critical JavaScript.", highlight: "Clean Bundles" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Performance Diagnostics", description: "Auditing Lighthouse, WebPageTest, and real-world Core Web Vitals metrics." },
      { stepNumber: "02", title: "Asset Optimization", description: "Compressing images, subsetting web fonts, and inlining critical CSS." },
      { stepNumber: "03", title: "Code & Cache Tuning", description: "Refactoring render-blocking components and establishing strict caching headers." },
      { stepNumber: "04", title: "Benchmark Verification", description: "Re-testing metrics and documenting tangible speed improvements." },
    ],
    considerations: [
      "What third-party scripts (chat widgets, analytics, pixels) are currently installed?",
      "Where is your website currently hosted?",
    ],
    relatedSlugs: ["nextjs-development", "shared-cloud-hosting", "seo"],
    faqs: [
      { question: "Will optimizing speed change how our website looks?", answer: "No. Speed optimization focuses on asset compression, code bundling, and caching—the visual design remains identical." },
    ],
  }),

  createServicePage({
    slug: "website-maintenance",
    title: "Website Maintenance Plans",
    headline: "Proactive care, security patches, and backups to keep your site dependable.",
    lead: "Websites are not set-and-forget tools. Our ongoing maintenance plans provide regular software updates, uptime monitoring, security reviews, and priority technical assistance.",
    problemHeading: "Neglected websites eventually break or get compromised.",
    problemText: "Without regular maintenance, software libraries become obsolete, security holes emerge, certificates expire, and backup files fail when you need them most.",
    problemPoints: [
      "Unexpected downtime leaves customers unable to contact your business",
      "Expired SSL certificates trigger scary browser security warnings",
      "Lack of verified backups turns minor server failures into catastrophic data loss",
    ],
    benefitsHeading: "Maintenance Plan Inclusions",
    benefits: [
      { title: "Proactive Updates", description: "Regular updates to frameworks, security dependencies, and CMS components.", highlight: "Always Current" },
      { title: "Automated Cloud Backups", description: "Redundant, off-site backups stored securely and tested periodically for restorability.", highlight: "Tested Backups" },
      { title: "Continuous Monitoring", description: "Round-the-clock monitoring alerts us immediately if your site goes offline.", highlight: "24/7 Monitoring" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Onboarding & Health Baseline", description: "Auditing your current codebase, dependencies, server configurations, and backups." },
      { stepNumber: "02", title: "Monitoring Setup", description: "Configuring uptime pings, SSL expiration alerts, and error tracking." },
      { stepNumber: "03", title: "Scheduled Maintenance Cycles", description: "Applying tested patches, database optimizations, and security scans on staging first." },
      { stepNumber: "04", title: "Monthly Summary Reports", description: "Providing clear updates on updates performed, uptime records, and security status." },
    ],
    considerations: [
      "How frequently does your website content or catalog change?",
      "Do you currently have automated backups running, and have they ever been tested?",
    ],
    relatedSlugs: ["website-security", "shared-cloud-hosting", "website-repairs"],
    faqs: [
      { question: "Are content edits included in maintenance plans?", answer: "Yes, our maintenance agreements can be customized to include dedicated hours each month for text, image, and page updates." },
    ],
  }),

  createServicePage({
    slug: "website-security",
    title: "Website Security & Hardening",
    headline: "Safeguard your website, client inquiries, and server infrastructure.",
    lead: "We implement robust security practices: HTTPS encryption, Content Security Policies, sanitized inputs, rate-limiting, and firewall rules to protect your digital presence.",
    problemHeading: "Automated cyber bots constantly scan websites for vulnerabilities.",
    problemText: "Web attacks are rarely personal; automated bots probe thousands of sites daily looking for exposed admin portals, unpatched plugins, or open form endpoints.",
    problemPoints: [
      "Contact forms get abused by spam bots, flooding your company inbox",
      "Cross-site scripting (XSS) attacks compromise user trust",
      "Server misconfigurations expose sensitive environment variables",
    ],
    benefitsHeading: "Security Measures",
    benefits: [
      { title: "HTTP Security Headers", description: "Implementation of HSTS, CSP, X-Frame-Options, and Referrer-Policy headers.", highlight: "A+ Standards" },
      { title: "Spam & Bot Mitigation", description: "Honeypot fields and cryptographic rate limiting on all public form endpoints.", highlight: "Zero Spam" },
      { title: "Encrypted Data Transmission", description: "Modern TLS encryption and strict environment secret isolation.", highlight: "Encrypted" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Vulnerability Scan", description: "Evaluating open ports, SSL configurations, HTTP headers, and exposed endpoints." },
      { stepNumber: "02", title: "Header & Policy Hardening", description: "Configuring Content Security Policies and cross-origin resource isolation." },
      { stepNumber: "03", title: "Form & Input Sanitization", description: "Adding strict server-side validation schemas to block malicious payloads." },
      { stepNumber: "04", title: "Audit Verification", description: "Re-scanning with automated tools to verify A+ security grades." },
    ],
    considerations: [
      "Do your forms handle sensitive customer documents or financial details?",
      "Have you noticed an influx of automated spam in your contact forms recently?",
    ],
    relatedSlugs: ["website-maintenance", "serverless", "website-repairs"],
    faqs: [
      { question: "Can any developer guarantee 100% unbreakable security?", answer: "No. Ethical security engineers acknowledge that no system is completely immune. We implement defense-in-depth best practices that eliminate common attack vectors." },
    ],
  }),

  createServicePage({
    slug: "serverless",
    title: "Serverless Functions & APIs",
    headline: "On-demand cloud functions that scale instantly without server overhead.",
    lead: "Run backend code without the complexity of managing physical servers. Serverless functions handle form delivery, webhooks, authentication, and data transformations securely and affordably.",
    problemHeading: "Running a dedicated server for simple backend tasks is expensive and wasteful.",
    problemText: "Paying for a full virtual server just to process contact form submissions or webhook notifications introduces unnecessary maintenance and idle hosting costs.",
    problemPoints: [
      "Servers left unpatched accumulate security vulnerabilities",
      "Sudden traffic surges crash traditional single-threaded backends",
      "Fixed monthly server charges accrue even when traffic is low",
    ],
    benefitsHeading: "Serverless Advantages",
    benefits: [
      { title: "Instant Autoscaling", description: "Functions execute instantly on demand, scaling effortlessly from zero to thousands of requests.", highlight: "Autoscaling" },
      { title: "Isolated Execution", description: "Each request runs in a short-lived sandbox, preventing memory leaks and cross-request contamination.", highlight: "Sandboxed" },
      { title: "Cost Efficiency", description: "You pay only for compute time consumed during active execution.", highlight: "Cost-Effective" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Endpoint Specification", description: "Defining inputs, schemas, and authentication methods for required cloud functions." },
      { stepNumber: "02", title: "Function Engineering", description: "Writing lightweight TypeScript handlers with comprehensive error boundaries." },
      { stepNumber: "03", title: "Security & Secret Isolation", description: "Storing private API keys securely in cloud secret managers." },
      { stepNumber: "04", title: "Integration Testing", description: "Testing throughput, retry handling, and response timing under load." },
    ],
    considerations: [
      "What external APIs or databases will your functions interact with?",
      "Are your tasks short-lived (under 30 seconds) or long-running computational batches?",
    ],
    relatedSlugs: ["cron-jobs", "api-integration", "nextjs-development"],
    faqs: [
      { question: "Are serverless functions suitable for long background jobs?", answer: "Serverless functions excel at tasks taking under a minute. For hours-long data processing, a dedicated VM or container worker is usually more suitable." },
    ],
  }),

  createServicePage({
    slug: "cron-jobs",
    title: "Automated Scheduled Tasks (Cron Jobs)",
    headline: "Reliable background automation for recurring business routines.",
    lead: "Automate repetitive tasks with scheduled cloud jobs: daily sales summaries, automated database cleanups, inventory synchronization, and scheduled email alerts.",
    problemHeading: "Manual recurring tasks invite human error and eat up staff time.",
    problemText: "Forgetting to run daily backups, sync inventory, or send scheduled reminder emails can cause operational headaches and customer dissatisfaction.",
    problemPoints: [
      "Staff waste time performing repetitive manual database exports",
      "Missed tasks cause desynchronized inventory records or delayed customer alerts",
      "Local server cron jobs fail silently when an operating system crashes",
    ],
    benefitsHeading: "Scheduled Cloud Automation",
    benefits: [
      { title: "Guaranteed Execution", description: "Cloud schedulers trigger tasks with automated retry mechanisms and failure alerts.", highlight: "Reliable" },
      { title: "Failure Notification", description: "If a scheduled job encounters an unexpected error, our team is alerted immediately.", highlight: "Alerting" },
      { title: "Detailed Audit Logs", description: "Timestamped logs of every execution run for complete transparency.", highlight: "Audited" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Task Discovery", description: "Identifying manual recurring routines and defining exact schedule intervals." },
      { stepNumber: "02", title: "Script Engineering", description: "Developing robust, idempotent background scripts in TypeScript." },
      { stepNumber: "03", title: "Cloud Scheduler Setup", description: "Configuring cloud cron triggers with secure token authentication." },
      { stepNumber: "04", title: "Monitoring & Verification", description: "Simulating edge cases and testing automated error alert webhooks." },
    ],
    considerations: [
      "What schedule interval is required (hourly, nightly, weekly)?",
      "What should happen if an external third-party API is temporarily unreachable during a run?",
    ],
    relatedSlugs: ["serverless", "business-automation", "api-integration"],
    faqs: [
      { question: "How do we know if a scheduled cron job failed?", answer: "We implement webhook alerting that sends an instant notification to your team or ours if a scheduled task fails." },
    ],
  }),

  createServicePage({
    slug: "api-integration",
    title: "API Integrations",
    headline: "Seamlessly connect your website to your essential business tools.",
    lead: "Eliminate double-entry by integrating your website with CRMs, payment processors, shipping carriers, email providers, and accounting software.",
    problemHeading: "Siloed business software creates friction and manual data entry.",
    problemText: "When your website doesn't communicate with your internal business tools, staff are forced to manually copy information across systems, creating bottlenecks.",
    problemPoints: [
      "Contact inquiries sit in inboxes instead of automatically creating CRM leads",
      "Orders placed on the website must be re-keyed into accounting software",
      "Shipping labels must be manually generated instead of pulled via API",
    ],
    benefitsHeading: "Integration Advantages",
    benefits: [
      { title: "Single Source of Truth", description: "Data synchronizes automatically between your website and back-office tools.", highlight: "Synchronized" },
      { title: "Zero Manual Re-Entry", description: "Save hours of staff time each week by automating data transfer.", highlight: "Time Saving" },
      { title: "Secure Token Handling", description: "Private credentials remain isolated on server routes, never exposed to visitors.", highlight: "Protected" },
    ],
    processSteps: [
      { stepNumber: "01", title: "API Audit & Schema Mapping", description: "Reviewing third-party API documentation, rate limits, and authentication protocols." },
      { stepNumber: "02", title: "Secure Middleware Setup", description: "Building server-side API proxy handlers with retry logic." },
      { stepNumber: "03", title: "End-to-End Testing", description: "Simulating transactions and form payloads in sandbox environments." },
      { stepNumber: "04", title: "Production Deployment", description: "Deploying secure webhooks and documenting integration endpoints." },
    ],
    considerations: [
      "What software platforms (e.g. QuickBooks, HubSpot, Mailchimp, Stripe) do you need to connect?",
      "Do your current software subscriptions include API access?",
    ],
    relatedSlugs: ["business-automation", "serverless", "ecommerce"],
    faqs: [
      { question: "What happens if a third-party service is down?", answer: "We build retry queues and error-logging so requests are safely queued and re-attempted rather than lost." },
    ],
  }),

  createServicePage({
    slug: "business-automation",
    title: "Business Process Automation",
    headline: "Connect web forms directly to your operational workflows.",
    lead: "Transform your website from a passive brochure into an active operational asset. We connect intake forms to automated notifications, PDF generators, and workflow queues.",
    problemHeading: "Manual administrative tasks drain productive business hours.",
    problemText: "Managing client onboarding, quote requests, and follow-ups by hand leads to slow response times and missed opportunities.",
    problemPoints: [
      "Prospects wait hours or days for an initial response to their inquiry",
      "Staff spend valuable time typing repetitive email confirmations",
      "Project files and client details get lost in scattered inboxes",
    ],
    benefitsHeading: "Automation Benefits",
    benefits: [
      { title: "Instant Customer Confirmations", description: "Send automated, personalized email confirmations the instant a form is submitted.", highlight: "Immediate" },
      { title: "Automatic Task Routing", description: "Direct inquiries to the right team member based on service selection.", highlight: "Organized" },
      { title: "Reduced Human Error", description: "Consistent data capture without transcription mistakes.", highlight: "Accurate" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Process Mapping", description: "Documenting the exact sequence of events after a customer submits an inquiry." },
      { stepNumber: "02", title: "Logic & Webhook Engineering", description: "Connecting form handlers to cloud automation triggers." },
      { stepNumber: "03", title: "Template Design", description: "Designing clear, professional automated email receipts and internal alerts." },
      { stepNumber: "04", title: "Verification & Handover", description: "Testing all conditional routing pathways and training your team." },
    ],
    considerations: [
      "What is the single most repetitive task your team performs after receiving an inquiry?",
      "What notifications does your team prefer (email, SMS, or Slack)?",
    ],
    relatedSlugs: ["api-integration", "cron-jobs", "quoteForm"],
    faqs: [
      { question: "Will automated emails feel robotic to our customers?", answer: "No. We write natural, professional copy that reassures your customers their message was received and clearly explains what happens next." },
    ],
  }),

  createServicePage({
    slug: "ai-integration",
    title: "AI Integration & Intelligent Tools",
    headline: "Sensible, secure AI integrations that solve real business problems.",
    lead: "We integrate approved artificial intelligence models and semantic search where they provide genuine operational value: answering FAQs from your verified documents, categorizing inquiries, or summarizing reports.",
    problemHeading: "Hype-driven AI often creates confusing, inaccurate user experiences.",
    problemText: "Many websites slap generic chatbots onto their pages that hallucinate inaccurate information or frustrate customers seeking human assistance.",
    problemPoints: [
      "Uncontrolled chatbots invent inaccurate pricing or service guarantees",
      "Visitors struggle to bypass generic AI bots to reach actual staff",
      "Customer data is inadvertently exposed to public AI training sets",
    ],
    benefitsHeading: "Our Pragmatic AI Approach",
    benefits: [
      { title: "Strict Grounding on Your Data", description: "AI responses are restricted to your verified documentation and service policies.", highlight: "Accurate" },
      { title: "Seamless Human Escalation", description: "Clear, immediate options for visitors to connect directly with your staff.", highlight: "Human-First" },
      { title: "Server-Side Privacy Protection", description: "Customer prompts are processed securely without training public models.", highlight: "Private" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Use Case Assessment", description: "Evaluating whether an AI solution is genuinely appropriate or if traditional logic is better." },
      { stepNumber: "02", title: "Knowledge Base Preparation", description: "Curating verified business documentation, FAQs, and service parameters." },
      { stepNumber: "03", title: "Server-Side Integration", description: "Building secure API routes with strict guardrails and prompt engineering." },
      { stepNumber: "04", title: "Safety & Output Testing", description: "Thoroughly stress-testing responses against adversarial and unexpected queries." },
    ],
    considerations: [
      "What specific questions or repetitive inquiries take up the most time for your staff?",
      "Do you have verified written documentation covering your business policies?",
    ],
    relatedSlugs: ["business-automation", "api-integration", "live-chat"],
    faqs: [
      { question: "Will the AI make up answers it doesn't know?", answer: "No. We configure strict fallback boundaries: if the system cannot verify an answer directly from your documentation, it gracefully escalates to a contact form." },
    ],
  }),

  createServicePage({
    slug: "live-chat",
    title: "Live Chat & Customer Messaging",
    headline: "Lightweight, privacy-respecting customer messaging.",
    lead: "Connect with prospective clients while they browse your website. We implement streamlined chat tools that deliver messages directly to your email, phone, or dashboard without slowing down your site.",
    problemHeading: "Heavy chat widgets slow down websites and track visitors.",
    problemText: "Typical third-party chat widgets download megabytes of tracking scripts, severely slowing down page loads and compromising visitor privacy.",
    problemPoints: [
      "Heavy chat scripts trigger major Core Web Vitals speed penalties",
      "Third-party providers sell visitor tracking data or inject intrusive cookies",
      "Chat widgets display 'online' when no one is available to answer",
    ],
    benefitsHeading: "Modern Messaging Benefits",
    benefits: [
      { title: "Zero Speed Degradation", description: "Lightweight scripts that load asynchronously without delaying initial page paint.", highlight: "Ultra-Light" },
      { title: "Omnichannel Routing", description: "Receive notifications via email, mobile SMS, or your existing team messaging tool.", highlight: "Direct Alerts" },
      { title: "Honest Availability Hours", description: "Clear visual indicators showing when your team is available to respond.", highlight: "Clear Hours" },
    ],
    processSteps: [
      { stepNumber: "01", title: "Provider Evaluation", description: "Selecting a lightweight, privacy-focused messaging platform that fits your workflow." },
      { stepNumber: "02", title: "Custom Widget Styling", description: "Styling the chat interface to match our clean monochrome design system." },
      { stepNumber: "03", title: "Notification Routing", description: "Routing incoming conversations to your team's preferred communication channels." },
      { stepNumber: "04", title: "Automated Off-Hours Handling", description: "Configuring helpful offline message collection forms when staff are away." },
    ],
    considerations: [
      "Who on your team will be responsible for answering live messages?",
      "What hours will live chat be staffed versus collecting offline inquiries?",
    ],
    relatedSlugs: ["contact-info", "business-hours", "business-automation"],
    faqs: [
      { question: "What happens when a customer sends a message after hours?", answer: "The widget smoothly transitions into an inquiry form, collecting the customer's email and question for your team to reply to during business hours." },
    ],
  }),
];
