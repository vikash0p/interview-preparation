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
                // port: "",
                // pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "example.com",
                // port: "",
                // pathname: "/**",
            }
        ],
    },
};

export default nextConfig;
