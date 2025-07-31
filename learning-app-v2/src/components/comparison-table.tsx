'use client'

interface TableRow {
  [key: string]: string | number
}

interface ComparisonTableProps {
  title: string
  headers: string[]
  rows: TableRow[]
  className?: string
}

export function ComparisonTable({ title, headers, rows, className = '' }: ComparisonTableProps) {
  return (
    <div className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-gray-700/50 overflow-hidden ${className}`}>
      <div className="px-6 py-4 bg-slate-50/80 dark:bg-gray-700/50 border-b border-slate-200/50 dark:border-gray-600/50">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-gray-700/30">
              {headers.map((header, index) => (
                <th 
                  key={index}
                  className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-gray-300 border-b border-slate-200/50 dark:border-gray-600/50"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr 
                key={rowIndex}
                className="hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors"
              >
                {headers.map((header, cellIndex) => (
                  <td 
                    key={cellIndex}
                    className="px-6 py-4 text-sm text-slate-600 dark:text-gray-300 border-b border-slate-100 dark:border-gray-700/50"
                  >
                    {row[header.toLowerCase().replace(/\s+/g, '_')] || '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}