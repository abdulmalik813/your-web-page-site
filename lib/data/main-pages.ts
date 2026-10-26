import { PageRecord } from "@/lib/types";

export const mainPages: PageRecord[] = [
  // 1. Homepage ("/")
  {
    id: "page-home",
    slug: "",
    path: "/",
    title: "Your Web Page | Web Design, Development & Cloud Hosting in PEI",
    description: "Your Web Page helps businesses build, improve, host, and maintain their websites. Trade name of NightTech Service Inc., based in Charlottetown, PEI.",
    status: "published",
    template: "landing",
    seo: {
      title: "Your Web Page | Web Services & Cloud Hosting",
      description: "Your website should make business easier. Professional web design, custom development, shared cloud hosting, dedicated VMs, and ongoing maintenance.",
      canonical: "https://yourwebpage.ca/",
    },
    breadcrumbs: [{ label: "Home", href: "/" }],
    blocks: [
      {
        id: "home-hero",
        type: "hero",
        eyebrow: "Trade Name of NightTech Service Inc. • Charlottetown, PEI",
        heading: "Your website should make business easier.",
        description: "Your Web Page helps businesses build, improve, host, and maintain their websites. Whether you need a new site, help with an existing one, or a way to make everyday tasks easier, we can discuss a suitable solution.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
          variant: "primary",
        },
        secondaryAction: {
          label: "Explore Our Services",
          href: "/services",
          variant: "outline",
        },
        badges: [
          "Home-Based Business",
          "Servicing Businesses Anywhere",
          "Appointment-Only Service",
          "Quote-Based Pricing",
          "Cloud Infrastructure",
        ],
        stats: [
          { label: "Studio Location", value: "Charlottetown, PEI" },
          { label: "Client Reach", value: "Anywhere (Remote & Local)" },
          { label: "Consultations", value: "By Appointment Only" },
        ],
      },
      {
        id: "home-intro",
        type: "pageIntro",
        eyebrow: "Our Approach",
        heading: "Practical web engineering without unnecessary complexity.",
        lead: "We are a home-based business in Charlottetown, PEI, servicing businesses anywhere. Whether you are local to PEI, located across Atlantic Canada, or operating anywhere in Canada or internationally, we build clean, modern web systems designed around your real operational needs.",
        metadata: [
          { label: "Business Type", value: "Home-Based Web Studio" },
          { label: "Operating Entity", value: "NightTech Service Inc." },
          { label: "Consultation", value: "By Appointment Only" },
          { label: "Service Reach", value: "Anywhere (Local & Remote)" },
        ],
      },
      {
        id: "home-service-grid",
        type: "serviceGrid",
        eyebrow: "Core Capabilities",
        heading: "What We Help Businesses With",
        description: "From custom design and high-performance development to reliable cloud hosting and maintenance plans.",
        serviceSlugs: [
          "website-design",
          "web-development",
          "website-redesign",
          "ecommerce",
          "cms-integration",
          "website-maintenance",
          "seo",
          "serverless",
        ],
      },
      {
        id: "home-design-dev-split",
        type: "splitContent",
        eyebrow: "Modern Web Delivery",
        heading: "Custom design and clean-code development built to last.",
        description: "We build websites using modern web standards, ensuring every page loads quickly, renders cleanly across smartphones, tablets, and desktops, and remains accessible to all visitors.",
        checklistHeading: "What Every Project Includes",
        checkpoints: [
          "Responsive, mobile-first layouts tested across modern viewports",
          "Accessibility practices aligned with WCAG 2.2 AA standards",
          "High performance with optimized assets and server-side rendering",
          "Clean technical SEO foundations without manipulative practices",
          "Structured content ready for future CMS or database migration",
        ],
        action: {
          label: "View All Website Services",
          href: "/services",
          variant: "secondary",
        },
      },
      {
        id: "home-hosting-overview",
        type: "twoColumnContent",
        eyebrow: "Cloud Hosting & Infrastructure",
        heading: "Dependable cloud hosting tailored to your website's demands.",
        leftCol: {
          heading: "Shared Cloud Hosting",
          text: "Ideal for standard business presentation websites, portfolios, and blogs. We manage the operating environment, SSL certificates, software patches, and automated backups so you never have to worry about server administration.",
          points: [
            "Fully managed cloud environment",
            "Automatic SSL/TLS encryption certificates",
            "Routine backups and monitoring",
            "Simple setup and quiet reliability",
          ],
        },
        rightCol: {
          heading: "Dedicated Virtual Machines (VMs)",
          text: "Designed for web applications, custom software backends, high-traffic portals, or specialized databases that require isolated computing resources, specific runtime environments, or custom background services.",
          points: [
            "Isolated virtual compute instances",
            "Custom software configurations & daemons",
            "Scalable RAM and virtual CPU allocations",
            "Predictable resource distribution",
          ],
        },
      },
      {
        id: "home-maintenance-callout",
        type: "callout",
        eyebrow: "Website Continuity",
        title: "Websites need regular care to remain secure and dependable.",
        text: "Software frameworks, browser standards, and security requirements change constantly. Our website maintenance services provide proactive updates, security auditing, and continuous health monitoring so your site stays fast and problem-free.",
        tone: "standard",
        action: {
          label: "Learn About Maintenance Plans",
          href: "/services/website-maintenance",
        },
      },
      {
        id: "home-process",
        type: "processSteps",
        eyebrow: "How We Work",
        heading: "A straightforward, transparent engagement process.",
        description: "Every engagement follows clear stages from initial conversation to delivery and ongoing support.",
        steps: [
          {
            stepNumber: "01",
            title: "Discussion & Requirement Gathering",
            description: "We discuss what your business needs, review any existing website, clarify functional goals, and outline potential technical solutions.",
            details: ["Review business objectives", "Identify required features", "Assess content readiness"],
          },
          {
            stepNumber: "02",
            title: "Custom Quote & Proposal",
            description: "We prepare a detailed quote tailored to your exact requirements, specifying the scope of work, technical architecture, and timeline.",
            details: ["Clear scope definition", "No hidden fees", "Written architecture plan"],
          },
          {
            stepNumber: "03",
            title: "Design & Development",
            description: "We build your website using reusable blocks, clean styling, accessible markup, and verified responsive layouts.",
            details: ["Mobile-first responsive styling", "Semantic accessibility", "Iterative milestone reviews"],
          },
          {
            stepNumber: "04",
            title: "Deployment & Ongoing Care",
            description: "We launch your website on fast cloud infrastructure, configure DNS and SSL, and provide ongoing maintenance and hosting support.",
            details: ["Domain & DNS setup", "Security verification", "Ongoing monitoring"],
          },
        ],
      },
      {
        id: "home-faqs",
        type: "faqAccordion",
        eyebrow: "Common Questions",
        heading: "Frequently Asked Questions",
        description: "Helpful answers to common questions about our services, process, and business details.",
        items: [
          {
            question: "How do your quotes work without public prices?",
            answer: "Because business websites vary widely—from a 5-page local trade site to a custom cloud portal with appointment workflows—we prepare transparent, tailored quotes based on the exact features, hosting demands, and ongoing support you require.",
          },
          {
            question: "Where are you located and can I drop in?",
            answer: "We are a home-based business located at 44 Beach Grove Road, Unit 3, in Charlottetown, PEI. All visits are strictly by appointment only—please contact us or schedule an appointment online before visiting so we can dedicate focused attention to your project. We also offer remote video and phone consultations.",
          },
          {
            question: "Do you only work with clients in Prince Edward Island?",
            answer: "No! We service businesses anywhere, not just Prince Edward Island. While we are proudly based in Charlottetown, we work with clients across Atlantic Canada, Canada-wide, and internationally via video consultations and cloud deployment.",
          },
          {
            question: "What technology stack do you use?",
            answer: "We primarily build with modern React frameworks like Next.js, TypeScript, and Tailwind CSS, backed by reliable cloud hosting, headless CMS platforms, and serverless APIs.",
          },
        ],
      },
      {
        id: "home-service-areas",
        type: "serviceAreaList",
        eyebrow: "Coverage & Delivery",
        heading: "Based in PEI, Servicing Businesses Anywhere",
        description: "Proudly operating as a home-based business in Charlottetown, Prince Edward Island, serving clients locally, across Canada, and internationally.",
      },
      {
        id: "home-cta",
        type: "finalConversion",
        eyebrow: "Start the Conversation",
        heading: "Ready to discuss your website or hosting needs?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote tailored to your business goals. Consultations available remotely or by appointment.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
          variant: "primary",
        },
        secondaryAction: {
          label: "Schedule an Appointment",
          href: "/schedule-an-appointment",
          variant: "outline",
        },
      },
    ],
  },

  // 2. About Page ("/about")
  {
    id: "page-about",
    slug: "about",
    path: "/about",
    title: "About Your Web Page | Home-Based Studio Servicing Anywhere",
    description: "Learn about Your Web Page, a trade name of NightTech Service Inc. We are a home-based business in Charlottetown, PEI, servicing businesses anywhere.",
    status: "published",
    template: "standard",
    seo: {
      title: "About Your Web Page | Home-Based Studio Servicing Businesses Anywhere",
      description: "Home-based web studio in Charlottetown, PEI, delivering dependable web design, development, and cloud hosting for businesses locally, Canada-wide, and internationally.",
      canonical: "https://yourwebpage.ca/about",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ],
    blocks: [
      {
        id: "about-intro",
        type: "pageIntro",
        eyebrow: "About the Business",
        heading: "Clear, reliable web engineering from our home-based studio.",
        lead: "Your Web Page is a trade name of NightTech Service Inc. We are a home-based business operating from Charlottetown, Prince Edward Island, servicing businesses anywhere—locally in PEI, across Canada, and internationally.",
        metadata: [
          { label: "Trade Name", value: "Your Web Page" },
          { label: "Operating Entity", value: "NightTech Service Inc." },
          { label: "Business Type", value: "Home-Based Business" },
          { label: "Service Reach", value: "Anywhere (Local & Remote)" },
          { label: "Visits", value: "By appointment only" },
        ],
      },
      {
        id: "about-principles",
        type: "featureGrid",
        eyebrow: "Our Core Principles",
        heading: "How We Approach Every Project",
        description: "We believe in direct communication, realistic technical advice, and software that lasts.",
        columns: 3,
        features: [
          {
            title: "Honest Technical Guidance",
            description: "We recommend solutions that match your actual business needs, not the trendiest or most expensive tools.",
            iconName: "CheckCircle",
          },
          {
            title: "No Exaggerated Claims",
            description: "We do not promise guaranteed search rankings, instant overnight revenue, or unbreakable security. We focus on verified best practices.",
            iconName: "Shield",
          },
          {
            title: "Maintainable Architecture",
            description: "Code and content structures are built so future developers or CMS integrations can easily extend your website without starting from scratch.",
            iconName: "Layers",
          },
        ],
      },
      {
        id: "about-details",
        type: "twoColumnContent",
        eyebrow: "Company Background",
        heading: "Home-based focus with modern cloud delivery.",
        leftCol: {
          heading: "Home-Based Studio in Charlottetown",
          text: "Operating as an agile home-based business in Charlottetown gives us a grounded appreciation for small and growing enterprises. Because we are a home-based business, all in-person visits are strictly by appointment only—please contact us before visiting. We also conduct remote video and phone consultations for clients anywhere.",
          points: [
            "Home-based business in Charlottetown, PEI",
            "Visits strictly by scheduled appointment only",
            "Servicing businesses locally, Canada-wide & worldwide",
          ],
        },
        rightCol: {
          heading: "Servicing Businesses Anywhere via Cloud",
          text: "We avoid outdated, fragile hosting setups. Every website and virtual machine we build runs on enterprise-grade cloud platforms with automated backups, fast global delivery, and modern encryption standards, allowing us to support businesses anywhere seamlessly.",
          points: [
            "Seamless remote collaboration via video & phone",
            "Enterprise cloud hosting with worldwide low latency",
            "Continuous maintenance and monitoring for all timezones",
          ],
        },
      },
      {
        id: "about-hours",
        type: "businessHours",
        eyebrow: "Scheduling & Availability",
        heading: "Appointment Hours",
        description: "Visits are strictly by appointment only to ensure focused attention. As a home-based business, please contact us before visiting. All times are America/Halifax.",
      },
      {
        id: "about-cta",
        type: "callToAction",
        eyebrow: "Work With Us",
        heading: "Have a website project or hosting question?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote. Appointments available in-person or remotely.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
        secondaryAction: {
          label: "Schedule an Appointment",
          href: "/schedule-an-appointment",
          variant: "outline",
        },
      },
    ],
  },

  // 3. Services Directory ("/services")
  {
    id: "page-services",
    slug: "services",
    path: "/services",
    title: "Web Services Directory | Your Web Page",
    description: "Explore all website design, web development, cloud hosting, SEO, CMS integration, and maintenance services from Your Web Page.",
    status: "published",
    template: "standard",
    seo: {
      title: "Web Services Directory | Your Web Page",
      description: "Full directory of website design, Next.js development, e-commerce, cloud hosting, and technical maintenance services.",
      canonical: "https://yourwebpage.ca/services",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
    ],
    blocks: [
      {
        id: "services-intro",
        type: "pageIntro",
        eyebrow: "Complete Solutions",
        heading: "Services designed to support your website at every stage.",
        lead: "Whether you need a brand-new website, an update to an existing platform, reliable cloud hosting, or ongoing technical maintenance, we provide focused web services tailored to your business.",
      },
      {
        id: "services-all-grid",
        type: "serviceGrid",
        eyebrow: "All Available Services",
        heading: "Explore Our Full Range of Services",
        description: "Click any service to view what problem it addresses, how it works, and what to consider for your business.",
      },
      {
        id: "services-quote-box",
        type: "callToAction",
        eyebrow: "Transparent Pricing",
        heading: "Need a custom combination of services?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote tailored to your exact scope.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
        boxStyle: "monochrome-dark",
      },
    ],
  },

  // 4. Work / Portfolio Overview ("/work")
  {
    id: "page-work",
    slug: "work",
    path: "/work",
    title: "Our Work & Project Overview | Your Web Page",
    description: "A truthful explanation of the types of website projects, cloud hosting setups, and automation workflows we build for clients.",
    status: "published",
    template: "standard",
    seo: {
      title: "Our Work & Project Overview | Your Web Page",
      description: "Learn about the types of website development, e-commerce, and cloud hosting projects we deliver for businesses.",
      canonical: "https://yourwebpage.ca/work",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/work" },
    ],
    blocks: [
      {
        id: "work-intro",
        type: "pageIntro",
        eyebrow: "Capabilities & Project Types",
        heading: "Types of projects we design, develop, and maintain.",
        lead: "We deliver web solutions for businesses of all sizes—from straightforward informational websites to custom web applications and dedicated cloud servers. Here is a clear overview of the work we undertake.",
      },
      {
        id: "work-types",
        type: "featureGrid",
        eyebrow: "Project Profiles",
        heading: "What We Build",
        description: "Real-world website categories we regularly architect and deploy.",
        columns: 3,
        features: [
          {
            title: "Local Business Websites",
            description: "Fast-loading, clean informational websites for trade contractors, professional clinics, and service providers that emphasize clear contact points.",
            iconName: "Building2",
          },
          {
            title: "Modern E-Commerce Platforms",
            description: "Direct-to-consumer and business-to-business online storefronts with clear checkout pathways, secure payment processing, and stock tracking.",
            iconName: "ShoppingBag",
          },
          {
            title: "Headless CMS Web Applications",
            description: "Decoupled websites that allow non-technical team members to write articles and update catalog information without risk of breaking layouts.",
            iconName: "Database",
          },
          {
            title: "Cloud Infrastructure & Dedicated VMs",
            description: "Configuring and maintaining virtual machines, reverse proxies, automated SSL renewals, and scheduled background tasks.",
            iconName: "Server",
          },
          {
            title: "Platform Migrations & Overhauls",
            description: "Safely transitioning websites from outdated hosts or legacy site builders to modern, lightning-fast React platforms with zero data loss.",
            iconName: "ArrowRightLeft",
          },
          {
            title: "Workflow Automation & Webhooks",
            description: "Creating background integrations that connect form submissions to accounting software, CRM systems, or internal Slack/email notifications.",
            iconName: "Cpu",
          },
        ],
      },
      {
        id: "work-cta",
        type: "finalConversion",
        eyebrow: "Start a Project",
        heading: "Have a specific project in mind?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 5. Resources Directory ("/resources")
  {
    id: "page-resources",
    slug: "resources",
    path: "/resources",
    title: "Client Resources & Guides | Your Web Page",
    description: "Helpful guides, technical checklists, and operational resources for business owners planning, hosting, or maintaining a website.",
    status: "published",
    template: "standard",
    seo: {
      title: "Client Resources & Guides | Your Web Page",
      description: "Helpful articles, technical checklists, and business website planning guides.",
      canonical: "https://yourwebpage.ca/resources",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Resources", href: "/resources" },
    ],
    blocks: [
      {
        id: "resources-intro",
        type: "pageIntro",
        eyebrow: "Knowledge & Planning",
        heading: "Helpful resources for business website decisions.",
        lead: "We believe educated clients make the best decisions. Explore our guides on website planning, hosting comparisons, content management, and ongoing maintenance.",
      },
      {
        id: "resources-article-list",
        type: "articleList",
        eyebrow: "Recent Guides & Articles",
        heading: "Articles to Help You Plan & Maintain Your Site",
        description: "Written in plain language by our technical team, without confusing jargon or false sales promises.",
      },
      {
        id: "resources-hosting-compare",
        type: "callout",
        eyebrow: "Hosting Decision Guide",
        title: "Unsure whether you need shared cloud hosting or a dedicated VM?",
        text: "Compare technical differences, maintenance responsibilities, and resource guarantees in our complete hosting comparison guide.",
        tone: "standard",
        action: {
          label: "Compare Hosting Models",
          href: "/hosting/compare",
        },
      },
    ],
  },

  // 6. Blog Index ("/blog")
  {
    id: "page-blog",
    slug: "blog",
    path: "/blog",
    title: "The Your Web Page Blog | Web Design & Hosting Insights",
    description: "Practical insights on website planning, Next.js architecture, cloud hosting, SEO, and maintenance for business owners.",
    status: "published",
    template: "standard",
    seo: {
      title: "The Your Web Page Blog | Web Insights & Hosting Guides",
      description: "Plain-language guides and technical insights for planning, building, hosting, and maintaining business websites.",
      canonical: "https://yourwebpage.ca/blog",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
    ],
    blocks: [
      {
        id: "blog-intro",
        type: "pageIntro",
        eyebrow: "Articles & Engineering Insights",
        heading: "Practical insights on websites, hosting, and technology.",
        lead: "Clear, grounded articles written to help business owners understand website architecture, avoid technical debt, and make smart digital investments.",
      },
      {
        id: "blog-all-articles",
        type: "articleList",
        eyebrow: "Published Articles",
        heading: "All Business & Technical Articles",
        description: "Browse all guides published by the engineering team at Your Web Page.",
      },
      {
        id: "blog-cta",
        type: "callToAction",
        eyebrow: "Need Specific Advice?",
        heading: "Have questions about your current website?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 7. Contact Page ("/contact")
  {
    id: "page-contact",
    slug: "contact",
    path: "/contact",
    title: "Contact Your Web Page | Home-Based Studio in Charlottetown, PEI",
    description: "Get in touch with Your Web Page, a trade name of NightTech Service Inc. Home-based business in Charlottetown, PEI, servicing businesses anywhere. Visits by appointment only.",
    status: "published",
    template: "form",
    seo: {
      title: "Contact Your Web Page | Charlottetown, PEI & Remote",
      description: "Direct phone, email, and appointment details for Your Web Page. Home-based business in Charlottetown, PEI, servicing businesses anywhere.",
      canonical: "https://yourwebpage.ca/contact",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Contact", href: "/contact" },
    ],
    blocks: [
      {
        id: "contact-intro",
        type: "pageIntro",
        eyebrow: "Direct Communication",
        heading: "Get in touch with our team.",
        lead: "We are a home-based business located in Charlottetown, PEI, servicing businesses anywhere. All in-person visits are strictly by appointment only—please contact us or book an appointment online before visiting. We also provide remote video and phone consultations for businesses anywhere.",
        metadata: [
          { label: "Business Type", value: "Home-Based Business" },
          { label: "Service Reach", value: "Anywhere (Local & Remote)" },
          { label: "In-Person Visits", value: "By appointment only" },
          { label: "Online Scheduler", value: "Available 24/7" },
        ],
      },
      {
        id: "contact-form-block",
        type: "contactForm",
        eyebrow: "Send a Message",
        heading: "Contact Form",
        description: "Send us a note and we will reply promptly. If you want to schedule a specific consultation time, you can also use our appointment scheduler.",
      },
      {
        id: "contact-info-block",
        type: "contactInfo",
        eyebrow: "Official Business Details",
        heading: "Location & Direct Contact",
        description: "Your Web Page is a trade name of NightTech Service Inc. Home-based business—contact before visiting.",
        showHours: true,
        showAppointmentNotice: true,
      },
      {
        id: "contact-schedule-callout",
        type: "callout",
        eyebrow: "Prefer a Dedicated Time?",
        title: "Book a consultation directly on our calendar",
        text: "Select a convenient date and time window for a remote video call, phone consultation, or in-person visit at our Charlottetown home office. Monday through Thursday and Saturday through Sunday, 1:00 PM to 8:00 PM America/Halifax.",
        action: {
          label: "Schedule an Appointment",
          href: "/schedule-an-appointment",
        },
      },
    ],
  },

  // 8. Request a Quote Page ("/request-a-quote")
  {
    id: "page-quote",
    slug: "request-a-quote",
    path: "/request-a-quote",
    title: "Request a Quote | Your Web Page",
    description: "Tell us what you need, and we will discuss a suitable solution and provide a tailored quote. No public prices or hidden fees.",
    status: "published",
    template: "form",
    seo: {
      title: "Request a Quote | Your Web Page",
      description: "Request a detailed, transparent proposal for web design, development, cloud hosting, or website maintenance.",
      canonical: "https://yourwebpage.ca/request-a-quote",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Request a Quote", href: "/request-a-quote" },
    ],
    blocks: [
      {
        id: "quote-intro",
        type: "pageIntro",
        eyebrow: "Transparent Consultation",
        heading: "Tell us about your project.",
        lead: "We use a quote-based model because no two businesses have the exact same website requirements. Share your objectives and we will review your needs and provide a clear, itemized proposal.",
        metadata: [
          { label: "Pricing Policy", value: "Quote-based, no hidden fees" },
          { label: "Response Time", value: "Within 1 business day" },
          { label: "Privacy", value: "Details are strictly confidential" },
        ],
      },
      {
        id: "quote-form-block",
        type: "quoteForm",
        eyebrow: "Project Details",
        heading: "Request a Quote Form",
        description: "Please provide as much information as possible to help us assess your technical and operational requirements.",
      },
      {
        id: "quote-policy-callout",
        type: "callout",
        eyebrow: "Our Pricing Policy",
        title: "Why we do not display generic price lists",
        text: "Tell us what you need, and we will discuss a suitable solution and provide a quote. Generic pricing packages usually lead to either paying for features you do not need, or unexpected extra charges when real requirements emerge.",
        tone: "standard",
      },
    ],
  },

  // 9. FAQs Page ("/faqs")
  {
    id: "page-faqs",
    slug: "faqs",
    path: "/faqs",
    title: "Frequently Asked Questions | Your Web Page",
    description: "Answers to common questions regarding quotes, appointments, technology, cloud hosting, and support at Your Web Page.",
    status: "published",
    template: "standard",
    seo: {
      title: "Frequently Asked Questions | Your Web Page",
      description: "Common questions about our quote process, appointment policies, cloud hosting, and web maintenance.",
      canonical: "https://yourwebpage.ca/faqs",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "FAQs", href: "/faqs" },
    ],
    blocks: [
      {
        id: "faqs-intro",
        type: "pageIntro",
        eyebrow: "Clear Answers",
        heading: "Frequently Asked Questions",
        lead: "Everything you need to know about how we work, how we provide quotes, our appointment policy, and how we handle web design and cloud hosting.",
      },
      {
        id: "faqs-accordion-block",
        type: "faqAccordion",
        eyebrow: "General Inquiries",
        heading: "Questions & Detailed Answers",
        items: [
          {
            question: "Why do you not show prices on your website?",
            answer: "Every website has distinct requirements. A small trade site with 5 static pages requires entirely different infrastructure, testing, and maintenance than an e-commerce platform with automated inventory syncs. We review your exact needs and provide an honest, fixed quote.",
          },
          {
            question: "Are you a home-based business?",
            answer: "Yes, Your Web Page is a home-based business located in Charlottetown, PEI. To respect home office privacy and ensure dedicated, uninterrupted attention for every client, all in-person visits are strictly by appointment only. Please contact us or schedule an appointment online before visiting.",
          },
          {
            question: "Can I stop by your office without calling ahead?",
            answer: "No. As a home-based business, all in-person visits are strictly by appointment only. This ensures we are prepared for your visit and can dedicate uninterrupted time to your project. Please use our online scheduler or call ahead to arrange a time.",
          },
          {
            question: "Do you only work with businesses in Prince Edward Island?",
            answer: "No! We service businesses anywhere, not just Prince Edward Island. While we are proudly based in Charlottetown, we work with clients across Atlantic Canada, Canada-wide, and internationally using remote video meetings, phone consultations, and modern cloud deployment.",
          },
          {
            question: "How do I schedule an appointment?",
            answer: "You can book an appointment directly through our online scheduler at /schedule-an-appointment or contact us by phone (902-629-9691) or email (hello@yourwebpage.ca). Appointments are available Monday through Thursday and Saturday through Sunday from 1:00 PM to 8:00 PM (America/Halifax time). We are closed for appointments on Fridays.",
          },
          {
            question: "What days and times are appointments available?",
            answer: "Appointments are available Monday, Tuesday, Wednesday, Thursday, Saturday, and Sunday from 1:00 PM to 8:00 PM (America/Halifax time). We do not schedule appointments on Fridays.",
          },
          {
            question: "What is the relationship between Your Web Page and NightTech Service Inc.?",
            answer: "Your Web Page is a registered trade name of NightTech Service Inc., which is the legal entity operating the business, invoicing services, and entering into contracts.",
          },
          {
            question: "Do you offer shared hosting or dedicated servers?",
            answer: "We offer both shared cloud hosting (for standard informational and content websites) and dedicated virtual machines (for custom web applications and heavier workloads). All infrastructure is cloud-based, never local or on-premises.",
          },
          {
            question: "Will I be able to update my own website text and images?",
            answer: "Yes. When requested, we connect an intuitive content management system (CMS) that allows you to easily edit text, add blog articles, adjust business hours, and upload photos without touching any code.",
          },
          {
            question: "Do you guarantee first-page Google search rankings?",
            answer: "No. Ethical web engineers do not guarantee specific search rankings, because search engine algorithms are proprietary and constantly evolving. We build clean technical SEO, structured data, fast loading speeds, and accessible content that give your business the best natural visibility.",
          },
        ],
      },
      {
        id: "faqs-cta",
        type: "finalConversion",
        eyebrow: "Have Another Question?",
        heading: "Did not find what you were looking for?",
        description: "Send us a message or request a quote and our team will provide a direct, helpful response.",
        primaryAction: {
          label: "Contact Our Team",
          href: "/contact",
        },
      },
    ],
  },

  // 10. How We Work ("/how-we-work")
  {
    id: "page-how-we-work",
    slug: "how-we-work",
    path: "/how-we-work",
    title: "How We Work | Process & Standards at Your Web Page",
    description: "Our structured process for delivering web design, software development, cloud hosting, and technical maintenance.",
    status: "published",
    template: "standard",
    seo: {
      title: "How We Work | Your Web Page Process",
      description: "Understand our step-by-step approach to requirements, quotes, design, development, and launch.",
      canonical: "https://yourwebpage.ca/how-we-work",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "How We Work", href: "/how-we-work" },
    ],
    blocks: [
      {
        id: "hww-intro",
        type: "pageIntro",
        eyebrow: "Our Process",
        heading: "Structured, predictable web development from start to finish.",
        lead: "We remove the guesswork from building a website with a clear 4-stage process focused on honest communication, strong architectural foundations, and rigorous testing.",
      },
      {
        id: "hww-steps",
        type: "processSteps",
        eyebrow: "Step-by-Step",
        heading: "The Four Stages of Every Project",
        description: "From discovery to post-launch support.",
        steps: [
          {
            stepNumber: "01",
            title: "Discovery & Requirements",
            description: "We review your operational goals, existing web assets, target audience, and required functionality.",
            details: ["Understand business objectives", "Audit current site if applicable", "Outline content requirements"],
          },
          {
            stepNumber: "02",
            title: "Architecture & Detailed Quote",
            description: "We design the site structure, choose the appropriate hosting model (shared cloud or dedicated VM), and issue an all-inclusive quote.",
            details: ["Fixed-scope proposal", "Hosting recommendations", "Milestone timeline"],
          },
          {
            stepNumber: "03",
            title: "Component & Content Development",
            description: "We implement your website using reusable blocks, accessible semantic HTML, and responsive styling tested on desktop and mobile viewports.",
            details: ["Clean, maintainable code", "Fast-loading assets", "WCAG 2.2 AA accessibility"],
          },
          {
            stepNumber: "04",
            title: "Quality Verification & Launch",
            description: "We perform full DNS configuration, SSL setup, form testing, and technical SEO validation before publishing.",
            details: ["Security headers & SSL", "Form delivery testing", "Ongoing maintenance onboarding"],
          },
        ],
      },
      {
        id: "hww-cta",
        type: "callToAction",
        eyebrow: "Ready to Begin?",
        heading: "Start with an initial conversation.",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 11. Privacy Policy ("/privacy")
  {
    id: "page-privacy",
    slug: "privacy",
    path: "/privacy",
    title: "Privacy Policy | Your Web Page",
    description: "Privacy policy for Your Web Page, a trade name of NightTech Service Inc. How we handle personal data and customer inquiries.",
    status: "published",
    template: "legal",
    seo: {
      title: "Privacy Policy | Your Web Page",
      description: "How Your Web Page and NightTech Service Inc. protect visitor data, handle contact form inquiries, and maintain confidentiality.",
      canonical: "https://yourwebpage.ca/privacy",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
    blocks: [
      {
        id: "privacy-intro",
        type: "pageIntro",
        eyebrow: "Legal & Compliance",
        heading: "Privacy Policy",
        lead: "Your Web Page is a trade name of NightTech Service Inc. We respect your privacy and are committed to safeguarding personal information collected through our website and business interactions.",
        metadata: [
          { label: "Last Updated", value: "October 2026" },
          { label: "Operating Entity", value: "NightTech Service Inc." },
          { label: "Contact", value: "hello@yourwebpage.ca" },
        ],
      },
      {
        id: "privacy-body",
        type: "richText",
        heading: "Information Collection and Use",
        paragraphs: [
          "When you contact us or submit a quote request, we collect the details you provide, including your name, email address, phone number, business name, and project specifications. We use this information solely to communicate with you regarding your inquiry, prepare quotes, and deliver requested web services.",
          "We do not sell, rent, or trade your personal information to third parties for marketing purposes. Client project details and submitted inquiry forms are kept strictly confidential.",
          "We collect standard server logs for security, error diagnostics, and rate-limiting purposes (such as IP addresses and browser user-agent headers). These logs are retained only as long as necessary for security auditing.",
        ],
        callout: "If you have questions about your personal data or wish to request the removal of past inquiry records, please email hello@yourwebpage.ca.",
        listItems: [
          "Data is processed in accordance with applicable Canadian privacy legislation.",
          "Inquiry data is never shared publicly or used for unauthorized promotional broadcasts.",
          "All communication through our website forms is protected by modern SSL/TLS encryption.",
        ],
      },
    ],
  },

  // 12. Terms of Service ("/terms")
  {
    id: "page-terms",
    slug: "terms",
    path: "/terms",
    title: "Terms of Service | Your Web Page",
    description: "Terms and conditions governing the use of the Your Web Page website and commercial services provided by NightTech Service Inc.",
    status: "published",
    template: "legal",
    seo: {
      title: "Terms of Service | Your Web Page",
      description: "Commercial and operational terms for Your Web Page and NightTech Service Inc.",
      canonical: "https://yourwebpage.ca/terms",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Terms of Service", href: "/terms" },
    ],
    blocks: [
      {
        id: "terms-intro",
        type: "pageIntro",
        eyebrow: "Legal Agreement",
        heading: "Terms of Service",
        lead: "By using this website or engaging services under the trade name Your Web Page, you agree to these terms. All commercial agreements are made with NightTech Service Inc.",
        metadata: [
          { label: "Last Updated", value: "October 2026" },
          { label: "Governing Law", value: "Prince Edward Island, Canada" },
        ],
      },
      {
        id: "terms-body",
        type: "richText",
        heading: "Scope of Services & Invoicing",
        paragraphs: [
          "All web design, development, hosting, and maintenance work is provided on a written quote basis. Project scopes, delivery milestones, and payment terms are detailed in specific client agreements before work commences.",
          "Your Web Page is a trade name of NightTech Service Inc. All legal obligations, invoices, warranties, and contractual agreements are executed by NightTech Service Inc.",
          "While we exercise industry-standard care in building and maintaining web applications, we do not guarantee specific business revenue, search engine rankings, or uninterrupted hosting uptime in circumstances beyond our reasonable technical control.",
        ],
        listItems: [
          "All visitations to our premises are strictly by prior appointment.",
          "Intellectual property rights for custom code and content are transferred to the client upon full payment as outlined in client contracts.",
          "Disputes arising under these terms are governed by the laws of Prince Edward Island, Canada.",
        ],
      },
    ],
  },

  // 13. Cookies Policy ("/cookies")
  {
    id: "page-cookies",
    slug: "cookies",
    path: "/cookies",
    title: "Cookie Information | Your Web Page",
    description: "Details regarding cookie usage, local storage preferences, and tracking policies on the Your Web Page website.",
    status: "published",
    template: "legal",
    seo: {
      title: "Cookie Information | Your Web Page",
      description: "Learn how Your Web Page uses essential local storage for theme preferences and session handling.",
      canonical: "https://yourwebpage.ca/cookies",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Cookie Information", href: "/cookies" },
    ],
    blocks: [
      {
        id: "cookies-intro",
        type: "pageIntro",
        eyebrow: "Transparency",
        heading: "Cookie & Storage Information",
        lead: "We believe in minimal, privacy-first web design. Our website does not use invasive third-party advertising cookies or cross-site tracking beacons.",
      },
      {
        id: "cookies-body",
        type: "richText",
        heading: "How We Use Storage",
        paragraphs: [
          "We use browser local storage solely to remember your chosen theme preference (Auto, Light, or Dark) between visits, preventing jarring visual flashes when you navigate between pages.",
          "We do not load third-party ad networks, tracking pixels, or invasive surveillance scripts. Any analytics used are aggregated and privacy-respecting.",
        ],
      },
    ],
  },

  // 14. Accessibility Statement ("/accessibility")
  {
    id: "page-accessibility",
    slug: "accessibility",
    path: "/accessibility",
    title: "Accessibility Statement | Your Web Page",
    description: "Our commitment to digital accessibility, WCAG 2.2 AA standards, and inclusive web engineering.",
    status: "published",
    template: "legal",
    seo: {
      title: "Accessibility Statement | Your Web Page",
      description: "Our ongoing commitment to digital accessibility, keyboard navigability, and WCAG 2.2 AA standards.",
      canonical: "https://yourwebpage.ca/accessibility",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Accessibility", href: "/accessibility" },
    ],
    blocks: [
      {
        id: "access-intro",
        type: "pageIntro",
        eyebrow: "Inclusive Design",
        heading: "Accessibility Statement",
        lead: "We are committed to making the Your Web Page website accessible to the widest possible audience, regardless of disability or device.",
      },
      {
        id: "access-body",
        type: "richText",
        heading: "Conformance Standards",
        paragraphs: [
          "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. Our components are tested for keyboard navigability, logical heading hierarchies, clear focus rings, and high-contrast color ratios.",
          "Forms include associated accessible labels and assistive technology announcements for errors and successful submissions.",
        ],
        callout: "If you encounter any difficulty accessing content on this site, please email hello@yourwebpage.ca so we can assist and address the barrier promptly.",
      },
    ],
  },

  // 15. Schedule an Appointment ("/schedule-an-appointment")
  {
    id: "page-schedule-appointment",
    slug: "schedule-an-appointment",
    path: "/schedule-an-appointment",
    title: "Schedule an Appointment | Your Web Page",
    description: "Schedule a consultation with Your Web Page. We are a home-based business in Charlottetown, PEI, servicing businesses anywhere. In-person visits strictly by prior appointment.",
    status: "published",
    template: "form",
    seo: {
      title: "Schedule an Appointment | Your Web Page",
      description: "Book an appointment for web design, development, or cloud hosting. Remote video consultations for clients anywhere, or in-person visits by appointment in Charlottetown.",
      canonical: "https://yourwebpage.ca/schedule-an-appointment",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Schedule an Appointment", href: "/schedule-an-appointment" },
    ],
    blocks: [
      {
        id: "schedule-intro",
        type: "pageIntro",
        eyebrow: "Consultation Scheduling",
        heading: "Schedule an Appointment",
        lead: "We are a home-based business located in Charlottetown, PEI, and we service businesses anywhere. In-person visits are strictly by appointment only—please contact us or book a slot before visiting. We also conduct remote video and phone consultations for clients across Canada and internationally.",
        metadata: [
          { label: "Business Type", value: "Home-Based Business" },
          { label: "Service Reach", value: "Anywhere (Local & Remote)" },
          { label: "Appointment Hours", value: "1:00 PM – 8:00 PM (Mon-Thu, Sat-Sun)" },
          { label: "Friday Policy", value: "Closed (No appointments)" },
        ],
      },
      {
        id: "schedule-appointment-block",
        type: "appointmentScheduler",
        eyebrow: "Choose Your Slot",
        heading: "Select Meeting Type, Date & Time",
        description: "Choose between a Remote Video Call (Google Meet / Zoom), Phone Consultation, or In-Person visit at our Charlottetown home office. All times are America/Halifax.",
      },
      {
        id: "schedule-contact-info",
        type: "contactInfo",
        eyebrow: "Direct Contact Details",
        heading: "Location & Hours",
        description: "Your Web Page is a trade name of NightTech Service Inc. Home-based business—please contact before visiting.",
        showHours: true,
        showAppointmentNotice: true,
      },
    ],
  },
];
