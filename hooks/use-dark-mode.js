'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const useDarkMode = (defaultTheme = 'dark') => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Use useEffect to ensure code runs only on client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Return the current theme and the toggle function
  // When not mounted yet, return the default theme to avoid hydration mismatch
  return { 
    theme: mounted ? theme : defaultTheme, 
    toggleTheme 
  }
}

export default useDarkMode