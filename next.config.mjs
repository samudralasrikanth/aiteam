/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir removed (default true)
    // serverActions removed (always enabled)
  },
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

export default nextConfig;
