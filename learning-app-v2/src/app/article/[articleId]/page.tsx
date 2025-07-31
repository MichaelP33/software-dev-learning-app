import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Target, HelpCircle, Brain } from 'lucide-react'
import { getArticleById, getAllCategories, getStatusColor, getPriorityColor } from '@/lib/data'
import { getCategoryPrimaryGradient, getCategoryBackground } from '@/lib/gradients'

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

  // Mock question/proficiency data (this would come from your learning system)
  const questionsAnswered = 3
  const totalQuestions = 8
  const proficiencyLevel = Math.round((questionsAnswered / totalQuestions) * 100)
  const knowledgeLevel = proficiencyLevel < 30 ? 'Beginner' : 
                        proficiencyLevel < 70 ? 'Intermediate' : 'Advanced'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Category-specific Background gradients */}
      <div className={`absolute inset-0 bg-gradient-to-r ${category ? getCategoryBackground(category.id) : 'from-slate-50/80 via-white/40 to-slate-50/80 dark:from-gray-900/20 dark:via-gray-800/10 dark:to-gray-900/20'}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.25),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.15),rgba(0,0,0,0))]" />
      
      <div className="relative z-10">
        {/* Main Content */}
        <main className="px-6 py-8 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <div className="flex items-center gap-4 mb-8">
              <Link 
                href={topicLink}
                className="inline-flex items-center text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {topic?.name || 'Topics'}
              </Link>
            </div>

            {/* Article Header */}
            <div className="text-center mb-12">
              {/* Subtle Divider with Shadow */}
              <div className="flex justify-center mb-16">
                <div className="h-px w-32 bg-slate-700/30 shadow-sm" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                {article.name}
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                {article.description}
              </p>

              {/* Knowledge Tracking Box */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-gray-700/50 shadow-lg max-w-2xl mx-auto mb-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Brain className="w-5 h-5 text-slate-700 dark:text-gray-300" />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Knowledge Check</h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <HelpCircle className="w-4 h-4 text-slate-600 dark:text-gray-400" />
                      <span className="text-sm text-slate-600 dark:text-gray-400">Questions Answered</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{questionsAnswered}/{totalQuestions}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-slate-600 dark:text-gray-400 mb-2">Knowledge Level</div>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      knowledgeLevel === 'Beginner' ? 'bg-orange-100 text-orange-700' :
                      knowledgeLevel === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {knowledgeLevel}
                    </div>
                  </div>
                </div>

                {/* Proficiency Bar */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">Proficiency</span>
                    <span className="text-sm text-slate-600 dark:text-gray-400">{proficiencyLevel}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
                    <div 
                      className={`h-3 rounded-full transition-all duration-700 ease-out shadow-sm ${category ? `bg-gradient-to-r ${getCategoryPrimaryGradient(category.id)}` : 'bg-gradient-to-r from-blue-500 to-cyan-500'}`}
                      style={{ width: `${proficiencyLevel}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Learning Objectives</h2>
                
                <div className="bg-blue-50/80 border border-blue-200/60 rounded-xl p-6 mb-8">
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

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
                
                <p className="text-slate-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  {article.description}
                </p>

                <div className="bg-yellow-50/80 border border-yellow-200/60 rounded-xl p-6 mb-8">
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

                <div className="border-t border-slate-200 pt-8">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Related Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.topics.map((topicName, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-slate-100 dark:bg-gray-700 text-slate-700 dark:text-gray-300 rounded-full text-sm font-medium"
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-gray-700/50 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {topic?.name}
              </Link>
              
              <div className="text-sm text-slate-500 dark:text-gray-400">
                Category: {category?.name}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}