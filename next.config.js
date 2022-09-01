/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["loremflickr.com"],
    deviceSizes: [320, 640, 660, 768, 1024, 1600]
  }
};

module.exports = nextConfig;
