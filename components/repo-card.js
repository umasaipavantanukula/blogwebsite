export default function RepoCard({ name, stars = 0, description = "" }) {
  return (
    <div className="border border-gray-300 dark:border-gray-800 rounded p-3 sm:p-4 bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-between items-start mb-2 sm:mb-3">
        <h3 className="font-mono repo-title text-sm sm:text-base break-all pr-2">{name}</h3>
        <div className="flex items-center whitespace-nowrap">
          <span className="star-count">🌟{stars}</span>
        </div>
      </div>
      {description && (
        <p className="repo-description text-xs sm:text-sm">{description}</p>
      )}
    </div>
  );
}