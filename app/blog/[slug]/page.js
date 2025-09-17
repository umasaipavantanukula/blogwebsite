import { notFound } from 'next/navigation'
import { getPost as getPostNotCached, getPosts } from '@/lib/post'
import { cache } from 'react'
import Link from 'next/link'

const getPost = cache(
  async (slug) => await getPostNotCached(slug)
)

export async function generateStaticParams() {
  const {posts} = await getPosts({ limit: 1000 })
  return posts.map(post => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }) {
  try {
    const { frontmatter } = await getPost(params.slug)
    return frontmatter
  } catch (e) { }
}

export default async function BlogPage({ params }) {
  let post

  try {
    post = await getPost(params.slug)
  } catch (e) {
    notFound()
  }

  return (
    <article className="prose dark:prose-invert max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/blog" className="blog-sort-link inline-flex items-center">
          <span className="mr-2">←</span> Back to all posts
        </Link>
      </div>
      
      <h1 className="text-4xl font-bold mb-4">{post.frontmatter.title}</h1>
      
      <div className="blog-date text-sm mb-6">{post.frontmatter.date}</div>
      
      <div className="flex flex-wrap space-x-2 mb-8">
        {post.frontmatter.tags.map(tag => (
          <Link 
            key={tag} 
            href={`/blog/?tags=${tag}`} 
            className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            #{tag}
          </Link>
        ))}
      </div>
      
      <div className="mt-8">
        {post.content}
      </div>
    </article>
  )
}