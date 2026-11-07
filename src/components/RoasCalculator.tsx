import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, DollarSign, TrendingUp, Zap, Clock, ShieldAlert } from 'lucide-react';

interface RoasCalculatorProps {
  onApplyProjections: (data: {
    monthlySpend: number;
    aov: number;
    currentRoas: number;
    loadTime: number;
    projectedRevenue: number;
    extraProfit: number;
  }) => void;
}

export const RoasCalculator: React.FC<RoasCalculatorProps> = ({ onApplyProjections }) => {
  const [monthlySpend, setMonthlySpend] = useState<number>(10000);
  const [aov, setAov] = useState<number>(85);
  const [currentRoas, setCurrentRoas] = useState<number>(2.1);
  const [loadTime, setLoadTime] = useState<number>(3.6);

  const spendInputId = useId();
  const aovInputId = useId();
  const roasInputId = useId();
  const loadTimeInputId = useId();

  // Calculation Math
  const currentRevenue = monthlySpend * currentRoas;
  const currentOrders = Math.round(currentRevenue / (aov || 1));

  // Load time penalty: for every second above 1.0s, roughly 6.5% of mobile buyers drop off
  const excessLoadTime = Math.max(0, loadTime - 1.0);
  const estimatedSpeedLossPercent = Math.min(40, excessLoadTime * 6.5);
  const leakedRevenueFromSpeed = Math.round(currentRevenue * (estimatedSpeedLossPercent / 100));

  // Optimized target projection with Meta optimization + speed boosting
  // Optimized ROAS typically improves by 35% - 70%
  const projectedRoasMultiplier = Math.min(4.4, Number((currentRoas * 1.55).toFixed(2)));
  const baseOptimizedRevenue = monthlySpend * projectedRoasMultiplier;
  
  // Speed boost recovery: boosting load time to 0.8s recovers up to 85% of leaked revenue
  const recoveredSpeedRevenue = Math.round(leakedRevenueFromSpeed * 0.85);
  const totalProjectedRevenue = Math.round(baseOptimizedRevenue + recoveredSpeedRevenue);
  const additionalMonthlyRevenue = Math.max(0, totalProjectedRevenue - currentRevenue);
  const projectedOrders = Math.round(totalProjectedRevenue / (aov || 1));

  const handleApply = () => {
    onApplyProjections({
      monthlySpend,
      aov,
      currentRoas,
      loadTime,
      projectedRevenue: totalProjectedRevenue,
      extraProfit: additionalMonthlyRevenue,
    });
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            <Calculator className="h-4 w-4" />
            <span>Interactive Growth Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Calculate your store's unrealized revenue from Meta ads &amp; speed boosting.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Slide your numbers below to see how optimizing creative angles on Facebook/Instagram while eliminating mobile store lag unlocks compounding monthly cash flow.
          </p>
        </div>

        {/* Calculator Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sliders Input Panel */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-7">
            {/* Slider 1: Monthly Meta Ad Spend */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={spendInputId} className="text-sm font-semibold text-slate-900 dark:text-white">
                  Monthly Meta Ad Spend (Facebook &amp; Instagram)
                </label>
                <span className="text-base font-bold font-mono tabular-nums text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-200/50 dark:border-blue-900/50">
                  ${monthlySpend.toLocaleString()}
                </span>
              </div>
              <input
                id={spendInputId}
                type="range"
                min={2000}
                max={50000}
                step={500}
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 mt-1 font-mono">
                <span>$2,000/mo</span>
                <span>$25,000/mo</span>
                <span>$50,000/mo</span>
              </div>
            </div>

            {/* Slider 2: Average Order Value */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={aovInputId} className="text-sm font-semibold text-slate-900 dark:text-white">
                  Average Order Value (AOV)
                </label>
                <span className="text-base font-bold font-mono tabular-nums text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                  ${aov}
                </span>
              </div>
              <input
                id={aovInputId}
                type="range"
                min={20}
                max={350}
                step={5}
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 mt-1 font-mono">
                <span>$20</span>
                <span>$180</span>
                <span>$350</span>
              </div>
            </div>

            {/* Slider 3: Current Meta ROAS */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={roasInputId} className="text-sm font-semibold text-slate-900 dark:text-white">
                  Current Meta Blended ROAS
                </label>
                <span className="text-base font-bold font-mono tabular-nums text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                  {currentRoas.toFixed(1)}x
                </span>
              </div>
              <input
                id={roasInputId}
                type="range"
                min={1.0}
                max={4.0}
                step={0.1}
                value={currentRoas}
                onChange={(e) => setCurrentRoas(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 mt-1 font-mono">
                <span>1.0x (Breakeven)</span>
                <span>2.5x</span>
                <span>4.0x (High Scale)</span>
              </div>
            </div>

            {/* Slider 4: Mobile Page Load Time */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1.5">
                  <label htmlFor={loadTimeInputId} className="text-sm font-semibold text-slate-900 dark:text-white">
                    Current Mobile Page Load Time
                  </label>
                  {loadTime > 2.5 && (
                    <span className="text-xs text-amber-800 dark:text-amber-300 font-medium flex items-center gap-1">
                      <ShieldAlert className="h-3 w-3" />
                      Conversion drag
                    </span>
                  )}
                </div>
                <span className={`text-base font-bold font-mono tabular-nums px-2.5 py-1 rounded-md ${
                  loadTime <= 1.2
                    ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50'
                    : loadTime <= 2.8
                    ? 'text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50'
                    : 'text-rose-800 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50'
                }`}>
                  {loadTime.toFixed(1)}s
                </span>
              </div>
              <input
                id={loadTimeInputId}
                type="range"
                min={0.8}
                max={5.5}
                step={0.1}
                value={loadTime}
                onChange={(e) => setLoadTime(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 mt-1 font-mono">
                <span>0.8s (Instant)</span>
                <span>2.5s (Average)</span>
                <span>5.5s (Severe Bounce)</span>
              </div>
            </div>

            {/* Educational insight callout */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
              <Zap className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                <strong>Speed Diagnostic:</strong> At {loadTime.toFixed(1)}s mobile load time, an estimated <strong>{estimatedSpeedLossPercent.toFixed(0)}%</strong> of mobile paid ad clicks bounce before interacting. Shaving this to &lt;1.0s recovers roughly <strong>${leakedRevenueFromSpeed.toLocaleString()}</strong> in sales already paid for.
              </span>
            </div>
          </div>

          {/* Results Projection Panel */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Projected Monthly Impact
                </span>
                <span className="text-xs font-mono font-medium text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                  Target ROAS {projectedRoasMultiplier}x
                </span>
              </div>

              {/* High-Intent Main Metric */}
              <div className="mt-6">
                <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-medium">
                  Additional Monthly Revenue Unlocked
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono tabular-nums text-emerald-800 dark:text-emerald-400 mt-1 tracking-tight">
                  +${additionalMonthlyRevenue.toLocaleString()}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Net gross revenue increase per month without increasing media spend.
                </div>
              </div>

              {/* Side-by-Side Comparison */}
              <div className="mt-6 grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Current Monthly Rev</div>
                  <div className="text-lg font-bold font-mono tabular-nums text-slate-700 dark:text-slate-300 mt-0.5">
                    ${currentRevenue.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono mt-0.5">
                    ~{currentOrders} orders
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60">
                  <div className="text-xs text-blue-700 dark:text-blue-300">Target Monthly Rev</div>
                  <div className="text-lg font-bold font-mono tabular-nums text-blue-600 dark:text-blue-400 mt-0.5">
                    ${totalProjectedRevenue.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-blue-700 dark:text-blue-300 font-mono mt-0.5">
                    ~{projectedOrders} orders
                  </div>
                </div>
              </div>

              {/* Breakdown List */}
              <div className="mt-6 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span>Meta Creative &amp; CAPI Lift:</span>
                  <span className="font-mono font-semibold text-slate-900 dark:text-white">
                    +${Math.round(baseOptimizedRevenue - currentRevenue).toLocaleString()}/mo
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span>Speed &amp; Bounce Recovery (&lt;0.8s):</span>
                  <span className="font-mono font-semibold text-slate-900 dark:text-white">
                    +${recoveredSpeedRevenue.toLocaleString()}/mo
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Est. Retainer ROI:</span>
                  <span className="font-mono font-semibold text-emerald-800 dark:text-emerald-400">
                    ~{(additionalMonthlyRevenue / 2750).toFixed(1)}x monthly return
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={handleApply}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm"
              >
                <span>Apply These Numbers to My Brand</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-[11px] text-slate-600 dark:text-slate-400 mt-2.5">
                We'll prepare a custom roadmap modeling your exact product margin and CAC targets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
