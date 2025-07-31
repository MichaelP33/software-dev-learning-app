'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Brain, Award, Clock, CheckCircle } from 'lucide-react'
import { Quiz } from '@/types'

interface QuizCTAProps {
  articleId: string
  quiz: Quiz
  className?: string
}

export default function QuizCTA({ articleId, quiz, className = '' }: QuizCTAProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50 ${className}`}
    >
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Test Your Knowledge
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Ready to put your understanding to the test? Take our comprehensive quiz to assess your knowledge and track your learning progress.
        </p>
      </div>

      {/* Quiz Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-3 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mx-auto" />
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Questions</div>
          <div className="font-bold text-gray-900 dark:text-white">{quiz.totalQuestions}</div>
        </div>
        
        <div className="text-center">
          <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-3 mb-2">
            <Award className="w-5 h-5 text-purple-600 dark:text-purple-400 mx-auto" />
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Points</div>
          <div className="font-bold text-gray-900 dark:text-white">{quiz.totalPoints}</div>
        </div>
        
        <div className="text-center">
          <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-3 mb-2">
            <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto" />
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Time</div>
          <div className="font-bold text-gray-900 dark:text-white">~15 min</div>
        </div>
      </div>

      {/* Question Types Preview */}
      <div className="bg-white/40 dark:bg-gray-800/40 rounded-xl p-4 mb-6">
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Question Types:
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">
            Multiple Choice
          </span>
          <span className="bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs font-medium">
            Fill in the Blank
          </span>
          <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-medium">
            Short Answer
          </span>
          <span className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs font-medium">
            Long Answer
          </span>
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
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <div className="flex items-center justify-center gap-2">
            <Brain className="w-5 h-5" />
            Start {quiz.title}
          </div>
        </motion.button>
      </Link>

      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">
        Your progress will be saved automatically
      </p>
    </motion.div>
  )
}