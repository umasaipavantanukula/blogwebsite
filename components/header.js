'use client';

import useServerDarkMode from "@/hooks/use-server-dark-mode"
import DarkMode from "./dark-mode"
import Navigation from "./navigation"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const theme = useServerDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="py-4">
      {/* Desktop View */}
      <div className="hidden md:flex md:justify-between md:items-center">
        <div className="flex items-center space-x-10">
          <div>
            <Link href="/" className="text-xl font-mono site-title">UMA SAI PAVAN</Link>
          </div>
          <Navigation />
        </div>
        <div>
          <DarkMode defaultTheme={theme} />
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-mono site-title">UMA SAI PAVAN</Link>
          <div className="flex items-center space-x-4">
            <DarkMode defaultTheme={theme} />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-icon focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 pb-2 border-b border-gray-800">
            <Navigation />
          </div>
        )}
      </div>
    </header>
  )
}