/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    compress: true,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.pixabay.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "example.com",
                pathname: "/**",
            }
        ],
    },

    // webpack: (config, { isServer }) => {
    //     if (!isServer) {
    //         config.optimization.splitChunks = {
    //             chunks: 'all',
    //             cacheGroups: {
    //                 react: {
    //                     test: /[\\/]node_modules[\\/](react|react-dom|scheduler|use-sync-external-store)[\\/]/,
    //                     name: 'react',
    //                     priority: 20,
    //                 },
    //                 next: {
    //                     test: /[\\/]node_modules[\\/](next|@next)[\\/]/,
    //                     name: 'next',
    //                     priority: 15,
    //                 },
    //                 vendors: {
    //                     test: /[\\/]node_modules[\\/]/,
    //                     name: 'vendors',
    //                     priority: 10,
    //                 },
    //             },
    //         };
    //     }
    //     return config;
    // },
};

export default nextConfig;
