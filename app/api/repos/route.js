import fs from 'fs';
import path from 'path';

export async function GET() {
  // In production, read from the JSON file directly
  const filePath = path.join(process.cwd(), 'db.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileData);
  
  return Response.json(data.repos);
}