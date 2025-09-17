'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { startTransition } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  const router = useRouter()

  return (
    <div className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Something went wrong!</h2>
      <p className="text-gray-400 mb-6">An error occurred while loading this page.</p>
      <div className="flex space-x-4">
        <button
          onClick={() => {
            startTransition(() => {
              router.refresh()
              reset()
            })
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
        <button
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Go to homepage
        </button>
      </div>
    </div>
  )
}