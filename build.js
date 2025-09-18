// build.js - Simple build script
const { execSync } = require('child_process');

console.log('Starting Next.js build...');

try {
  // Simple Next.js build without any custom environment variables
  execSync('next build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}