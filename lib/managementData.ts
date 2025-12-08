export type ManagementSection = {
  title: string;
  description: string;
  bullets?: string[];
};

export type ManagementCase = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  heroImage: string;
  summary: string;
  meta: {
    role: string;
    duration: string;
    focus: string;
    client?: string;
    team?: string[];
  };
  tags: string[];
  sections: ManagementSection[];
  outcomes: string[];
  // For detailed page
  background?: string;
  problemStatement?: string;
  targetUsers?: string;
  takeaways?: string[];
};

export const managementCases: ManagementCase[] = [
  {
    id: "product-launch",
    slug: "product-launch-strategy",
    title: "Product launch strategy",
    subtitle: "End-to-end product lifecycle management",
    year: "2024",
    heroImage:
      "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63986c1a9e600d2d0b0ce5e9_home-hero.webp",
    summary:
      "Led the complete product lifecycle from ideation to launch, coordinating cross-functional teams, defining success metrics, and executing go-to-market strategy that resulted in 40% user adoption in the first quarter.",
    meta: {
      role: "Product Manager",
      duration: "6 months",
      focus: "Strategy, execution, go-to-market",
    },
    tags: ["Product strategy", "Roadmap", "Launch", "Cross-functional"],
    sections: [
      {
        title: "Challenge",
        description:
          "The product needed to launch within a tight timeline while ensuring market fit and stakeholder alignment across engineering, design, marketing, and sales teams.",
        bullets: [
          "Coordinated 5 cross-functional teams with competing priorities",
          "Defined clear success metrics and KPIs for launch",
          "Built go-to-market strategy from scratch",
        ],
      },
      {
        title: "Approach",
        description:
          "Established a structured launch framework with clear phases, decision gates, and communication cadences to keep all stakeholders aligned.",
        bullets: [
          "Created launch roadmap with weekly milestones and checkpoints",
          "Implemented daily standups and weekly stakeholder reviews",
          "Developed comprehensive launch playbook and runbook",
        ],
      },
      {
        title: "Execution",
        description:
          "Executed the launch with precision, managing risks proactively and maintaining clear communication throughout the process.",
        bullets: [
          "Coordinated beta testing with 200+ users",
          "Managed launch day operations and post-launch monitoring",
          "Established feedback loops for rapid iteration",
        ],
      },
    ],
    outcomes: [
      "Successfully launched product on schedule with 40% user adoption in Q1",
      "Achieved 95% stakeholder satisfaction score",
      "Established reusable launch framework adopted by other product teams",
    ],
    background:
      "This case study documents the end-to-end product launch strategy for a new SaaS product. The challenge involved coordinating multiple teams, defining clear success metrics, and executing a comprehensive go-to-market strategy.",
    problemStatement:
      "How do we successfully launch a new product within a tight timeline while ensuring market fit, stakeholder alignment, and clear success metrics across all teams?",
    takeaways: [
      "Clear communication and structured frameworks are essential for complex launches",
      "Early stakeholder alignment prevents last-minute blockers",
      "Defining success metrics upfront guides decision-making throughout the process",
    ],
  },
  {
    id: "roadmap-prioritization",
    slug: "roadmap-prioritization",
    title: "Roadmap prioritization framework",
    subtitle: "Data-driven decision making for product features",
    year: "2023",
    heroImage:
      "https://cdn.prod.website-files.com/63983873166762516081f05b/639839d5f858cffb5130a384_project-04.webp",
    summary:
      "Developed and implemented a prioritization framework that balanced user needs, business impact, and technical feasibility. Reduced feature backlog by 60% and improved team velocity by 35% through clear decision-making criteria.",
    meta: {
      role: "Senior Product Manager",
      duration: "3 months",
      focus: "Prioritization, framework, analytics",
    },
    tags: ["Prioritization", "Framework", "Analytics", "Decision-making"],
    sections: [
      {
        title: "Problem",
        description:
          "The product roadmap had become cluttered with competing priorities, making it difficult to make data-driven decisions about what to build next.",
        bullets: [
          "Feature backlog had grown to 200+ items",
          "No clear criteria for prioritization decisions",
          "Team velocity was declining due to context switching",
        ],
      },
      {
        title: "Solution",
        description:
          "Created a comprehensive prioritization framework that evaluated features across multiple dimensions: user impact, business value, technical effort, and strategic alignment.",
        bullets: [
          "Developed scoring system with weighted criteria",
          "Built analytics dashboard to track feature impact",
          "Established regular review cadence for roadmap updates",
        ],
      },
      {
        title: "Impact",
        description:
          "The framework enabled faster, more confident decision-making and significantly improved team productivity.",
        bullets: [
          "Reduced backlog by 60% through systematic prioritization",
          "Improved team velocity by 35%",
          "Increased stakeholder confidence in roadmap decisions",
        ],
      },
    ],
    outcomes: [
      "Prioritization framework adopted across all product teams",
      "Reduced time spent on prioritization discussions by 50%",
      "Improved alignment between product, engineering, and business stakeholders",
    ],
    background:
      "This case study documents the development and implementation of a data-driven prioritization framework that transformed how product decisions were made.",
    problemStatement:
      "How do we create a systematic approach to prioritize features that balances user needs, business impact, and technical feasibility while maintaining team velocity?",
    takeaways: [
      "Data-driven frameworks remove subjectivity from prioritization",
      "Regular review cadences keep roadmaps aligned with business goals",
      "Clear criteria enable faster decision-making and reduce debate",
    ],
  },
  {
    id: "stakeholder-alignment",
    slug: "stakeholder-alignment",
    title: "Stakeholder alignment initiative",
    subtitle: "Building consensus across engineering, design, and business",
    year: "2023",
    heroImage:
      "https://cdn.prod.website-files.com/63983873166762516081f05b/63989aa3e742b829271b28a0_project-02.webp",
    summary:
      "Facilitated alignment across multiple stakeholders to deliver a unified product vision. Created communication frameworks, regular sync cadences, and transparent reporting that reduced misalignment issues by 70% and accelerated decision-making.",
    meta: {
      role: "Product Manager",
      duration: "4 months",
      focus: "Stakeholder management, communication, alignment",
    },
    tags: ["Stakeholder management", "Communication", "Alignment", "Strategy"],
    sections: [
      {
        title: "Challenge",
        description:
          "Multiple stakeholders had conflicting priorities and communication gaps were causing delays and rework across product initiatives.",
        bullets: [
          "Engineering, design, and business teams had misaligned goals",
          "Lack of regular communication led to last-minute surprises",
          "Decision-making was slow due to unclear ownership",
        ],
      },
      {
        title: "Strategy",
        description:
          "Established structured communication frameworks, regular sync cadences, and transparent reporting to ensure all stakeholders stayed informed and aligned.",
        bullets: [
          "Created weekly cross-functional sync meetings",
          "Developed standardized reporting templates",
          "Established clear decision-making processes and ownership",
        ],
      },
      {
        title: "Results",
        description:
          "The alignment initiative significantly improved collaboration and accelerated product delivery.",
        bullets: [
          "Reduced misalignment issues by 70%",
          "Accelerated decision-making by 50%",
          "Improved cross-functional collaboration scores",
        ],
      },
    ],
    outcomes: [
      "Communication frameworks adopted as standard practice",
      "Reduced time spent on alignment discussions",
      "Improved product delivery velocity and quality",
    ],
    background:
      "This case study documents an initiative to improve stakeholder alignment across engineering, design, and business teams to deliver a unified product vision.",
    problemStatement:
      "How do we build consensus and maintain alignment across multiple stakeholders with competing priorities to deliver a unified product vision?",
    takeaways: [
      "Structured communication is essential for stakeholder alignment",
      "Regular sync cadences prevent misalignment before it becomes a problem",
      "Transparent reporting builds trust and keeps everyone informed",
    ],
  },
];

