/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placeimg.com", "placekitten.com", "placehold.jp"],
  },
}

module.exports = nextConfig
