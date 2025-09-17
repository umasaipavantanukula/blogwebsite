/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal config to avoid memory issues
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  // Use server mode instead of export to allow dynamic features
  output: "standalone",
  // Turn off tracing completely to avoid stack overflow
  distDir: '.next',
  // Add a dynamic route exclusion for the blog page
  experimental: {
    // Allow server-side rendering instead of static export for some pages
    appDocumentPreloading: false
  },
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
