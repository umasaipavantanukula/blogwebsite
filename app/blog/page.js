import H1 from '@/components/h1'
import Pagination from '@/components/pagination'
import { getPosts } from '@/lib/post'
import Link from 'next/link'

export default async function BlogPostsPage(
  { searchParams }
) {
  const tags = searchParams.tags?.split(',')
  const order = searchParams.order ?? 'newest'
  const page = searchParams.page ?? 1
  const limit = searchParams.limit ?? 10  // Increased limit to show more posts
  const { posts, pageCount } = await getPosts({
    tags,
    newest: order === 'newest',
    page,
    limit
  })

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Recent Posts</h1>

      <div className="text-lg text-gray-400 mb-8">Stay up to date with most recent posts</div>

      <hr className="border-gray-700 mb-8" />

      <div className="mb-8">
        Display&nbsp;
        {order === 'newest' && <Link href="/blog?order=oldest" className="blog-sort-link underline">oldest</Link>}
        {order === 'oldest' && <Link href="/blog?order=newest" className="blog-sort-link underline">newest</Link>}
      </div>

      <ul className="space-y-8">
        {posts.length > 0 ? posts.map(post => (
          <li key={post.slug} className="block mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
            <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold blog-post-link">{post.frontmatter.title}</Link>
            <div className="blog-date text-sm mt-2">{post.frontmatter.date}</div>
            {post.frontmatter.excerpt && (
              <p className="mt-3 text-gray-600 dark:text-gray-300">{post.frontmatter.excerpt}</p>
            )}
          </li>
        )) : (
          <li className="block mb-8">No blog posts found</li>
        )}
      </ul>

      <div className="mt-8">
        <Pagination pageCount={pageCount} />
      </div>
    </div>
  )
}