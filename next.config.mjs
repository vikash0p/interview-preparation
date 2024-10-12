/** @type {import('next').NextConfig} */
// import withPlaiceholder from '@plaiceholder/next';
import withPlaiceholder from '@plaiceholder/next';
const nextConfig = {
    reactStrictMode: false,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.pixabay.com",
                // port: "",
                // pathname: "/**",
            },
        ],
    },
};

export default withPlaiceholder(nextConfig);
