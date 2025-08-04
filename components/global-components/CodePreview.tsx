'use client';

import { Sandpack } from '@codesandbox/sandpack-react';
import { cyberpunk } from '@codesandbox/sandpack-themes';

export default function CodePreview({ data }: { data: string }) {
  return (
    <Sandpack
      template="nextjs"
      theme={cyberpunk}
      files={{
        // ✅ Tailwind import moved to _app.js
        '/pages/_app.js': {
          code: `import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}`,
        },

        // ✅ Main page content
        '/pages/index.js': {
          code: data,
          active: true,
        },

        // ✅ Tailwind styles
        '/styles/globals.css': {
          code: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
        },

        // ✅ PostCSS config
        '/postcss.config.js': {
          code: `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`,
        },

        // ✅ Tailwind config
        '/tailwind.config.js': {
          code: `module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`,
        },

        // ✅ next.config.js for remote image domains
        '/next.config.js': {
          code: `module.exports = {
  images: {
    domains: ['picsum.photos'],
  },
};`,
        },
      }}
      options={{
        showTabs: true,
        showLineNumbers: true,
        showConsole: true,
        wrapContent: true,
        editorHeight: 700,
      }}
      customSetup={{
        dependencies: {
          tailwindcss: '^3.3.0',
          autoprefixer: '^10.4.0',
          postcss: '^8.4.0',
        },
      }}
    />
  );
}
