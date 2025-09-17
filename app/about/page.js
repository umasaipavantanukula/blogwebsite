import H1 from '@/components/h1'

export const metadata = {
  title: 'About Me'
}

export default function AboutPage() {
  return (
    <>
      <H1>About Me</H1>
      
      <div className="prose prose-lg dark:prose-invert">
        <p>
          Hi there! I'm a passionate web developer with expertise in modern frontend and backend technologies.
        </p>

        <h2>My Background</h2>
        <p>
          I have several years of experience building web applications using technologies like React, Next.js, Node.js, and more.
          My focus is on creating performant, accessible, and user-friendly experiences on the web.
        </p>

        <h2>Skills</h2>
        <ul>
          <li>Frontend: React, Next.js, CSS/Tailwind, TypeScript</li>
          <li>Backend: Node.js, Express, MongoDB, PostgreSQL</li>
          <li>DevOps: Docker, CI/CD, AWS</li>
          <li>Other: Responsive design, Web performance optimization, SEO</li>
        </ul>

        <h2>Interests</h2>
        <p>
          When I'm not coding, I enjoy photography, reading tech blogs, and contributing to open-source projects.
          I'm particularly interested in web performance optimization and modern JavaScript frameworks.
        </p>
      </div>
    </>
  )
}