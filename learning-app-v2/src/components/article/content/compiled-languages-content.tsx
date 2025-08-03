'use client'

import { memo } from 'react'
import { TrendingUp } from 'lucide-react'
import { ComparisonTable } from '@/components/comparison-table'
import { MetricsCard } from '@/components/metrics-card'

function CompiledLanguagesContentComponent() {
  return (
    <article className="space-y-10">
      {/* Key Concepts Section */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Translation happens once upfront</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Source code converts to machine instructions during development, not runtime
            </p>
            <ul className="space-y-2 text-slate-600 dark:text-gray-400 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Eliminates translation overhead during execution
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Creates standalone executables that run without requiring the original compiler
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Performance advantage through optimization</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Compilers analyze and restructure code for maximum efficiency
            </p>
            <ul className="space-y-2 text-slate-600 dark:text-gray-400 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Sophisticated multi-stage process: lexical analysis, parsing, optimization, code generation
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Critical for microservices where efficiency multiplies across hundreds of services
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Primary languages and use cases</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Different compiled languages serve distinct enterprise needs
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-gray-400 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-slate-700 dark:text-gray-300">Go:</strong> Microservices, cloud infrastructure (Docker, Kubernetes ecosystem)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-slate-700 dark:text-gray-300">Rust:</strong> System-level programming, memory safety critical applications
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-slate-700 dark:text-gray-300">C++:</strong> High-performance computing, gaming, embedded systems
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-slate-700 dark:text-gray-300">Java:</strong> Enterprise applications, large-scale backend systems
                </div>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Platform-specific deployment</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Compiled code targets specific operating systems and processor architectures
            </p>
            <ul className="space-y-2 text-slate-600 dark:text-gray-400 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Simplifies deployment with self-contained binaries
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Requires separate compilation for different target environments
              </li>
            </ul>
          </div>
        </div>

        {/* Performance Comparison Table */}
        <div className="mt-8">
          <ComparisonTable
            title="Performance & Resource Efficiency Comparison"
            headers={["Metric", "Compiled Languages", "Interpreted Languages"]}
            rows={[
              {
                metric: "Memory Usage",
                compiled_languages: "10-50MB per service",
                interpreted_languages: "200-500MB per service"
              },
              {
                metric: "Startup Time",
                compiled_languages: "Milliseconds",
                interpreted_languages: "Seconds"
              },
              {
                metric: "Runtime Performance",
                compiled_languages: "Optimal (no translation overhead)",
                interpreted_languages: "20-50% higher compute cost"
              },
              {
                metric: "Deployment Complexity",
                compiled_languages: "Self-contained binaries",
                interpreted_languages: "Runtime dependencies"
              }
            ]}
          />
        </div>
      </section>

      {/* Business & Team Impact Section */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-500" />
          Business &amp; Team Impact
        </h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational cost optimization</h3>
            <ul className="space-y-2 text-slate-600 dark:text-gray-400 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Small performance improvements multiply across millions of requests
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Services start in milliseconds vs. seconds (critical for microservices)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Memory usage: 10-50MB vs. 200-500MB for interpreted alternatives
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Network I/O efficiency becomes crucial in distributed architectures
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common migration triggers and customer scenarios</h3>
            <ul className="space-y-3 text-slate-600 dark:text-gray-400 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-slate-700 dark:text-gray-300">Performance crisis:</strong> "Our cloud bills doubled but traffic only increased 20%" (Python/Ruby → Go)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-slate-700 dark:text-gray-300">Scaling inefficiency:</strong> "We need 10x the servers to handle 2x the traffic" (JavaScript → Rust/Go)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-slate-700 dark:text-gray-300">Operational agility:</strong> "Microservices startup time is killing deployment velocity" (Java → Go)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-slate-700 dark:text-gray-300">Memory safety:</strong> "Security incidents from memory bugs" (C/C++ → Rust)
                </div>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Real-world success patterns</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Leading companies demonstrate viable approaches
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-gray-400 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-slate-700 dark:text-gray-300">Docker:</strong> Python → Go for core engine, significant performance improvements
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-slate-700 dark:text-gray-300">Discord:</strong> JavaScript → Rust for critical services, 40% server cost reduction
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-slate-700 dark:text-gray-300">Shopify:</strong> Adopted Go for new platform services while maintaining Rails for business logic
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-slate-700 dark:text-gray-300">Uber:</strong> Go for 600+ microservices architecture, ~50MB vs. ~300MB per service
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Migration Success Metrics */}
        <div className="mt-8">
          <MetricsCard
            title="Migration Success Patterns"
            metrics={[
              {
                label: "Gradual Migration Success Rate",
                value: "70%",
                description: "Service-by-service migration approach",
                color: "green"
              },
              {
                label: "Complete Rewrite Success Rate", 
                value: "30%",
                description: "Wholesale platform rewrites",
                color: "orange"
              },
              {
                label: "Typical Migration Cost",
                value: "$50K-$500K",
                description: "Per microservice migration",
                color: "blue"
              },
              {
                label: "Full Platform Rewrite Cost",
                value: "$1M-$10M+",
                description: "Complete system overhaul",
                color: "red"
              }
            ]}
          />
        </div>

        <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Typical customer profiles seeking migration</h3>
          <ul className="space-y-2 text-slate-600 dark:text-gray-400 pl-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
              Series B/C startups spending 30%+ engineering time on performance optimization
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
              Enterprise teams with $1M+ annual modernization budgets
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
              Cloud-native companies where AWS bills grow faster than revenue
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
              Fintech/gaming companies with regulatory or performance requirements
            </li>
          </ul>
        </div>
      </section>

      {/* Cursor Implementation Section */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Cursor Implementation Considerations
        </h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Migration acceleration opportunity</h3>
            <ul className="space-y-2 text-slate-600 dark:text-gray-400 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                AI-powered code translation could reduce typical 6-18 month migration timelines by 40-60%
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Pattern recognition for converting between language paradigms
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Intelligent testing to ensure behavioral equivalence during transitions
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Build optimization assistance</h3>
            <ul className="space-y-2 text-slate-600 dark:text-gray-400 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Smart compilation suggestions and incremental build improvements to address developer productivity concerns
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Cross-platform development support to abstract away platform-specific complexities
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                AI-powered dependency analysis for migration sequencing recommendations
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  )
}

export const CompiledLanguagesContent = memo(CompiledLanguagesContentComponent)