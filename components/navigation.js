'use client';

import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="font-mono">
      <ul className="md:flex md:space-x-6 space-y-3 md:space-y-0">
        <li>
          <Link 
            href="/about" 
            className={`${pathname === '/about' ? 'font-bold' : ''} block py-1 md:py-0 nav-link`}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            href="/about/projects" 
            className={`${pathname === '/about/projects' ? 'font-bold' : ''} block py-1 md:py-0 nav-link`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            href="/photos" 
            className={`${pathname === '/photos' ? 'font-bold' : ''} block py-1 md:py-0 nav-link`}
          >
            Photos
          </Link>
        </li>
        <li>
          <Link 
            href="/blog" 
            className={`${pathname.startsWith('/blog') ? 'font-bold' : ''} block py-1 md:py-0 nav-link`}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}