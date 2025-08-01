'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Brain, CheckCircle, Clock } from 'lucide-react'
import { Quiz } from '@/types'
import { getCategoryPrimaryGradient } from '@/lib/gradients'
import { getQuizHighScores, getQuestionMasteryCount } from '@/lib/data'

interface KnowledgeAssessmentProps {
  articleId: string
  quiz: Quiz
  categoryId?: string
  className?: string
}

export default function KnowledgeAssessment({ 
  articleId, 
  quiz, 
  categoryId,
  className = '' 
}: KnowledgeAssessmentProps) {
  const highScores = getQuizHighScores(articleId)
  const masteryCount = getQuestionMasteryCount(articleId, quiz.totalQuestions)
  
  const bestPercentage = highScores?.bestOverallPercentage || 0
  const hasAttempted = highScores?.totalAttempts && highScores.totalAttempts > 0

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-gray-700/50 shadow-lg ${className}`}
    >
      {/* Header */}
      <div className="text-center mb-5">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Brain className="w-5 h-5 text-slate-700 dark:text-gray-300" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Knowledge Assessment
          </h3>
        </div>
      </div>

      {/* Progress Line */}
      <div className="mb-3">
        <span className="text-sm font-medium text-slate-900 dark:text-white">
          {hasAttempted 
            ? `Questions mastered: ${masteryCount.mastered}/${masteryCount.total}`
            : `${quiz.totalQuestions} questions available`
          }
        </span>
      </div>

      {/* Proficiency Bar */}
      <div className="mb-5">
        <div className="w-full bg-slate-200 dark:bg-gray-600 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-700 ease-out ${
              categoryId 
                ? `bg-gradient-to-r ${getCategoryPrimaryGradient(categoryId)}` 
                : 'bg-gradient-to-r from-blue-500 to-cyan-500'
            }`}
            style={{ width: `${hasAttempted ? bestPercentage : 0}%` }}
          />
        </div>
        <div className="text-right text-xs text-slate-500 dark:text-gray-400 mt-1">
          {hasAttempted ? `Best: ${Math.round(bestPercentage)}%` : 'Not started'}
        </div>
      </div>

      {/* Assessment Stats */}
      <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-gray-400 mb-5">
        <div className="flex items-center gap-1">
          <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
          <span>{quiz.totalQuestions} questions</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-blue-600 dark:text-blue-400" />
          <span>~15 min</span>
        </div>
      </div>

      {/* CTA Button */}
      <Link 
        href={`/quiz/${articleId}`}
        className="block w-full"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <div className="flex items-center justify-center gap-2">
            <Brain className="w-4 h-4" />
            Start Assessment
          </div>
        </motion.button>
      </Link>
    </motion.div>
  )
}