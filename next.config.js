/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_FILES_DOMAIN],
    unoptimized: true,
  },
};

module.exports = nextConfig;
