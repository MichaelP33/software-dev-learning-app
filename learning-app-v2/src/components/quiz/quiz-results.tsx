'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { QuizAnswer, QuizQuestion } from '@/types'
import { CheckCircle, XCircle, Award, RotateCcw } from 'lucide-react'

interface QuizResultsProps {
  score: number
  totalPossible: number
  percentage: number
  performance: {
    level: 'excellent' | 'good' | 'needs-review' | 'retake-recommended'
    message: string
    color: string
  }
  answers: QuizAnswer[]
  questions: QuizQuestion[]
  onRetake: () => void
  articleId: string
}

export default function QuizResults({
  score,
  totalPossible,
  percentage,
  performance,
  answers,
  questions,
  onRetake,
  articleId
}: QuizResultsProps) {
  const getQuestionTypeStats = () => {
    const stats = {
      'multiple-choice': { correct: 0, total: 0, points: 0, possible: 0 },
      'fill-in-blank': { correct: 0, total: 0, points: 0, possible: 0 },
      'short-answer': { correct: 0, total: 0, points: 0, possible: 0 },
      'long-answer': { correct: 0, total: 0, points: 0, possible: 0 }
    }

    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId)
      if (!question) return

      const type = answer.type
      stats[type].total++
      stats[type].points += answer.pointsEarned
      stats[type].possible += question.points

      if (answer.isCorrect || (answer.selfAssessment === 'nailed-it')) {
        stats[type].correct++
      }
    })

    return stats
  }

  const stats = getQuestionTypeStats()

  const getPerformanceIcon = () => {
    switch (performance.level) {
      case 'excellent':
        return <Award className="w-16 h-16 text-yellow-500" />
      case 'good':
        return <CheckCircle className="w-16 h-16 text-green-500" />
      case 'needs-review':
        return <XCircle className="w-16 h-16 text-yellow-500" />
      case 'retake-recommended':
        return <RotateCcw className="w-16 h-16 text-red-500" />
    }
  }

  const getPerformanceColor = () => {
    switch (performance.level) {
      case 'excellent':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500'
      case 'good':
        return 'bg-gradient-to-r from-green-500 to-emerald-500'
      case 'needs-review':
        return 'bg-gradient-to-r from-yellow-500 to-amber-500'
      case 'retake-recommended':
        return 'bg-gradient-to-r from-red-500 to-rose-500'
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Quiz Complete!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Here's how you performed
          </p>
        </div>
        
        <Link
          href={`/article/${articleId}`}
          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ✕
        </Link>
      </div>

      {/* Main Score Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50 text-center"
      >
        <div className="flex justify-center mb-6">
          {getPerformanceIcon()}
        </div>

        <div className="mb-4">
          <div className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
            {percentage}%
          </div>
          <div className="text-xl text-gray-600 dark:text-gray-400">
            {score} out of {totalPossible} points
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-6 overflow-hidden">
          <motion.div
            className={`h-4 rounded-full ${getPerformanceColor()}`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>

        <p className={`text-lg font-medium ${performance.color}`}>
          {performance.message}
        </p>
      </motion.div>

      {/* Breakdown by Question Type */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50"
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Performance Breakdown
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(stats).map(([type, data]) => {
            if (data.total === 0) return null
            
            const typeLabels = {
              'multiple-choice': 'Multiple Choice',
              'fill-in-blank': 'Fill in Blank',
              'short-answer': 'Short Answer',
              'long-answer': 'Long Answer'
            }

            const typeColors = {
              'multiple-choice': 'blue',
              'fill-in-blank': 'orange',
              'short-answer': 'green',
              'long-answer': 'purple'
            }

            const color = typeColors[type as keyof typeof typeColors]
            const percentage = data.possible > 0 ? Math.round((data.points / data.possible) * 100) : 0

            return (
              <div
                key={type}
                className={`p-4 rounded-lg border bg-${color}-50/80 dark:bg-${color}-900/20 border-${color}-200 dark:border-${color}-700`}
              >
                <div className={`text-2xl font-bold text-${color}-600 dark:text-${color}-400 mb-1`}>
                  {percentage}%
                </div>
                <div className={`text-sm font-medium text-${color}-700 dark:text-${color}-300 mb-1`}>
                  {typeLabels[type as keyof typeof typeLabels]}
                </div>
                <div className={`text-xs text-${color}-600 dark:text-${color}-400`}>
                  {data.points}/{data.possible} pts
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Concept Review */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50"
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Concepts Covered
        </h3>

        <div className="flex flex-wrap gap-2">
          {questions.flatMap(q => q.keyConcepts).filter((concept, index, arr) => arr.indexOf(concept) === index).map((concept, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
            >
              {concept}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button
          onClick={onRetake}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          Retake Quiz
        </button>

        <Link
          href={`/article/${articleId}`}
          className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors inline-block text-center"
        >
          Back to Article
        </Link>
      </motion.div>
    </div>
  )
}