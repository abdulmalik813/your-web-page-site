import { PageRecord } from "@/lib/types";

export const regionalPages: PageRecord[] = [
  // 1. Prince Edward Island
  {
    id: "regional-pei",
    slug: "service-areas/prince-edward-island",
    path: "/service-areas/prince-edward-island",
    title: "Web Design, Development & Cloud Hosting in Prince Edward Island",
    description: "Your Web Page is proudly based in Charlottetown, PEI. We provide web design, development, cloud hosting, and ongoing maintenance to businesses across the island.",
    status: "published",
    template: "standard",
    seo: {
      title: "PEI Web Design & Cloud Hosting | Your Web Page",
      description: "Local web design, development, and managed cloud hosting for businesses across Prince Edward Island. Physical office in Charlottetown (by appointment).",
      canonical: "https://yourwebpage.ca/service-areas/prince-edward-island",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Service Areas", href: "/services" },
      { label: "Prince Edward Island", href: "/service-areas/prince-edward-island" },
    ],
    blocks: [
      {
        id: "pei-intro",
        type: "pageIntro",
        eyebrow: "Our Home Province",
        heading: "Web Design & Cloud Hosting Across Prince Edward Island",
        lead: "From Charlottetown and Summerside to Montague, Souris, and Alberton, we deliver dependable websites and modern cloud hosting to Island businesses. Founded under NightTech Service Inc., our physical office is located in Charlottetown.",
        metadata: [
          { label: "Physical Office", value: "44 Beach Grove Road, Unit 3, Charlottetown" },
          { label: "Visits", value: "Strictly by appointment only" },
          { label: "Service Reach", value: "All three PEI counties (Queens, Prince, Kings)" },
        ],
      },
      {
        id: "pei-details",
        type: "twoColumnContent",
        eyebrow: "Local Understanding",
        heading: "Grounded in Prince Edward Island's Economy",
        leftCol: {
          heading: "Understanding Island Business",
          text: "PEI's economy blends year-round commercial services, agricultural enterprises, seafood exporters, tourism operators, and growing technology companies. We build web systems that accommodate both intense seasonal peaks and steady off-season operations.",
          points: [
            "Seasonal schedules and automated operational notices",
            "Fast mobile loading for rural areas with variable cell service",
            "Clear local business schema for regional Google search visibility",
          ],
        },
        rightCol: {
          heading: "In-Person Consultation",
          text: "Unlike distant offshore agencies, Island clients can schedule an in-person meeting at our Charlottetown office or connect directly with our technical team by phone or video.",
          points: [
            "Direct communication with the engineers building your site",
            "Local phone number: 902-629-9691",
            "Appointments available 6 days a week (closed Fridays)",
          ],
        },
      },
      {
        id: "pei-services",
        type: "relatedServices",
        heading: "Popular Services for Island Businesses",
        description: "Services tailored to the needs of Prince Edward Island companies.",
        serviceSlugs: ["website-design", "local-seo", "shared-cloud-hosting", "website-maintenance"],
      },
      {
        id: "pei-cta",
        type: "finalConversion",
        eyebrow: "Local Partnership",
        heading: "Let's build a website that serves your Island business.",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 2. Charlottetown
  {
    id: "regional-charlottetown",
    slug: "service-areas/charlottetown",
    path: "/service-areas/charlottetown",
    title: "Web Design & Development in Charlottetown, PEI | Your Web Page",
    description: "Located at 44 Beach Grove Road, Unit 3 in Charlottetown. Purposeful web design, software development, and cloud hosting by appointment.",
    status: "published",
    template: "standard",
    seo: {
      title: "Charlottetown Web Design & Cloud Hosting | Your Web Page",
      description: "Direct web design, custom development, and cloud hosting based in Charlottetown, PEI. In-person consultations by appointment at 44 Beach Grove Road.",
      canonical: "https://yourwebpage.ca/service-areas/charlottetown",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Service Areas", href: "/services" },
      { label: "Charlottetown", href: "/service-areas/charlottetown" },
    ],
    blocks: [
      {
        id: "cht-intro",
        type: "pageIntro",
        eyebrow: "Our Primary Office",
        heading: "Charlottetown Web Engineering & Cloud Hosting",
        lead: "Your Web Page operates directly from Charlottetown, Prince Edward Island. We work with local retail shops, restaurants, clinics, professional firms, and trade contractors throughout the capital region.",
        metadata: [
          { label: "Office Address", value: "44 Beach Grove Road, Unit 3, Charlottetown, PE C1E 1Y5" },
          { label: "Phone", value: "902-629-9691" },
          { label: "Visits", value: "By appointment only — please contact us first" },
        ],
      },
      {
        id: "cht-hours",
        type: "businessHours",
        eyebrow: "Local Hours",
        heading: "Charlottetown Office Appointment Hours",
        description: "To give every client our complete, undivided attention, all visits to our Charlottetown office are by scheduled appointment. All times are America/Halifax.",
      },
      {
        id: "cht-features",
        type: "featureGrid",
        eyebrow: "Capital Region Services",
        heading: "Supporting Greater Charlottetown Businesses",
        description: "Covering Charlottetown, Stratford, Cornwall, and Queens County.",
        columns: 3,
        features: [
          {
            title: "Charlottetown Local SEO",
            description: "Targeted regional keywords, LocalBusiness schema, and Google Business Profile optimization to help local customers find you.",
            iconName: "MapPin",
          },
          {
            title: "Fast Mobile-First Design",
            description: "High-contrast, responsive layouts designed for customers searching for services while on the move in town.",
            iconName: "Smartphone",
          },
          {
            title: "Managed Cloud Hosting",
            description: "Fast cloud delivery with daily backups and proactive monitoring, so your site never misses an inquiry.",
            iconName: "Server",
          },
        ],
      },
      {
        id: "cht-cta",
        type: "finalConversion",
        eyebrow: "Schedule an Appointment",
        heading: "Meet with our Charlottetown team.",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 3. Summerside
  {
    id: "regional-summerside",
    slug: "service-areas/summerside",
    path: "/service-areas/summerside",
    title: "Web Services & Hosting for Summerside, PEI | Your Web Page",
    description: "Professional web development, website redesign, and cloud hosting for businesses in Summerside and Prince County, Prince Edward Island.",
    status: "published",
    template: "standard",
    seo: {
      title: "Summerside Web Design & Hosting | Your Web Page",
      description: "Dedicated web design, development, and cloud hosting for businesses in Summerside, PEI. Consultations by appointment.",
      canonical: "https://yourwebpage.ca/service-areas/summerside",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Service Areas", href: "/services" },
      { label: "Summerside", href: "/service-areas/summerside" },
    ],
    blocks: [
      {
        id: "sum-intro",
        type: "pageIntro",
        eyebrow: "Prince County Coverage",
        heading: "Web Design & Cloud Hosting for Summerside Businesses",
        lead: "From aerospace and manufacturing companies to downtown retailers and trade specialists, Summerside is a vital economic engine in PEI. We provide modern web development and managed hosting tailored to Prince County businesses.",
      },
      {
        id: "sum-details",
        type: "twoColumnContent",
        eyebrow: "Partnering With Summerside",
        heading: "Accessible Island-Wide Support",
        leftCol: {
          heading: "Remote Collaboration & In-Person Options",
          text: "We work seamlessly with Summerside clients through video consultations and phone check-ins, or you are welcome to visit our Charlottetown office for in-person planning sessions by scheduled appointment.",
          points: [
            "Prompt response times via email and telephone",
            "Easy digital review and staging milestones",
            "In-person appointments hosted at 44 Beach Grove Road, Unit 3, Charlottetown",
          ],
        },
        rightCol: {
          heading: "Tailored to Your Operations",
          text: "Whether your business serves local Summerside residents or ships goods across Canada, we build websites that capture qualified leads and automate customer inquiries.",
          points: [
            "Custom quote request forms tailored to your service workflow",
            "High-speed cloud infrastructure with automated snapshots",
            "Accessible, responsive designs that work on any smartphone",
          ],
        },
      },
      {
        id: "sum-cta",
        type: "finalConversion",
        eyebrow: "Start a Conversation",
        heading: "Discuss your Summerside website project.",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 4. Nova Scotia
  {
    id: "regional-ns",
    slug: "service-areas/nova-scotia",
    path: "/service-areas/nova-scotia",
    title: "Web Development & Cloud Hosting for Nova Scotia | Your Web Page",
    description: "Reliable web design, Next.js web applications, and managed cloud hosting for businesses across Halifax, Dartmouth, Sydney, and Nova Scotia.",
    status: "published",
    template: "standard",
    seo: {
      title: "Nova Scotia Web Design & Cloud Hosting | Your Web Page",
      description: "High-performance web development and cloud infrastructure for Nova Scotia businesses. Headquartered in Charlottetown, PEI.",
      canonical: "https://yourwebpage.ca/service-areas/nova-scotia",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Service Areas", href: "/services" },
      { label: "Nova Scotia", href: "/service-areas/nova-scotia" },
    ],
    blocks: [
      {
        id: "ns-intro",
        type: "pageIntro",
        eyebrow: "Atlantic Canadian Reach",
        heading: "Web Engineering for Nova Scotia Businesses",
        lead: "We partner with businesses across Nova Scotia—from Halifax and Dartmouth to Truro, the Annapolis Valley, and Cape Breton—providing modern Next.js development, clean e-commerce platforms, and dedicated cloud hosting.",
        metadata: [
          { label: "Primary Office", value: "Charlottetown, PEI (Visits by appointment)" },
          { label: "Communication", value: "Direct phone, video consultation, and email" },
          { label: "Timezone", value: "Atlantic Time (America/Halifax)" },
        ],
      },
      {
        id: "ns-focus",
        type: "featureGrid",
        eyebrow: "Regional Services",
        heading: "Key Capabilities for Nova Scotia Companies",
        description: "Building fast, reliable web platforms that compete on a national stage.",
        columns: 3,
        features: [
          {
            title: "Next.js Web Applications",
            description: "High-speed React applications built for performance, scalability, and superior search engine indexing.",
            iconName: "Code",
          },
          {
            title: "Dedicated Cloud VMs",
            description: "Isolated virtual machines for databases and high-traffic web backends with proactive engineering management.",
            iconName: "Server",
          },
          {
            title: "E-Commerce Architecture",
            description: "Streamlined online stores built for smooth customer checkouts and automated inventory synchronization.",
            iconName: "ShoppingBag",
          },
        ],
      },
      {
        id: "ns-cta",
        type: "finalConversion",
        eyebrow: "Connect With Us",
        heading: "Expanding your web capabilities in Nova Scotia?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 5. New Brunswick
  {
    id: "regional-nb",
    slug: "service-areas/new-brunswick",
    path: "/service-areas/new-brunswick",
    title: "Web Services & Cloud Hosting for New Brunswick | Your Web Page",
    description: "Professional web design, custom development, and reliable cloud hosting for businesses in Moncton, Fredericton, Saint John, and New Brunswick.",
    status: "published",
    template: "standard",
    seo: {
      title: "New Brunswick Web Design & Cloud Hosting | Your Web Page",
      description: "Clean-code web development and enterprise cloud hosting for New Brunswick enterprises. Based in Charlottetown, PEI.",
      canonical: "https://yourwebpage.ca/service-areas/new-brunswick",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Service Areas", href: "/services" },
      { label: "New Brunswick", href: "/service-areas/new-brunswick" },
    ],
    blocks: [
      {
        id: "nb-intro",
        type: "pageIntro",
        eyebrow: "Maritime Web Solutions",
        heading: "Web Design & Cloud Infrastructure in New Brunswick",
        lead: "We serve commercial clients across New Brunswick, including Moncton, Saint John, Fredericton, and Dieppe. Our team delivers clean, accessible web architecture, headless CMS integrations, and dependable cloud hosting.",
        metadata: [
          { label: "Operating Entity", value: "NightTech Service Inc." },
          { label: "Consultations", value: "Scheduled video calls & phone support" },
          { label: "Coverage", value: "Southern and Northern New Brunswick" },
        ],
      },
      {
        id: "nb-details",
        type: "twoColumnContent",
        eyebrow: "Engineered for Growth",
        heading: "Reliable Support for New Brunswick Enterprises",
        leftCol: {
          heading: "Modern Front-End Performance",
          text: "We replace slow, bloated legacy websites with modern React and Next.js applications that load instantly and provide seamless browsing across mobile and desktop devices.",
          points: [
            "WCAG 2.2 AA accessibility standards",
            "Clean technical SEO and Open Graph metadata",
            "Structured content ready for future CMS expansion",
          ],
        },
        rightCol: {
          heading: "Fully Managed Cloud Hosting",
          text: "Our managed cloud environments free your team from worrying about SSL certificate renewals, server operating system patches, or backup verification.",
          points: [
            "Off-site encrypted backups with disaster recovery drills",
            "Continuous uptime pings and immediate alerting",
            "Direct phone and email contact with software engineers",
          ],
        },
      },
      {
        id: "nb-cta",
        type: "finalConversion",
        eyebrow: "Get Started",
        heading: "Ready to discuss your New Brunswick project?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 6. Newfoundland and Labrador
  {
    id: "regional-nl",
    slug: "service-areas/newfoundland-and-labrador",
    path: "/service-areas/newfoundland-and-labrador",
    title: "Web Development & Cloud Hosting for Newfoundland & Labrador | Your Web Page",
    description: "Modern web design, custom applications, and managed cloud hosting for businesses in St. John's, Mount Pearl, Corner Brook, and Newfoundland & Labrador.",
    status: "published",
    template: "standard",
    seo: {
      title: "Newfoundland & Labrador Web Design | Your Web Page",
      description: "Dependable web development, cloud hosting, and ongoing maintenance for businesses across Newfoundland and Labrador.",
      canonical: "https://yourwebpage.ca/service-areas/newfoundland-and-labrador",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Service Areas", href: "/services" },
      { label: "Newfoundland & Labrador", href: "/service-areas/newfoundland-and-labrador" },
    ],
    blocks: [
      {
        id: "nl-intro",
        type: "pageIntro",
        eyebrow: "Atlantic Region Support",
        heading: "Web Design & Cloud Infrastructure for Newfoundland & Labrador",
        lead: "We partner with businesses in St. John's, Mount Pearl, Corner Brook, and throughout Newfoundland and Labrador. From industrial services and marine logistics to retail and tourism, we provide robust, high-availability web engineering.",
        metadata: [
          { label: "Headquarters", value: "Charlottetown, PEI (Visits by appointment)" },
          { label: "Hosting", value: "Redundant cloud infrastructure" },
          { label: "Client Support", value: "Direct engineer access via phone & video" },
        ],
      },
      {
        id: "nl-features",
        type: "featureGrid",
        eyebrow: "Dependable Systems",
        heading: "Built for Resilience and Reliability",
        description: "Engineered to withstand heavy traffic and maintain continuous uptime.",
        columns: 3,
        features: [
          {
            title: "High-Availability Cloud Hosting",
            description: "Redundant cloud servers with automatic failover and daily off-site snapshots to keep your site online.",
            iconName: "Shield",
          },
          {
            title: "Custom Web Applications",
            description: "Customer intake portals, booking workflows, and internal operational tools built on modern frameworks.",
            iconName: "Layers",
          },
          {
            title: "Proactive Website Maintenance",
            description: "Regular software patching, security audits, and continuous uptime monitoring for total peace of mind.",
            iconName: "CheckCircle",
          },
        ],
      },
      {
        id: "nl-cta",
        type: "finalConversion",
        eyebrow: "Partner With Us",
        heading: "Let's discuss your Newfoundland & Labrador web project.",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },
];
