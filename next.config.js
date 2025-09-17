/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable source maps in production to reduce build time and memory usage
  productionBrowserSourceMaps: false,
  // Optimize build performance
  poweredByHeader: false,
  // Set a higher memory limit for the build process
  experimental: {
    // Reduce the collection of build traces which is causing the stack overflow
    outputFileTracingExcludes: ['**/*.map', 'node_modules/**/*']
  },
  // Handle module not found errors for optional dependencies
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { 
        ...config.resolve.fallback,
        "react-cookie": false
      };
    }
    return config;
  },
}

module.exports = nextConfig
