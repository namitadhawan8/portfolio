export type AboutSection = {
  id: string;
  title: string;
  content: string;
  quote?: string;
  illustration?: string;
};

export const aboutSections: AboutSection[] = [
  {
    id: "about",
    title: "About",
    content:
      "A product manager and designer with a passion for creating impactful digital experiences. By day I lead product initiatives and by night I explore design systems, write about product thinking, and experiment with new ideas.",
    illustration: "laptop",
  },
  {
    id: "background",
    title: "Background",
    content:
      "I've had a diverse path to finding my career in product and design. Previously, I worked in architecture and design writing. Through creating various design projects and side experiments over the years, I then decided to pivot my career into product management and UI/UX design.",
    quote:
      "I decided to pursue a career helping others bring their product ideas to life through design and strategy - and I haven't looked back since.",
    illustration: "tablet",
  },
  {
    id: "interests",
    title: "Interests",
    content:
      "In my spare time I create and experiment with design systems, write about product management, and explore emerging technologies. Currently I'm developing my skills in design systems, product strategy, and user research.",
    illustration: "gaming",
  },
  {
    id: "current-role",
    title: "Current Role",
    content:
      "I'm currently seeking opportunities as a Product Manager, Associate Product Manager (APM), Product Operations, or Founder's Associate. Previously, I worked as a Product Manager and UX Designer, leading cross-functional teams to deliver user-centered products.",
    illustration: "coffee",
  },
];

export const skills = [
  "Product Management",
  "Product Strategy",
  "UX Design",
  "UI Design",
  "User Research",
  "Design Systems",
  "Figma",
  "Content Writing",
];

export const featuredIn = [
  { name: "Product Hunt", url: "https://producthunt.com" },
  { name: "Medium", url: "https://medium.com" },
  { name: "Behance", url: "https://behance.net" },
  { name: "Dribbble", url: "https://dribbble.com" },
];

