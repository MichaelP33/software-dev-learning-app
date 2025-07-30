'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CursorInspiredCard } from '@/components/cursor-inspired-card'
import { Topic, Progress } from '@/types'
import { getStatusIcon, getStatusColor } from '@/lib/data'

interface TopicCardClientProps {
  topic: Topic
  index: number
  topicProgress: Progress
  topicCompletedPercentage: number
  gradient: string
}

export function TopicCardClient({ 
  topic, 
  index, 
  topicProgress, 
  topicCompletedPercentage, 
  gradient 
}: TopicCardClientProps) {
  return (
    <CursorInspiredCard 
      hoverGradient={gradient}
      className="cursor-pointer"
    >
      <Link
        href={`/topic/${topic.id}`}
        className="block p-6"
      >
        {/* Topic Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-200 flex-1 pr-4 transition-colors duration-300">
            {topic.name}
          </h3>
          <div className="text-right flex-shrink-0">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {topicProgress.completed}/{topicProgress.total}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Articles</div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{topic.description}</p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <motion.div 
              className={`h-full bg-gradient-to-r ${gradient} transition-all duration-500 ease-out`}
              initial={{ width: 0 }}
              animate={{ width: `${topicCompletedPercentage}%` }}
              transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Articles Preview */}
        <div className="space-y-2">
          {(() => {
            // Filter out "not started" articles
            const meaningfulArticles = topic.articles.filter(article => 
              article.learningStatus !== 'not started'
            );
            
            if (meaningfulArticles.length === 0) {
              return (
                <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {topic.articles.length} articles ready to learn
                </div>
              );
            }
            
            return (
              <>
                {meaningfulArticles.slice(0, 3).map((article) => (
                  <div key={article.id} className="flex items-center gap-2 text-sm">
                    <span className="text-xs">{getStatusIcon(article.learningStatus)}</span>
                    <span className="text-gray-700 dark:text-gray-300 truncate">{article.name}</span>
                  </div>
                ))}
                {meaningfulArticles.length > 3 && (
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    +{meaningfulArticles.length - 3} more in progress
                  </div>
                )}
              </>
            );
          })()}
        </div>

        {/* Enhanced Hover Indicator with Gradient */}
        <motion.div 
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center shadow-lg`}>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>
      </Link>
    </CursorInspiredCard>
  )
}