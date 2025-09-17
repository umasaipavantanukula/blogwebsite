/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable source maps in production to reduce memory usage
  productionBrowserSourceMaps: false,
  // Disable powered by header
  poweredByHeader: false,
  // Use standalone output for more reliable builds
  output: "standalone",
  // Additional optimization options
  swcMinify: true,
  reactStrictMode: true,
  // Handle react-cookie fallback
  webpack: (config) => {
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      "react-cookie": false 
    };
    return config;
  }
}

module.exports = nextConfig
