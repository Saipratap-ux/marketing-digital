import React from 'react';
import { CONSULTANT_PORTRAIT } from '../data/marketingData';
import { ShieldCheck, Award, MessageSquare, Terminal, Zap } from 'lucide-react';

interface MarketerBioProps {
  onOpenBooking: () => void;
}

export const MarketerBio: React.FC<MarketerBioProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Portrait Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
              <div className="aspect-square overflow-hidden">
                <img
                  src={CONSULTANT_PORTRAIT}
                  alt="Marc Vance, Senior Digital Marketer & Performance Specialist"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 border-t border-slate-200 dark:border-slate-800 text-center">
                <div className="text-base font-bold text-slate-900 dark:text-white">
                  Marc Vance
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Principal Growth Consultant &amp; Media Buyer
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Working Philosophy Column */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
              The Engineering Mindset
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
              Why work with an embedded specialist instead of a bloated agency?
            </h2>

            <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Traditional marketing agencies pitch you with senior partners, then hand your account to an intern who sets up automated ads and forgets your catalog.
            </p>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I operate with a tight cap of 8 partner brands. You communicate directly with me on Slack. When you want to test new Instagram Reels angles, troubleshoot a broken Meta CAPI payload, or rewrite Shopify Liquid templates to hit 0.7s load times, you're talking to the person actually touching the code and ads.
            </p>

            {/* Credibility Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Meta Certified Professional
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Certified in advanced Meta media buying, dynamic catalog ads &amp; Advantage+ Shopping.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                  <Terminal className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Technical SEO &amp; Core Web Vitals
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Deep code-level performance audits, programmatic collection pages &amp; JSON-LD schemas.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Direct Private Slack Access
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Same-day answers. No support ticket queues or weeks waiting for a monthly report.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Month-to-Month Transparency
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Zero lock-in contracts. Transparent retainers aligned with your net profitability.
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-5 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm"
              >
                Schedule Direct Consultation With Marc
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
