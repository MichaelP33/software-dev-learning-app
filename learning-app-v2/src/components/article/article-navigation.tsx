'use client'

import { memo } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react'
import { Article } from '@/types'

interface ArticleNavigationProps {
  topicLink: string
  topicName?: string
  categoryName?: string
  previousArticle: Article | null
  nextArticle: Article | null
}

function ArticleNavigationComponent({ 
  topicLink, 
  previousArticle, 
  nextArticle 
}: ArticleNavigationProps) {
  return (
    <div className="mt-12 space-y-6">
      {/* Previous/Next Article Navigation */}
      {(previousArticle || nextArticle) && (
        <div className="flex justify-between items-center gap-4">
          {previousArticle ? (
            <Link 
              href={`/article/${previousArticle.id}`}
              className="group flex-1 max-w-sm p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-gray-700 rounded-lg group-hover:bg-slate-200 dark:group-hover:bg-gray-600 transition-colors">
                  <ChevronLeft className="w-4 h-4 text-slate-600 dark:text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-500 dark:text-gray-500 mb-1">Previous</div>
                  <div className="font-medium text-slate-900 dark:text-white text-sm truncate">
                    {previousArticle.name}
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex-1 max-w-sm"></div>
          )}

          {/* Back to Topic - Desktop Center */}
          <Link
            href={topicLink}
            className="group flex items-center justify-center p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <div className="p-2 bg-slate-100 dark:bg-gray-700 rounded-lg group-hover:bg-slate-200 dark:group-hover:bg-gray-600 transition-colors">
              <ArrowUp className="w-4 h-4 text-slate-600 dark:text-gray-400" />
            </div>
          </Link>

          {nextArticle ? (
            <Link 
              href={`/article/${nextArticle.id}`}
              className="group flex-1 max-w-sm p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md text-right"
            >
              <div className="flex items-center gap-3 justify-end">
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-500 dark:text-gray-500 mb-1">Next</div>
                  <div className="font-medium text-slate-900 dark:text-white text-sm truncate">
                    {nextArticle.name}
                  </div>
                </div>
                <div className="p-2 bg-slate-100 dark:bg-gray-700 rounded-lg group-hover:bg-slate-200 dark:group-hover:bg-gray-600 transition-colors">
                  <ChevronRight className="w-4 h-4 text-slate-600 dark:text-gray-400" />
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex-1 max-w-sm"></div>
          )}
        </div>
      )}
    </div>
  )
}

export const ArticleNavigation = memo(ArticleNavigationComponent)