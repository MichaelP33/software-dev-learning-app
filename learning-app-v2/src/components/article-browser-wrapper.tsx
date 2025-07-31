'use client'

import { useState } from 'react'
import { Grid3X3 } from 'lucide-react'
import { ArticleBrowser } from './article-browser'
import { getTopicArticles } from '@/lib/data'

interface ArticleBrowserWrapperProps {
  topicId: string
  topicName: string
  currentArticleId: string
}

export function ArticleBrowserWrapper({ topicId, topicName, currentArticleId }: ArticleBrowserWrapperProps) {
  const [isOpen, setIsOpen] = useState(false)
  const topicArticles = getTopicArticles(topicId)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
      >
        <Grid3X3 className="w-3 h-3" />
        <span>Browse {topicArticles.length} articles</span>
      </button>

      <ArticleBrowser
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        articles={topicArticles}
        topicName={topicName}
        currentArticleId={currentArticleId}
      />
    </>
  )
}