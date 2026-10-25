"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CreditCard, Wallet } from "lucide-react";

interface TxItem {
  id: number;
  amount: string;
  cardInfo: string;
  cryptoOut: string;
  time: string;
  confirmTime: string;
}

const transactionQueue: TxItem[] = [
  {
    id: 1,
    amount: "+$145.00 USD",
    cardInfo: "Visa (••4102) → Instant USDT",
    cryptoOut: "145.00 USDT routed to Cold Storage",
    time: "Just now",
    confirmTime: "Confirmed (0.4s)"
  },
  {
    id: 2,
    amount: "+$320.00 USD",
    cardInfo: "Mastercard (••8891) → Instant USDC",
    cryptoOut: "320.00 USDC routed to Merchant Wallet",
    time: "Just now",
    confirmTime: "Confirmed (0.3s)"
  },
  {
    id: 3,
    amount: "+$85.00 USD",
    cardInfo: "Visa (••1920) → Instant USDT",
    cryptoOut: "85.00 USDT routed to Vault",
    time: "Just now",
    confirmTime: "Confirmed (0.5s)"
  },
  {
    id: 4,
    amount: "+$490.00 USD",
    cardInfo: "Mastercard (••6342) → Instant USDT",
    cryptoOut: "490.00 USDT routed to Multi-Sig Treasury",
    time: "Just now",
    confirmTime: "Confirmed (0.4s)"
  },
  {
    id: 5,
    amount: "+$260.00 USD",
    cardInfo: "Visa (••7715) → Instant USDC",
    cryptoOut: "260.00 USDC routed to Merchant Wallet",
    time: "Just now",
    confirmTime: "Confirmed (0.3s)"
  }
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % transactionQueue.length);
        setAnimating(false);
      }, 300);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentTx = transactionQueue[currentIndex];
  const secondaryTx = transactionQueue[(currentIndex + 1) % transactionQueue.length];

  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[520px] sm:min-h-[640px] pt-20 sm:pt-26 pb-4 sm:pb-6 flex flex-col justify-between">
      {/* Dynamic Realistic Sky & Cloud Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Sky Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#38bdf8]/50 via-[#60a5fa]/25 to-white" />

        {/* Ambient Top Light */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] rounded-[100%] bg-gradient-to-b from-white/70 via-sky-100/40 to-transparent blur-3xl opacity-90" />

        {/* Fluffy Organic Cloud Blobs - Left */}
        <div className="absolute top-10 -left-20 w-[480px] h-[340px] rounded-full bg-white/75 blur-3xl" />
        <div className="absolute top-36 left-28 w-[360px] h-[240px] rounded-full bg-white/60 blur-2xl" />

        {/* Fluffy Organic Cloud Blobs - Right */}
        <div className="absolute top-4 -right-20 w-[540px] h-[380px] rounded-full bg-white/70 blur-3xl" />
        <div className="absolute top-32 right-36 w-[400px] h-[260px] rounded-full bg-white/60 blur-2xl" />

        {/* Bottom Cloud Mist Fade to Content */}
        <div className="absolute bottom-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 py-2 sm:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-slate-900 leading-[1.12] mb-3">
              Accept card payments. <br />
              <span className="italic text-[#2563EB] font-serif">Settle in crypto.</span>
            </h1>

            {/* Slogan */}
            <p className="font-sans text-sm sm:text-base lg:text-lg font-medium text-slate-800 tracking-tight mb-2">
              Zero declines, zero chargebacks, pure growth.
            </p>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed mb-4">
              Let your customers pay with regular debit and credit cards while you get paid directly in crypto. No sudden holds, no chargeback fraud, and instant payouts.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto mt-1 mb-3">
              <Link
                href="#apply"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/25 hover:bg-blue-700 active:scale-[0.98] transition-all text-xs sm:text-sm group"
              >
                <span>Start Accepting Cards</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#industries"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/90 text-slate-700 font-medium border border-slate-200 shadow-sm hover:bg-white hover:text-slate-900 active:scale-[0.98] transition-all text-xs sm:text-sm backdrop-blur-sm"
              >
                <span>See Industries</span>
              </Link>
            </div>

            {/* Sub-trust line */}
            <div className="flex items-center gap-2 pt-3 sm:pt-4 border-t border-slate-200/60 w-full flex-wrap text-[11px] sm:text-xs lg:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-1.5 text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No rolling reserves</span>
              </div>
              <span className="text-slate-300">•</span>
              <span>Same-day setup</span>
              <span className="text-slate-300">•</span>
              <span>Instant payouts</span>
            </div>

          </div>

          {/* Right Column: Dynamic Floating Push-Notification Stack */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-0 lg:min-h-[340px] mt-[10px] lg:mt-0">
            <div className="w-full max-w-md relative flex flex-col gap-2 sm:gap-3 items-center justify-center">

              {/* Primary Notification Card (Dynamic) */}
              <div className={`w-full bg-white/95 backdrop-blur-md shadow-xl shadow-blue-500/10 border border-slate-100 rounded-2xl p-2.5 sm:p-4 transition-all duration-300 transform ${!mounted || animating ? "opacity-0 -translate-y-2 scale-95" : "opacity-100 translate-y-0 scale-100"}`}>
                <div className="flex items-start justify-between mb-1 sm:mb-2">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="relative">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 border-2 border-white"></span>
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-semibold text-slate-800">New Card Sale Accepted</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400">{currentTx.time}</div>
                    </div>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-900">{currentTx.amount}</span>
                </div>

                <div className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1 sm:mt-2 pt-1 sm:pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span>{currentTx.cardInfo}</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] sm:text-[11px] font-semibold shrink-0">
                    Zero Chargeback
                  </span>
                </div>
              </div>

              {/* Secondary Mini Notification Card (Dynamic Offset) */}
              <div className={`w-[92%] bg-white/85 backdrop-blur-md shadow-lg shadow-blue-500/5 border border-slate-100 rounded-2xl p-2.5 sm:p-3.5 transition-all duration-300 transform ${!mounted || animating ? "opacity-0 translate-y-2 scale-95" : "opacity-100 translate-y-0 scale-100"}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Wallet className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-semibold text-slate-800">Instant Settlement Completed</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500 truncate max-w-[170px] sm:max-w-none">{secondaryTx.cryptoOut}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 shrink-0">
                    {secondaryTx.confirmTime}
                  </span>
                </div>
              </div>

              {/* Tertiary decorative badge */}
              <div className="absolute -bottom-3 sm:-bottom-4 right-2 sm:right-4 bg-white/90 backdrop-blur-md border border-slate-100 shadow-md rounded-xl px-2 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-medium text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Gateway Uptime: 99.99%</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
