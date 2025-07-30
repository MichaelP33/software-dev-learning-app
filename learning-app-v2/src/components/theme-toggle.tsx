'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'
import { useState, useEffect } from 'react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg animate-pulse">
        <div className="w-6 h-6 bg-gray-300 rounded"></div>
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 overflow-hidden">
        <Sun className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-500 transform ${
          theme === 'light' 
            ? 'translate-y-0 rotate-0 opacity-100' 
            : '-translate-y-8 rotate-180 opacity-0'
        }`} />
        <Moon className={`absolute inset-0 w-6 h-6 text-blue-600 transition-all duration-500 transform ${
          theme === 'dark' 
            ? 'translate-y-0 rotate-0 opacity-100' 
            : 'translate-y-8 rotate-180 opacity-0'
        }`} />
      </div>
      
      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-active:opacity-100 transition-opacity duration-200" />
    </button>
  )
}