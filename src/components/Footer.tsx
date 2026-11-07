import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-100 dark:border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <a href="#" className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Vance Growth Studio
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Performance marketing and engineering consultancy specializing in Facebook &amp; Instagram product advertising, technical SEO, and sub-second website speed boosting.
            </p>
            <div className="text-xs font-mono text-slate-600 dark:text-slate-400">
              hello@vancegrowth.com
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Capabilities
            </div>
            <div>
              <a href="#services" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                Facebook &amp; Instagram Ads
              </a>
            </div>
            <div>
              <a href="#services" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                Technical Product SEO
              </a>
            </div>
            <div>
              <a href="#services" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                Core Web Vitals &amp; Speed
              </a>
            </div>
            <div>
              <a href="#auditor" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                Free Store Speed Diagnostic
              </a>
            </div>
          </div>

          {/* Navigation & Legal */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <div className="font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Agency &amp; Case Studies
            </div>
            <div>
              <a href="#case-studies" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                Client Results &amp; Verified Proof
              </a>
            </div>
            <div>
              <a href="#calculator" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                Interactive ROAS Calculator
              </a>
            </div>
            <div>
              <a href="#pricing" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                Month-to-Month Retainers
              </a>
            </div>
            <div className="pt-2">
              <span className="text-slate-400 dark:text-slate-600">
                Meta Certified Media Buying Professional · Google Partner
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Vance Growth Studio. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Service</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors ml-4"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
