import fs from 'fs';
import path from 'path';

export default async function ProjectList() {
  // Read data directly from db.json during build time
  const filePath = path.join(process.cwd(), 'db.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  const repos = data.repos;

  return (
    <ul>
      {repos.map(repo => (
        <li key={repo.id} className="mb-4">
          <div>{repo.title}</div>
          <div>{repo.description}</div>
          <div>{repo.stargazers_count}</div>
        </li>
      ))}
    </ul>
  )
}