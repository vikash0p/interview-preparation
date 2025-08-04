import type { Metadata } from 'next';

export const appleWebApp: NonNullable<Metadata['appleWebApp']> = {
  title: 'InterViewPrep',
  capable: true,
  statusBarStyle: 'black-translucent',
  startupImage: [
    {
      url: '/apple/app-splash-screen.png',
      media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)', // iPhone X, 11 Pro
    },
    {
      url: '/apple/app-splash-screen-large.png',
      media: '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)', // iPhone 12/13/14
    },
    {
      url: '/apple/app-splash-screen-ipad.png',
      media: '(min-device-width: 768px) and (max-device-width: 1024px)', // iPad
    },
  ],
};
