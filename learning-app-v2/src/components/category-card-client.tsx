'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CursorInspiredCard } from '@/components/cursor-inspired-card'
import { AnimatedProgressBar } from '@/components/animated-card'
import { Category, Progress } from '@/types'

interface CategoryCardClientProps {
  category: Category
  index: number
  progress: Progress
  completionPercentage: number
  gradient: string
}

export function CategoryCardClient({ 
  category, 
  index, 
  progress, 
  completionPercentage, 
  gradient 
}: CategoryCardClientProps) {
  return (
    <CursorInspiredCard 
      hoverGradient={gradient}
      className="cursor-pointer"
    >
      <Link
        href={`/category/${category.id}`}
        className="block p-8"
      >
        {/* Category Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl shadow-lg`}>
              {category.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{category.description}</p>
            </div>
          </div>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{progress.total}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Articles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{progress.completed}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{progress.inProgress}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{completionPercentage}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Progress</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Category Progress</span>
            <span>{completionPercentage}%</span>
          </div>
          <AnimatedProgressBar 
            percentage={completionPercentage}
            gradient={gradient}
            delay={index + 12}
          />
        </div>

        {/* Topics Preview */}
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Topics ({category.topics.length})</h4>
          {category.topics.slice(0, 3).map((topic) => (
            <div key={topic.id} className="flex items-center justify-between text-sm">
              <span className="text-gray-700 dark:text-gray-300">{topic.name}</span>
              <span className="text-gray-500 dark:text-gray-400">{topic.articles.length} articles</span>
            </div>
          ))}
          {category.topics.length > 3 && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              +{category.topics.length - 3} more topics
            </div>
          )}
        </div>

        {/* Enhanced Hover Indicator with Gradient */}
        <motion.div 
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
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