import { Metadata } from 'next';
import { javascriptKeywords } from './keywords';
import { url } from './LayoutMetadata';

export const JavaScriptMetaData: Metadata = {
  title: 'JavaScript Interview Preparation',
  description:
    'Crack JavaScript interviews with confidence. Practice technical questions, coding challenges, and get personalized AI feedback tailored to your skill level.',
  keywords: javascriptKeywords,
  alternates: {
    canonical: '/Javascript',
    languages: {
      'en-US': '/en-US/Javascript',
      'es-ES': '/es-ES/Javascript',
    },
  },

  openGraph: {
    title: 'JavaScript Interview Preparation',
    description:
      'Sharpen your JavaScript skills with our AI-driven platform. Real-world questions, live coding practice, and expert feedback to help you land your next job.',
    url: `${url}/Javascript`,
    siteName: 'InterViewPrep',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'JavaScript Interview Practice with AI Coaching',
      },
    ],
    locale: 'en_US',
    type: 'website',
    videos: [
      {
        url: '/javascript-demo.mp4',
        width: 1280,
        height: 720,
        type: 'video/mp4',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript Interview Preparation',
    description:
      'Practice JavaScript coding questions with AI feedback. Get actionable tips, improve your skills, and prepare with confidence.',
    site: '@InterViewPrep',
    creator: '@InterViewPrepTeam',
    images: {
      url: '/twitter-image.png',
      alt: 'Practice JavaScript Interviews with Real-Time AI Feedback',
      width: 1200,
      height: 675,
    },
  },
};
