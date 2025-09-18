import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import H1 from '@/components/h1'

export function loadPost(slug) {
  const filename = slug.endsWith('.mdx') ? slug : `${slug}.mdx`
  const filePath = path.join(process.cwd(), 'content', filename)
  
  try {
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`)
      throw new Error(`Blog post not found: ${slug}`)
    }
    return fs.readFileSync(filePath, 'utf8')
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error)
    throw error
  }
}

export async function getPost(slug) {
  try {
    const source = loadPost(slug)

    return await compileMDX({
      source,
      components: {
        h1: (props) => <H1 {...props} />
      },
      options: {
        parseFrontmatter: true
      }
    })
  } catch (error) {
    console.error(`Error compiling MDX for ${slug}:`, error)
    throw error
  }
}

export async function getPosts({
  newest = true, page = 1, limit = 10, tags
} = {}) {
  const contentDir = path.join(process.cwd(), 'content')
  
  try {
    if (!fs.existsSync(contentDir)) {
      console.error(`Content directory not found: ${contentDir}`)
      return { posts: [], pageCount: 0 }
    }
    
    const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.mdx'))

    if (files.length === 0) {
      console.warn('No MDX files found in content directory')
      return { posts: [], pageCount: 0 }
    }

    const posts = await Promise.all(
      files.map(async filename => {
        try {
          const { frontmatter } = await getPost(filename.replace('.mdx', ''))
          return {
            frontmatter,
            slug: filename.replace('.mdx', '')
          }
        } catch (error) {
          console.error(`Error processing post ${filename}:`, error)
          return null
        }
      })
    )

    // Filter out any failed posts
    let filteredPosts = posts.filter(post => post !== null)

    if (tags && tags.length > 0) {
      filteredPosts = filteredPosts.filter(
        post => post.frontmatter.tags && post.frontmatter.tags.some(
          tag => tags.includes(tag)
        )
      )
    }

    if (newest) {
      // by the newest
      filteredPosts.sort(
        (a, b) => {
          const dateA = new Date(a.frontmatter.date)
          const dateB = new Date(b.frontmatter.date)
          return dateB - dateA
        }
      )
    } else {
      filteredPosts.sort(
        (a, b) => {
          const dateA = new Date(a.frontmatter.date)
          const dateB = new Date(b.frontmatter.date)
          return dateA - dateB
        }
      )
    }

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    return {
      posts: filteredPosts.slice(startIndex, endIndex),
      pageCount: Math.ceil(filteredPosts.length / limit)
    }
  } catch (error) {
    console.error('Error in getPosts:', error)
    return { posts: [], pageCount: 0 }
  }
}