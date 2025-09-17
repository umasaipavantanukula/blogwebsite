// deploy.js - Custom deployment script for Vercel
const { execSync } = require('child_process');
const path = require('path');

console.log('Starting deployment process...');

try {
  // Ensure Vercel CLI is installed
  try {
    execSync('vercel --version', { stdio: 'pipe' });
    console.log('Vercel CLI is already installed.');
  } catch (e) {
    console.log('Installing Vercel CLI...');
    execSync('npm install -g vercel', { stdio: 'inherit' });
  }

  // Set environment variables for deployment
  const env = {
    ...process.env,
    NEXT_DISABLE_FILE_TRACING: 'true',
    NEXT_TELEMETRY_DISABLED: '1',
    NODE_OPTIONS: '--max-old-space-size=8192 --no-warnings'
  };

  // Deploy to Vercel (will prompt for login if needed)
  console.log('Deploying to Vercel...');
  console.log('NOTE: If you\'re not logged in, the CLI will prompt you to log in.');
  
  // Use --force to ignore the build cache and start fresh
  execSync('vercel --prod --force', { 
    stdio: 'inherit',
    env
  });

  console.log('Deployment completed successfully!');
} catch (error) {
  console.error('Deployment failed:', error);
  process.exit(1);
}