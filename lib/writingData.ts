export type WritingArticle = {
  id: string;
  title: string;
  previewImage: string;
  articleUrl: string;
  platform?: string;
};

export type WritingSection = {
  title: string;
  description?: string;
  articles: WritingArticle[];
};

export const writingSections: WritingSection[] = [
  {
    title: "Product and Design",
    description: "Medium articles on product management and design",
    articles: [
      {
        id: "smart-animate",
        title: "If you can smart animate, you can animate!",
        previewImage:
          "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63986c1a9e600d2d0b0ce5e9_home-hero.webp",
        articleUrl: "https://medium.com",
        platform: "Medium",
      },
      {
        id: "design-system-component",
        title: "Behind the scenes of designing a design system component",
        previewImage:
          "https://cdn.prod.website-files.com/63983873166762516081f05b/639839d5f858cffb5130a384_project-04.webp",
        articleUrl: "https://medium.com",
        platform: "Medium",
      },
      {
        id: "ux-intern-learnings",
        title: "Learnings as a UX Design Intern at MakeMyTrip",
        previewImage:
          "https://cdn.prod.website-files.com/63983873166762516081f05b/63989aa3e742b829271b28a0_project-02.webp",
        articleUrl: "https://medium.com",
        platform: "Medium",
      },
      {
        id: "notionfolio",
        title: "Hey, I'm Rama Krushna",
        previewImage:
          "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63986c1a9e600d2d0b0ce5e9_home-hero.webp",
        articleUrl: "https://medium.com",
        platform: "Medium",
      },
    ],
  },
  {
    title: "Design Writing",
    description: "Architecture design magazine articles published on different websites",
    articles: [
      {
        id: "architecture-article-1",
        title: "Sustainable Architecture in Modern Cities",
        previewImage:
          "https://cdn.prod.website-files.com/63983873166762516081f05b/639839d5f858cffb5130a384_project-04.webp",
        articleUrl: "https://example.com",
        platform: "Architecture Magazine",
      },
      {
        id: "architecture-article-2",
        title: "The Future of Urban Design",
        previewImage:
          "https://cdn.prod.website-files.com/63983873166762516081f05b/63989aa3e742b829271b28a0_project-02.webp",
        articleUrl: "https://example.com",
        platform: "Design Journal",
      },
      {
        id: "architecture-article-3",
        title: "Material Innovation in Contemporary Architecture",
        previewImage:
          "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63986c1a9e600d2d0b0ce5e9_home-hero.webp",
        articleUrl: "https://example.com",
        platform: "Architecture Review",
      },
      {
        id: "architecture-article-4",
        title: "Cultural Context in Architectural Design",
        previewImage:
          "https://cdn.prod.website-files.com/63983873166762516081f05b/639839d5f858cffb5130a384_project-04.webp",
        articleUrl: "https://example.com",
        platform: "Design Quarterly",
      },
    ],
  },
];

