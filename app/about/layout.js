export default function AboutLayout({ children }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div>{children}</div>

      <div className="mt-12 pt-8 border-t border-gray-800">
        <h2 className="mb-4 text-xl font-semibold">You might also like</h2>

        <ul className="space-y-3 text-gray-300">
          <li className="hover:text-white transition-colors">
            <a href="/blog/welcome">Getting Started with Web Development</a>
          </li>
          <li className="hover:text-white transition-colors">
            <a href="/blog/nextjs-guide">Introduction to Next.js</a>
          </li>
        </ul>
      </div>
    </div>
  )
}