'use client'

import { memo } from 'react'

function HybridLanguagesContentComponent() {
  return (
    <article className="space-y-8">
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Hybrid Languages - Key Concepts
        </h2>
        <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
          Content for hybrid languages will be implemented here.
        </p>
      </section>
    </article>
  )
}

export const HybridLanguagesContent = memo(HybridLanguagesContentComponent)