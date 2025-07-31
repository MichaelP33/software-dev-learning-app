'use client'

import { useReducer, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quiz, QuizAnswer, QuizState } from '@/types'
import { calculateSelfAssessmentScore, validateMultipleChoiceAnswer, calculateQuizScore, getQuizPerformanceLevel } from '@/lib/data'
import MultipleChoiceQuestion from './multiple-choice-question'
import ShortAnswerQuestion from './short-answer-question'
import LongAnswerQuestion from './long-answer-question'
import QuizProgress from './quiz-progress'
import QuizResults from './quiz-results'

interface QuizContainerProps {
  quiz: Quiz
  articleId: string
}

type QuizAction = 
  | { type: 'ANSWER_QUESTION'; payload: { questionId: number; answer: string | number | string[]; selfAssessment?: 'nailed-it' | 'mostly-good' | 'not-quite' } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' }
  | { type: 'COMPLETE_QUIZ' }
  | { type: 'RESET_QUIZ' }

function createQuizReducer(quiz: Quiz) {
  return function quizReducer(state: QuizState, action: QuizAction): QuizState {
    switch (action.type) {
      case 'ANSWER_QUESTION': {
        const { questionId, answer, selfAssessment } = action.payload
        const question = quiz.questions.find(q => q.id === questionId)
      
      if (!question) return state

      let isCorrect = false
      let pointsEarned = 0

      // Calculate points based on question type
      if (question.type === 'multiple-choice') {
        isCorrect = validateMultipleChoiceAnswer(question, answer as number)
        pointsEarned = isCorrect ? question.points : 0
      } else if ((question.type === 'short-answer' || question.type === 'long-answer') && selfAssessment) {
        pointsEarned = calculateSelfAssessmentScore(question.points, selfAssessment)
      }

      const quizAnswer: QuizAnswer = {
        questionId,
        type: question.type,
        answer,
        isCorrect,
        selfAssessment,
        pointsEarned
      }

      const updatedAnswers = state.answers.filter(a => a.questionId !== questionId).concat(quizAnswer)
      const totalScore = updatedAnswers.reduce((sum, ans) => sum + ans.pointsEarned, 0)

      return {
        ...state,
        answers: updatedAnswers,
        totalScore
      }
    }
    
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.min(state.currentQuestionIndex + 1, quiz.questions.length - 1)
      }
    
    case 'PREVIOUS_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0)
      }
    
    case 'COMPLETE_QUIZ':
      return {
        ...state,
        isCompleted: true
      }
    
    case 'RESET_QUIZ':
      return {
        currentQuestionIndex: 0,
        answers: [],
        totalScore: 0,
        isCompleted: false
      }
    
      default:
        return state
    }
  }
}

export default function QuizContainer({ quiz, articleId }: QuizContainerProps) {
  const quizReducer = createQuizReducer(quiz)
  const [state, dispatch] = useReducer(quizReducer, {
    currentQuestionIndex: 0,
    answers: [],
    totalScore: 0,
    isCompleted: false
  })

  // Save quiz state to localStorage
  useEffect(() => {
    const quizState = {
      articleId,
      ...state,
      lastUpdated: new Date().toISOString()
    }
    localStorage.setItem(`quiz_${articleId}`, JSON.stringify(quizState))
  }, [state, articleId])

  // Load quiz state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem(`quiz_${articleId}`)
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState)
        // Only restore if it's from the same session (within last hour)
        const lastUpdated = new Date(parsed.lastUpdated)
        const now = new Date()
        const hourAgo = new Date(now.getTime() - 60 * 60 * 1000)
        
        if (lastUpdated > hourAgo && !parsed.isCompleted) {
          // Restore state (implement if needed)
        }
      } catch (error) {
        console.warn('Failed to parse saved quiz state:', error)
      }
    }
  }, [articleId])

  const currentQuestion = quiz.questions[state.currentQuestionIndex]
  const currentAnswer = state.answers.find(a => a.questionId === currentQuestion?.id)
  const isLastQuestion = state.currentQuestionIndex === quiz.questions.length - 1
  const canProceed = currentAnswer !== undefined

  const handleAnswer = (answer: string | number | string[], selfAssessment?: 'nailed-it' | 'mostly-good' | 'not-quite') => {
    if (!currentQuestion) return
    
    dispatch({
      type: 'ANSWER_QUESTION',
      payload: {
        questionId: currentQuestion.id,
        answer,
        selfAssessment
      }
    })
  }

  const handleNext = () => {
    if (isLastQuestion) {
      dispatch({ type: 'COMPLETE_QUIZ' })
    } else {
      dispatch({ type: 'NEXT_QUESTION' })
    }
  }

  const handlePrevious = () => {
    dispatch({ type: 'PREVIOUS_QUESTION' })
  }

  const handleRetake = () => {
    dispatch({ type: 'RESET_QUIZ' })
    localStorage.removeItem(`quiz_${articleId}`)
  }

  if (state.isCompleted) {
    const { score, percentage } = calculateQuizScore(state.answers)
    const performance = getQuizPerformanceLevel(percentage)
    
    return (
      <QuizResults
        score={score}
        totalPossible={quiz.totalPoints}
        percentage={percentage}
        performance={performance}
        answers={state.answers}
        questions={quiz.questions}
        onRetake={handleRetake}
        articleId={articleId}
      />
    )
  }

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Quiz not available
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            This quiz is currently being prepared.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <QuizProgress 
        currentQuestion={state.currentQuestionIndex + 1}
        totalQuestions={quiz.questions.length}
        score={state.totalScore}
        totalPossible={quiz.totalPoints}
        title={quiz.title}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {currentQuestion.type === 'multiple-choice' && (
            <MultipleChoiceQuestion
              question={currentQuestion}
              selectedAnswer={currentAnswer?.answer as number}
              onAnswer={(answer) => handleAnswer(answer)}
              showResult={!!currentAnswer}
            />
          )}

          {currentQuestion.type === 'short-answer' && (
            <ShortAnswerQuestion
              question={currentQuestion}
              answer={currentAnswer?.answer as string}
              selfAssessment={currentAnswer?.selfAssessment}
              onAnswer={(answer, assessment) => handleAnswer(answer, assessment)}
              showResult={!!currentAnswer}
            />
          )}

          {currentQuestion.type === 'long-answer' && (
            <LongAnswerQuestion
              question={currentQuestion}
              answer={currentAnswer?.answer as string}
              selfAssessment={currentAnswer?.selfAssessment}
              onAnswer={(answer, assessment) => handleAnswer(answer, assessment)}
              showResult={!!currentAnswer}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={handlePrevious}
          disabled={state.currentQuestionIndex === 0}
          className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          Question {state.currentQuestionIndex + 1} of {quiz.questions.length}
        </div>

        <button
          onClick={handleNext}
          disabled={!canProceed}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
        >
          {isLastQuestion ? 'Complete Quiz' : 'Next →'}
        </button>
      </div>
    </div>
  )
}