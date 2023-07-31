/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ik.imagekit.io'],
    unoptimized: true,
  },
}

module.exports = nextConfig
