import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Sparkles } from 'lucide-react';
import { HERO_IMAGE, CLIENT_LOGOS } from '../data/marketingData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreCalculator }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Kicker / Metadata (Unboxed text with typographic separators - zero pills) */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400 mb-4">
          <span>Meta Certified Buying Specialist</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span>Technical Product SEO</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span>Sub-Second Store Boosting</span>
        </div>

        {/* Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] text-balance">
              Predictable product sales through Meta ads, search dominance, and instant site speed.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              We engineer full-funnel customer acquisition for e-commerce brands: high-converting Facebook &amp; Instagram campaigns, commercial keyword search rankings, and sub-second page speed that turns ad clicks into completed checkouts.
            </p>

            {/* Value check items */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Advantage+ Shopping &amp; dynamic UGC briefs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Page 1 rankings for buyer-intent search queries</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Sub-second mobile LCP &amp; Core Web Vitals lift</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Server-side Meta CAPI with 9.0+ match rate</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm"
              >
                <span>Request Free Growth Audit</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={onExploreCalculator}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-[0.98] transition-all"
              >
                <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>Calculate Your Store's ROI</span>
              </button>
            </div>

            {/* Quick Trust Marker */}
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              No locked contracts · Free technical diagnosis within 24 hours · Shopify &amp; WooCommerce specialists
            </p>
          </div>

          {/* Right Column: High-Impact Visual Carrier */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-900 shadow-xl group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:h-full overflow-hidden">
                <img
                  src={HERO_IMAGE}
                  alt="Vance Growth Studio analytics workstation showing ad performance and search metrics"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                {/* Overlaid Live Metric Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-800 text-slate-900 dark:text-white shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Live Portfolio Averages
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      <Zap className="h-3.5 w-3.5" />
                      Q3 Verified
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 border-t border-slate-100 dark:border-slate-800 pt-2.5 text-center">
                    <div>
                      <div className="text-lg font-bold font-mono tabular-nums text-blue-600 dark:text-blue-400">3.92x</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Meta ROAS</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold font-mono tabular-nums text-emerald-600 dark:text-emerald-400">+185%</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">SEO Inflow</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold font-mono tabular-nums text-indigo-600 dark:text-indigo-400">0.74s</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Mobile LCP</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Quantitative Impact Strip (Full-width row below hero split) */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="px-2">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-slate-900 dark:text-white tracking-tight">
              $4.8M+
            </div>
            <div className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Direct Product Revenue Generated
            </div>
          </div>

          <div className="px-2 border-l border-slate-200 dark:border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-slate-900 dark:text-white tracking-tight">
              3.8x
            </div>
            <div className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Blended Meta Ads ROAS Across Clients
            </div>
          </div>

          <div className="px-2 border-l border-slate-200 dark:border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-slate-900 dark:text-white tracking-tight">
              -64%
            </div>
            <div className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Average Mobile Page Load Reduction
            </div>
          </div>

          <div className="px-2 border-l border-slate-200 dark:border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-slate-900 dark:text-white tracking-tight">
              100%
            </div>
            <div className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Monthly Retainer Renewal Rate
            </div>
          </div>
        </div>

        {/* Client Trust Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/70 dark:border-slate-800/70">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-6">
            Trusted by founders and growth teams across direct-to-consumer commerce
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
            {CLIENT_LOGOS.map((client) => (
              <div key={client.name} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold text-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-200 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                  {client.symbol}
                </span>
                <span className="tracking-tight">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
