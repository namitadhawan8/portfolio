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
    description: "Articles on product management and design",
    articles: [
      {
        id: "product-manager-no-tech",
        title: "How to Become a Product Manager Without a Technical Background",
        previewImage:
          "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*RUAmPR6AFPO_0IdEf-R3kg.png",
        articleUrl: "https://medium.com/@namitadhawan555/how-to-become-a-product-manager-without-a-technical-background-2c0787e8ce3c",
        platform: "Medium",
      },
      {
        id: "component-driven-design",
        title: "Beyond the Style Guide: How Component-Driven Design Accelerates Product Velocity",
        previewImage:
          "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*QYzY5L7TaJmFJUkbuMKcZw.png",
        articleUrl: "https://medium.com/@namitadhawan555/beyond-the-style-guide-how-component-driven-design-accelerates-product-velocity-5aef632810a5",
        platform: "Medium",
      },
      {
        id: "no-code-mvp",
        title: "Don't Build, Validate: Why the No-Code MVP is the Solo PM's Fastest Tool",
        previewImage:
          "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*UFmJSSjNp7juF0ra9ZtbYw.png",
        articleUrl: "https://medium.com/@namitadhawan555/dont-build-validate-why-the-no-code-mvp-is-the-solo-pm-s-fastest-tool-2ebf869801b4",
        platform: "Medium",
      },
      {
        id: "context-aware-ia",
        title: "Designing for Need: How Context-Aware Information Architecture Solves User Churn",
        previewImage:
          "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*LJdjicyS9skUkQZy",
        articleUrl: "https://medium.com/@namitadhawan555/designing-for-need-how-context-aware-information-architecture-solves-user-churn-e3e7385b7fc9",
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
          "https://volzero.com/img/news/87984_banner.jpg",
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
          "https://volzero.com/img/news/88056_banner.jpg",
        articleUrl: "https://volzero.com/news/view/architecture-in-kerala-vivid-legacy-of-gods-own-country",
        platform: "Volume Zero",
      },
    ],
  },
];

