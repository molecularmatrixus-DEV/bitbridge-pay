"use client";

import React, { useState } from "react";
import {
  Check,
  ShieldCheck,
  Zap,
  Percent,
  Server,
  Code,
  ArrowRight,
  Mail,
  Copy,
  CheckCircle2,
  Clock,
  Sparkles,
  ShoppingBag,
  Layers
} from "lucide-react";

export default function PricingAndOnboarding() {
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("support@bitbridgepay.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pricingFeatures = [
    "Zero Monthly Platform Fees (No recurring software/maintenance costs)",
    "No Account Freezes or Holds (Guaranteed business continuity)",
    "Zero Chargeback Liability (Irreversible settlements to your crypto wallet)",
    "$199 One-Time Setup Fee (Payable strictly AFTER full application approval)",
    "No Hidden Surcharges (Transparent, predictable processing)"
  ];

  const integrations = [
    {
      name: "WooCommerce / WordPress",
      desc: "Native lightweight plugin with instant tokenized checkout and auto-settlement webhook.",
      icon: <ShoppingBag className="w-5 h-5 text-blue-600" />,
      tag: "Popular Plugin"
    },
    {
      name: "Shopify",
      desc: "Compatible webhook and custom hosted gateway bridge designed for seamless D2C checkout.",
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      tag: "API Bridge"
    },
    {
      name: "Custom Code / API",
      desc: "Clean REST API, secure Webhooks, and lightweight SDKs for Next.js, PHP, Python, and Node.",
      icon: <Code className="w-5 h-5 text-blue-600" />,
      tag: "Full API Access"
    }
  ];

  const onboardingSteps = [
    {
      num: "01",
      title: "Quick Merchant Application",
      detail: "Submit your basic store details and target payout wallet. Takes under 3 minutes with zero paperwork.",
      badge: "3 Minutes"
    },
    {
      num: "02",
      title: "Underwriting & Direct Agent Contact",
      detail: "A dedicated account specialist reviews your store and contacts you via email within 4 to 6 hours with your merchant credentials.",
      badge: "4–6 Hour SLA"
    },
    {
      num: "03",
      title: "Integration, Test Order & Go Live",
      detail: "Connect your store, run a single live test charge to your wallet, settle the one-time $199 setup fee upon approval, and start taking cards globally.",
      badge: "Go Live Same-Day"
    }
  ];

  return (
    <section id="pricing" className="w-full bg-white py-20 relative overflow-hidden">
      {/* Background Soft Ambient Light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-blue-100/30 via-sky-50/20 to-transparent blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wider uppercase mb-3.5 shadow-sm">
            Transparent & Simple
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-slate-900 leading-[1.15] mb-3.5">
            Simple flat rates. Plug-and-play integrations.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
            Everything you need to start accepting cards with instant crypto settlements — no monthly retainers, no hidden surcharges.
          </p>
        </div>

        {/* Grid Container for Pricing & Integrations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

          {/* Module A: Transparent Pricing Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-blue-300 transition-all">
            <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flat Rate Standard</span>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="font-sans text-lg font-bold text-slate-900 mb-1">Merchant Processing Fee</h3>
                <p className="font-sans text-xs text-slate-500">Transparent pricing built for high-risk and high-volume business models.</p>
              </div>

              <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-slate-100">
                <span className="font-serif text-5xl sm:text-6xl text-slate-900 font-normal">4.0%</span>
                <span className="font-sans text-xs sm:text-sm text-slate-500 font-medium">Flat per-transaction fee • Zero monthly subscription fees</span>
              </div>

              <div className="space-y-3.5 mb-8">
                {pricingFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-slate-700 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>$199 setup fee paid only after approval</span>
              </div>
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium text-xs sm:text-sm shadow-md shadow-blue-600/20 hover:bg-blue-700 active:scale-[0.98] transition-all group"
              >
                <span>Apply For Account</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Module B: Platform & Gateway Integrations (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="mb-2">
              <h3 className="font-serif text-xl font-normal text-slate-900 mb-1">Plug-and-Play Stacks</h3>
              <p className="font-sans text-xs text-slate-600">Connect in minutes with our native modules and developer APIs.</p>
            </div>

            {integrations.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-5 hover:border-blue-300 hover:shadow-sm transition-all duration-200 flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-sans text-sm font-semibold text-slate-900">{item.name}</h4>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-blue-50 text-blue-700">
                      {item.tag}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Module C: Fast 3-Step Onboarding Workflow */}
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm mb-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 mb-2">Fast 3-Step Onboarding</h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600">From application to live card checkout in hours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {onboardingSteps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`rounded-2xl p-6 cursor-pointer transition-all duration-200 flex flex-col justify-between border ${
                  activeStep === idx
                    ? "bg-blue-50/50 border-blue-300 shadow-sm"
                    : "bg-white border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl text-blue-600 font-light">{step.num}</span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {step.badge}
                    </span>
                  </div>
                  <h4 className="font-sans text-sm sm:text-base font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Step {idx + 1} of 3</span>
                  <span className={activeStep === idx ? "text-blue-600 font-semibold" : ""}>
                    {activeStep === idx ? "Active View" : "Click to Inspect"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Module D: Direct Merchant Support Bar */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="font-sans text-sm sm:text-base font-semibold text-white mb-1">
                Have custom volume requirements or technical integration questions?
              </h4>
              <p className="font-sans text-xs text-slate-400">
                Email our underwriting desk at <span className="text-blue-400 font-medium">support@bitbridgepay.com</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium text-xs hover:bg-slate-700 active:scale-[0.98] transition-all cursor-pointer"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />}
              <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
            </button>

            <a
              href="mailto:support@bitbridgepay.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-xs hover:bg-blue-700 active:scale-[0.98] transition-all"
            >
              <span>Email Support</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
