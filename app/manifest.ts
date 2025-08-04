import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'InterViewPrep',
    short_name: 'InterViewPrep',
    description: 'Master your job interviews with AI-powered coaching and feedback.',
    start_url: '/',
    display: 'standalone',
    background_color: '#111827',
    theme_color: '#111827',
    orientation: 'portrait',
    lang: 'en',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: 'favicon/interViewPraplogo.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  };
}
