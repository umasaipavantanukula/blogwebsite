import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Chatbot from '@/components/chatbot'
import useServerDarkMode from '@/hooks/use-server-dark-mode'
import Providers from '@/components/providers'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: {
    template: '%s | My Blog',
    default: 'My Blog'
  },
  metadataBase: new URL('https://myblog.example.com'),
}

export default function RootLayout({ children }) {
  // Get server-side dark mode but default to system preference
  const theme = useServerDarkMode() || 'system'
  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${roboto.className} min-h-screen font-sans antialiased`}>
        <Providers>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <Header />
            <main className="mt-6 sm:mt-8 md:mt-10">
              {children}
            </main>
            <Chatbot />
          </div>
        </Providers>
      </body>
    </html>
  )
}
