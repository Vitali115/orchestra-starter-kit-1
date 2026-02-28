'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem('theme') as Theme | null
  return stored ?? getSystemTheme()
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const initial = getInitialTheme()
    setTheme(initial)
    applyTheme(initial)
    setMounted(true)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
  }

  // Placeholder to avoid layout shift before mount
  if (!mounted) {
    return <div className="w-[28px] h-[28px]" />
  }

  return (
    <button
      onClick={toggle}
      className="rounded-md p-1.5 transition-colors cursor-pointer hover:bg-foreground/10"
      title={theme === 'dark' ? 'Passa alla light mode' : 'Passa alla dark mode'}
      aria-label={theme === 'dark' ? 'Passa alla light mode' : 'Passa alla dark mode'}
    >
      {theme === 'dark' ? (
        /* Sun icon — visible in dark mode, click to go light */
        <svg
          width="16"
          height="16"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 12L23 12" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 2V1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 23V22" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 20L19 19" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 4L19 5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 20L5 19" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 4L5 5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1 12L2 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        /* Moon icon — visible in light mode, click to go dark */
        <svg
          width="16"
          height="16"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}
