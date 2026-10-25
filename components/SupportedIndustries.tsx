import React from "react";
import {
  FlaskConical,
  Pill,
  Code2,
  Cloud,
  Activity,
  Flame,
  Package,
  Laptop,
  Sparkles,
  CheckCircle2
} from "lucide-react";

interface IndustryCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
  badge?: string;
}

const industries: IndustryCard[] = [
  {
    title: "Research Peptides & Biochemicals",
    description: "Full card-to-crypto processing for RUO (Research Use Only) peptide brands and biochemical suppliers with zero tier-1 banking headaches.",
    icon: <FlaskConical className="w-5 h-5 text-blue-600" />,
    featured: true
  },
  {
    title: "Nutraceuticals & Health Supplements",
    description: "High-conversion checkout for specialty wellness formulas, nootropics, and botanical products.",
    icon: <Pill className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Digital Goods & Software Licenses",
    description: "Frictionless global sales for digital downloads, dev tools, keys, and automated software subscriptions.",
    icon: <Code2 className="w-5 h-5 text-blue-600" />
  },
  {
    title: "SaaS & Cloud Platforms",
    description: "Recurring and one-time billing models for specialized online services and AI tooling platforms.",
    icon: <Cloud className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Telehealth & Remote Consultations",
    description: "Instant payment processing for specialized online healthcare consults and digital intake workflows.",
    icon: <Activity className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Vape, E-Cig & Specialty Hardware",
    description: "Reliable card checkout designed specifically for age-verified hardware and alternative smoking accessories.",
    icon: <Flame className="w-5 h-5 text-blue-600" />
  },
  {
    title: "High-Volume Dropshipping & D2C",
    description: "Keep selling at scale without sudden account freezes, rolling reserves, or volume-limiting caps.",
    icon: <Package className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Global Freelancers & Solopreneurs",
    description: "Accept global card payments directly into USDT/crypto without business registration, incorporation papers, or tax documents. Perfect for developers, designers, and independent consultants worldwide.",
    icon: <Laptop className="w-5 h-5 text-blue-600" />,
    badge: "No Docs Required"
  }
];

export default function SupportedIndustries() {
  return (
    <section id="industries" className="w-full bg-white pt-12 sm:pt-16 pb-20 relative overflow-hidden">
      {/* Full-Section Floating Ambient Motion Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Orb 1: Sky Blue (~500px, blur-[130px]) */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-200/40 blur-[130px] rounded-full animate-wander-1 opacity-40" />

        {/* Orb 2: Soft Indigo / Violet (~550px, blur-[150px]) */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-indigo-200/35 blur-[150px] rounded-full animate-wander-2 opacity-40" />

        {/* Orb 3: Pale Cyan (~480px, blur-[140px]) */}
        <div className="absolute bottom-0 left-1/3 w-[480px] h-[480px] bg-cyan-100/40 blur-[140px] rounded-full animate-wander-3 opacity-35" />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wider uppercase mb-3.5 shadow-sm">
            Supported Categories
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-slate-900 leading-[1.15] mb-3.5">
            Built for the industries traditional payment processors avoid.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
            Reliable card-to-crypto checkout infrastructure for high-risk, research, and non-standard merchant models.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group ${
                ind.featured
                  ? "bg-white/90 backdrop-blur-xl border border-blue-400/60 ring-1 ring-blue-500/20 shadow-md shadow-blue-500/5 relative overflow-hidden hover:bg-white hover:-translate-y-1"
                  : "bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:bg-white/90 hover:border-slate-300/80 hover:-translate-y-1"
              }`}
            >
              {ind.featured && (
                <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-semibold tracking-wide">
                  <Sparkles className="w-3 h-3" />
                  <span>Flagship Support</span>
                </div>
              )}

              {ind.badge && (
                <div className="absolute top-4 right-4">
                  <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 shadow-sm">
                    {ind.badge}
                  </span>
                </div>
              )}

              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-105 ${
                  ind.featured ? "bg-blue-100/80 border border-blue-200" : "bg-blue-50/80 border border-blue-100/60"
                }`}>
                  {ind.icon}
                </div>

                <h3 className="font-sans text-sm sm:text-base font-semibold text-slate-900 mb-2">
                  {ind.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              {ind.featured && (
                <div className="mt-6 pt-4 border-t border-blue-200/50 flex items-center gap-1.5 text-xs font-medium text-blue-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Specialized Onboarding Available</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
