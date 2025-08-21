/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './components/**/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-gradient-r': 'linear-gradient(to right, #030712, #1e2939)',
        'main-gradient-l': 'linear-gradient(to left, #030712, #1e2939)',
        'main-gradient-t': 'linear-gradient(to top, #030712, #1e2939)',
        'main-gradient-b': 'linear-gradient(to bottom, #030712, #1e2939)',
      },

      keyframes: {
        slide: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0%)' },
        },
        appear: {
          from: { opacity: '0', transform: 'translateY(4rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },

      },
      animation: {
        slide: 'slide 750ms ease-in-out',
        appear: 'appear 750ms ease-in-out',

      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
