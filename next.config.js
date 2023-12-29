/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.zoomoid.de",
        pathname: "/2023/all-things-must-end/**"
      }
    ]
  },
}

module.exports = nextConfig
