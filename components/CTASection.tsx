import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="get-started" className="w-full bg-white py-24 border-t border-slate-200/60 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[350px] bg-gradient-to-r from-blue-500/10 via-sky-400/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 relative z-10 text-center">

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
          Get Started Today
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-slate-900 leading-[1.12] mb-6">
          Ready to eliminate chargebacks and <br />
          <span className="italic text-blue-600">accelerate your revenue?</span>
        </h2>

        <p className="font-sans text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed mb-10">
          Join high-risk merchants who trust BitBridge Pay for instant crypto settlements, zero rolling reserves, and absolute payment freedom.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#get-started"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow-xl shadow-blue-600/25 hover:bg-blue-700 active:scale-[0.98] transition-all text-sm group"
          >
            <span>Create Merchant Account</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-50 text-slate-700 font-medium border border-slate-200 hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98] transition-all text-sm"
          >
            <span>Talk to Sales</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10 text-xs text-slate-500 font-medium">
          <span>✓ No setup fees</span>
          <span>•</span>
          <span>✓ 5-minute integration</span>
          <span>•</span>
          <span>✓ Dedicated support</span>
        </div>

      </div>
    </section>
  );
}
