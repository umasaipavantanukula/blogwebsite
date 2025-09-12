export default async function ProjectList() {
  // Use relative URL in production, fallback to local json-server in development
  const apiUrl = process.env.NODE_ENV === 'production' 
    ? '/api/repos'  // Use relative URL in production
    : 'http://localhost:3001/repos';  // Use json-server in development
    
  const response = await fetch(
    apiUrl,
    { cache: 'no-store' }
  )
  const repos = await response.json()

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