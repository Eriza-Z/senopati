/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.discordapp.com', 'mergoreb.sirv.com', 's6.imgcdn.dev'],
    unoptimized: true,
    },
}

module.exports = nextConfig
