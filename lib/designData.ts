export type CaseStudySection = {
  title: string;
  description: string;
  bullets?: string[];
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  type: "UX CASE STUDY" | "UI CASE STUDY";
  year: string;
  heroImage: string;
  previewImages?: string[]; // For UI components/screenshots on the left side
  summary: string;
  meta: {
    role: string;
    duration: string;
    focus: string;
    client?: string;
    team?: string[];
  };
  tags: string[];
  sections: CaseStudySection[];
  outcomes: string[];
  behanceUrl: string;
  // For detailed page
  background?: string;
  problemStatement?: string;
  targetUsers?: string;
  takeaways?: string[];
};

export type MoreWorkItem = {
  title: string;
  tags: string[];
  image: string;
  behanceUrl: string;
};

export const designCaseStudies: CaseStudy[] = [
  {
    id: "ux-wellness",
    slug: "habit-forming-wellness-app",
    title: "Habit-forming wellness app",
    subtitle: "Reducing drop-off from onboarding to week 4 retention",
    type: "UX CASE STUDY",
    year: "2024",
    heroImage:
      "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63986c1a9e600d2d0b0ce5e9_home-hero.webp",
    previewImages: [
      "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63986c1a9e600d2d0b0ce5e9_home-hero.webp",
      "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63986c1a9e600d2d0b0ce5e9_home-hero.webp",
      "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63986c1a9e600d2d0b0ce5e9_home-hero.webp",
    ],
    summary:
      "I led the UX workstream to reduce churn in the first 30 days. We reframed onboarding around quick wins, simplified the daily ritual, and built lightweight accountability loops.",
    meta: {
      role: "Product Manager + UX Lead",
      duration: "10 weeks",
      focus: "Activation, journey mapping, prototype testing",
    },
    background:
      "In this case study, I have described my process of building a habit-forming wellness app that reduces user drop-off during the critical first 30 days. The app focuses on creating sustainable wellness habits through guided onboarding and daily rituals.",
    problemStatement:
      "43% of new users dropped during onboarding and only 18% reached week 4. The challenge was to build a system that reduces churn in the first 30 days by reframing onboarding around quick wins and simplifying the daily ritual.",
    targetUsers:
      "The target users are individuals seeking to build sustainable wellness habits. They range from beginners new to wellness apps to experienced users looking for a more engaging experience. The app caters to people with varying levels of commitment and time availability.",
    takeaways: [
      "Motion, when implemented in the smallest of places in the right manner, adds to the personality of the brand and its products",
      "User research and journey mapping are crucial for understanding drop-off points",
      "Quick wins and clear value messaging are essential for early user retention",
    ],
    tags: ["User research", "Journey mapping", "Activation", "Figma"],
    sections: [
      {
        title: "Problem framing",
        description:
          "43% of new users dropped during onboarding and only 18% reached week 4. Interviews showed unclear value messaging and no obvious first win.",
        bullets: [
          "Long sign-up with fragmented permissions requests",
          "No day-one ritual or guidance for what “good” looks like",
          "Progress and streaks hidden deep in the experience",
        ],
      },
      {
        title: "Approach",
        description:
          "Mapped the end-to-end journey, built a north-star flow, and prototyped two activation hypotheses that we A/B tested with 18 participants.",
        bullets: [
          "Condensed onboarding from 9 to 5 steps with inline rationale",
          "Introduced a 5-minute starter routine with audio guidance",
          "Added a lightweight weekly check-in to reset goals",
        ],
      },
      {
        title: "Solution highlights",
        description:
          "A guided timeline with progress cues, contextual tips, and friendly nudges. The design keeps friction low while making the next step explicit.",
        bullets: [
          "Sticky “today” module surfaces the single next action",
          "Progress bar + micro-streaks for early motivation",
          "Contextual education cards instead of modal overload",
        ],
      },
      {
        title: "Validation",
        description:
          "Two rounds of unmoderated tests (Maze) plus 1:1 interviews showed the new flow was faster and easier to follow.",
        bullets: [
          "+22% onboarding completion (control vs variant)",
          "+18% weekly active day streaks after week 2",
          "SUS 86 (4.6/5) with clearer value comprehension",
        ],
      },
    ],
    outcomes: [
      "Shipped the revised activation flow and guidance content in 2 sprints.",
      "Established a reusable template for habit loops and weekly check-ins.",
      "Documented decision log and handoff for engineering and CS.",
    ],
    behanceUrl: "https://www.behance.net",
  },
  {
    id: "ui-analytics",
    slug: "analytics-dashboard-ui-refresh",
    title: "Analytics dashboard UI refresh",
    subtitle: "Design system foundations and accessibility-first UI",
    type: "UI CASE STUDY",
    year: "2023",
    heroImage:
      "https://cdn.prod.website-files.com/63983873166762516081f05b/639839d5f858cffb5130a384_project-04.webp",
    previewImages: [
      "https://cdn.prod.website-files.com/63983873166762516081f05b/639839d5f858cffb5130a384_project-04.webp",
      "https://cdn.prod.website-files.com/63983873166762516081f05b/639839d5f858cffb5130a384_project-04.webp",
      "https://cdn.prod.website-files.com/63983873166762516081f05b/639839d5f858cffb5130a384_project-04.webp",
    ],
    summary:
      "A fast-moving UI refresh for a B2B analytics tool. I rebuilt the visual system to improve clarity, hierarchy, and color accessibility while speeding up delivery with reusable components.",
    meta: {
      role: "Product Designer",
      duration: "6 weeks",
      focus: "Design system, UI polish, accessibility",
    },
    background:
      "This case study documents the UI refresh process for a B2B analytics dashboard. The existing UI mixed multiple color palettes and inconsistent typography, making it difficult for users to scan and understand data insights.",
    problemStatement:
      "Building a comprehensive UI refresh and design system for the analytics dashboard that improves clarity, hierarchy, and accessibility while maintaining consistency across all components.",
    targetUsers:
      "The primary users are business analysts, product managers, and executives who need to quickly understand data insights and make informed decisions. They require clear visual hierarchy and accessible design to efficiently parse complex information.",
    takeaways: [
      "Design systems help in implementing consistent UI across products at scale",
      "Accessibility should be considered from the start, not as an afterthought",
      "Componentization significantly reduces development time and ensures consistency",
    ],
    tags: ["Design system", "UI polish", "Accessibility", "Component library"],
    sections: [
      {
        title: "Audit + constraints",
        description:
          "Existing UI mixed five color palettes and inconsistent typography. We set constraints for spacing, type scale, and semantic color tokens compliant with WCAG AA.",
        bullets: [
          "Inventoried 60+ screens and mapped duplicate patterns",
          "Defined 4-point spacing grid and 1.25x type scale",
          "Color tokens for states (neutral, info, success, warning, error)",
        ],
      },
      {
        title: "Componentization",
        description:
          "Built a lean library (inputs, filters, tables, charts wrappers) with clear states and documentation to speed up engineering.",
        bullets: [
          "Table kit with sortable headers, inline filters, empty states",
          "Filter drawer with keyboard support and focus rings",
          "Card templates for summaries vs deep-dive modules",
        ],
      },
      {
        title: "Visual storytelling",
        description:
          "Introduced clearer hierarchy for primary KPIs, trend deltas, and segmentation chips so teams could scan insights faster.",
        bullets: [
          "Contrasting headline row for key KPIs with inline trend chips",
          "Muted canvas, high-contrast data ink for charts",
          "Tag system for segments and filters for quick parsing",
        ],
      },
      {
        title: "Impact",
        description:
          "Paired with engineering to ship the refreshed UI and establish review gates for accessibility.",
        bullets: [
          "-28% time-to-build for new dashboards (using the kit)",
          "Contrast ratios ≥ 4.5 for text and 3.0 for UI icons",
          "Positive NPS comments around readability and focus",
        ],
      },
    ],
    outcomes: [
      "Design system starter built in Figma with documentation and tokens.",
      "UI library adopted by 3 product pods; reduced bespoke styling.",
      "Accessibility checklist now part of design QA and handoff.",
    ],
    behanceUrl: "https://www.behance.net",
  },
];

export const designMoreWork: MoreWorkItem[] = [
  {
    title: "Fintech design system tokens",
    tags: ["Design system", "UI", "Tokens"],
    image:
      "https://cdn.prod.website-files.com/63983873166762516081f05b/63989aa3e742b829271b28a0_project-02.webp",
    behanceUrl: "https://www.behance.net",
  },
  {
    title: "Habit tracker mobile UI kit",
    tags: ["Mobile", "UI", "Prototype"],
    image:
      "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63986c1a9e600d2d0b0ce5e9_home-hero.webp",
    behanceUrl: "https://www.behance.net",
  },
  {
    title: "Marketing site refresh",
    tags: ["Web", "UX", "Brand"],
    image:
      "https://cdn.prod.website-files.com/63983873166762516081f05b/639839d5f858cffb5130a384_project-04.webp",
    behanceUrl: "https://www.behance.net",
  },
];


