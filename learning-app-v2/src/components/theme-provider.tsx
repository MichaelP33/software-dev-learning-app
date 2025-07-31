'use client'

import { useEffect } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Apply system theme preference on mount
    const applySystemTheme = () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      document.documentElement.classList.toggle('dark', isDark)
    }

    // Apply theme immediately
    applySystemTheme()

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', applySystemTheme)

    return () => {
      mediaQuery.removeEventListener('change', applySystemTheme)
    }
  }, [])

  return <>{children}</>
}