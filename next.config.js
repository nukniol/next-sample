/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["poka6.files.wordpress.com"],
    unoptimized: true,
  }
}

module.exports = nextConfig
