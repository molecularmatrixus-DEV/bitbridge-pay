"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Sparkles, CheckCircle2, ArrowRight, Loader2, Copy, Check } from "lucide-react";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    subject: "Gateway Integration",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("support@bitbridgepay.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-32 pb-20 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
          <div className="w-[700px] h-[400px] bg-gradient-to-tr from-blue-100/50 via-sky-50/20 to-transparent blur-[120px] rounded-full" />
        </div>

        <div className="max-w-[760px] mx-auto px-6 relative z-10">

          {/* Header & Email Callout Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-slate-900 leading-[1.15] mb-4">
              Let&apos;s talk business.
            </h1>

            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto mb-8">
              Have questions regarding custom volume pricing, high-risk merchant onboarding, or gateway integration? Our underwriting and technical desk is here to help.
            </p>

            {/* Direct Email Callout Card */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm max-w-md w-full mx-auto justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <a
                    href="mailto:support@bitbridgepay.com"
                    className="font-mono text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    support@bitbridgepay.com
                  </a>
                  <div className="text-[10px] text-slate-500">Typical response time: within 4–6 hours</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Sleek Contact Form Card */}
          <div className="bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-sm">
            {!success ? (
              <div>
                {errorMessage && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-all text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="owner@company.com"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-all text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Subject / Inquiring About *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-all text-slate-900"
                    >
                      <option value="Gateway Integration">Gateway Integration</option>
                      <option value="Custom Volume Rates">Custom Volume Rates</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your store volume, requirements, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl p-4 text-xs sm:text-sm outline-none transition-all text-slate-900 resize-none"
                    />
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-10 rounded-full bg-blue-600 text-white font-medium text-sm shadow-lg shadow-blue-600/25 hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-75 mx-auto"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="font-sans text-[11px] text-slate-500 text-center leading-relaxed pt-2">
                    We respect your privacy. All inquiries are encrypted and reviewed strictly by senior underwriting desk personnel.
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center py-10 px-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 mb-3">
                  Message Sent!
                </h3>

                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-8 max-w-md mx-auto">
                  Message sent! Our support team will get back to you via email shortly.
                </p>

                <button
                  onClick={() => {
                    setSuccess(false);
                    setFormData({ fullName: "", workEmail: "", subject: "Gateway Integration", message: "" });
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white font-medium text-xs sm:text-sm hover:bg-slate-800 transition-all cursor-pointer"
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
