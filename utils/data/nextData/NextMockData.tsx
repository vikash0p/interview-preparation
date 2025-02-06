export const NextMockData = [
  {
    id: "1",
    question: "What is Next.js, and how does it differ from React?",
    answer:
      "Next.js is a React framework that provides built-in server-side rendering (SSR), static site generation (SSG), API routes, and many performance optimizations. Unlike React, which is a library for building UI components, Next.js offers a complete solution for server-side rendering, file-based routing, and automatic code splitting.",
    questionType: "Beginner",
    customLink: "what-is-nextjs",
  },
  {
    id: "2",
    question: "Explain the concept of server-side rendering (SSR) in Next.js.",
    answer:
      "Server-side rendering (SSR) in Next.js means that pages are rendered on the server at request time, delivering fully rendered HTML to the client. This improves SEO and initial page load performance compared to client-side rendering.",
    questionType: "Beginner",
    customLink: "server-side-rendering-nextjs",
  },
  {
    id: "3",
    question: "What are the main features of Next.js?",
    answer:
      "Next.js offers features such as automatic static optimization, server-side rendering (SSR), static site generation (SSG), API routes, image optimization, internationalization (i18n), and built-in CSS and TypeScript support.",
    questionType: "Beginner",
    customLink: "features-of-nextjs",
  },
  {
    id: "4",
    question: "How does Next.js handle routing?",
    answer:
      "Next.js uses a file-based routing system. Any file inside the `pages/` directory automatically becomes a route. Nested folders create nested routes, and dynamic routes can be created using square brackets (e.g., `pages/blog/[id].js`).",
    questionType: "Beginner",
    customLink: "routing-in-nextjs",
  },
  {
    id: "5",
    question:
      "What is the purpose of the pages directory in a Next.js project?",
    answer:
      "The `pages/` directory in Next.js defines the application's routes. Each file in this directory corresponds to a unique route. The framework automatically handles routing based on the file structure.",
    questionType: "Beginner",
    customLink: "pages-directory-nextjs",
  },
  {
    id: "6",
    question: "How do you create dynamic routes in Next.js?",
    answer:
      "Dynamic routes in Next.js are created by using square brackets in the `pages/` directory (e.g., `pages/product/[id].js`). You can use `getStaticProps` and `getStaticPaths` for static site generation or `getServerSideProps` for server-side rendering.",
    questionType: "Beginner",
    customLink: "dynamic-routes-nextjs",
  },
  {
    id: "7",
    question:
      "What is the difference between getStaticProps and getServerSideProps?",
    answer:
      "`getStaticProps` runs at build time and is used for static site generation (SSG), while `getServerSideProps` runs at request time on the server, enabling server-side rendering (SSR).",
    questionType: "Beginner",
    customLink: "getstaticprops-vs-getserversideprops",
  },
  {
    id: "8",
    question: "How can you fetch data in Next.js during build time?",
    answer:
      "You can fetch data during build time in Next.js using the `getStaticProps` function. This function runs at build time and provides data to the page as props.",
    questionType: "Beginner",
    customLink: "fetch-data-build-time-nextjs",
  },
  {
    id: "9",
    question: "What is the role of the Link component in Next.js?",
    answer:
      "The `Link` component in Next.js is used for client-side navigation between pages. It enables preloading and faster transitions between routes.",
    questionType: "Beginner",
    customLink: "nextjs-link-component",
  },
  {
    id: "10",
    question: "How do you perform CSS styling in Next.js?",
    answer:
      "Next.js supports multiple ways to style applications, including global CSS files, CSS Modules, styled-components, and Tailwind CSS.",
    questionType: "Beginner",
    customLink: "css-styling-nextjs",
  },
  {
    id: "11",
    question: "What is the purpose of the next.config.js file?",
    answer:
      "The `next.config.js` file is used to configure Next.js settings such as environment variables, custom headers, redirects, rewrites, and image optimization settings.",
    questionType: "Beginner",
    customLink: "next-config-js",
  },
  {
    id: "12",
    question: "How do you handle static assets in Next.js?",
    answer:
      "Static assets like images, fonts, and icons are stored in the `public/` directory. They can be accessed directly from the root URL (e.g., `/logo.png`).",
    questionType: "Beginner",
    customLink: "handle-static-assets-nextjs",
  },
  {
    id: "13",
    question: "Explain the concept of pre-rendering in Next.js.",
    answer:
      "Pre-rendering means generating HTML in advance for better performance and SEO. Next.js supports Static Site Generation (SSG) and Server-Side Rendering (SSR) for pre-rendering.",
    questionType: "Beginner",
    customLink: "pre-rendering-nextjs",
  },
  {
    id: "14",
    question: "What is Incremental Static Regeneration (ISR) in Next.js?",
    answer:
      "ISR allows static pages to be updated at runtime without rebuilding the entire site. It uses `revalidate` in `getStaticProps` to determine how often a page should be refreshed.",
    questionType: "Beginner",
    customLink: "incremental-static-regeneration-nextjs",
  },
  {
    id: "15",
    question: "How does Next.js optimize images?",
    answer:
      "Next.js optimizes images using the `next/image` component, which provides automatic resizing, lazy loading, and WebP support.",
    questionType: "Beginner",
    customLink: "image-optimization-nextjs",
  },
  {
    id: "16",
    question: "How does Next.js handle environment variables?",
    answer:
      "Next.js supports environment variables through `.env.local`, `.env.development`, and `.env.production` files. Variables prefixed with `NEXT_PUBLIC_` are accessible on both client and server, while others remain server-side only.",
    questionType: "Intermediate",
    customLink: "environment-variables-nextjs",
  },
  {
    id: "17",
    question: "Explain the concept of dynamic imports in Next.js.",
    answer:
      "Dynamic imports in Next.js allow components or modules to be loaded on demand rather than at build time. This improves performance by reducing the initial JavaScript bundle size. Next.js provides `next/dynamic` for this purpose.",
    questionType: "Intermediate",
    customLink: "dynamic-imports-nextjs",
  },
  {
    id: "18",
    question: "How can you customize the Document in Next.js?",
    answer:
      "The `_document.js` file in Next.js allows customization of the HTML structure of the application. It is useful for adding meta tags, scripts, or global styles outside of the default Next.js setup.",
    questionType: "Intermediate",
    customLink: "custom-document-nextjs",
  },
  {
    id: "19",
    question: "What is the purpose of the Head component in Next.js?",
    answer:
      "The `Head` component in Next.js is used to modify the document's head section, allowing developers to add metadata, styles, or scripts dynamically to individual pages.",
    questionType: "Intermediate",
    customLink: "head-component-nextjs",
  },
  {
    id: "20",
    question: "How do you implement internationalization (i18n) in Next.js?",
    answer:
      "Next.js has built-in support for internationalization (i18n) through the `i18n` configuration in `next.config.js`. It allows locale detection, language switching, and automatic routing based on user preferences.",
    questionType: "Intermediate",
    customLink: "internationalization-nextjs",
  },
  {
    id: "21",
    question: "What are API routes in Next.js, and how do you create them?",
    answer:
      "API routes in Next.js allow you to create server-side endpoints inside the `pages/api` directory. Each file inside this directory maps to an API endpoint, which can handle requests and responses using Node.js functions like `req` and `res`.",
    questionType: "Intermediate",
    customLink: "api-routes-nextjs",
  },
  {
    id: "22",
    question: "How can you handle redirects and rewrites in Next.js?",
    answer:
      "Redirects and rewrites in Next.js can be configured inside `next.config.js` using the `redirects` and `rewrites` properties. Redirects send users to a different URL, while rewrites allow masking of URLs without changing the displayed path.",
    questionType: "Intermediate",
    customLink: "redirects-rewrites-nextjs",
  },
  {
    id: "23",
    question: "What is the useRouter hook, and how do you use it?",
    answer:
      "The `useRouter` hook from `next/router` provides access to Next.js' router object. It allows you to get the current route, query parameters, and navigate programmatically within a Next.js application.",
    questionType: "Intermediate",
    customLink: "useRouter-hook-nextjs",
  },
  {
    id: "24",
    question: "How do you manage global state in a Next.js application?",
    answer:
      "Global state management in Next.js can be handled using libraries like Redux, Zustand, or React Context API. Since Next.js is built on React, any React state management solution works seamlessly.",
    questionType: "Intermediate",
    customLink: "global-state-nextjs",
  },
  {
    id: "25",
    question: "Explain the concept of middleware in Next.js.",
    answer:
      "Middleware in Next.js allows you to modify request and response objects before they reach a page or API route. It is useful for authentication, logging, and redirects. Middleware is defined inside `middleware.ts` or `middleware.js`.",
    questionType: "Intermediate",
    customLink: "middleware-nextjs",
  },
  {
    id: "26",
    question: "How can you add custom headers to responses in Next.js?",
    answer:
      "You can add custom headers in Next.js by defining them inside `next.config.js` using the `headers` function. This allows setting security headers like `Content-Security-Policy` and `X-Frame-Options`.",
    questionType: "Intermediate",
    customLink: "custom-headers-nextjs",
  },
  {
    id: "27",
    question: "What is the purpose of the _app.js file in Next.js?",
    answer:
      "The `_app.js` (or `_app.tsx`) file in Next.js is used to customize the initialization of pages. It allows wrapping pages with providers, layouts, and global styles that persist across all pages.",
    questionType: "Intermediate",
    customLink: "app-js-nextjs",
  },
  {
    id: "28",
    question:
      "How do you handle errors and create custom error pages in Next.js?",
    answer:
      "Next.js provides built-in support for custom error pages like `404.js` and `500.js`. These pages can be placed inside the `pages` directory to handle specific error responses with custom designs.",
    questionType: "Intermediate",
    customLink: "custom-error-pages-nextjs",
  },
  {
    id: "29",
    question:
      "What are the benefits of using static site generation (SSG) in Next.js?",
    answer:
      "SSG in Next.js pre-renders pages at build time, improving performance and SEO. It reduces server load and allows content to be served quickly from a CDN.",
    questionType: "Intermediate",
    customLink: "ssg-benefits-nextjs",
  },
  {
    id: "30",
    question: "How does Next.js handle code splitting?",
    answer:
      "Next.js automatically splits code at the page level, ensuring that only the necessary JavaScript is loaded for each page. This improves performance by reducing the initial bundle size.",
    questionType: "Intermediate",
    customLink: "code-splitting-nextjs",
  },
  {
    id: "31",
    question: "How does Next.js handle static and dynamic routing?",
    answer:
      "Next.js handles static routing by using the file-based routing system inside the `pages` directory. Dynamic routing is achieved by using bracketed file names like `[id].js` inside the `pages` directory, allowing for dynamic parameters in routes.",
    questionType: "Advanced",
    customLink: "static-dynamic-routing-nextjs",
  },
  {
    id: "32",
    question: "Explain the process of deploying a Next.js application.",
    answer:
      "Next.js applications can be deployed using Vercel, a dedicated Next.js hosting platform, or other cloud providers like Netlify, AWS, and DigitalOcean. Deployment involves building the project using `next build` and running `next start` for production.",
    questionType: "Advanced",
    customLink: "deploying-nextjs",
  },
  {
    id: "33",
    question: "How can you implement custom server logic in Next.js?",
    answer:
      "Custom server logic can be implemented using Next.js API routes or a custom Express.js or Fastify server. The custom server handles advanced routing, authentication, and middleware logic.",
    questionType: "Advanced",
    customLink: "custom-server-nextjs",
  },
  {
    id: "34",
    question:
      "What are the security considerations when building a Next.js application?",
    answer:
      "Security considerations include using environment variables securely, implementing authentication and authorization, setting HTTP security headers, preventing XSS attacks, and avoiding sensitive data exposure in public API routes.",
    questionType: "Advanced",
    customLink: "security-nextjs",
  },
  {
    id: "35",
    question: "How do you handle authentication and authorization in Next.js?",
    answer:
      "Authentication can be handled using NextAuth.js, Firebase Auth, or custom JWT-based authentication. Authorization can be managed using middleware or protected API routes to restrict access based on user roles.",
    questionType: "Advanced",
    customLink: "authentication-nextjs",
  },
  {
    id: "36",
    question:
      "What is the role of the next/image component, and how does it differ from a standard img tag?",
    answer:
      "The `next/image` component provides automatic image optimization, lazy loading, and responsive resizing. Unlike the standard `img` tag, it improves performance by serving appropriately sized images based on the device screen size.",
    questionType: "Advanced",
    customLink: "next-image-vs-img",
  },
  {
    id: "37",
    question: "How can you implement analytics in a Next.js application?",
    answer:
      "Analytics can be implemented using Google Analytics, Vercel Analytics, or other third-party services by integrating tracking scripts inside `_app.js` or using the `next/script` component for better performance.",
    questionType: "Advanced",
    customLink: "analytics-nextjs",
  },
  {
    id: "38",
    question: "What are the best practices for SEO in Next.js?",
    answer:
      "Best practices for SEO include using the `next/head` component for meta tags, implementing structured data, optimizing images, using server-side rendering (SSR) for dynamic content, and ensuring fast page load speeds.",
    questionType: "Advanced",
    customLink: "seo-nextjs",
  },
  {
    id: "39",
    question: "How do you handle form submissions in Next.js?",
    answer:
      "Form submissions in Next.js can be handled using API routes for server-side processing or by directly submitting data to external services. Client-side validation can be implemented using React Hook Form or Yup.",
    questionType: "Advanced",
    customLink: "form-submissions-nextjs",
  },
  {
    id: "40",
    question: "Explain the concept of edge functions in Next.js.",
    answer:
      "Edge functions in Next.js allow server-side logic to be executed at the network edge, improving performance and reducing latency. They can be used for authentication, geolocation-based content, and personalization.",
    questionType: "Advanced",
    customLink: "edge-functions-nextjs",
  },
  {
    id: "41",
    question: "How can you integrate GraphQL with Next.js?",
    answer:
      "GraphQL can be integrated into Next.js using Apollo Client, Relay, or urql. API routes in Next.js can serve as GraphQL servers, enabling efficient data fetching and state management.",
    questionType: "Advanced",
    customLink: "graphql-nextjs",
  },
  {
    id: "42",
    question:
      "What are the considerations for building a multilingual site with Next.js?",
    answer:
      "Building a multilingual site in Next.js requires configuring `next.config.js` with the `i18n` property, using language detection, dynamic routing for translations, and integrating content management systems (CMS) that support multiple languages.",
    questionType: "Advanced",
    customLink: "multilingual-site-nextjs",
  },
  {
    id: "43",
    question: "How does Next.js handle hot module replacement (HMR)?",
    answer:
      "Next.js supports hot module replacement (HMR) by automatically updating modules in the browser without requiring a full page refresh, improving developer experience and speeding up development.",
    questionType: "Advanced",
    customLink: "hot-module-replacement-nextjs",
  },
  {
    id: "44",
    question:
      "What is the purpose of the next/link component, and how does it enhance navigation?",
    answer:
      "The `next/link` component provides client-side navigation between pages in Next.js. It prefetches linked pages in the background, resulting in faster navigation and improved user experience.",
    questionType: "Advanced",
    customLink: "next-link-navigation",
  },
  {
    id: "45",
    question:
      "How can you implement caching strategies in a Next.js application?",
    answer:
      "Caching strategies in Next.js can be implemented using CDN caching, static site generation (SSG), revalidation with Incremental Static Regeneration (ISR), and server-side caching mechanisms.",
    questionType: "Advanced",
    customLink: "caching-strategies-nextjs",
  },
];
