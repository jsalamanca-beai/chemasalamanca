import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://chemasalamanca.me/en',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://chemasalamanca.me/en',
          es: 'https://chemasalamanca.me/es',
        },
      },
    },
    {
      url: 'https://chemasalamanca.me/es',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: 'https://chemasalamanca.me/en',
          es: 'https://chemasalamanca.me/es',
        },
      },
    },
  ];
}
