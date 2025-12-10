export type NavLink = {
  label: string;
  href: string;
  isExternal?: boolean;
  isButton?: boolean;
};

export type Stat = {
  label: string;
  value: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

export type Project = {
  title: string;
  category: string;
  image: string;
  href: string;
};

export type FooterGroup = {
  title: string;
  links: NavLink[];
};

export const siteName = "Namita DHAWAN";

export const headerLogo = {
  default:
    "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63978bae11defc609cd91390_logo.svg",
  inverse:
    "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/6398342d613a27417e7bf02e_logo-inverse.svg",
};

export const navigationLinks: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "DESIGN", href: "/design" },
  { label: "MANAGEMENT", href: "/management" },
  { label: "WRITING", href: "/writing-research" },
  { label: "EXPERIMENTS", href: "/prototypes-experiments" },
  { label: "ABOUT", href: "/about-me" },
];

export const mobileNavigationLinks: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "DESIGN", href: "/design" },
  { label: "MANAGEMENT", href: "/management" },
  { label: "WRITING", href: "/writing-research" },
  { label: "EXPERIMENTS", href: "/prototypes-experiments" },
  { label: "ABOUT", href: "/about-me" },
  {
    label: "DOWNLOAD RESUME",
    href: "/resume",
    isButton: true,
  },
];

export const heroContent = {
  headline: "NAMITA DHAWAN",
  subheading: "PRODUCT MANAGER AND DESIGNER",
  heroImage:
    "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63986c1a9e600d2d0b0ce5e9_home-hero.webp",
  heroImageAlt: "Hero project preview",
};

export const heroMarqueeItems = [
  "Design",
  "Writing",
  "Management",
] as const;

export const stats: Stat[] = [
  { label: "Projects Shipped", value: "4+" },
  { label: "Features Launched", value: "25+" },
  { label: "Avg. Conversion Increase", value: "50%" },
];

export const clientLogos: string[] = [
  "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/639844b3d9d4a198a6f6157e_logo-01.svg",
  "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/639844bc874d1a3c1a6d929d_logo-02.svg",
  "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/639844bc3e8200e6f915ff73_logo-03.svg",
  "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/639844bc3e8200100815ff72_logo-04.svg",
  "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/639844bc64d52c25a6d37750_logo-05.svg",
];

export const services: Service[] = [
  {
    title: "Design (UX, Branding, and Graphics)",
    description:
      "I bridge user needs and visual quality to build impactful product experiences. My design process covers the full lifecycle: user research, journey mapping, creating wireframes and prototypes (Figma), and setting up scalable design systems. I also handle branding, visual strategy, and graphics to ensure a consistent, market-ready look across all user touchpoints.",
    icon:
      "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/6397917e82ecdaad70fa0470_icon-star.svg",
    href: "/design",
  },
  {
    title: "Writing (Communication and Content)",
    description:
      "I simplify complex product visions, strategies, and requirements into clear, persuasive content. This includes critical technical documentation (PRDs, functional specifications), communication for leadership (stakeholder presentations), and polished, user-focused content (in-app copy, guides, and tutorials) that drives adoption and engagement.",
    icon:
      "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/6397917e82ecdaad70fa0470_icon-star.svg",
    href: "/writing-research",
  },
  {
    title: "Management (Strategy and Execution)",
    description:
      "I manage the entire product lifecycle, from market strategy to execution. This involves creating and prioritizing dynamic roadmaps, using Agile methods, and defining clear success metrics (KPIs). My focus is on delivering business value, running successful launch cycles, and driving consensus across engineering, marketing, and sales teams.",
    icon:
      "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/6397917e82ecdaad70fa0470_icon-star.svg",
    href: "/management",
  },
];

export const servicesIntro = {
  badgeIcon:
    "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/6397917e82ecdaad70fa0470_icon-star.svg",
  title: ["SKILLS"],
  person: {
    name: "Namita DHAWAN",
    role: "Product manager and designer",
    avatar:
      "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63985d3b24911adc7e5e1db4_fynn-thumbnail.webp",
  },
};

export const projects: Project[] = [
  {
    title: "Vision Branding",
    category: "Logo Design",
    image:
      "https://cdn.prod.website-files.com/63983873166762516081f05b/63989aa3e742b829271b28a0_project-02.webp",
    href: "/projects/vision-branding",
  },
  {
    title: "Brand Studio",
    category: "Branding",
    image:
      "https://cdn.prod.website-files.com/63983873166762516081f05b/639839d5f858cffb5130a384_project-04.webp",
    href: "/projects/brand-studio",
  },
];

export const callToAction = {
  eyebrow: "Let's create",
  message: "Thank you for visiting and scrolling through my portfolio. If you want to talk about any of my projects, or just chat, I'd love to hear from you! Let's catch up!",
  buttonLabel: "Get in touch",
  buttonHref: "/contact",
  email: "namitadhawan555@gmail.com",
  socialLinks: [
    { name: "LinkedIn", href: "https://linkedin.com", icon: "LinkedIn" },
    { name: "Behance", href: "https://behance.net", icon: "Behance" },
    { name: "Dribbble", href: "https://dribbble.com", icon: "Dribbble" },
    { name: "Medium", href: "https://medium.com", icon: "Medium" },
  ],
};

export const contactMarqueeItems = ["Let's work together"] as const;

export const footerGroups: FooterGroup[] = [
  {
    title: "Pages",
    links: [
      { label: "HOME", href: "/" },
      { label: "DESIGN", href: "/design" },
      { label: "MANAGEMENT", href: "/management" },
      { label: "WRITING", href: "/writing-research" },
      { label: "EXPERIMENTS", href: "/prototypes-experiments" },
      { label: "ABOUT", href: "/about-me" },
    ],
  },
];

export const footerNote = {
  textPrefix: "© Made by",
  designerLabel: "Pawel Gola",
  designerHref: "https://templates.gola.io/",
  platformLabel: "Webflow",
  platformHref: "https://webflow.com",
};

export const floatingBanner = {
  image:
    "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63983e706215ce49c90f0607_banner-circle.svg",
  href: "https://gola.io/solveig",
  alt: "Solveig Template promo",
};

export const secondaryCta = {
  label: "DOWNLOAD RESUME",
  href: "/resume",
};

