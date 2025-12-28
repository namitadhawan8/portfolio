import { MetadataRoute } from 'next';
import { designCaseStudies } from '@/lib/designData';
import { managementCases } from '@/lib/managementData';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://namitadhawan.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/design`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/management`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/writing-research`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/prototypes-experiments`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about-me`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic pages - Design case studies
  const designPages: MetadataRoute.Sitemap = designCaseStudies.map((caseStudy) => ({
    url: `${baseUrl}/design/${caseStudy.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic pages - Management cases
  const managementPages: MetadataRoute.Sitemap = managementCases.map((managementCase) => ({
    url: `${baseUrl}/management/${managementCase.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...designPages, ...managementPages];
}

