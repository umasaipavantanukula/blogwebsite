/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal config to avoid memory issues
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  // Use standalone output for better performance
  output: "standalone",
  // Custom dist directory
  distDir: '.next',
  // Experimental features
  experimental: {
    // Disable app document preloading for better performance
    appDocumentPreloading: false,
    // Skip file tracing to prevent stack overflow issues
    outputFileTracingExcludes: {
      '*': ['node_modules/@swc/core-linux-x64-gnu', 'node_modules/@swc/core-linux-x64-musl', '.next/cache/**/*']
    }
  },
  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Reduce bundle size by excluding unnecessary fallbacks
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      "react-cookie": false 
    };
    
    // Optimize server-side rendering
    if (isServer) {
      config.cache = false;
    }
    
    return config;
  }
}

module.exports = nextConfig
