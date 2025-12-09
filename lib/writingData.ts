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
        id: "youtube-channels-architecture",
        title: "Top 15 YouTube Channels Every Architecture Student Should Follow",
        previewImage:
          "https://volzero.com/img/news/88010_banner.jpg",
        articleUrl: "https://volzero.com/news/view/top-15-youtube-channels-every-architecture-student-should-follow",
        platform: "Volume Zero",
      },
      {
        id: "renaissance-vs-gothic",
        title: "The Difference Between Renaissance vs Gothic Architecture",
        previewImage:
          "https://volzero.com/img/news/88010_banner.jpg",
        articleUrl: "https://volzero.com/news/view/the-difference-between-renaissance-vs-gothic-architecture",
        platform: "Volume Zero",
      },
      {
        id: "minimal-living-tiny-house",
        title: "Minimal Living: The Surprising Benefits of Living in a Tiny House",
        previewImage:
          "https://volzero.com/img/news/88035_banner.jpg",
        articleUrl: "https://volzero.com/news/view/minimal-living-the-surprising-benefits-of-living-in-a-tiny-house",
        platform: "Volume Zero",
      },
      {
        id: "architecture-kerala",
        title: "Architecture in Kerala: Vivid Legacy of God's Own Country",
        previewImage:
          "https://volzero.com/img/news/88010_banner.jpg",
        articleUrl: "https://volzero.com/news/view/architecture-in-kerala-vivid-legacy-of-gods-own-country",
        platform: "Volume Zero",
      },
    ],
  },
];

