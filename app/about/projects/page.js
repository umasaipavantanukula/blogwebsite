import { Suspense } from "react";
import ProjectList from "./components/project-list";
import ProjectListLoading from "./components/project-list-loading";
import { ErrorBoundary } from "react-error-boundary";

export const metadata = {
  title: 'Projects'
}

export default async function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-normal mb-4 sm:mb-6">Projects</h1>

      <div className="mb-6 sm:mb-8 text-sm sm:text-base">Hello, this is the list of my repos!</div>
      <ErrorBoundary fallback={<div>Cannot fetch projects currently</div>}>
        <Suspense fallback={<ProjectListLoading />}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}