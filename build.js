// build.js - Custom build script to bypass tracing issues
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Set higher memory limit
process.env.NODE_OPTIONS = '--max-old-space-size=6144 --no-warnings';

console.log('Starting custom build process...');

try {
  // Directly disable the problematic file tracing feature through env variable
  process.env.NEXT_DISABLE_FILE_TRACING = 'true';
  
  // Step 1: Build with Next.js
  console.log('Building Next.js application...');
  execSync('next build', { stdio: 'inherit' });
  
  // Standalone mode already creates the correct output structure
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}