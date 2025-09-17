// build.js - Custom build script to bypass tracing issues
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Set higher memory limit
process.env.NODE_OPTIONS = '--max-old-space-size=6144 --no-warnings';

console.log('Starting custom build process...');

try {
  // Step 1: Build with Next.js
  console.log('Building Next.js application...');
  execSync('next build', { stdio: 'inherit' });
  
  // Step 2: Fix the output directory for Vercel
  console.log('Setting up output for Vercel...');
  
  const outputDir = '.next/export';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Step 3: Copy necessary files to output
  console.log('Copying static assets...');
  if (fs.existsSync('.next/static')) {
    // Cross-platform file copy
    const copyDir = (src, dest) => {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      
      const entries = fs.readdirSync(src, { withFileTypes: true });
      
      for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    };
    
    copyDir('.next/static', '.next/export/static');
  }
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}