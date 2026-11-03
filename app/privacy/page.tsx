import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — BitBridge Pay",
  description: "Learn how BitBridge Pay protects your technical data and privacy when using our non-custodial gateway interface.",
};

export default function PrivacyPage() {
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
            <span>Data Protection</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-slate-900 leading-[1.15] mb-4">
            Privacy Policy
          </h1>

          <p className="text-xs font-mono text-slate-500 mb-8 pb-6 border-b border-slate-200">
            Last Updated: November 3, 2026 • Effective Date: November 3, 2026
          </p>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-800 text-xs sm:text-sm leading-relaxed mb-8">
              <strong>NON-CUSTODIAL DATA GUARANTEE:</strong> BitBridge Pay never receives, collects, processes, or stores full credit/debit card numbers, CVV security codes, or banking credentials. All sensitive payment data is handled exclusively by PCI-DSS compliant licensed on-ramp partners.
            </div>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">1. Introduction</h2>
            <p>
              BitBridge Pay (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;Company&rdquo;) respects your privacy and is committed to protecting your personal and technical data. This Privacy Policy outlines what data we collect, how we use it, and under what circumstances we share it when you visit our website (https://bitbridgepay.com), use our dashboard, or interact with our payment gateway APIs.
            </p>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">2. Categories of Information Collected</h2>
            <p>Because we operate a non-custodial software infrastructure, our data collection is strictly minimized:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Technical & Device Data:</strong> IP address, browser type, operating system, and standard server log information for security and diagnostic purposes.</li>
              <li><strong>Blockchain & Transaction Metadata:</strong> Public cryptocurrency wallet addresses, transaction hashes, and merchant order identifiers associated with gateway checkouts.</li>
              <li><strong>Merchant Onboarding Information:</strong> Business name, email address, website URL, and payout wallet details submitted voluntarily through our merchant application or contact forms.</li>
            </ul>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">3. How We Share Data with Third-Party Partners</h2>
            <p>
              To complete fiat-to-crypto checkout conversions, transaction metadata and merchant integration parameters are securely transmitted to licensed third-party liquidity and on-ramp infrastructure partners (such as Ramp Network) strictly for fraud prevention, AML compliance, and transaction routing. We do not sell or rent personal information to advertisers.
            </p>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">4. Data Security & Cookies</h2>
            <p>
              We implement industry-standard encryption, SSL/TLS protocols, and secure cloud server configurations. Our website utilizes lightweight functional cookies to enhance user experience and maintain session continuity.
            </p>

            <h2 className="font-serif text-2xl font-normal text-slate-900 pt-4 mb-2">5. Contact Us</h2>
            <p>
              If you have any questions or requests regarding your privacy, please reach out to our privacy compliance team at <a href="mailto:support@bitbridgepay.com" className="text-blue-600 font-medium underline">support@bitbridgepay.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
