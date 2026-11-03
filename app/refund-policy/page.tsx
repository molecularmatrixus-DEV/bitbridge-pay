import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy — BitBridge Pay",
  description: "Understand the transaction finality, blockchain settlement rules, and dispute workflows for BitBridge Pay.",
};

export default function RefundPolicyPage() {
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
            <span>Settlement Rules</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-slate-900 leading-[1.15] mb-4">
            Refund & Cancellation Policy
          </h1>

          <p className="text-xs font-mono text-slate-500 mb-8 pb-6 border-b border-slate-200">
            Last Updated: November 3, 2026 • Effective Date: November 3, 2026
          </p>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-800 text-xs sm:text-sm leading-relaxed mb-8">
              <strong>BLOCKCHAIN FINALITY NOTICE:</strong> Confirmed public blockchain transactions and digital asset conversions are cryptographically irreversible. BitBridge Pay does not hold fiat funds and cannot unilaterally reverse cryptocurrency settlements dispatched to merchant destination wallets.
            </div>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">1. Nature of Cryptocurrency Settlements</h2>
            <p>
              BitBridge Pay provides non-custodial software infrastructure that bridges fiat checkout cards to decentralized digital asset settlements. Because blockchain transactions (such as USDT on TRC20/ERC20 or Bitcoin) settle immutably on distributed ledgers, transactions cannot be cancelled or altered once confirmed by network consensus.
            </p>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">2. Merchant Fulfillment & Refund Responsibility</h2>
            <p>
              Merchants utilizing the BitBridge Pay gateway are solely responsible for their own customer service, product fulfillment, delivery tracking, and return/refund policies. If a customer requests a refund for goods or services purchased from a merchant storefront:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The customer must contact the merchant directly where the purchase was made.</li>
              <li>The merchant may issue a fiat refund or execute a secondary cryptocurrency transfer directly from their wallet balance to the buyer.</li>
              <li>Platform fees (such as the 3% platform facilitation fee) are non-refundable once a transaction has successfully routed.</li>
            </ul>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">3. Fiat On-Ramp Processing Failures</h2>
            <p>
              Issues related to declined credit/debit cards, bank wire rejections, or identity verification (KYC) halts during the checkout process are governed by the terms and conditions of the licensed third-party liquidity provider processing the fiat on-ramp.
            </p>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">4. Support & Dispute Workflow</h2>
            <p>
              For technical gateway inquiries or merchant integration disputes, please contact our support desk at <a href="mailto:support@bitbridgepay.com" className="text-blue-600 font-medium underline">support@bitbridgepay.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
