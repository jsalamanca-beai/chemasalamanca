import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://chemasalamanca.com/en',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://chemasalamanca.com/en',
          es: 'https://chemasalamanca.com/es',
        },
      },
    },
    {
      url: 'https://chemasalamanca.com/es',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: 'https://chemasalamanca.com/en',
          es: 'https://chemasalamanca.com/es',
        },
      },
    },
  ];
}
