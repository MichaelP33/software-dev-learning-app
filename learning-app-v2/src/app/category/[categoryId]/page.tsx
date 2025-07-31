import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { getCategoryById, calculateTopicProgress, getCompletionPercentage } from '@/lib/data'
import { TopicCardClient } from '@/components/topic-card-client'

// Gradient presets for server-side use
const gradientPresets = [
  'from-purple-500 to-pink-500', // Purple to Pink
  'from-blue-500 to-cyan-500',   // Blue to Cyan  
  'from-orange-500 to-red-500',  // Orange to Red
  'from-green-500 to-teal-500',  // Green to Teal
  'from-indigo-500 to-purple-500', // Indigo to Purple
  'from-pink-500 to-rose-500',   // Pink to Rose
]

function getCardGradient(index: number): string {
  return gradientPresets[index % gradientPresets.length]
}

interface CategoryPageProps {
  params: Promise<{
    categoryId: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params
  const category = getCategoryById(categoryId)
  
  if (!category) {
    notFound()
  }

  const categoryProgress = category.topics.reduce((acc, topic) => {
    const progress = calculateTopicProgress(topic)
    return {
      total: acc.total + progress.total,
      completed: acc.completed + progress.completed,
      inProgress: acc.inProgress + progress.inProgress,
      reviewing: acc.reviewing + progress.reviewing,
      notStarted: acc.notStarted + progress.notStarted
    }
  }, { total: 0, completed: 0, inProgress: 0, reviewing: 0, notStarted: 0 })

  const completedPercentage = getCompletionPercentage(categoryProgress)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{categoryProgress.completed}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{completedPercentage}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Proficiency</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 text-4xl shadow-lg bg-gradient-to-br ${category.color}`}>
            <span className="text-white">{category.icon}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {category.name}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {category.description}
          </p>

          {/* Proficiency Overview */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg max-w-2xl mx-auto">
            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                📚 {categoryProgress.total} Articles
              </div>
            </div>

            {/* Proficiency Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden mb-2">
              <div 
                className={`h-full bg-gradient-to-r ${category.color} transition-all duration-500 ease-out`}
                style={{ width: `${completedPercentage}%` }}
              />
            </div>
            
            <div className="text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Proficiency Rating
              </div>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Topics</h2>
          
          {category.topics.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">No topics yet</h3>
              <p className="text-gray-500 dark:text-gray-400">Topics for this category will appear here once they&apos;re added.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.topics.map((topic, index) => {
                const topicProgress = calculateTopicProgress(topic)
                const topicCompletedPercentage = getCompletionPercentage(topicProgress)
                const gradient = getCardGradient(index)

                return (
                  <TopicCardClient
                    key={topic.id}
                    topic={topic}
                    index={index}
                    topicProgress={topicProgress}
                    topicCompletedPercentage={topicCompletedPercentage}
                    gradient={gradient}
                  />
                )
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}