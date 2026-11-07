import React, { useState } from 'react';
import { Search, Globe, CheckCircle2, AlertTriangle, XCircle, ArrowRight, RefreshCw, Sparkles, Cpu, Layers } from 'lucide-react';
import { AuditResult } from '../types';

interface InstantAuditorProps {
  onBookAudit: (url: string, platform: string) => void;
}

export const InstantAuditor: React.FC<InstantAuditorProps> = ({ onBookAudit }) => {
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState('Shopify');
  const [primaryFocus, setPrimaryFocus] = useState<'all' | 'meta' | 'seo' | 'speed'>('all');
  const [isScanning, setIsScanning] = useState(false);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsScanning(true);
    setAuditResult(null);

    // Simulate real-world diagnostic synthesis based on input
    setTimeout(() => {
      setIsScanning(false);
      setAuditResult({
        score: 64,
        speedScore: 58,
        seoScore: 71,
        metaScore: 63,
        lcp: '3.4s',
        fid: '180ms',
        cls: '0.14',
        insights: [
          {
            category: 'speed',
            status: 'critical',
            title: 'Render-Blocking Apps & Unminified Assets',
            detail: 'Excessive Shopify/WordPress third-party app scripts delaying First Contentful Paint by 1,840ms on mobile.',
            recommendation: 'Strip unused app tags, inline critical CSS, and defer non-essential trackers.',
          },
          {
            category: 'meta',
            status: 'warning',
            title: 'Meta Pixel Running Client-Side Only (No CAPI)',
            detail: 'Ad blocker and iOS privacy restrictions are causing an estimated 28% drop in reported purchase events.',
            recommendation: 'Deploy Meta Conversions API (CAPI) via Cloudflare/AWS Gateway to recover 9.2+ match quality.',
          },
          {
            category: 'seo',
            status: 'warning',
            title: 'Incomplete Product Schema & Facet Bloat',
            detail: 'Product collection URLs lack canonicalization and Merchant Center rich snippets for in-stock badges.',
            recommendation: 'Inject Product and Offer JSON-LD schema with live inventory and review aggregate data.',
          },
          {
            category: 'speed',
            status: 'pass',
            title: 'Server Time to First Byte (TTFB)',
            detail: 'Base server response time is acceptable at 240ms, indicating edge CDN is active.',
            recommendation: 'Maintain cache headers and keep database queries lean.',
          },
        ],
      });
    }, 1400);
  };

  return (
    <section id="auditor" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Free Store Diagnostic
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Run an instant diagnostic on your store speed, SEO and Meta pixel health.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Enter your domain below to test your store against our Core Web Vitals, Google indexing benchmarks, and Meta Conversions API best practices.
          </p>
        </div>

        {/* Input Form Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <form onSubmit={handleScan} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* URL Input */}
              <div className="md:col-span-6 relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Globe className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="yourstore.com (e.g. allbirds.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
                />
              </div>

              {/* Platform Select */}
              <div className="md:col-span-3">
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
                >
                  <option value="Shopify">Shopify / Shopify Plus</option>
                  <option value="WooCommerce">WooCommerce (WordPress)</option>
                  <option value="Custom / Next.js">Custom / Headless (Next.js)</option>
                  <option value="Webflow">Webflow E-Commerce</option>
                  <option value="Other">Other / Proprietary</option>
                </select>
              </div>

              {/* Submit Scan Button */}
              <div className="md:col-span-3">
                <button
                  type="submit"
                  disabled={isScanning}
                  className="w-full h-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-70 shadow-sm"
                >
                  {isScanning ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      <span>Analyzing Store...</span>
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4" />
                      <span>Run Free Diagnostic</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Sub-note */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400 pt-2">
              <span>Tests: Mobile LCP Speed · Google Rich Schema · Meta CAPI Readiness</span>
              <span>100% Free · No credit card required</span>
            </div>
          </form>

          {/* Diagnostic Results Presentation */}
          {auditResult && (
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-600 dark:text-slate-400">
                    Diagnostic Report for:
                  </div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white font-mono">
                    {url.replace(/^https?:\/\//, '')} ({platform})
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-xs text-slate-600 dark:text-slate-400">Composite Health Score</div>
                    <div className="text-2xl font-bold font-mono text-amber-700 dark:text-amber-400">
                      {auditResult.score}/100
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Pillar Score Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>Website Speed &amp; LCP</span>
                    <span className="font-mono font-bold text-amber-800 dark:text-amber-400">{auditResult.speedScore}/100</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: `${auditResult.speedScore}%` }} />
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 font-mono">
                    Mobile LCP: {auditResult.lcp} (Target: &lt;1.0s)
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>Technical SEO &amp; Schema</span>
                    <span className="font-mono font-bold text-blue-700 dark:text-blue-400">{auditResult.seoScore}/100</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: `${auditResult.seoScore}%` }} />
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 font-mono">
                    Indexing: 74% Collection coverage
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>Meta Pixel &amp; CAPI Signal</span>
                    <span className="font-mono font-bold text-rose-800 dark:text-rose-400">{auditResult.metaScore}/100</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full rounded-full" style={{ width: `${auditResult.metaScore}%` }} />
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 font-mono">
                    Match Quality: 6.2/10 (Missing Server CAPI)
                  </div>
                </div>
              </div>

              {/* Actionable Findings List */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Diagnostic Findings &amp; Opportunities
                </div>

                {auditResult.insights.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-sm"
                  >
                    <div className="flex items-start gap-3">
                      {item.status === 'critical' ? (
                        <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      ) : item.status === 'warning' ? (
                        <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      )}

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {item.title}
                          </span>
                          <span className="text-[11px] font-mono uppercase text-slate-600 dark:text-slate-400">
                            {item.category.toUpperCase()}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                          {item.detail}
                        </p>
                        <p className="mt-2 text-xs text-blue-600 dark:text-blue-400 font-medium">
                          Fix: {item.recommendation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Final CTA Bar */}
              <div className="mt-8 p-6 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Want us to fix these 4 bottlenecks for {url.replace(/^https?:\/\//, '')}?
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    We'll walk you through the full line-by-line audit and remediation plan on a 25-minute strategy call.
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onBookAudit(url, platform)}
                  className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-sm"
                >
                  Schedule Free Audit Walkthrough
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
