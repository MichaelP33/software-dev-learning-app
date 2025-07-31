import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, CheckCircle, PlayCircle, Star } from 'lucide-react'
import { getTopicById, getAllCategories, calculateTopicProgress, getCompletionPercentage } from '@/lib/data'

interface TopicPageProps {
  params: Promise<{
    topicId: string
  }>
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { topicId } = await params
  const topic = getTopicById(topicId)

  if (!topic) {
    notFound()
  }

  // Find the category this topic belongs to
  const categories = getAllCategories()
  const category = categories.find(cat => 
    cat.topics.some(t => t.id === topicId)
  )

  const topicProgress = calculateTopicProgress(topic)
  const completionPercentage = getCompletionPercentage(topicProgress)

  // Calculate category link
  const categoryLink = category ? `/category/${category.id}` : '/'

  function getStatusInfo(learningStatus: string) {
    switch (learningStatus) {
      case 'Completed': 
        return { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' }
      case 'In progress': 
        return { icon: PlayCircle, color: 'text-blue-600', bg: 'bg-blue-100' }
      case 'Reviewing': 
        return { icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-100' }
      default: 
        return { icon: BookOpen, color: 'text-slate-500', bg: 'bg-slate-100' }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/80 via-pink-50/70 via-orange-50/60 via-green-50/70 to-cyan-50/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.25),rgba(255,255,255,0))]" />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-8 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <div className="flex items-center gap-4 mb-8">
              <Link 
                href={categoryLink}
                className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {category?.name || 'Categories'}
              </Link>
            </div>

            {/* Topic Header */}
            <div className="text-center mb-8">
              {/* Subtle Divider with Shadow */}
              <div className="flex justify-center mb-16">
                <div className="h-px w-32 bg-slate-700/30 shadow-sm" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                {topic.name}
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                {topic.description}
              </p>

              {/* Topic Stats */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg max-w-2xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">{topicProgress.total}</div>
                    <div className="text-sm text-slate-600">Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{topicProgress.completed}</div>
                    <div className="text-sm text-slate-600">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{topicProgress.inProgress}</div>
                    <div className="text-sm text-slate-600">In Progress</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{topicProgress.notStarted}</div>
                    <div className="text-sm text-slate-600">Not Started</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-slate-900">Proficiency</span>
                    <span className="text-sm text-slate-600">{completionPercentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
                    <div 
                      className={`h-3 rounded-full transition-all duration-700 ease-out shadow-sm ${category?.color ? `bg-gradient-to-r ${category.color.replace('to-', 'to-').replace('from-', 'from-')}` : 'bg-gradient-to-r from-blue-500 to-cyan-500'}`}
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-slate-900">{completionPercentage}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Articles List */}
        <main className="px-6 pb-12 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Articles</h2>
            
            <div className="space-y-4">
              {topic.articles.map((article, index) => {
                const statusInfo = getStatusInfo(article.learningStatus)
                const StatusIcon = statusInfo.icon

                return (
                  <Link
                    key={article.id}
                    href={`/article/${article.id}`}
                    className="group block transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-purple-200/60 group-hover:bg-white">
                      <div className="flex items-start gap-4">
                        {/* Article Number & Status */}
                        <div className="flex-shrink-0">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-semibold text-slate-600">
                              {index + 1}
                            </div>
                            <div className={`p-2 rounded-lg ${statusInfo.bg} transition-all duration-300 group-hover:scale-110`}>
                              <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
                            </div>
                          </div>
                        </div>

                        {/* Article Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-700 transition-colors mb-2">
                                {article.name}
                              </h3>
                              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                {article.description}
                              </p>
                            </div>
                          </div>

                          {/* Proficiency Bar */}
                          <div className="mb-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-slate-700">Proficiency</span>
                              <span className="text-sm text-slate-600">
                                {article.learningStatus === 'Completed' ? '100%' :
                                 article.learningStatus === 'In progress' ? '75%' :
                                 article.learningStatus === 'Reviewing' ? '50%' : '25%'}
                              </span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2 transition-all duration-300 group-hover:bg-slate-50">
                              <div 
                                className={`h-2 rounded-full transition-all duration-500 shadow-sm group-hover:shadow-md ${category?.color ? `bg-gradient-to-r ${category.color}` : 'bg-gradient-to-r from-blue-500 to-cyan-500'}`}
                                style={{ 
                                  width: article.learningStatus === 'Completed' ? '100%' :
                                         article.learningStatus === 'In progress' ? '75%' :
                                         article.learningStatus === 'Reviewing' ? '50%' : '25%'
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}