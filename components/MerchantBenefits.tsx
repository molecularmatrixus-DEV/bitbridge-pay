import React from "react";
import {
  FileText,
  ShieldCheck,
  Zap,
  Percent,
  Lock,
  Unlock,
  Globe,
  Sparkles
} from "lucide-react";

interface BenefitCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: BenefitCard[] = [
  {
    title: "No LLC Required",
    description: "Start processing right away without complicated corporate incorporation or foreign entity setup.",
    icon: <FileText className="w-5 h-5 text-blue-600" />
  },
  {
    title: "No KYC Friction",
    description: "Skip days of invasive identity checks. Get your checkout live and start accepting payments immediately.",
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Instant Crypto Payouts",
    description: "Every approved card transaction routes directly to your crypto wallet within seconds.",
    icon: <Zap className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Low & Fair Commissions",
    description: "Flat, competitive transaction rates with zero hidden processor surcharges or monthly penalty fees.",
    icon: <Percent className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Zero Chargebacks",
    description: "Payments settle irreversibly in crypto, protecting your balance from friendly fraud and unfair disputes.",
    icon: <Lock className="w-5 h-5 text-blue-600" />
  },
  {
    title: "No Rolling Reserves",
    description: "Keep 100% of your daily capital. We never hold back 10–20% of your revenue for months.",
    icon: <Unlock className="w-5 h-5 text-blue-600" />
  },
  {
    title: "High-Risk Business Ready",
    description: "Built from the ground up to support peptides, nutraceuticals, digital services, and unconventional niches.",
    icon: <Globe className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Zero Upfront Fees",
    description: "No integration fees, no setup charges, and no monthly platform maintenance costs. You only pay when you make a sale.",
    icon: <Sparkles className="w-5 h-5 text-blue-600" />
  }
];

export default function MerchantBenefits() {
  return (
    <section id="features" className="w-full bg-white pt-12 sm:pt-16 pb-16">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wider uppercase mb-3.5 shadow-sm">
            Merchant Advantage
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-slate-900 leading-[1.15] mb-3.5">
            Built for businesses that traditional banks turn away.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
            Simple, transparent card-to-crypto rails designed to eliminate payment gatekeeping.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100/60 flex items-center justify-center mb-5 transition-transform group-hover:scale-105">
                  {benefit.icon}
                </div>
                <h3 className="font-sans text-sm sm:text-base font-semibold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
