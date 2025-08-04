import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://interview-prap.vercel.app';

  // Define static routes of your site
  const staticRoutes = [
    { path: '/', changeFreq: 'daily', priority: 1.0 },
    { path: '/Next', changeFreq: 'weekly', priority: 0.9 },
    { path: '/React', changeFreq: 'weekly', priority: 0.9 },
    { path: '/Javascript', changeFreq: 'weekly', priority: 0.9 },
    { path: '/Coding', changeFreq: 'weekly', priority: 0.8 },
    { path: '/contact', changeFreq: 'yearly', priority: 0.5 },
  ];

  return staticRoutes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFreq as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: route.priority,
  }));
}
