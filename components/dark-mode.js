'use client'

import useDarkMode from '@/hooks/use-dark-mode'

const nextModeIcons = {
  'light': '🌚',
  'dark': '🌝'
}

export default function DarkMode({ defaultTheme }) {
  const { theme, toggleTheme } = useDarkMode(defaultTheme)
  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full transition-opacity hover:opacity-80"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {nextModeIcons[theme]}
    </button>
  )
}