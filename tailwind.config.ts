/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-gradient-r': 'linear-gradient(to right, #030712, #1e2939)',
        'main-gradient-l': 'linear-gradient(to left, #030712, #1e2939)',
        'main-gradient-t': 'linear-gradient(to top, #030712, #1e2939)',
        'main-gradient-b': 'linear-gradient(to bottom, #030712, #1e2939)',
      },
    },
  },
  plugins: [],
};
export default config;
