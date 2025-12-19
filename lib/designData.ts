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
    id: "ux-event-booking",
    slug: "event-booking-app-definition-design",
    title: "Event Booking App Definition & Design",
    subtitle: "Structuring Social & Wellness Events",
    type: "UX CASE STUDY",
    year: "2024",
    heroImage: "/UX main banner.png",
    previewImages: [],
    summary:
      "This case study focuses on the initial design and definition (greenfield project) of a mobile Event Booking App. The goal was to launch a new product that shifts the focus from purely transactional booking to building community and encouraging repeat engagement (building your 'Tribe').",
    meta: {
      role: "UX Designer, Product Strategist, Researcher, Information Architect, Prototyper",
      duration: "18 weeks",
      focus: "Defining the initial product strategy, enhancing user discoverability, and driving event engagement through structural changes",
    },
    background:
      "This case study focuses on the initial design and definition (greenfield project) of a mobile Event Booking App. The goal was to launch a new product that shifts the focus from purely transactional booking to building community and encouraging repeat engagement (building your 'Tribe'). My process was rooted in deep user understanding, moving from initial market definition to validation of the core experience.",
    problemStatement:
      "The opportunity was rooted in solving a market need: existing event platforms were generally transactional and lacked features for social connection or repeat usage in the Wellness & Lifestyle space. No dominant platform effectively catered to users seeking to join or form consistent social groups ('Tribes') around shared wellness, lifestyle, or professional interests. Existing solutions were designed for single-event sales, lacking the sticky features needed to drive high Daily Active Users (DAU) and long-term retention.",
    targetUsers:
      "The target users are individuals seeking to join or form consistent social groups ('Tribes') around shared wellness, lifestyle, or professional interests. They range from people looking for one-time events to those seeking to build long-term community connections through repeat engagement.",
    takeaways: [
      "Deep user understanding through competitive analysis and qualitative research is essential for defining new products",
      "Information Architecture based on user mental models serves as the backbone for scalable MVP design",
      "Integrated community features from day one are critical drivers for habit-forming usage and retention",
    ],
    tags: ["Product strategy", "User research", "Information architecture", "Prototyping", "Usability testing"],
    sections: [
      {
        title: "The Challenge & Opportunity",
        description:
          "The opportunity was rooted in solving a market need: existing event platforms were generally transactional and lacked features for social connection or repeat usage in the Wellness & Lifestyle space.",
        bullets: [
          "Market Gap: No dominant platform effectively catered to users seeking to join or form consistent social groups ('Tribes') around shared wellness, lifestyle, or professional interests",
          "Low Retention Potential: Existing solutions were designed for single-event sales, lacking the sticky features needed to drive high Daily Active Users (DAU) and long-term retention",
          "The Goal: Define and design a new Minimum Viable Product (MVP) that facilitates easy event discovery and integrates social features from day one, fostering a strong sense of community",
        ],
      },
      {
        title: "Strategic UX Process Highlights",
        description:
          "My process was rooted in deep user understanding, moving from initial market definition to validation of the core experience through comprehensive research and design methods.",
        bullets: [
          "Discovery & Definition: Competitive Analysis, Qualitative Research, Persona & Empathy Mapping - Defined two key target user segments and their specific emotional pain points/motivations for joining new communities",
          "Information Architecture: Card Sorting & User Flow Mapping - Developed a new, scalable Information Architecture that prioritized event categories based on user mental models, serving as the backbone for the MVP",
          "Design & Prototyping: Sketch Wireframes, Digital Wireframes (50+ screens) - Focused on high-fidelity designs that addressed the identified user needs, ensuring a consistent and clear visual hierarchy for the new product",
          "Validation & Iteration: Usability Testing & Feedback - Conducted testing on digital prototypes to identify and eliminate points of confusion in the newly designed booking and community formation flows",
        ],
      },
      {
        title: "Key Design Solutions",
        description:
          "The final solution focused on delivering a connected, intuitive event journey for the new app with integrated community-building features.",
        bullets: [
          "Refined Event Discovery: Implemented a new search and filtering paradigm based on Card Sorting results, allowing users to find events not just by date/location, but by interest category and social connection level (e.g., 'Join a Tribe')",
          "Integrated Community Features: Designed dedicated screens for users to see who else is attending, allowing them to form connections before the event even begins—a critical driver for habit-forming usage",
          "Simplified Booking Flow: Designed the end-to-end transaction path with minimal steps, incorporating clear progress indicators and confirmation feedback for increased user trust",
        ],
      },
    ],
    outcomes: [
      "Anticipated Conversion: Projected 15%+ event selection completion rate for the MVP, achieved through simplified IA and clear navigation tested against user mental models",
      "Engagement: Expected rise in Daily Active Users (DAU) and repeat event bookings due to integrated community-building features ('Build Your Tribe' functionality) designed to drive retention",
      "Usability: Improved task success rate in key flows (e.g., finding and saving an event) based on successful Usability Testing results on the final design",
    ],
    behanceUrl: "https://www.behance.net",
  },
  {
    id: "ui-analytics",
    slug: "event-co-visual-design",
    title: "Visual Design Case Study: Event & Co",
    subtitle: "Designing for Community & Energy",
    type: "UI CASE STUDY",
    year: "2024",
    heroImage: "/ui case study main banner.png",
    previewImages: [
      "/01 Typography & Colour.png",
      "/02 main screens.png",
      "/03 Tab bar screens.png",
      "/04 main app flow.png",
      "/05 find company 7 groups flow.png",
    ],
    summary:
      "Established a modern, energetic, and accessible visual system for Event & Co, translating community-first UX strategy into a cohesive UI with clear hierarchy and mobile-first consistency.",
    meta: {
      role: "Visual Designer",
      duration: "8 weeks",
      focus: "Design system, visual language, UI polish",
    },
    background:
      "This case study focuses on the visual and interface design of the Event & Co mobile app—turning the community and engagement strategy into an energetic, modern, and highly usable UI.",
    problemStatement:
      "Create a UI that feels trustworthy for booking while visually expressing community, energy, and shared experience—minimizing friction in discovery and sign-up.",
    targetUsers:
      "Young professionals and lifestyle enthusiasts seeking social connection and community events.",
    takeaways: [
      "A vibrant yet minimalist system helps CTAs stand out without sacrificing clarity",
      "Consistent typography and rounded components reinforce a friendly, modern feel",
      "Edge cases (cancellations, bookings, premium plans) need equal visual care to maintain trust",
    ],
    tags: ["Visual design", "Design system", "UI polish", "Mobile-first", "Accessibility"],
    sections: [
      {
        title: "The Design Mandate",
        description:
          "Translate the community-first UX strategy into a UI that feels welcoming, dynamic, and easy to navigate while keeping booking flows clear and trustworthy.",
        bullets: [
          "Balance functional clarity for bookings with energy that signals community",
          "Use IA from UX phase to keep booking and filtering obvious and low-friction",
          "Emotional goal: welcoming and dynamic; functional goal: clarity in booking paths",
        ],
      },
      {
        title: "Design System: Colors, Type, Branding",
        description:
          "Built a minimalist yet vibrant visual system: energetic primary color, generous white space, and approachable rounded components.",
        bullets: [
          "Color Palette: vibrant primary (lime) with clean whites for contrast and optimism",
          "Typography: Be Vietnam Semi Bold/Pro for clear hierarchy and modern geometry",
          "Visual Language: rounded corners, subtle shadows to cue interactivity and warmth",
        ],
      },
      {
        title: "Key UI Flows & Interaction Design",
        description:
          "High-fidelity screens make complex flows simple and delightful across onboarding, navigation, and social features.",
        bullets: [
          "Onboarding: large type, minimal imagery to land value fast before sign-up",
          "Navigation: tab bar keeps Feed, Discover Groups, Profile always reachable",
          "Community: avatars and group cards foreground the 'Tribe' concept; messaging feels central",
        ],
      },
      {
        title: "Edge Cases & Polish",
        description:
          "Transactional and monetization screens are styled for clarity and reassurance.",
        bullets: [
          "Bookings & cancellations: clear states and concise language reduce stress",
          "Premium plans: contrasted layouts to explain value and differentiate tiers",
          "50+ screens with consistent components for launch-ready polish",
        ],
      },
    ],
    outcomes: [
      "Cohesive visual identity that reinforces community and energy while keeping booking flows clear",
      "Accessible, mobile-first UI kit (colors, type, components) ready for implementation",
      "High-fidelity screens across onboarding, navigation, community, and monetization paths",
    ],
    behanceUrl: "https://www.behance.net",
  },
  {
    id: "ui-eventco-web",
    slug: "event-co-marketing-website",
    title: "Visual Design Case Study: Event & Co Marketing Website",
    subtitle: "Designing for Conversion & Trust",
    type: "UI CASE STUDY",
    year: "2024",
    heroImage: "/Website banner thumbnail.png",
    previewImages: [
      "/website 01.png",
      "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63986c1a9e600d2d0b0ce5e9_home-hero.webp",
      "/website 03.png",
      "/website 01.png", // Placeholder for prototype section
    ],
    summary:
      "Designed the Event & Co marketing website as a persuasive storefront that clearly sells the community-first value proposition and drives high-quality app downloads.",
    meta: {
      role: "Visual Designer, Web IA, Content Strategist",
      duration: "8 weeks",
      focus: "Marketing site visual system, content hierarchy, conversion design",
    },
    background:
      "This case study details the visual design and structural strategy for the Event & Co marketing website to communicate the app’s community value and convert visitors to downloads.",
    problemStatement:
      "Build a persuasive, trustworthy marketing site that balances energetic brand expression with clear, structured messaging to drive app downloads.",
    targetUsers:
      "Prospective users evaluating event platforms who need to understand differentiation and feel confident before downloading.",
    takeaways: [
      "Marketing pages must sell the value before the download ask",
      "Brand cohesion between web and app boosts trust and clarity",
      "Content hierarchy and social proof reduce friction and doubt",
    ],
    tags: ["Marketing site", "Visual design", "Conversion", "Web IA", "Content strategy"],
    sections: [
      {
        title: "The Strategic Mandate",
        description:
          "Sell the Tribe concept with a site that persuades: establish trust, explain utility, and lead visitors to download.",
        bullets: [
          "Balance energetic community branding with clear conversion messaging",
          "Structure content from problem to features to social proof to CTA",
          "Design for persuasion, not just information",
        ],
      },
      {
        title: "Visual Design System & Brand Cohesion",
        description:
          "Extended the app’s visual identity to web while optimizing for a broader canvas and conversion.",
        bullets: [
          "Palette: warm cream base with vibrant pink, blue, yellow, orange accents",
          "Core colors: #F5F4EF, #F5A4CF, #BECBFF, #FEF04F, #F1AF61",
          "Typography: Mona Sans for headers, DM Sans for body for clarity and character",
          "12-column grid for responsive, structured layouts",
        ],
      },
      {
        title: "Key Design Sections & Conversion Strategy",
        description:
          "Page sections were sequenced to answer objections and guide to download.",
        bullets: [
          "Hero: value-driven headline + grid visuals + clear Download CTA",
          "Value Proposition: Tribe pitch with three feature pillars",
          "Features: deeper coverage of Find Company, Build Connections, Feed",
          "Social Proof: testimonials to build trust",
          "FAQ: preempt concerns before conversion",
        ],
      },
    ],
    outcomes: [
      "Cohesive marketing site aligned to the app brand and community promise",
      "Persuasive content flow that addresses value, differentiation, and trust",
      "Conversion-focused layouts and CTAs ready for desktop and mobile",
    ],
    behanceUrl: "https://www.behance.net",
  },
];

export const designMoreWork: MoreWorkItem[] = [
  {
    title: "Event Booking App iOS UI Design",
    tags: ["iOS App", "UI/UX", "Event App", "Mobile Design"],
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/557d6d204720373.66add58929dc5.png",
    behanceUrl: "https://www.behance.net/gallery/204720373/Event-Booking-App-iOS-UI-Design",
  },
  {
    title: "Research Directory Feature for Student Web Application",
    tags: ["Web Design", "UI/UX", "Product Design", "User Experience"],
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/c7a5a9210562913.67135b4aab90d.png",
    behanceUrl: "https://www.behance.net/gallery/210562913/Research-Directory-Feature-for-Student-Web-Application",
  },
  {
    title: "I'm in Office - Smart Attendance & Productivity Tracker",
    tags: ["iOS App", "Productivity", "HR Tech", "Mobile Design"],
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/d0e055239392481.6928270d288d1.png",
    behanceUrl: "https://www.behance.net/gallery/239392481/Im-in-Office-Smart-Attendance-Productivity-Tracker",
  },
];


