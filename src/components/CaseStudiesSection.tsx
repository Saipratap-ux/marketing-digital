import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/marketingData';
import { ArrowUpRight, TrendingUp, Quote, CheckCircle } from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenBooking: (context?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);

  return (
    <section id="case-studies" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Verifiable Performance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Real product campaigns. Quantified before-and-after results.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            No cherry-picked vanity metrics. Here is how our Meta ad structures, organic search optimization, and website boosting perform in competitive direct-to-consumer markets.
          </p>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div>
                {/* Meta info header */}
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-semibold text-slate-900 dark:text-white">{study.client}</span>
                  <span className="font-mono">{study.industry}</span>
                </div>

                {/* Primary Metrics Strip */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {study.results.slice(0, 2).map((res, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                      <div className="text-lg font-bold font-mono tabular-nums text-blue-600 dark:text-blue-400">
                        {res.metric}
                      </div>
                      <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 mt-0.5">
                        {res.change}
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 leading-tight">
                        {res.context}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Strategy */}
                <div className="mt-6 space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <div>
                    <strong className="text-slate-900 dark:text-white block font-medium mb-0.5">The Bottleneck:</strong>
                    <p className="leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white block font-medium mb-0.5">The Execution:</strong>
                    <p className="leading-relaxed">{study.strategy}</p>
                  </div>
                </div>

                {/* Client Quote */}
                <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 italic relative">
                  <Quote className="h-3.5 w-3.5 text-blue-500 absolute -top-2 left-3 fill-blue-500" />
                  <p className="pt-1">"{study.quote.text}"</p>
                  <div className="mt-2 text-[11px] font-semibold not-italic text-slate-900 dark:text-white">
                    {study.quote.author} · <span className="text-slate-500 font-normal">{study.quote.title}, {study.quote.company}</span>
                  </div>
                </div>
              </div>

              {/* Tags & Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1 text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                  {study.tags[0]} · {study.tags[1]}
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBooking(`Interested in results like ${study.client}`)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  <span>Replicate System</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
