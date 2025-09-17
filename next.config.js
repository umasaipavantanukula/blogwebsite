/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal config to avoid memory issues
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  // Use export instead of standalone
  output: "export",
  // Turn off tracing completely to avoid stack overflow
  distDir: '.next',
  // No automatic static optimization for now
  experimental: {
    disableStaticImages: true,
    appDocumentPreloading: false,
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
