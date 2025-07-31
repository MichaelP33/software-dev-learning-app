'use client'

interface MetricsCardProps {
  title: string
  metrics: {
    label: string
    value: string | number
    description?: string
    trend?: 'up' | 'down' | 'stable'
    color?: 'blue' | 'green' | 'orange' | 'red' | 'purple'
  }[]
  className?: string
}

export function MetricsCard({ title, metrics, className = '' }: MetricsCardProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30'
      case 'orange':
        return 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30'
      case 'red':
        return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30'
      case 'purple':
        return 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30'
      default:
        return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30'
    }
  }

  return (
    <div className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-gray-700/50 p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{title}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg ${getColorClasses(metric.color || 'blue')}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{metric.label}</span>
              {metric.trend && (
                <span className={`text-xs px-2 py-1 rounded-full ${
                  metric.trend === 'up' ? 'bg-green-100 text-green-700' :
                  metric.trend === 'down' ? 'bg-red-100 text-red-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'}
                </span>
              )}
            </div>
            <div className="text-2xl font-bold mb-1">{metric.value}</div>
            {metric.description && (
              <p className="text-xs opacity-80">{metric.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}