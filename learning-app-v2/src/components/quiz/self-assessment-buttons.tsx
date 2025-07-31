'use client'

import { motion } from 'framer-motion'

interface SelfAssessmentButtonsProps {
  onAssess: (assessment: 'nailed-it' | 'mostly-good' | 'not-quite') => void
  selectedAssessment?: 'nailed-it' | 'mostly-good' | 'not-quite'
  points: number
  disabled?: boolean
}

export default function SelfAssessmentButtons({
  onAssess,
  selectedAssessment,
  points,
  disabled = false
}: SelfAssessmentButtonsProps) {
  const assessments = [
    {
      key: 'nailed-it' as const,
      emoji: '🔨',
      label: 'Nailed it!',
      description: 'Comprehensive answer covering all key points',
      points: points,
      color: 'green'
    },
    {
      key: 'mostly-good' as const,
      emoji: '😐',
      label: 'Mostly good',
      description: 'Good understanding but missing some details',
      points: Math.round(points * 0.7),
      color: 'yellow'
    },
    {
      key: 'not-quite' as const,
      emoji: '🤨',
      label: 'Not quite',
      description: 'Basic understanding but needs improvement',
      points: Math.round(points * 0.3),
      color: 'red'
    }
  ]

  const getButtonStyle = (assessment: typeof assessments[0]) => {
    const isSelected = selectedAssessment === assessment.key
    
    if (disabled && !isSelected) {
      return 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-50'
    }

    if (isSelected) {
      switch (assessment.color) {
        case 'green':
          return 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-600 ring-2 ring-green-200 dark:ring-green-700'
        case 'yellow':
          return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-600 ring-2 ring-yellow-200 dark:ring-yellow-700'
        case 'red':
          return 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-600 ring-2 ring-red-200 dark:ring-red-700'
      }
    }

    return 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600'
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          How well did you answer?
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Rate your response honestly to get accurate proficiency tracking
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {assessments.map((assessment) => (
          <motion.button
            key={assessment.key}
            onClick={() => !disabled && onAssess(assessment.key)}
            disabled={disabled}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${getButtonStyle(assessment)}`}
            whileHover={!disabled ? { scale: 1.02 } : {}}
            whileTap={!disabled ? { scale: 0.98 } : {}}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{assessment.emoji}</span>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {assessment.label}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {assessment.points} / {points} points
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {assessment.description}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  )
}