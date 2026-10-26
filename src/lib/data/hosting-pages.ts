import { PageRecord } from "@/lib/types";

export const hostingPages: PageRecord[] = [
  // 1. /hosting - Main Hosting Hub
  {
    id: "page-hosting-hub",
    slug: "hosting",
    path: "/hosting",
    title: "Cloud Website Hosting & Dedicated VMs | Your Web Page",
    description: "Reliable, modern cloud hosting and dedicated virtual machines managed by Your Web Page. Based on enterprise cloud platforms with automated backups.",
    status: "published",
    template: "standard",
    seo: {
      title: "Cloud Website Hosting & Dedicated VMs | Your Web Page",
      description: "Enterprise cloud hosting: managed shared cloud hosting for business sites, and dedicated virtual machines for custom web applications.",
      canonical: "https://yourwebpage.ca/hosting",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Hosting", href: "/hosting" },
    ],
    blocks: [
      {
        id: "hosting-intro",
        type: "pageIntro",
        eyebrow: "Cloud Infrastructure",
        heading: "Dependable cloud hosting tailored to your website's demands.",
        lead: "We provide fully cloud-based hosting solutions designed for stability, security, and performance. Whether you need quiet, managed hosting for a business website or an isolated dedicated virtual machine for custom software, we manage the infrastructure so you can focus on your business.",
        metadata: [
          { label: "Infrastructure", value: "Enterprise Cloud Only" },
          { label: "Security", value: "Automatic SSL & Isolated Sandboxes" },
          { label: "Pricing", value: "Custom Quote Based on Workload" },
        ],
      },
      {
        id: "hosting-models-two-col",
        type: "twoColumnContent",
        eyebrow: "Two Distinct Hosting Models",
        heading: "Choosing the Right Cloud Environment",
        leftCol: {
          heading: "Shared Cloud Hosting",
          text: "Built for standard company presentation websites, service catalogs, portfolios, and blogs. Multiple websites share managed cloud resources with isolated security boundaries. We handle all server updates, security patches, SSL certificates, and daily backups.",
          points: [
            "Best for informational and content-driven websites",
            "Zero server maintenance required on your end",
            "Fast global content delivery network (CDN)",
            "Automated SSL/TLS security certificates",
          ],
        },
        rightCol: {
          heading: "Dedicated Virtual Machines (VM)",
          text: "Built for custom web applications, high-traffic portals, API backends, or platforms requiring specialized software libraries and background daemons. You receive an isolated virtual compute slice with dedicated memory and processing cores.",
          points: [
            "Best for web applications, databases, and custom APIs",
            "Full control over runtime environments & background daemons",
            "Dedicated CPU cores and memory allocation",
            "Custom backup frequencies and isolated network VPCs",
          ],
        },
      },
      {
        id: "hosting-compare-feature",
        type: "callout",
        eyebrow: "Side-by-Side Comparison",
        title: "Explore our detailed technical comparison table",
        text: "Compare control levels, maintenance requirements, setup times, and scaling capabilities between Shared Cloud and Dedicated VMs.",
        tone: "standard",
        action: {
          label: "View Hosting Comparison",
          href: "/hosting/compare",
        },
      },
      {
        id: "hosting-feature-grid",
        type: "featureGrid",
        eyebrow: "What Every Plan Includes",
        heading: "Enterprise Cloud Standards",
        description: "Regardless of your hosting model, every environment is built with robust operational standards.",
        columns: 3,
        features: [
          {
            title: "Automated Off-Site Backups",
            description: "Encrypted snapshots stored in separate cloud zones, regularly tested for fast recovery.",
            iconName: "Archive",
          },
          {
            title: "Proactive Uptime Monitoring",
            description: "Automated health checks ping your endpoints around the clock with immediate engineer alert escalation.",
            iconName: "Activity",
          },
          {
            title: "Automated SSL Renewal",
            description: "Modern HTTPS certificates provisioned and renewed automatically without manual intervention.",
            iconName: "Lock",
          },
        ],
      },
      {
        id: "hosting-cta",
        type: "finalConversion",
        eyebrow: "Cloud Hosting Consultation",
        heading: "Ready to discuss hosting for your website?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Hosting Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 2. /hosting/shared-cloud-hosting
  {
    id: "page-hosting-shared",
    slug: "hosting/shared-cloud-hosting",
    path: "/hosting/shared-cloud-hosting",
    title: "Shared Cloud Hosting | Your Web Page",
    description: "Fully managed shared cloud hosting for business websites. Fast, reliable, and maintained by engineers with automated backups and SSL.",
    status: "published",
    template: "standard",
    seo: {
      title: "Shared Cloud Hosting | Your Web Page",
      description: "Managed shared cloud hosting for company websites in PEI and Atlantic Canada. Automated backups, SSL certificates, and quiet reliability.",
      canonical: "https://yourwebpage.ca/hosting/shared-cloud-hosting",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Hosting", href: "/hosting" },
      { label: "Shared Cloud Hosting", href: "/hosting/shared-cloud-hosting" },
    ],
    blocks: [
      {
        id: "shared-intro",
        type: "pageIntro",
        eyebrow: "Managed Cloud Infrastructure",
        heading: "Shared Cloud Hosting",
        lead: "A managed, hassle-free cloud hosting environment designed specifically for standard business websites, portfolios, and blogs. We take care of all server operations so you never have to worry about maintenance.",
        metadata: [
          { label: "Suitable For", value: "Business presentation sites & blogs" },
          { label: "Management", value: "Fully managed by Your Web Page" },
          { label: "Backups", value: "Automated cloud snapshots" },
        ],
      },
      {
        id: "shared-details",
        type: "twoColumnContent",
        eyebrow: "How Shared Cloud Hosting Works",
        heading: "Simple, Quiet Reliability",
        leftCol: {
          heading: "What It Is",
          text: "Shared cloud hosting runs your website on redundant cloud clusters alongside other vetted business websites. Each site is containerized in a secure sandbox, preventing any website from interfering with another.",
          points: [
            "Containerized security sandboxes",
            "Automatic security updates to server runtimes",
            "Edge caching for fast local and global delivery",
            "No server configuration required on your part",
          ],
        },
        rightCol: {
          heading: "Why Businesses Choose It",
          text: "Most business owners do not want to manage operating system updates, firewall rules, or certificate renewals. Shared cloud hosting gives you enterprise-grade reliability at a fraction of the cost of dedicated hardware.",
          points: [
            "Cost-effective for standard traffic profiles",
            "Instant setup with zero technical overhead",
            "Continuous monitoring and prompt support",
            "Seamless upgrade path to a Dedicated VM if you outgrow it",
          ],
        },
      },
      {
        id: "shared-benefits",
        type: "benefitsList",
        eyebrow: "Key Benefits",
        heading: "Why Host With Your Web Page",
        description: "We don't cram hundreds of sites onto fragile cPanel boxes. Our shared hosting is cloud-native and managed by real software engineers.",
        benefits: [
          { title: "Direct Engineer Support", description: "When you have a question, you talk directly to the engineers who configure your hosting.", highlight: "No Call Centers" },
          { title: "Redundant Cloud Storage", description: "Your assets and content are stored across redundant cloud storage nodes.", highlight: "High Durability" },
          { title: "Transparent Quoting", description: "Quotes are based strictly on your site's expected traffic and storage needs.", highlight: "Fair Pricing" },
        ],
      },
      {
        id: "shared-cta",
        type: "finalConversion",
        eyebrow: "Get Started",
        heading: "Need reliable hosting for your business website?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 3. /hosting/dedicated-vm
  {
    id: "page-hosting-vm",
    slug: "hosting/dedicated-vm",
    path: "/hosting/dedicated-vm",
    title: "Dedicated Virtual Machines (VM) | Your Web Page",
    description: "Isolated cloud virtual machines with dedicated CPU and RAM for custom web applications, databases, and high-performance workloads.",
    status: "published",
    template: "standard",
    seo: {
      title: "Dedicated Virtual Machines (VM) | Cloud Hosting | Your Web Page",
      description: "Dedicated cloud compute instances for web applications, APIs, and databases. Isolated resources, custom runtimes, and engineering oversight.",
      canonical: "https://yourwebpage.ca/hosting/dedicated-vm",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Hosting", href: "/hosting" },
      { label: "Dedicated VM", href: "/hosting/dedicated-vm" },
    ],
    blocks: [
      {
        id: "vm-intro",
        type: "pageIntro",
        eyebrow: "Isolated Compute",
        heading: "Dedicated Virtual Machines (VM)",
        lead: "When your business operates custom web applications, complex databases, or high-volume API backends, dedicated virtual machines provide guaranteed computing resources and total runtime flexibility.",
        metadata: [
          { label: "Isolation", value: "Dedicated vCPU & Memory" },
          { label: "Runtimes", value: "Custom Node.js, Python, PostgreSQL" },
          { label: "Security", value: "Isolated Cloud VPC" },
        ],
      },
      {
        id: "vm-details",
        type: "twoColumnContent",
        eyebrow: "Power & Control",
        heading: "Engineered for Complex Workloads",
        leftCol: {
          heading: "When a Dedicated VM is Required",
          text: "Web applications that execute real-time background processing, handle continuous WebSocket connections, or require specific database engines cannot run in standard shared hosting environments.",
          points: [
            "Custom web applications and client portals",
            "Relational databases with high concurrency",
            "Long-running cron jobs and data processing daemons",
            "Dedicated IP addresses and VPN tunneling",
          ],
        },
        rightCol: {
          heading: "Our Management Responsibilities",
          text: "Having a dedicated VM does not mean you have to be a Linux sysadmin. We configure the operating system, firewall rules, reverse proxies, and automated snapshots to keep your VM running smoothly.",
          points: [
            "OS security hardening and kernel patch management",
            "Nginx / Caddy reverse proxy and SSL configuration",
            "Automated volume snapshot schedules",
            "Resource utilization monitoring (CPU, RAM, Disk)",
          ],
        },
      },
      {
        id: "vm-considerations",
        type: "splitContent",
        eyebrow: "Important Planning Factors",
        heading: "What to Consider with Dedicated VMs",
        description: "Dedicated VMs require more proactive capacity planning and maintenance than shared hosting.",
        checklistHeading: "Key Operational Considerations",
        checkpoints: [
          "Computing demands: Assess required RAM and vCPU cores based on concurrent users",
          "Maintenance cycles: Operating system updates occasionally require scheduled maintenance windows",
          "Data backups: Database transaction logs and storage volumes require deliberate snapshot planning",
          "Security responsibilities: Dedicated network rules and SSH key management must be strictly maintained",
        ],
        action: {
          label: "Request a VM Quote",
          href: "/request-a-quote",
        },
      },
      {
        id: "vm-cta",
        type: "finalConversion",
        eyebrow: "Consultation",
        heading: "Discuss your application hosting requirements.",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 4. /hosting/compare
  {
    id: "page-hosting-compare",
    slug: "hosting/compare",
    path: "/hosting/compare",
    title: "Shared Cloud Hosting vs Dedicated VM Comparison | Your Web Page",
    description: "Detailed, objective comparison between Shared Cloud Hosting and Dedicated Virtual Machines to help you choose the right architecture.",
    status: "published",
    template: "standard",
    seo: {
      title: "Shared Cloud vs Dedicated VM Comparison | Your Web Page",
      description: "Compare control, setup ease, maintenance requirements, resource allocation, and scaling factors between shared cloud and dedicated VMs.",
      canonical: "https://yourwebpage.ca/hosting/compare",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Hosting", href: "/hosting" },
      { label: "Comparison", href: "/hosting/compare" },
    ],
    blocks: [
      {
        id: "compare-intro",
        type: "pageIntro",
        eyebrow: "Technical Evaluation",
        heading: "Shared Cloud Hosting vs. Dedicated VM",
        lead: "Compare our two primary cloud hosting architectures side-by-side to understand which environment best suits your website's technical demands, traffic profile, and maintenance preferences.",
      },
      {
        id: "compare-table-block",
        type: "comparisonTable",
        eyebrow: "Comprehensive Matrix",
        heading: "Architecture Comparison Matrix",
        description: "Objective evaluation of operational differences, resource guarantees, and maintenance requirements.",
        headers: ["Feature / Consideration", "Shared Cloud Hosting", "Dedicated Virtual Machine"],
        rows: [
          {
            feature: "Suitable Website Types",
            values: [
              "Standard business sites, blogs, portfolios, service catalogs",
              "Custom web apps, databases, API backends, high-traffic portals",
            ],
          },
          {
            feature: "Ease of Setup",
            values: ["Immediate setup, pre-configured cloud environment", "Requires provisioning, OS setup, and network configuration"],
          },
          {
            feature: "Control & Customization",
            values: [
              "Managed runtime environment; standard web configurations",
              "Full root/system access; custom daemons, background workers",
            ],
          },
          {
            feature: "Custom Software & Daemons",
            values: ["Not supported (standard web runtimes only)", "Full support for Docker, custom databases, and daemons"],
          },
          {
            feature: "Resource Allocation",
            values: [
              "Containerized compute pool with automated throttling",
              "Guaranteed dedicated virtual CPU cores and physical RAM",
            ],
          },
          {
            feature: "Traffic & Scaling",
            values: [
              "Scales automatically across cloud CDN nodes for web traffic",
              "Vertical scaling (upgrade vCPU/RAM) or horizontal clustering",
            ],
          },
          {
            feature: "Maintenance Responsibility",
            values: [
              "100% managed by Your Web Page; zero client maintenance",
              "Requires scheduled OS patches and security monitoring",
            ],
          },
          {
            feature: "Security Responsibilities",
            values: [
              "Platform security and SSL managed by Your Web Page",
              "Network VPC, firewall rules, and OS hardening",
            ],
          },
          {
            feature: "Factors Affecting Quote",
            values: [
              "Storage volume, monthly visitor traffic, backup frequency",
              "vCPU count, RAM allocation, NVMe storage, management tier",
            ],
          },
        ],
        note: "We do not publish fixed price tiers. Quotes are determined by your exact storage, processing, and management requirements.",
      },
      {
        id: "compare-cta",
        type: "finalConversion",
        eyebrow: "Next Steps",
        heading: "Still unsure which model fits your needs?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Consultation & Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 5. /hosting/migrations
  {
    id: "page-hosting-migrations",
    slug: "hosting/migrations",
    path: "/hosting/migrations",
    title: "Hosting Migrations | Your Web Page",
    description: "Safely move your website to our cloud hosting infrastructure with zero downtime, verified backups, and protected email records.",
    status: "published",
    template: "standard",
    seo: {
      title: "Hosting Migrations | Your Web Page",
      description: "Expert migration of website files, databases, and DNS records to modern cloud infrastructure without service disruption.",
      canonical: "https://yourwebpage.ca/hosting/migrations",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Hosting", href: "/hosting" },
      { label: "Migrations", href: "/hosting/migrations" },
    ],
    blocks: [
      {
        id: "mig-intro",
        type: "pageIntro",
        eyebrow: "Seamless Transition",
        heading: "Cloud Hosting Migrations",
        lead: "Leaving an unreliable, slow, or overpriced web host doesn't have to be stressful. We handle the entire transfer process—files, databases, SSL certificates, and DNS records—with zero downtime.",
      },
      {
        id: "mig-process",
        type: "processSteps",
        eyebrow: "Our Migration Protocol",
        heading: "How We Migrate Your Website",
        description: "A disciplined, step-by-step process designed to prevent downtime and preserve email routing.",
        steps: [
          { stepNumber: "01", title: "Configuration Snapshot", description: "Exporting all existing files, databases, and DNS records from your current host." },
          { stepNumber: "02", title: "Staging Deployment", description: "Spinning up your site on our cloud environment and verifying every page behind a private staging URL." },
          { stepNumber: "03", title: "DNS Cutover", description: "Switching web records with minimal TTLs while keeping MX and email records entirely untouched." },
          { stepNumber: "04", title: "Post-Migration Verification", description: "Confirming global DNS propagation, SSL certificate validity, and form delivery." },
        ],
      },
      {
        id: "mig-cta",
        type: "callToAction",
        eyebrow: "Switch Hosts",
        heading: "Ready to move to faster, dependable cloud hosting?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Migration Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 6. /hosting/backups
  {
    id: "page-hosting-backups",
    slug: "hosting/backups",
    path: "/hosting/backups",
    title: "Automated Cloud Backups & Recovery | Your Web Page",
    description: "Automated off-site cloud backups and verified disaster recovery protocols to protect your business data.",
    status: "published",
    template: "standard",
    seo: {
      title: "Automated Cloud Backups & Recovery | Your Web Page",
      description: "Secure, off-site cloud snapshots, encrypted database dumps, and tested restoration procedures for business websites.",
      canonical: "https://yourwebpage.ca/hosting/backups",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Hosting", href: "/hosting" },
      { label: "Backups", href: "/hosting/backups" },
    ],
    blocks: [
      {
        id: "backups-intro",
        type: "pageIntro",
        eyebrow: "Data Protection",
        heading: "Automated Backups & Disaster Recovery",
        lead: "A backup is only as good as your ability to restore it. We implement redundant, encrypted off-site cloud snapshots and perform routine recovery tests so your website is never at risk.",
      },
      {
        id: "backups-features",
        type: "featureGrid",
        eyebrow: "Our Backup Safeguards",
        heading: "How We Protect Your Data",
        description: "Comprehensive backup policies built into our cloud hosting infrastructure.",
        columns: 3,
        features: [
          {
            title: "Off-Site Geographic Redundancy",
            description: "Snapshots are stored in geographically isolated cloud datacenters, safeguarding against datacenter outages.",
            iconName: "Cloud",
          },
          {
            title: "Point-in-Time Database Dumps",
            description: "Databases are snapshotted on scheduled intervals, allowing rollbacks to specific points in time if needed.",
            iconName: "Database",
          },
          {
            title: "Verified Restoration Drills",
            description: "We don't just store backups; we periodically spin them up on test instances to verify file and database integrity.",
            iconName: "CheckCircle",
          },
        ],
      },
      {
        id: "backups-cta",
        type: "callToAction",
        eyebrow: "Backup Planning",
        heading: "Ensure your website data is properly protected.",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },

  // 7. /hosting/management
  {
    id: "page-hosting-management",
    slug: "hosting/management",
    path: "/hosting/management",
    title: "Managed Cloud Hosting Services | Your Web Page",
    description: "Full-service server administration, security patching, uptime monitoring, and engineering support for your web infrastructure.",
    status: "published",
    template: "standard",
    seo: {
      title: "Managed Cloud Hosting Services | Your Web Page",
      description: "Dedicated engineering management for your cloud hosting environment. Patching, monitoring, backups, and direct technical support.",
      canonical: "https://yourwebpage.ca/hosting/management",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Hosting", href: "/hosting" },
      { label: "Managed Services", href: "/hosting/management" },
    ],
    blocks: [
      {
        id: "mgmt-intro",
        type: "pageIntro",
        eyebrow: "Engineering Oversight",
        heading: "Managed Cloud Hosting Services",
        lead: "Leave the server administration to experienced engineers. We monitor your infrastructure 24/7, apply security patches, optimize caching, and handle DNS changes so your team can focus on operations.",
      },
      {
        id: "mgmt-breakdown",
        type: "twoColumnContent",
        eyebrow: "Scope of Management",
        heading: "What We Take Care Of",
        leftCol: {
          heading: "Infrastructure & Security",
          text: "We configure and harden the server operating system, manage firewall rules, renew SSL certificates, and monitor for unauthorized intrusion attempts.",
          points: [
            "Operating system updates and security patches",
            "Automatic SSL/TLS certificate renewals",
            "Firewall and DDoS mitigation rules",
            "Continuous uptime pings and resource alerts",
          ],
        },
        rightCol: {
          heading: "Application & Content Support",
          text: "When you need DNS modifications, new subdomains, database optimization, or staging environments for upcoming releases, our team implements them directly.",
          points: [
            "DNS record management (A, CNAME, TXT, MX)",
            "Staging environment creation for safe testing",
            "Database query indexing and cleanup",
            "Priority engineering support via email and phone",
          ],
        },
      },
      {
        id: "mgmt-cta",
        type: "finalConversion",
        eyebrow: "Hands-Free Infrastructure",
        heading: "Want experienced engineers managing your hosting?",
        description: "Tell us what you need, and we will discuss a suitable solution and provide a quote.",
        primaryAction: {
          label: "Request a Quote",
          href: "/request-a-quote",
        },
      },
    ],
  },
];
