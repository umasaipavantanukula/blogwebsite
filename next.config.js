/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal configuration to avoid errors
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  // Use standalone output to minimize dependencies
  output: "standalone"
}

module.exports = nextConfig
