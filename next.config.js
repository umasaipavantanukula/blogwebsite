/** @type {import('next').NextConfig} */
const nextConfig = {
  // Simple config that works reliably on Vercel
  output: "standalone",
  // Disable problematic features
  experimental: {
    appDocumentPreloading: false
  },
  // Minimal webpack config
  webpack: (config) => {
    return config;
  }
}

module.exports = nextConfig
