import React from 'react';
import { PRICING_TIERS } from '../data/marketingData';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Predictable monthly retainers. Zero lock-in contracts.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Choose the growth scope that matches your current stage. All retainers are month-to-month and include direct Slack access.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isFeatured = !!tier.isPopular;
            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                  isFeatured
                    ? 'bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500 shadow-xl lg:-translate-y-2'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm'
                }`}
              >
                {/* Popular Banner */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Most Comprehensive Partner
                  </div>
                )}

                <div>
                  {/* Name and Tagline */}
                  <div className="text-xl font-bold text-slate-900 dark:text-white">
                    {tier.name}
                  </div>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 min-h-[32px]">
                    {tier.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight text-slate-900 dark:text-white">
                      ${tier.price.toLocaleString()}
                    </span>
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {tier.period}
                    </span>
                  </div>

                  <div className="mt-3 text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {tier.idealFor}
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Included Capabilities
                    </div>
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer and CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 font-mono">
                    {tier.timeline}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectTier(tier.name)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                      isFeatured
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700'
                    }`}
                  >
                    <span>Select {tier.name.split(' ')[0]} Retainer</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
