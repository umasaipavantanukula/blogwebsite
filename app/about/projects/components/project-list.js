
import fs from 'fs';
import path from 'path';
import RepoCard from '@/components/repo-card';

export default async function ProjectList() {
  // Fetch GitHub repos
  const githubResponse = await fetch('https://api.github.com/users/piotr-jura-udemy/repos');
  const githubRepos = await githubResponse.json();

  // Read local repos from db.json
  const filePath = path.join(process.cwd(), 'db.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  const localRepos = data.repos || [];

  // Normalize local repos to match GitHub repo structure
  const normalizedLocalRepos = localRepos.map(repo => ({
    id: `local-${repo.id}`,
    name: repo.title,
    description: repo.description,
    stargazers_count: repo.stargazers_count,
  }));

  // Combine both lists
  const allRepos = [...normalizedLocalRepos, ...githubRepos];

  // Example repos from the screenshot
  const featuredRepos = [
    { name: "api-platform-react-js", stars: 29, description: "Source code for the API Platform + React.JS Course" },
    { name: "captions", stars: 2, description: "" },
    { name: "git-example", stars: 0, description: "" },
    { name: "laravel-cheat-sheet", stars: 363, description: "Additional resource for the Udemy Laravel Essentials course" },
    { name: "laravel-course", stars: 123, description: "Laravel Essentials Udemy course Full Source Code" },
    { name: "laravel-course-2023", stars: 95, description: "" },
    { name: "laravel-graphql-course-trello-clone", stars: 24, description: "Source code of Udemy course project - Trello clone made with Laravel, Vue, GraphQL and TailwindCSS" },
    { name: "laravel-graphql-vue-tailwind-course", stars: 19, description: "Laravel 7, Vue, GraphQL (Apollo) course on Udemy" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
      {featuredRepos.map(repo => (
        <RepoCard 
          key={repo.name}
          name={repo.name}
          stars={repo.stars}
          description={repo.description}
        />
      ))}
    </div>
  );
}