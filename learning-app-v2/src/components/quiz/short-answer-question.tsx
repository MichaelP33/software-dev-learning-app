'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { QuizQuestion } from '@/types'
import SelfAssessmentButtons from './self-assessment-buttons'

interface ShortAnswerQuestionProps {
  question: QuizQuestion
  answer?: string
  selfAssessment?: 'nailed-it' | 'mostly-good' | 'not-quite'
  onAnswer: (answer: string, assessment: 'nailed-it' | 'mostly-good' | 'not-quite') => void
  showResult: boolean
}

export default function ShortAnswerQuestion({
  question,
  answer = '',
  selfAssessment,
  onAnswer,
  showResult
}: ShortAnswerQuestionProps) {
  const [textAnswer, setTextAnswer] = useState(answer)
  const [hasSubmittedText, setHasSubmittedText] = useState(false)

  useEffect(() => {
    if (answer && answer !== textAnswer) {
      setTextAnswer(answer)
      setHasSubmittedText(true)
    }
  }, [answer, textAnswer])

  const handleTextSubmit = () => {
    if (textAnswer.trim()) {
      setHasSubmittedText(true)
    }
  }

  const handleAssessment = (assessment: 'nailed-it' | 'mostly-good' | 'not-quite') => {
    onAnswer(textAnswer, assessment)
  }

  const canSubmitText = textAnswer.trim().length > 0 && !hasSubmittedText
  const showAssessment = hasSubmittedText && !showResult
  const isComplete = hasSubmittedText && selfAssessment

  // Generate medium-level response example
  const generateMediumResponse = (strongResponse: string) => {
    if (strongResponse.includes('microservices')) {
      return "Compiled languages are faster because they don't need interpretation at runtime. This helps in microservices because you have lots of services running. Memory usage is lower than interpreted languages."
    }
    if (strongResponse.includes('customer scenarios')) {
      return "Companies migrate when they have performance problems and scaling issues. Like when their servers cost too much or things run too slowly."
    }
    return "A basic but incomplete response that shows some understanding of the topic."
  }

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full text-sm font-medium text-green-700 dark:text-green-300">
            Short Answer
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
            {question.difficulty}
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300">
            {question.points} points
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {question.question}
        </h3>

        {/* Text Area */}
        <div className="space-y-4">
          <textarea
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            disabled={hasSubmittedText}
            placeholder="Write your answer here..."
            className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 dark:disabled:bg-gray-900 disabled:opacity-70"
            rows={4}
          />

          {!hasSubmittedText && (
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Write a detailed response (2-3 sentences minimum)
              </p>
              <button
                onClick={handleTextSubmit}
                disabled={!canSubmitText}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Self Assessment */}
      {showAssessment && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50"
        >
          <SelfAssessmentButtons
            onAssess={handleAssessment}
            selectedAssessment={selfAssessment}
            points={question.points}
            disabled={!!selfAssessment}
          />
        </motion.div>
      )}

      {/* Sample Response (shown after self-assessment) */}
      {showResult && isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50"
        >
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">
            Sample Responses
          </h4>
          
          <div className="space-y-4">
            <div className="border-l-4 border-green-400 pl-4">
              <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">
                🔨 Strong Response Example:
              </h5>
              <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
                {question.sampleStrongResponse}
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-4">
              <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                😐 Medium Response Example:
              </h5>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm leading-relaxed">
                {generateMediumResponse(question.sampleStrongResponse || '')}
              </p>
            </div>
          </div>

          <div className="border-t border-blue-200 dark:border-blue-700 pt-4 mt-6">
            <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              Key Concepts:
            </h5>
            <div className="flex flex-wrap gap-2">
              {question.keyConcepts.map((concept, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}