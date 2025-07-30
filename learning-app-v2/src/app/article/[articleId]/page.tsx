import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Target } from 'lucide-react'
import { getArticleById, getAllCategories, getStatusColor, getPriorityColor } from '@/lib/data'

interface ArticlePageProps {
  params: Promise<{
    articleId: string
  }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articleId } = await params
  const article = getArticleById(articleId)

  if (!article) {
    notFound()
  }

  // Find the topic and category this article belongs to
  const categories = getAllCategories()
  let category, topic
  
  for (const cat of categories) {
    for (const top of cat.topics) {
      if (top.articles.some(art => art.id === articleId)) {
        category = cat
        topic = top
        break
      }
    }
    if (category && topic) break
  }

  const topicLink = topic ? `/topic/${topic.id}` : '/'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-gray-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link 
              href={topicLink}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to {topic?.name || 'Topics'}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-3xl shadow-lg ${category?.color ? `bg-gradient-to-br ${category.color}` : 'bg-gradient-to-br from-blue-500 to-cyan-500'}`}>
            📖
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {article.name}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {article.description}
          </p>

          {/* Article Meta */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(article.learningStatus)}`}>
                    {article.learningStatus}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Learning Status</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Target className="w-6 h-6 text-orange-600" />
                <div className="text-left">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(article.priorityStatus)}`}>
                    {article.priorityStatus}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Priority</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Objectives</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <p className="text-blue-800 mb-4">
                By the end of this article, you will understand:
              </p>
              <ul className="text-blue-700 space-y-2">
                {article.topics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {article.description}
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Study Guide</h3>
                  <p className="text-yellow-700">
                    This is a placeholder for the detailed content. In your actual implementation, 
                    you would add comprehensive explanations, code examples, diagrams, and interactive 
                    elements to help learn about <strong>{article.name}</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {article.topics.map((topicName, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {topicName}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center">
          <Link 
            href={topicLink}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 text-gray-700 hover:text-gray-900 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {topic?.name}
          </Link>
          
          <div className="text-sm text-gray-500">
            Category: {category?.name}
          </div>
        </div>
      </main>
    </div>
  )
}