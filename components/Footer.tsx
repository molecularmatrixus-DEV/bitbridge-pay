import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800">

          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="relative w-8 h-8 overflow-hidden rounded-xl bg-white shadow-sm flex items-center justify-center">
                <Image
                  src="/logo.webp"
                  alt="BitBridge Pay Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-xl tracking-tight text-white font-medium">
                BitBridge <span className="text-blue-500 font-sans font-bold text-base tracking-normal">Pay</span>
              </span>
            </Link>

            <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              Frictionless card-to-crypto payment gateway built specifically for high-risk merchants. Zero chargebacks, instant settlements, absolute freedom.
            </p>

            <div className="text-xs text-slate-500 font-medium">
              © {new Date().getFullYear()} BitBridge Pay Inc. All rights reserved.
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <div className="font-sans text-xs font-semibold text-white tracking-wider uppercase mb-1">
              Gateway
            </div>
            <Link href="#features" className="text-xs sm:text-sm hover:text-white transition-colors">Merchant Benefits</Link>
            <Link href="#how-it-works" className="text-xs sm:text-sm hover:text-white transition-colors">How It Works</Link>
            <Link href="#pricing" className="text-xs sm:text-sm hover:text-white transition-colors">Transparent Pricing</Link>
            <Link href="#solutions" className="text-xs sm:text-sm hover:text-white transition-colors">High-Risk Verticals</Link>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <div className="font-sans text-xs font-semibold text-white tracking-wider uppercase mb-1">
              Developers
            </div>
            <Link href="#docs" className="text-xs sm:text-sm hover:text-white transition-colors">API Documentation</Link>
            <Link href="#sdk" className="text-xs sm:text-sm hover:text-white transition-colors">Checkout SDK</Link>
            <Link href="#webhooks" className="text-xs sm:text-sm hover:text-white transition-colors">Webhooks & Events</Link>
            <Link href="#status" className="text-xs sm:text-sm hover:text-white transition-colors">Network Status</Link>
          </div>

          {/* Links Column 3 */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <div className="font-sans text-xs font-semibold text-white tracking-wider uppercase mb-1">
              Legal & Compliance
            </div>
            <Link href="#privacy" className="text-xs sm:text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="text-xs sm:text-sm hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#aml" className="text-xs sm:text-sm hover:text-white transition-colors">AML & Compliance</Link>
            <Link href="#security" className="text-xs sm:text-sm hover:text-white transition-colors">Security Overview</Link>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>Built for high-performance cross-border merchants worldwide.</div>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
