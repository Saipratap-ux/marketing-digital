import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/marketingData';
import { ArrowRight, Check, Zap, BarChart3, Search, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'meta-ads':
        return <BarChart3 className="h-5 w-5" />;
      case 'seo-authority':
        return <Search className="h-5 w-5" />;
      case 'website-boosting':
        return <Zap className="h-5 w-5" />;
      default:
        return <Sparkles className="h-5 w-5" />;
    }
  };

  return (
    <section id="services" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            The Three Growth Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Engineered capabilities designed strictly to generate cash for product brands.
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            We don't sell bloated vanity services. Every engagement attacks one or more of the three fundamental bottlenecks in modern e-commerce: acquisition cost, organic discovery, and store speed.
          </p>
        </div>

        {/* Interactive Segmented Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-xl mb-10 border border-slate-200 dark:border-slate-800">
          {SERVICES_DATA.map((service, index) => {
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveServiceId(service.id)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-left transition-all ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm border border-slate-200/60 dark:border-slate-700/60 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span className={`p-2 rounded-md ${isActive ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400' : 'bg-slate-200/60 dark:bg-slate-800/80'}`}>
                  {getServiceIcon(service.id)}
                </span>
                <div className="truncate">
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                    0{index + 1}. {service.category}
                  </div>
                  <div className="text-sm font-semibold truncate text-slate-900 dark:text-white">
                    {service.title.split(' ')[0]} {service.title.split(' ')[1]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            {/* Service Details */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  PILLAR 0{SERVICES_DATA.findIndex(s => s.id === activeService.id) + 1} · {activeService.category.toUpperCase()}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {activeService.title}
                </h3>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeService.description}
                </p>

                {/* Core Highlights */}
                <div className="mt-6 space-y-2.5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Execution Highlights
                  </div>
                  {activeService.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 text-xs font-bold mt-0.5">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics Breakdown */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-4">
                  {activeService.metrics.map((metric, i) => (
                    <div key={i} className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                      <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-white">
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectService(activeService.title)}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all"
                >
                  <span>Book {activeService.category} Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  Deliverables active within 5–7 business days
                </span>
              </div>
            </div>

            {/* Service Visual Preview */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 group aspect-[4/3]">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Deliverables Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-800 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Included in Deliverables
                  </div>
                  <ul className="text-xs text-slate-200 space-y-1">
                    {activeService.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
