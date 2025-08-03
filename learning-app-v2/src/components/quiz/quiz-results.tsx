'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { memo } from 'react'
import { QuizAnswer, QuizQuestion } from '@/types'
import { QuizHighScores } from '@/lib/data'
import { TrendingUp } from 'lucide-react'
import { AnimatedCard, FloatingCard } from '@/components/animated-card'
import { getPerformanceMessage, getPerformanceColor, getQuestionTypeStats } from '@/lib/utils/quiz'

interface QuizResultsProps {
  score: number
  totalPossible: number
  percentage: number
  answers: QuizAnswer[]
  questions: QuizQuestion[]
  onRetake: () => void
  onResetScores: () => void
  articleId: string
  highScores?: QuizHighScores | null
}

function QuizResultsComponent({
  score,
  totalPossible,
  percentage,
  answers,
  questions,
  onRetake,
  onResetScores,
  articleId,
  highScores
}: QuizResultsProps) {
  const stats = getQuestionTypeStats(answers, questions)
  const performanceMessage = getPerformanceMessage(percentage)
  const performanceColor = getPerformanceColor(percentage)

  return (
    <div className="space-y-6">
      {/* Performance Header */}
      <FloatingCard delay={0.1}>
        <div className="text-center p-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-6xl mb-4"
          >
            {performanceMessage.emoji}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
          >
            {performanceMessage.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-6"
          >
            {performanceMessage.subtitle}
          </motion.p>

          {/* Score Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className={`inline-block bg-gradient-to-r ${performanceColor} text-white px-8 py-4 rounded-2xl shadow-lg`}
          >
            <div className="text-4xl font-bold">{score}/{totalPossible}</div>
            <div className="text-lg opacity-90">{percentage.toFixed(0)}%</div>
          </motion.div>
        </div>
      </FloatingCard>

      {/* Question Type Breakdown */}
      <AnimatedCard delay={0.7}>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Question Type Breakdown
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(stats).map(([type, stat]) => {
              if (stat.total === 0) return null
              
              const accuracy = stat.total > 0 ? (stat.correct / stat.total) * 100 : 0
              const typeLabels = {
                'multiple-choice': 'Multiple Choice',
                'fill-in-blank': 'Fill in the Blank',
                'short-answer': 'Short Answer',
                'long-answer': 'Long Answer'
              }
              
              return (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + Object.keys(stats).indexOf(type) * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                >
                  <div className="font-medium text-gray-900 dark:text-white mb-2">
                    {typeLabels[type as keyof typeof typeLabels]}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <div>Correct: {stat.correct}/{stat.total} ({accuracy.toFixed(0)}%)</div>
                    <div>Points: {stat.points}/{stat.possible}</div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-2 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${accuracy}%` }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </AnimatedCard>

      {/* High Scores Section */}
      {highScores && (
        <AnimatedCard delay={1.0}>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              High Scores
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-900/30 dark:to-yellow-800/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                <span className="font-medium text-gray-900 dark:text-white">Best Score</span>
                <span className="text-yellow-700 dark:text-yellow-300 font-bold">
                  {highScores.bestScore}/{highScores.totalPossible} ({((highScores.bestScore / highScores.totalPossible) * 100).toFixed(0)}%)
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-600 dark:text-gray-300">Attempts</span>
                <span className="text-gray-900 dark:text-white font-medium">{highScores.attempts}</span>
              </div>
            </div>
          </div>
        </AnimatedCard>
      )}

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex flex-col sm:flex-row gap-4 pt-4"
      >
        <button
          onClick={onRetake}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors"
        >
          Retake Quiz
        </button>
        
        <Link
          href={`/article/${articleId}`}
          className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-xl transition-colors text-center"
        >
          Back to Article
        </Link>
        
        {highScores && (
          <button
            onClick={onResetScores}
            className="sm:w-auto bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-xl transition-colors"
          >
            Reset Scores
          </button>
        )}
      </motion.div>
    </div>
  )
}

// Export memoized component for performance optimization
export default memo(QuizResultsComponent)