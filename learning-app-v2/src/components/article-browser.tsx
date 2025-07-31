'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Search, Filter, Clock, ArrowRight } from 'lucide-react'
import { Article } from '@/types'
import { getStatusIndicatorColor } from '@/lib/data'

interface ArticleBrowserProps {
  isOpen: boolean
  onClose: () => void
  articles: Article[]
  topicName: string
  currentArticleId?: string
}

export function ArticleBrowser({ isOpen, onClose, articles, topicName, currentArticleId }: ArticleBrowserProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  // Filter articles based on search and status
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || article.learningStatus === statusFilter
    return matchesSearch && matchesStatus
  })

  const getEstimatedReadTime = (articleId: string): number => {
    const readTimes: Record<string, number> = {
      'compiled-languages': 12,
    }
    return readTimes[articleId] || 8
  }

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-950/30 dark:text-green-300 dark:border-green-800/50'
      case 'In progress':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-800/50'
      case 'Reviewing':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-950/30 dark:text-yellow-300 dark:border-yellow-800/50'
      case 'Not started':
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700/50 dark:text-gray-300 dark:border-gray-600/50'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700/50 dark:text-gray-300 dark:border-gray-600/50'
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-200 dark:border-gray-700 bg-gradient-to-r from-slate-50 to-white dark:from-gray-800 dark:to-gray-750">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Articles in {topicName}
                  </h2>
                  <p className="text-slate-600 dark:text-gray-400 mt-1">
                    {filteredArticles.length} of {articles.length} articles
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-500 hover:text-slate-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="pl-10 pr-8 py-2 border border-slate-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 appearance-none"
                  >
                    <option value="all">All Status</option>
                    <option value="Not started">Not Started</option>
                    <option value="In progress">In Progress</option>
                    <option value="Reviewing">Reviewing</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              {filteredArticles.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-slate-400 dark:text-gray-500 mb-2">No articles found</div>
                  <div className="text-sm text-slate-500 dark:text-gray-400">
                    Try adjusting your search or filter criteria
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredArticles.map((article) => (
                    <motion.div
                      key={article.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -4 }}
                      className={`group relative bg-white dark:bg-gray-700 border rounded-xl p-4 hover:shadow-lg transition-all duration-200 ${
                        currentArticleId === article.id 
                          ? 'border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20 dark:ring-blue-400/20' 
                          : 'border-slate-200 dark:border-gray-600 hover:border-slate-300 dark:hover:border-gray-500'
                      }`}
                    >
                      {currentArticleId === article.id && (
                        <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          Current
                        </div>
                      )}
                      
                      <div className="mb-3">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2">
                          {article.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-gray-300 line-clamp-3">
                          {article.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span>{getEstimatedReadTime(article.id)} min</span>
                        </div>
                        <span className={`inline-block w-2 h-2 rounded-full ${getStatusIndicatorColor(article.learningStatus)}`}></span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(article.learningStatus)}`}>
                          {article.learningStatus}
                        </span>
                        
                        {currentArticleId === article.id ? (
                          <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                            Reading
                          </span>
                        ) : (
                          <Link
                            href={`/article/${article.id}`}
                            className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group-hover:gap-2 transition-all duration-200"
                          >
                            Read
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-200 dark:border-gray-700 bg-gradient-to-r from-slate-50 to-white dark:from-gray-800 dark:to-gray-750">
              <div className="flex justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-gray-200 font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}