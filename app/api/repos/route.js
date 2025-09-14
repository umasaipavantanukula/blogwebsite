import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the db.json file
    const filePath = path.join(process.cwd(), 'db.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    return NextResponse.json(data.repos);
  } catch (error) {
    console.error('Error reading repos data:', error);
    return NextResponse.json({ error: 'Failed to fetch repos' }, { status: 500 });
  }
}