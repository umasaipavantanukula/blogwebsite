// content-check.js
const fs = require('fs');
const path = require('path');

function checkContentDirectory() {
  const contentDir = path.join(process.cwd(), 'content');
  
  console.log('Checking content directory...');
  
  if (!fs.existsSync(contentDir)) {
    console.error('ERROR: Content directory not found!');
    console.log('Expected path:', contentDir);
    return false;
  }
  
  console.log('Content directory found at:', contentDir);
  
  const files = fs.readdirSync(contentDir);
  console.log('Files in content directory:', files);
  
  const mdxFiles = files.filter(f => f.endsWith('.mdx'));
  console.log('MDX files found:', mdxFiles);
  
  return true;
}

checkContentDirectory();