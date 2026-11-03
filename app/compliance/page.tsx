import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "AML & KYC Compliance Policy — BitBridge Pay",
  description: "Review BitBridge Pay's anti-money laundering standards and third-party KYC verification protocols.",
};

export default function CompliancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
          <div className="w-[800px] h-[500px] bg-gradient-to-tr from-blue-100/40 via-sky-50/20 to-transparent blur-[140px] rounded-full" />
        </div>

        <div className="max-w-[820px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Regulatory Standards</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-slate-900 leading-[1.15] mb-4">
            AML & KYC Compliance Policy
          </h1>

          <p className="text-xs font-mono text-slate-500 mb-8 pb-6 border-b border-slate-200">
            Last Updated: November 3, 2026 • Effective Date: November 3, 2026
          </p>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-800 text-xs sm:text-sm leading-relaxed mb-8">
              <strong>COMPLIANCE COMMITMENT:</strong> BitBridge Pay enforces strict anti-money laundering (AML) protocols and partners exclusively with regulated liquidity providers that perform robust Know Your Customer (KYC) and sanctions screenings.
            </div>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">1. Anti-Money Laundering (AML) Commitment</h2>
            <p>
              BitBridge Pay is committed to preventing financial crimes, terrorist financing, and illicit funds transfer. We maintain a zero-tolerance policy toward money laundering and actively monitor transactional metadata passing through our software gateway interfaces.
            </p>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">2. Third-Party KYC & Sanction Screening</h2>
            <p>
              Identity verification (KYC), cardholder authentication, and OFAC/sanctioned watch-list screenings are executed directly by our licensed liquidity and fiat on-ramp partners prior to digital asset release. Merchants must also undergo compliance underwriting before receiving production gateway credentials.
            </p>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">3. Prohibited Jurisdictions</h2>
            <p>
              We do not provide services to merchants or customers residing in or operating out of OFAC-sanctioned countries, high-risk jurisdictions, or regions subject to comprehensive international trade embargoes.
            </p>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">4. Compliance Inquiries</h2>
            <p>
              For compliance questions or regulatory documentation requests, please contact our compliance desk at <a href="mailto:support@bitbridgepay.com" className="text-blue-600 font-medium underline">support@bitbridgepay.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
