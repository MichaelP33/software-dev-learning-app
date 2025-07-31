'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Menu } from 'lucide-react'

interface TableOfContentsSection {
  id: string
  title: string
  level: number
}

interface ArticleTableOfContentsProps {
  sections: TableOfContentsSection[]
  className?: string
}

export function ArticleTableOfContents({ sections, className = "" }: ArticleTableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Track scroll position to highlight active section
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-20% 0px -35% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all section elements
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      // Close mobile menu after selection
      if (isMobile) {
        setIsExpanded(false)
      }
    }
  }

  if (sections.length === 0) return null

  // Mobile floating button
  if (isMobile) {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-white dark:bg-gray-800 text-slate-700 dark:text-gray-300 p-3 rounded-full shadow-lg border border-slate-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Table of Contents"
        >
          <Menu className="w-5 h-5" />
        </motion.button>

        <AnimatePresence>
          {isExpanded && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsExpanded(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
              />
              
              {/* Mobile TOC Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="absolute bottom-16 right-0 w-80 max-w-[calc(100vw-3rem)] bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-slate-200 dark:border-gray-700 max-h-96 overflow-y-auto"
              >
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Table of Contents</h3>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                          activeSection === section.id
                            ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 font-medium'
                            : 'text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-gray-700/50 hover:text-slate-900 dark:hover:text-white'
                        } ${section.level > 1 ? 'ml-4' : ''}`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // Desktop collapsible edge tab
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className={`fixed top-1/2 right-0 transform -translate-y-1/2 z-40 ${className}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Edge Tab */}
      <motion.div
        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-slate-200/50 dark:border-gray-700/50 shadow-lg cursor-pointer hover:shadow-xl"
        style={{
          borderTopLeftRadius: '0.75rem',
          borderBottomLeftRadius: '0.75rem',
          borderRight: 'none'
        }}
        whileHover={{ x: -4, backgroundColor: 'rgba(255,255,255,0.95)' }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-center py-3 px-2">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-5 h-5 text-slate-600 dark:text-gray-400" />
          </motion.div>
        </div>
      </motion.div>

      {/* Expandable Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 right-16 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl border border-slate-200/50 dark:border-gray-700/50 p-4 w-72"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              Table of Contents
            </h3>
            
            <nav className="space-y-1 max-h-80 overflow-y-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 font-medium'
                      : 'text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-gray-700/50 hover:text-slate-900 dark:hover:text-white'
                  } ${section.level > 1 ? 'ml-4' : ''}`}
                >
                  <span className="truncate">{section.title}</span>
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Hook to generate table of contents from article content
export function useTableOfContents(articleId?: string): TableOfContentsSection[] {
  const [sections, setSections] = useState<TableOfContentsSection[]>([])

  useEffect(() => {
    // Generate sections based on article ID
    if (articleId === 'compiled-languages') {
      setSections([
        { id: 'key-concepts', title: 'Key Concepts', level: 1 },
        { id: 'business-team-impact', title: 'Business & Team Impact', level: 1 },
        { id: 'cursor-implementation', title: 'Cursor Implementation', level: 1 }
      ])
    } else {
      // Default sections for other articles
      setSections([
        { id: 'learning-objectives', title: 'Learning Objectives', level: 1 },
        { id: 'overview', title: 'Overview', level: 1 },
        { id: 'related-topics', title: 'Related Topics', level: 1 }
      ])
    }
  }, [articleId])

  return sections
}