'use client'

import { useState, useEffect, memo } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react'
import { Article, Topic } from '@/types'

interface MobileBottomNavigationProps {
  topic: Topic | null
  previousArticle: Article | null
  nextArticle: Article | null
  topicLink: string
  articlePosition: number
  totalArticles: number
}

function MobileBottomNavigationComponent({
  topic,
  previousArticle,
  nextArticle,
  topicLink,
  articlePosition,
  totalArticles
}: MobileBottomNavigationProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className="h-1 bg-slate-200 dark:bg-gray-700">
          <div 
            className="h-full bg-blue-500 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="lg:hidden mt-8">
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-slate-200 dark:border-gray-700 px-4 py-3">
          {/* Progress Indicator */}
          <div className="text-center mb-3">
            <div className="text-xs text-slate-500 dark:text-gray-400 font-medium">
              Article {articlePosition} of {totalArticles}
            </div>
            <div className="text-xs text-slate-600 dark:text-gray-300 truncate mt-1">
              {topic?.name}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            {/* Previous Article */}
            {previousArticle ? (
              <Link
                href={`/article/${previousArticle.id}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-50 dark:bg-gray-800 rounded-xl hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-slate-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Previous</span>
              </Link>
            ) : (
              <div className="flex-1 opacity-50">
                <div className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-50 dark:bg-gray-800 rounded-xl">
                  <ChevronLeft className="w-4 h-4 text-slate-400 dark:text-gray-600" />
                  <span className="text-sm text-slate-400 dark:text-gray-600">Previous</span>
                </div>
              </div>
            )}

            {/* Back to Topic - Centered */}
            <Link
              href={topicLink}
              className="flex items-center justify-center w-14 py-3 bg-slate-100 dark:bg-gray-700 rounded-xl hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors"
            >
              <ArrowUp className="w-4 h-4 text-slate-600 dark:text-gray-400" />
            </Link>

            {/* Next Article */}
            {nextArticle ? (
              <Link
                href={`/article/${nextArticle.id}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-50 dark:bg-gray-800 rounded-xl hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Next</span>
                <ChevronRight className="w-4 h-4 text-slate-600 dark:text-gray-400" />
              </Link>
            ) : (
              <div className="flex-1 opacity-50">
                <div className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-50 dark:bg-gray-800 rounded-xl">
                  <span className="text-sm text-slate-400 dark:text-gray-600">Next</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 dark:text-gray-600" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export const MobileBottomNavigation = memo(MobileBottomNavigationComponent)