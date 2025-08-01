import { LearningContent, Category, Topic, Article, Progress, Quiz, QuizQuestion, QuizAnswer } from '@/types'
import learningData from '../../data/learning-content.json'

const data: LearningContent = learningData as LearningContent

// High Score Tracking Types
export interface QuizHighScores {
  articleId: string
  questionScores: { [questionId: number]: number } // Highest points ever earned per question
  bestAttempts: { [questionId: number]: QuizAnswer } // Best answer ever given per question
  totalAttempts: number
  bestOverallScore: number
  bestOverallPercentage: number
  lastAttempted: string // timestamp
}

export function getAllCategories(): Category[] {
  return data.categories
}

export function getCategoryById(id: string): Category | null {
  return data.categories.find(category => category.id === id) || null
}

export function getCategoryByName(name: string): Category | null {
  return data.categories.find(category => category.name === name) || null
}

export function getTopicById(topicId: string): Topic | null {
  for (const category of data.categories) {
    const topic = category.topics.find(topic => topic.id === topicId)
    if (topic) return topic
  }
  return null
}

export function getArticleById(articleId: string): Article | null {
  for (const category of data.categories) {
    for (const topic of category.topics) {
      const article = topic.articles.find(article => article.id === articleId)
      if (article) return article
    }
  }
  return null
}

export function calculateProgress(articles: Article[]): Progress {
  const total = articles.length
  const completed = articles.filter(a => a.learningStatus === 'Completed').length
  const inProgress = articles.filter(a => a.learningStatus === 'In progress').length
  const reviewing = articles.filter(a => a.learningStatus === 'Reviewing').length
  const notStarted = articles.filter(a => a.learningStatus === 'Not started').length

  return {
    total,
    completed,
    inProgress,
    reviewing,
    notStarted
  }
}

export function calculateCategoryProgress(category: Category): Progress {
  const allArticles = category.topics.flatMap(topic => topic.articles)
  return calculateProgress(allArticles)
}

export function calculateTopicProgress(topic: Topic): Progress {
  return calculateProgress(topic.articles)
}

export function getCompletionPercentage(progress: Progress): number {
  return progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0
}

// Utility functions for styling
export function getStatusColor(status: string): string {
  switch (status) {
    case 'Completed':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'In progress':
      return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'Reviewing':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'Not started':
      return 'bg-gray-100 text-gray-800 border-gray-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

export function getStatusIcon(status: string): string {
  switch (status) {
    case 'Completed':
      return '✅'
    case 'In progress':
      return '📚'
    case 'Reviewing':
      return '⭐'
    case 'Not started':
      return '⭕'
    default:
      return '⭕'
  }
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'Critical':
      return 'bg-red-100 text-red-800 border-red-200'
    case 'High':
      return 'bg-orange-100 text-orange-800 border-orange-200'
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'Low':
      return 'bg-blue-100 text-blue-800 border-blue-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

// Navigation helpers
export function getArticleNavigation(articleId: string): {
  currentTopic: Topic | null
  currentCategory: Category | null
  previousArticle: Article | null
  nextArticle: Article | null
} {
  let currentTopic: Topic | null = null
  let currentCategory: Category | null = null
  let previousArticle: Article | null = null
  let nextArticle: Article | null = null

  // Find the topic and category containing this article
  for (const category of data.categories) {
    for (const topic of category.topics) {
      const articleIndex = topic.articles.findIndex(article => article.id === articleId)
      if (articleIndex !== -1) {
        currentTopic = topic
        currentCategory = category
        
        // Get previous article
        if (articleIndex > 0) {
          previousArticle = topic.articles[articleIndex - 1]
        }
        
        // Get next article
        if (articleIndex < topic.articles.length - 1) {
          nextArticle = topic.articles[articleIndex + 1]
        }
        
        return {
          currentTopic,
          currentCategory,
          previousArticle,
          nextArticle
        }
      }
    }
  }

  return {
    currentTopic,
    currentCategory,
    previousArticle,
    nextArticle
  }
}

export function getTopicArticles(topicId: string): Article[] {
  const topic = getTopicById(topicId)
  return topic ? topic.articles : []
}

export function getStatusIndicatorColor(status: string): string {
  switch (status) {
    case 'Completed':
      return 'bg-green-500'
    case 'In progress':
      return 'bg-blue-500'
    case 'Reviewing':
      return 'bg-yellow-500'
    case 'Not started':
      return 'bg-gray-400'
    default:
      return 'bg-gray-400'
  }
}

// Quiz utility functions
export function getQuizByArticleId(articleId: string): Quiz | null {
  const article = getArticleById(articleId)
  return article?.quiz || null
}

export function validateMultipleChoiceAnswer(question: QuizQuestion, answer: number): boolean {
  return question.correctAnswer === answer
}

// Removed validateFillInBlankAnswer - no longer needed

export function calculateSelfAssessmentScore(points: number, assessment: 'nailed-it' | 'mostly-good' | 'not-quite'): number {
  switch (assessment) {
    case 'nailed-it':
      return points
    case 'mostly-good':
      return Math.round(points * 0.7)
    case 'not-quite':
      return Math.round(points * 0.3)
    default:
      return 0
  }
}

export function calculateQuizScore(answers: QuizAnswer[]): { score: number, percentage: number } {
  const totalScore = answers.reduce((sum, answer) => sum + answer.pointsEarned, 0)
  const totalPossible = answers.reduce((sum, answer) => {
    // Get max possible points for this answer type
    if (answer.type === 'multiple-choice') {
      // Questions 1&2 = 2 points, Questions 3&4 = 3 points
      return sum + (answer.questionId <= 2 ? 2 : 3)
    }
    if (answer.type === 'short-answer') return sum + 3
    if (answer.type === 'long-answer') return sum + (answer.questionId === 8 ? 4 : 5) // Question 8 is 4 points
    return sum
  }, 0)
  
  const percentage = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0
  
  return { score: totalScore, percentage }
}

export function getQuizPerformanceLevel(percentage: number): {
  level: 'excellent' | 'good' | 'needs-review' | 'retake-recommended'
  message: string
  color: string
} {
  if (percentage >= 92) {
    return {
      level: 'excellent',
      message: 'Excellent! You have a strong understanding of this topic.',
      color: 'text-green-600'
    }
  } else if (percentage >= 80) {
    return {
      level: 'good',
      message: 'Good work! You understand most of the key concepts.',
      color: 'text-blue-600'
    }
  } else if (percentage >= 60) {
    return {
      level: 'needs-review',
      message: 'Consider reviewing the material to strengthen your understanding.',
      color: 'text-yellow-600'
    }
  } else {
    return {
      level: 'retake-recommended',
      message: 'We recommend reviewing the article and retaking the quiz.',
      color: 'text-red-600'
    }
  }
}

// High Score Management Utilities
export function getQuizHighScores(articleId: string): QuizHighScores | null {
  if (typeof window === 'undefined') return null
  
  try {
    const stored = localStorage.getItem(`quiz_highscores_${articleId}`)
    return stored ? JSON.parse(stored) : null
  } catch (error) {
    console.warn('Failed to parse high scores:', error)
    return null
  }
}

export function initializeHighScores(articleId: string): QuizHighScores {
  return {
    articleId,
    questionScores: {},
    bestAttempts: {},
    totalAttempts: 0,
    bestOverallScore: 0,
    bestOverallPercentage: 0,
    lastAttempted: new Date().toISOString()
  }
}

export function updateHighScores(
  articleId: string, 
  currentAnswers: QuizAnswer[], 
  currentScore: number, 
  currentPercentage: number
): QuizHighScores {
  const highScores = getQuizHighScores(articleId) || initializeHighScores(articleId)
  
  // Update attempt counter
  highScores.totalAttempts += 1
  highScores.lastAttempted = new Date().toISOString()
  
  // Update overall best if current is better
  if (currentScore > highScores.bestOverallScore) {
    highScores.bestOverallScore = currentScore
    highScores.bestOverallPercentage = currentPercentage
  }
  
  // Update individual question high scores
  currentAnswers.forEach(answer => {
    const currentQuestionScore = highScores.questionScores[answer.questionId] || 0
    
    if (answer.pointsEarned > currentQuestionScore) {
      highScores.questionScores[answer.questionId] = answer.pointsEarned
      highScores.bestAttempts[answer.questionId] = answer
    }
  })
  
  // Save to localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem(`quiz_highscores_${articleId}`, JSON.stringify(highScores))
  }
  
  return highScores
}

export function resetHighScores(articleId: string): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(`quiz_highscores_${articleId}`)
  }
}

export function hasEverAnsweredQuestionCorrectly(articleId: string, questionId: number): boolean {
  const highScores = getQuizHighScores(articleId)
  if (!highScores) return false
  
  return (highScores.questionScores[questionId] || 0) > 0
}

export function getQuestionMasteryCount(articleId: string, totalQuestions: number): { mastered: number, total: number } {
  const highScores = getQuizHighScores(articleId)
  if (!highScores) return { mastered: 0, total: totalQuestions }
  
  const mastered = Object.values(highScores.questionScores).filter(score => score > 0).length
  return { mastered, total: totalQuestions }
}