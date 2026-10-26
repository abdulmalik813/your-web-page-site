import { PageRecord } from "@/lib/types";
import { allArticlesList } from "./blog-articles";

// Build rich, helpful article page records for each of the 10 published articles
export const articlePages: PageRecord[] = [
  // 1. How to Plan a Business Website
  {
    id: "page-article-plan-business-website",
    slug: "blog/how-to-plan-a-business-website",
    path: "/blog/how-to-plan-a-business-website",
    title: "How to Plan a Business Website | Your Web Page",
    description: "A practical guide to defining business goals, structuring page navigation, gathering content, and preparing for web development without costly surprises.",
    status: "published",
    template: "article",
    seo: {
      title: "How to Plan a Business Website | Your Web Page",
      description: "Step-by-step guidance on structuring your business website, clarifying user objectives, and gathering content before starting development.",
      canonical: "https://yourwebpage.ca/blog/how-to-plan-a-business-website",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "How to Plan a Business Website", href: "/blog/how-to-plan-a-business-website" },
    ],
    blocks: [
      {
        id: "article-plan-body",
        type: "blogArticleBody",
        articleSlug: "how-to-plan-a-business-website",
        sections: [
          {
            heading: "Start with the Problem Your Website Must Solve",
            paragraphs: [
              "Before choosing colors, layouts, or technical frameworks, the most important question any business owner can ask is: what specific job should this website do?",
              "For some businesses, the primary goal is simple lead qualification—ensuring that prospective clients who call or submit an inquiry form have the budget, timeline, and location that match your services. For others, the goal is answering routine questions to reduce repetitive phone calls during busy hours.",
              "When you clarify your primary objective upfront, every subsequent design and architectural decision becomes straightforward.",
            ],
            keyTakeaway: "A website is an operational business asset, not merely a digital business card. Design around your single most valuable customer action.",
          },
          {
            heading: "Map Your Information Architecture First",
            paragraphs: [
              "Information architecture is the formal name for how your pages, menus, and content sections are structured. Keep your navigation clean and predictable.",
              "Avoid jargon in main menu labels. A visitor should instantly recognize what is behind a link like 'Services', 'About', or 'Contact'. Grouping related services into logical sub-categories prevents visitors from feeling overwhelmed by endless menu items.",
            ],
            listItems: [
              "Identify your 4 to 6 top-level navigation pages",
              "Group specialized services into dedicated sub-pages",
              "Ensure contact and quote options are visible on every view",
            ],
          },
          {
            heading: "Gather Real Content Before Starting Code",
            paragraphs: [
              "One of the most common causes of project delays is waiting for copy and photos while development is already underway. Designing around placeholder 'Lorem Ipsum' text often produces layouts that break when real headings and paragraphs are plugged in.",
              "Take the time to write straightforward, honest descriptions of what you do, who you serve, and how customers can reach you. Genuine photos of your team, shop, or past work build vastly more trust than generic stock imagery.",
            ],
            keyTakeaway: "Content drives design, not the other way around. Assemble your core messages before laying out pixels.",
          },
          {
            heading: "Plan for Future Content Management",
            paragraphs: [
              "Consider how your team will update text, seasonal hours, or staff bios once the site launches. Connecting a headless CMS or structured content system ensures you can make updates independently without waiting on an engineer for minor edits.",
            ],
          },
        ],
      },
      {
        id: "article-plan-related",
        type: "relatedArticles",
        heading: "Related Articles",
        description: "Continue reading more about planning and maintaining business websites.",
        articleSlugs: [
          "what-to-consider-before-redesigning-a-website",
          "how-a-cms-makes-website-updates-easier",
        ],
      },
      {
        id: "article-plan-cta",
        type: "finalConversion",
        eyebrow: "Project Planning",
        heading: "Ready to plan your new business website?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 2. What to Consider Before Redesigning a Website
  {
    id: "page-article-redesign",
    slug: "blog/what-to-consider-before-redesigning-a-website",
    path: "/blog/what-to-consider-before-redesigning-a-website",
    title: "What to Consider Before Redesigning a Website | Your Web Page",
    description: "How to assess what works on your current site, safeguard existing search rankings with 301 redirects, and keep customer disruptions to a minimum.",
    status: "published",
    template: "article",
    seo: {
      title: "What to Consider Before Redesigning a Website | Your Web Page",
      description: "Critical factors to evaluate before launching a website redesign, from preserving SEO rankings to structuring content.",
      canonical: "https://yourwebpage.ca/blog/what-to-consider-before-redesigning-a-website",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "What to Consider Before Redesigning", href: "/blog/what-to-consider-before-redesigning-a-website" },
    ],
    blocks: [
      {
        id: "article-redesign-body",
        type: "blogArticleBody",
        articleSlug: "what-to-consider-before-redesigning-a-website",
        sections: [
          {
            heading: "Audit What is Already Working",
            paragraphs: [
              "When a website begins looking dated, it is tempting to throw everything out and start fresh. However, an established website often possesses valuable assets: indexed pages that rank well on search engines, backlinks from local directories, and familiar URLs that existing clients have bookmarked.",
              "Before writing a single line of new code, perform a thorough content audit. Identify your top-performing pages and preserve their core headings and topics.",
            ],
            keyTakeaway: "Never discard an old website without cataloging the URLs and search keywords that currently drive traffic.",
          },
          {
            heading: "Map 301 Redirects Carefully",
            paragraphs: [
              "The single biggest technical mistake in website redesigns is changing URL paths without setting up server-side 301 redirects. If your old page was `/services/residential-wiring.html` and your new page is `/services/residential-wiring`, search engines and external links will hit a 404 error unless a 301 redirect is configured.",
              "A comprehensive redirect map ensures that every historical link seamlessly transfers its authority and visitors to the new location.",
            ],
          },
          {
            heading: "Preserve Email Routing and Domain Ownership",
            paragraphs: [
              "A website redesign frequently coincides with moving to a better cloud hosting provider. Ensure your domain registrar logins are secure and your DNS records (specifically MX, SPF, and DKIM records for email services like Google Workspace or Microsoft 365) are fully documented before changing nameservers.",
            ],
            listItems: [
              "Export all current DNS records before initiating changes",
              "Maintain low TTL (Time to Live) values 48 hours prior to launch",
              "Verify test emails immediately following DNS updates",
            ],
          },
        ],
      },
      {
        id: "article-redesign-cta",
        type: "finalConversion",
        eyebrow: "Website Redesign",
        heading: "Planning a redesign for your business site?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 3. What Website Hosting Does
  {
    id: "page-article-what-hosting-does",
    slug: "blog/what-website-hosting-does",
    path: "/blog/what-website-hosting-does",
    title: "What Website Hosting Does | Plain-Language Guide",
    description: "A straightforward, plain-language breakdown of web hosting, DNS name resolution, SSL security certificates, and cloud infrastructure.",
    status: "published",
    template: "article",
    seo: {
      title: "What Website Hosting Does | Your Web Page",
      description: "Understand the fundamentals of cloud web hosting, domain servers, SSL certificates, and file storage for your business website.",
      canonical: "https://yourwebpage.ca/blog/what-website-hosting-does",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "What Website Hosting Does", href: "/blog/what-website-hosting-does" },
    ],
    blocks: [
      {
        id: "article-hosting-body",
        type: "blogArticleBody",
        articleSlug: "what-website-hosting-does",
        sections: [
          {
            heading: "Demystifying Web Hosting in Plain English",
            paragraphs: [
              "At its core, a website is a collection of files: HTML documents, styling sheets, images, and server-side code. For people around the world to view those files, they must reside on a computer that is connected to the internet 24 hours a day, 7 days a week.",
              "That connected computer is called a web server, and renting secure space on high-speed cloud infrastructure is what website hosting provides.",
            ],
            keyTakeaway: "Hosting is the digital real estate where your website files live and run 24/7.",
          },
          {
            heading: "The Role of DNS: Connecting Names to Numbers",
            paragraphs: [
              "Every server on the internet has a numerical IP address (like 192.0.2.1). Because humans remember business names rather than long numbers, the Domain Name System (DNS) acts as the internet's phonebook, translating your domain name (yourwebpage.ca) into the exact server where your site is hosted.",
            ],
          },
          {
            heading: "SSL Certificates and Security",
            paragraphs: [
              "Modern hosting requires automatic SSL/TLS certificates. These certificates encrypt the data flowing between your visitor's browser and your hosting server, protecting form submissions and preventing browsers from displaying 'Not Secure' warnings.",
            ],
          },
        ],
      },
      {
        id: "article-hosting-cta",
        type: "callToAction",
        eyebrow: "Cloud Hosting",
        heading: "Looking for dependable cloud hosting?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Explore Hosting Options",
          href: "/hosting",
        },
      },
    ],
  },

  // 4. Shared Cloud Hosting vs a Dedicated VM
  {
    id: "page-article-shared-vs-dedicated",
    slug: "blog/shared-cloud-hosting-vs-a-dedicated-vm",
    path: "/blog/shared-cloud-hosting-vs-a-dedicated-vm",
    title: "Shared Cloud Hosting vs a Dedicated VM | Technical Guide",
    description: "Comparing managed shared cloud hosting with dedicated virtual machines to help you determine the right level of control, maintenance, and isolation.",
    status: "published",
    template: "article",
    seo: {
      title: "Shared Cloud Hosting vs Dedicated VM | Your Web Page",
      description: "Detailed comparison between shared cloud environments and dedicated VMs, outlining maintenance overhead, control, and suitability.",
      canonical: "https://yourwebpage.ca/blog/shared-cloud-hosting-vs-a-dedicated-vm",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "Shared Cloud vs Dedicated VM", href: "/blog/shared-cloud-hosting-vs-a-dedicated-vm" },
    ],
    blocks: [
      {
        id: "article-svm-body",
        type: "blogArticleBody",
        articleSlug: "shared-cloud-hosting-vs-a-dedicated-vm",
        sections: [
          {
            heading: "Understanding the Core Architectural Difference",
            paragraphs: [
              "When choosing where to run your website or web application, the two primary options are shared cloud hosting and dedicated virtual machines (VMs). Understanding the trade-offs between cost, control, and maintenance responsibility is essential.",
              "In a shared cloud environment, your website runs alongside others on a managed platform. The hosting provider manages the operating system, security patches, and server software. In contrast, a dedicated virtual machine gives you an isolated slice of virtual hardware where you control the operating system and installed software.",
            ],
            keyTakeaway: "Shared cloud hosting prioritizes ease and zero server maintenance; dedicated VMs prioritize control, customization, and dedicated compute power.",
          },
          {
            heading: "When Shared Cloud Hosting is Best",
            paragraphs: [
              "For standard business websites—informational sites, portfolios, local trade companies, and content blogs—shared cloud hosting is almost always the right choice. It requires no server administration from your team and delivers fast global delivery at an economical rate.",
            ],
          },
          {
            heading: "When a Dedicated VM is Necessary",
            paragraphs: [
              "If your website is actually a web application running custom backend background workers, persistent database connections, or proprietary software packages, a dedicated VM is required. It provides guaranteed vCPU and RAM that cannot be impacted by other tenants.",
            ],
          },
        ],
      },
      {
        id: "article-svm-cta",
        type: "callToAction",
        eyebrow: "Hosting Infrastructure",
        heading: "Compare our hosting architectures.",
        description: "View our full technical breakdown matrix comparing shared cloud and dedicated VMs.",
        primaryAction: {
          label: "View Comparison Matrix",
          href: "/hosting/compare",
        },
      },
    ],
  },

  // 5. How a CMS Makes Website Updates Easier
  {
    id: "page-article-cms",
    slug: "blog/how-a-cms-makes-website-updates-easier",
    path: "/blog/how-a-cms-makes-website-updates-easier",
    title: "How a CMS Makes Website Updates Easier | Your Web Page",
    description: "Why connecting an intuitive content management system saves your business time, reduces dependency on developers, and keeps information accurate.",
    status: "published",
    template: "article",
    seo: {
      title: "How a CMS Makes Website Updates Easier | Your Web Page",
      description: "Learn how content management systems allow your team to publish articles, adjust hours, and update service details without editing code.",
      canonical: "https://yourwebpage.ca/blog/how-a-cms-makes-website-updates-easier",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "How a CMS Makes Updates Easier", href: "/blog/how-a-cms-makes-website-updates-easier" },
    ],
    blocks: [
      {
        id: "article-cms-body",
        type: "blogArticleBody",
        articleSlug: "how-a-cms-makes-website-updates-easier",
        sections: [
          {
            heading: "The Frustration of Static Code Updates",
            paragraphs: [
              "In the early days of the web, changing a simple sentence or updating holiday hours required opening an HTML file, editing code, and re-uploading via FTP. For non-technical business owners, this meant either waiting days for an agency to make minor updates or leaving out-of-date information on the website.",
              "A Content Management System (CMS) solves this by providing a clean, password-protected web dashboard where any authorized team member can edit content just like writing an email.",
            ],
            keyTakeaway: "A CMS empowers your non-technical team to keep information fresh and accurate without touching code.",
          },
          {
            heading: "The Power of Structured Content",
            paragraphs: [
              "Modern headless CMS platforms use structured data models. Instead of giving editors an open text box where they might accidentally break layout margins or font sizes, a structured CMS provides specific fields: 'Headline', 'Summary', 'Photo', and 'Read Time'.",
              "This separation ensures your design system remains pixel-perfect regardless of who publishes the update.",
            ],
          },
        ],
      },
      {
        id: "article-cms-cta",
        type: "finalConversion",
        eyebrow: "Content Management",
        heading: "Ready to take control of your website content?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 6. Why Website Maintenance Matters
  {
    id: "page-article-maintenance",
    slug: "blog/why-website-maintenance-matters",
    path: "/blog/why-website-maintenance-matters",
    title: "Why Website Maintenance Matters for Small Businesses | Your Web Page",
    description: "The hidden operational risks of neglected software: security vulnerabilities, broken third-party APIs, certificate expiries, and database bloat.",
    status: "published",
    template: "article",
    seo: {
      title: "Why Website Maintenance Matters | Your Web Page",
      description: "The importance of proactive website maintenance: software updates, security patches, automated backups, and uptime checks.",
      canonical: "https://yourwebpage.ca/blog/why-website-maintenance-matters",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "Why Website Maintenance Matters", href: "/blog/why-website-maintenance-matters" },
    ],
    blocks: [
      {
        id: "article-maint-body",
        type: "blogArticleBody",
        articleSlug: "why-website-maintenance-matters",
        sections: [
          {
            heading: "Websites are Living Software Systems",
            paragraphs: [
              "Many businesses treat a website like a printed brochure: once printed, it sits unchanged for years. But the internet is an active, evolving environment. Browsers update monthly, security vulnerabilities in open-source packages are discovered daily, and third-party APIs change their endpoints.",
              "Without ongoing maintenance, even the best-built website will slowly accumulate technical debt and eventually suffer from errors or security breaches.",
            ],
            keyTakeaway: "Ongoing maintenance protects your digital investment and prevents sudden, expensive emergency repairs.",
          },
          {
            heading: "Four Pillars of Proactive Care",
            paragraphs: [
              "A solid maintenance routine consists of four core responsibilities: regular software dependency updates, verified off-site backups, continuous uptime monitoring, and security header reviews.",
            ],
            listItems: [
              "Patching security vulnerabilities before malicious bots exploit them",
              "Testing that backup archives can actually be restored in a crisis",
              "Catching form failures immediately rather than losing inquiries",
            ],
          },
        ],
      },
      {
        id: "article-maint-cta",
        type: "finalConversion",
        eyebrow: "Maintenance Plans",
        heading: "Protect your website with ongoing care.",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Learn About Maintenance",
          href: "/services/website-maintenance",
        },
      },
    ],
  },

  // 7. How Local SEO Helps Customers Find a Business
  {
    id: "page-article-local-seo",
    slug: "blog/how-local-seo-helps-customers-find-a-business",
    path: "/blog/how-local-seo-helps-customers-find-a-business",
    title: "How Local SEO Helps Customers Find Your Business | Your Web Page",
    description: "Clear, ethical practices for local search visibility in Prince Edward Island and Atlantic Canada through structured data and consistent business details.",
    status: "published",
    template: "article",
    seo: {
      title: "How Local SEO Helps Customers Find Your Business | Your Web Page",
      description: "Practical steps for regional search visibility in PEI and Atlantic Canada without manipulative spam tactics or false guarantees.",
      canonical: "https://yourwebpage.ca/blog/how-local-seo-helps-customers-find-a-business",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "How Local SEO Helps Businesses", href: "/blog/how-local-seo-helps-customers-find-a-business" },
    ],
    blocks: [
      {
        id: "article-lseo-body",
        type: "blogArticleBody",
        articleSlug: "how-local-seo-helps-customers-find-a-business",
        sections: [
          {
            heading: "The Anatomy of a Local Search",
            paragraphs: [
              "When a homeowner in Charlottetown or Summerside searches for 'electrician near me' or 'commercial roofing Charlottetown', search engines use distinct local ranking factors to decide which businesses to display.",
              "These factors include physical proximity, consistency of name, address, and phone number (NAP), and structured LocalBusiness metadata on your website.",
            ],
            keyTakeaway: "Local SEO is about clarity and consistency across your website and business directories.",
          },
          {
            heading: "Structured Data (Schema.org)",
            paragraphs: [
              "Structured data is machine-readable code embedded in your website that explicitly tells search engines your legal company name, physical address, appointment hours, and geo-coordinates. This removes ambiguity and helps your business qualify for rich map listings.",
            ],
          },
        ],
      },
      {
        id: "article-lseo-cta",
        type: "finalConversion",
        eyebrow: "Regional Visibility",
        heading: "Improve your local search presence in PEI.",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 8. What a Cron Job Does
  {
    id: "page-article-cron",
    slug: "blog/what-a-cron-job-does",
    path: "/blog/what-a-cron-job-does",
    title: "What a Cron Job Does | Automation for Business Websites",
    description: "A clear explanation of scheduled background jobs (cron tasks) and how they automate routine maintenance and notifications.",
    status: "published",
    template: "article",
    seo: {
      title: "What a Cron Job Does | Automation Explained | Your Web Page",
      description: "A clear explanation of scheduled background jobs (cron tasks) and how they automate routine maintenance and notifications.",
      canonical: "https://yourwebpage.ca/blog/what-a-cron-job-does",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "What a Cron Job Does", href: "/blog/what-a-cron-job-does" },
    ],
    blocks: [
      {
        id: "article-cron-body",
        type: "blogArticleBody",
        articleSlug: "what-a-cron-job-does",
        sections: [
          {
            heading: "The Silent Workhorse of Web Automation",
            paragraphs: [
              "Named after Chronos, the ancient Greek god of time, a 'cron job' is an automated instruction that tells a cloud server to execute a specific script at recurring dates and times.",
              "Instead of relying on human staff to remember to generate sales reports at midnight or clear temporary cache files every Sunday morning, a cron job executes the task automatically with flawless punctuality.",
            ],
            keyTakeaway: "Cron jobs turn recurring manual checklists into automated, hands-off background processes.",
          },
          {
            heading: "Real-World Business Use Cases",
            paragraphs: [
              "Common applications include sending daily digest emails to managers, synchronizing product inventory with suppliers, checking for expired subscriptions, and triggering automated database backups.",
            ],
          },
        ],
      },
      {
        id: "article-cron-cta",
        type: "finalConversion",
        eyebrow: "Scheduled Automation",
        heading: "Want to automate recurring business tasks?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 9. What Serverless Functions Are
  {
    id: "page-article-serverless",
    slug: "blog/what-serverless-functions-are",
    path: "/blog/what-serverless-functions-are",
    title: "What Serverless Functions Are | Cloud Architecture Explained",
    description: "Learn how on-demand serverless functions handle API requests, intake forms, and webhook processing securely without dedicated server management.",
    status: "published",
    template: "article",
    seo: {
      title: "What Serverless Functions Are | Your Web Page",
      description: "Learn how on-demand serverless functions handle API requests, intake forms, and webhook processing securely without dedicated server management.",
      canonical: "https://yourwebpage.ca/blog/what-serverless-functions-are",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "What Serverless Functions Are", href: "/blog/what-serverless-functions-are" },
    ],
    blocks: [
      {
        id: "article-srv-body",
        type: "blogArticleBody",
        articleSlug: "what-serverless-functions-are",
        sections: [
          {
            heading: "Servers Still Exist, But You Don't Manage Them",
            paragraphs: [
              "The name 'serverless' is slightly misleading—there are still physical servers running in cloud datacenters. What is different is how compute time is billed and managed.",
              "Traditionally, a business paid for a virtual server that ran 24 hours a day, even if no visitors were using it. With serverless functions, the cloud provider spins up your code in milliseconds when a visitor clicks a button or submits a form, executes the task, and shuts down immediately.",
            ],
            keyTakeaway: "Serverless architecture means paying only for the exact milliseconds of compute power your tasks consume.",
          },
          {
            heading: "Enhanced Security and Isolation",
            paragraphs: [
              "Because each serverless invocation runs in an isolated ephemeral sandbox, sensitive tasks like processing customer contact forms or validating tokens remain strictly partitioned from public browsing traffic.",
            ],
          },
        ],
      },
      {
        id: "article-srv-cta",
        type: "finalConversion",
        eyebrow: "Cloud Functions",
        heading: "Explore modern serverless architecture.",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 10. How to Prepare for a Website Migration
  {
    id: "page-article-migration",
    slug: "blog/how-to-prepare-for-a-website-migration",
    path: "/blog/how-to-prepare-for-a-website-migration",
    title: "How to Prepare for a Website Migration | Complete Checklist",
    description: "Checklist for moving website servers and domain DNS records safely, maintaining email continuity, and avoiding service downtime.",
    status: "published",
    template: "article",
    seo: {
      title: "How to Prepare for a Website Migration | Your Web Page",
      description: "Checklist for moving website servers and domain DNS records safely, maintaining email continuity, and avoiding service downtime.",
      canonical: "https://yourwebpage.ca/blog/how-to-prepare-for-a-website-migration",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "How to Prepare for a Website Migration", href: "/blog/how-to-prepare-for-a-website-migration" },
    ],
    blocks: [
      {
        id: "article-mig-body",
        type: "blogArticleBody",
        articleSlug: "how-to-prepare-for-a-website-migration",
        sections: [
          {
            heading: "Preparation is the Key to Zero Downtime",
            paragraphs: [
              "Moving your business website to a new host or modern framework should be a smooth, invisible transition for your customers. When handled properly, not a single email is delayed and not a single visitor sees an error.",
              "Success comes down to rigorous advance preparation: cataloging existing DNS records, establishing staging environments, and mapping redirects before changing nameservers.",
            ],
            keyTakeaway: "A successful migration is completed and verified behind a staging URL before any public DNS records are changed.",
          },
          {
            heading: "The Pre-Migration Checklist",
            paragraphs: [
              "Follow these essential steps before initiating any server cutover:",
            ],
            listItems: [
              "Confirm login access to your domain registrar (GoDaddy, Namecheap, Google Domains)",
              "Export all active DNS records, including MX, SPF, DKIM, and CNAME records",
              "Lower DNS Time-to-Live (TTL) to 300 seconds (5 minutes) 48 hours prior to the move",
              "Verify the new site on a private staging URL with SSL certificates configured",
            ],
          },
        ],
      },
      {
        id: "article-mig-cta",
        type: "finalConversion",
        eyebrow: "Website Migration",
        heading: "Planning a hosting or framework migration?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Migration Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },
];
