import { Metadata } from 'next';
import { reactKeywords } from './keywords';
import { url } from './LayoutMetadata';

export const ReactMetaData: Metadata = {
  title: 'React Interview Preparation',
  description:
    'Master React job interviews with AI-powered mock sessions. Practice real-world scenarios, get personalized feedback, and build confidence in your React skills.',
  keywords: reactKeywords,
  alternates: {
    canonical: '/React',
    languages: {
      'en-US': '/en-US/React',
      'es-ES': '/es-ES/React',
    },
  },
  openGraph: {
    title: 'React Interview Preparation',
    description:
      'Train for React interviews with adaptive AI coaching. Handle hooks, state, lifecycle methods, and architecture challenges with real-time insights.',
    url: `${url}/react`,
    siteName: 'InterViewPrep',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'React Interview Practice with AI Guidance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'React Interview Preparation',
    description:
      'Nail your next React interview. Get AI analysis on your responses, handle component design and state management questions like a pro.',
    site: '@InterViewPrep',
    creator: '@InterViewPrepTeam',
    images: {
      url: '/twitter-image.png',
      alt: 'AI-Powered React Interview Platform',
      width: 1200,
      height: 675,
    },
  },
};
