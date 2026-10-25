import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, ArrowRight, BookOpen, ShieldCheck, Clock, User } from "lucide-react";

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
          <div className="w-[900px] h-[500px] bg-gradient-to-tr from-blue-100/50 via-sky-50/30 to-transparent blur-[140px] rounded-full" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Knowledge Base & Guides</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[48px] font-normal tracking-tight text-slate-900 leading-[1.15] mb-4">
              Insights on high-risk payments, compliance, and crypto settlements.
            </h1>

            <p className="font-sans text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
              Practical guides, underwriting breakdowns, and technical blueprints for merchants navigating global payment processing.
            </p>
          </div>

          {/* Featured Article Card (Prominently Highlighted at Top) */}
          <div className="mb-16">
            <div className="bg-white/90 backdrop-blur-xl border border-blue-200/80 rounded-3xl p-8 sm:p-12 shadow-sm hover:border-blue-400/80 transition-all group relative overflow-hidden">
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 w-fit px-3 py-1 rounded-full mb-4 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Guide • 7 Min Read</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 group-hover:text-blue-600 transition-colors leading-[1.2] mb-4">
                  The Complete Guide to Credit Card Processing for Research Peptide Merchants in 2026
                </h2>

                <p className="font-sans text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-3xl mb-6">
                  How RUO suppliers eliminate processor bans, chargeback disputes, and rolling reserves using automated card-to-crypto checkout with flat 4% fees.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-slate-400" /> Underwriting Desk</span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> October 2026</span>
                  </div>

                  <Link
                    href="/blog/credit-card-processing-for-peptide-businesses"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium text-xs sm:text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-600/25 group-hover:translate-x-1"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Blog Post Cards Grid (3-Column Layout) */}
          <div className="mb-20">
            <h3 className="font-serif text-2xl font-normal text-slate-900 mb-8">
              More Merchant Resources
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white/80 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all group">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-4">
                    Freelancers • 5 Min Read
                  </span>
                  <h4 className="font-serif text-xl font-normal text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                    Zero-Paperwork Payment Gateways for Global Independent Contractors
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    How developers, agencies, and remote consultants receive global client card payments directly into USDT without entity incorporation.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                  <span>Coming Soon</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/80 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all group">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full inline-block mb-4">
                    Supplements • 6 Min Read
                  </span>
                  <h4 className="font-serif text-xl font-normal text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                    Navigating High-Risk Merchant Codes (MCC 5912 & 5122) for Nutraceuticals
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Understanding Tier-1 processing restrictions for nootropics and dietary formulations.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                  <span>Coming Soon</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/80 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all group">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-amber-600 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full inline-block mb-4">
                    Integrations • 4 Min Read
                  </span>
                  <h4 className="font-serif text-xl font-normal text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                    WooCommerce & Shopify Bridge: Setting Up Instant Webhook Crypto Settlements
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Step-by-step developer walkthrough for implementing tokenized card checkouts with zero chargeback risk.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                  <span>Coming Soon</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* In-Blog Merchant CTA Banner */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal mb-4 text-white">
                Ready to integrate high-risk card processing for your storefront?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
                Accept Visa & Mastercard with zero rolling reserves and settle instantly in USDT. Underwriting approval in 4–6 hours.
              </p>
              <Link
                href="/#apply"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 active:scale-[0.98] transition-all shadow-lg shadow-blue-600/30"
              >
                <span>Apply for Merchant Gateway</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
