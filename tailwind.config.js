/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'var(--text-primary)',
            a: {
              color: 'var(--link-color)',
              '&:hover': {
                color: 'var(--link-hover)',
              },
            },
            h1: {
              color: 'var(--text-primary)',
            },
            h2: {
              color: 'var(--text-primary)',
            },
            h3: {
              color: 'var(--text-primary)',
            },
            h4: {
              color: 'var(--text-primary)',
            },
            strong: {
              color: 'var(--text-primary)',
            },
            code: {
              color: 'var(--text-primary)',
            },
            blockquote: {
              color: 'var(--text-secondary)',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
