/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["placeimg.com", "placekitten.com", "placehold.jp"],
  },
}

module.exports = nextConfig
