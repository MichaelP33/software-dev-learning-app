/**
 * Quiz utility functions for performance calculations and messaging
 */

export interface PerformanceMessage {
  emoji: string
  title: string
  subtitle: string
}

/**
 * Get performance message based on percentage score
 * @param percentage - Score percentage (0-100)
 * @returns Object with emoji, title, and subtitle
 */
export function getPerformanceMessage(percentage: number): PerformanceMessage {
  if (percentage >= 90) {
    return {
      emoji: '🔥',
      title: 'Absolutely crushing it!',
      subtitle: 'That\'s what I\'m talking about!'
    }
  } else if (percentage >= 80) {
    return {
      emoji: '💪',
      title: 'Nice work, champ!',
      subtitle: 'Looking solid out there!'
    }
  } else if (percentage >= 70) {
    return {
      emoji: '🌊',
      title: 'You\'re finding your groove',
      subtitle: 'Solid effort, let\'s build on this'
    }
  } else if (percentage >= 60) {
    return {
      emoji: '🤔',
      title: 'Let\'s take another swing at this',
      subtitle: 'Time to regroup and try again'
    }
  } else {
    return {
      emoji: '🤝',
      title: 'Hey, we all start somewhere!',
      subtitle: 'Every pro was once a beginner'
    }
  }
}

/**
 * Get performance color gradient based on percentage score
 * @param percentage - Score percentage (0-100)
 * @returns Tailwind gradient string
 */
export function getPerformanceColor(percentage: number): string {
  if (percentage >= 90) return 'from-yellow-500 to-orange-500'
  if (percentage >= 80) return 'from-green-500 to-emerald-500'
  if (percentage >= 70) return 'from-blue-500 to-cyan-500'
  if (percentage >= 60) return 'from-yellow-500 to-amber-500'
  return 'from-red-500 to-rose-500'
}

/**
 * Calculate statistics by question type
 * @param answers - Array of quiz answers
 * @param questions - Array of quiz questions
 * @returns Statistics object by question type
 */
export function getQuestionTypeStats(answers: any[], questions: any[]) {
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