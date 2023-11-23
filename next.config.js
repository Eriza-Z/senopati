/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.discordapp.com', 'mergoreb.sirv.com', 's6.imgcdn.dev', 'ik.imagekit.io'],
    unoptimized: true,
    },
   output: 'export',
}

module.exports = nextConfig
