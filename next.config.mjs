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
                hostname: "lh3.googleusercontent.com",
            }
        ],
    },


};

export default nextConfig;
