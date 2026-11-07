import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, ArrowRight, ShieldCheck, Mail, Globe, User } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialUrl?: string;
  calculatorData?: {
    monthlySpend: number;
    projectedRevenue: number;
    extraProfit: number;
  } | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialUrl,
  calculatorData,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [storeUrl, setStoreUrl] = useState(initialUrl || '');
  const [budget, setBudget] = useState(
    calculatorData ? `$${calculatorData.monthlySpend.toLocaleString()}/mo` : '$5,000 - $15,000/mo'
  );
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ['Facebook & Instagram Ads', 'Website Speed Boosting']
  );
  const [notes, setNotes] = useState(
    calculatorData
      ? `Projected revenue from calculator: +$${calculatorData.extraProfit.toLocaleString()}/mo`
      : ''
  );
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {submitted ? 'Strategy Session Confirmed' : 'Book a 30-Minute Growth Roadmap'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Direct with Marc Vance · No sales reps · Live audit of your store
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="h-14 w-14 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                You're Scheduled for Growth Review
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Thanks, <strong>{fullName}</strong>! We've reserved your slot and sent a calendar invite with Google Meet details to <strong>{email}</strong>.
              </p>

              {/* Confirmation Details Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Calendar className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Next Available: Tuesday at 11:00 AM (EST)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Clock className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Duration: 30 minutes (Strategy &amp; Technical Audit)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Globe className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Target Store: {storeUrl || 'Direct Product Review'}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Done &amp; Back to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {calculatorData && (
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-blue-800 dark:text-blue-300 flex items-center justify-between">
                  <span>Attached: Calculator model with +${calculatorData.extraProfit.toLocaleString()}/mo target</span>
                  <span className="font-mono font-semibold">${calculatorData.monthlySpend.toLocaleString()}/mo spend</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="alex@yourbrand.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Store / Website URL
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Globe className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="yourbrand.com"
                      value={storeUrl}
                      onChange={(e) => setStoreUrl(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Current Monthly Meta Ad Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Under $3,000/mo">Under $3,000 / mo</option>
                    <option value="$3,000 - $10,000/mo">$3,000 - $10,000 / mo</option>
                    <option value="$10,000 - $30,000/mo">$10,000 - $30,000 / mo</option>
                    <option value="$30,000+/mo">$30,000+ / mo (High Volume)</option>
                    <option value="Not currently spending">Not currently spending on ads</option>
                  </select>
                </div>
              </div>

              {/* Service Focus Checkboxes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Primary Objectives (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Facebook & Instagram Ads',
                    'Product SEO & Google Rank',
                    'Website Speed Boosting',
                  ].map((service) => {
                    const isChecked = selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`p-2.5 rounded-lg border text-xs font-medium text-left transition-all ${
                          isChecked
                            ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 text-blue-700 dark:text-blue-300'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className={`h-3 w-3 rounded-full flex items-center justify-center border ${
                            isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-400'
                          }`}>
                            {isChecked && <CheckCircle2 className="h-3 w-3" />}
                          </span>
                          <span className="truncate">{service}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Context / Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  What is your biggest current bottleneck? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Rising Meta CPA, product pages loading at 4s on mobile, low organic ranking..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Trust disclaimer */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Strict privacy guaranteed · No sales pitch · Direct technical feedback</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Confirming Slot...</span>
                  ) : (
                    <>
                      <span>Lock In Free 30-Minute Strategy Roadmap</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
