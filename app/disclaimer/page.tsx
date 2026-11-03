import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Risk & White-Label Disclaimer — BitBridge Pay",
  description: "Read the formal regulatory disclaimer and cryptocurrency volatility warnings for BitBridge Pay.",
};

export default function DisclaimerPage() {
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
            <span>Legal Notice</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-slate-900 leading-[1.15] mb-4">
            Risk & Regulatory Disclaimer
          </h1>

          <p className="text-xs font-mono text-slate-500 mb-8 pb-6 border-b border-slate-200">
            Last Updated: November 3, 2026 • Effective Date: November 3, 2026
          </p>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-800 text-xs sm:text-sm leading-relaxed mb-8">
              <strong>FORMAL REGULATORY STATEMENT:</strong> BitBridge Pay is a technology service provider and is not a bank, licensed money transmitter, or custodian. Financial exchange and card clearing services are performed exclusively by licensed independent third-party partners.
            </div>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">1. Technology Provider Status</h2>
            <p>
              BitBridge Pay operates exclusively as a software developer, API integration provider, and referral gateway interface. We do not engage in money transmission, currency exchange, or banking operations. All fiat card processing, currency conversion, and digital asset settlements are handled entirely by regulated third-party financial institutions and liquidity partners.
            </p>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">2. Cryptocurrency Volatility & Market Risk</h2>
            <p>
              Digital assets and cryptocurrencies (including USDT, USDC, and Bitcoin) are subject to high market volatility, regulatory uncertainty, and technical risks. Merchants and users acknowledge that cryptocurrency values can fluctuate significantly, and BitBridge Pay assumes no liability for market losses or exchange rate slippage.
            </p>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">3. No Financial or Legal Advice</h2>
            <p>
              Information provided across the BitBridge Pay website, blog, and documentation is for informational and educational purposes only and does not constitute financial, legal, tax, or compliance advice. Users should consult qualified professionals in their respective jurisdictions.
            </p>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">4. Contact Desk</h2>
            <p>
              For legal or regulatory clarification, please contact us at <a href="mailto:support@bitbridgepay.com" className="text-blue-600 font-medium underline">support@bitbridgepay.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
