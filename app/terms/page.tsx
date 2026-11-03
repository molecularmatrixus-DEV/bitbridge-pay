import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "Terms of Service — BitBridge Pay",
  description: "Read the terms and conditions for using BitBridge Pay's non-custodial payment gateway software and API services.",
};

export default function TermsPage() {
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
            <span>Legal Agreement</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-slate-900 leading-[1.15] mb-4">
            Terms of Service
          </h1>

          <p className="text-xs font-mono text-slate-500 mb-8 pb-6 border-b border-slate-200">
            Last Updated: November 3, 2026 • Effective Date: November 3, 2026
          </p>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-800 text-xs sm:text-sm leading-relaxed mb-8">
              <strong>IMPORTANT NOTICE:</strong> BitBridge Pay operates strictly as a non-custodial software technology provider and independent referral interface. We do not receive, hold, transmit, or custody fiat funds, digital assets, or credit card credentials. All financial settlements and card clearings are performed by licensed third-party partners.
            </div>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing, integrating, or using the website (https://bitbridgepay.com), dashboard, APIs, or software checkout widgets provided by BitBridge Pay (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you (&ldquo;Merchant&rdquo;, &ldquo;User&rdquo;, or &ldquo;Client&rdquo;) agree to be legally bound by these Terms of Service. If you do not agree to all terms, you must immediately cease using our services.
            </p>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">2. Scope of Software Services & Non-Custodial Model</h2>
            <p>
              BitBridge Pay provides software integration tools, checkout widgets, and APIs that bridge merchant storefronts with regulated digital asset liquidity and fiat on-ramp providers (such as Ramp Network / Rampex).
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Non-Custodial Architecture:</strong> BitBridge Pay never takes possession, ownership, or custody of merchant sales proceeds, fiat currency, or cryptocurrency.</li>
              <li><strong>Third-Party Execution:</strong> Fiat-to-crypto conversions, card processing, KYC/AML screening, and digital asset settlements are executed exclusively by licensed third-party financial institutions and liquidity partners under their respective licenses.</li>
              <li><strong>Referral & Interface Role:</strong> Our role is strictly limited to providing technical routing, developer documentation, and software interoperability.</li>
            </ul>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">3. Platform Fees & Settlement Structure</h2>
            <p>
              In exchange for providing software maintenance, API access, and gateway integration infrastructure, BitBridge Pay retains a transparent <strong>3% platform facilitation fee</strong> per processed transaction. This fee is automatically computed and accounted for within the gateway settlement workflow managed by our infrastructure partners. Merchants are responsible for any applicable network gas fees or third-party processor surcharges.
            </p>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">4. Merchant Eligibility & Prohibited Activities</h2>
            <p>
              Merchants must be legally established business entities or authorized sole proprietors operating lawfully in their respective jurisdictions. The following activities are strictly prohibited:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sale of illegal goods, counterfeit items, narcotics, unlicensed weapons, or illicit pharmaceuticals.</li>
              <li>Fraudulent schemes, unauthorized financial services, Ponzi schemes, or deceptive marketing.</li>
              <li>Processing transactions originating from OFAC-sanctioned countries or restricted individuals.</li>
            </ul>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, BitBridge Pay shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of blockchain network congestion, smart contract failures, third-party liquidity partner downtime, or cryptocurrency market volatility.
            </p>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">6. Contact Information</h2>
            <p>
              For inquiries regarding these Terms of Service, please contact our support and compliance desk at <a href="mailto:support@bitbridgepay.com" className="text-blue-600 font-medium underline">support@bitbridgepay.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
