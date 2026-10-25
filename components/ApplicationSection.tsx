"use client";

import React, { useState } from "react";
import { ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

export default function ApplicationSection() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    storeName: "",
    websiteUrl: "",
    contactEmail: "",
    telegramHandle: "",
    whatsappNumber: "",
    industry: "Research Peptides & Biochemicals",
    monthlyVolume: "$10k - $50k",
    payoutPreference: "USDT TRC20"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to submit application.");
      }

      setSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="apply" className="w-full bg-white py-20 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-gradient-to-tr from-blue-100/40 via-sky-50/20 to-transparent blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">

        <div className="bg-white/85 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">

          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fast Onboarding</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-slate-900 leading-[1.15] mb-3">
              Start accepting cards today.
            </h2>

            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
              Submit your merchant details. Our underwriting agent responds within 4–6 hours. Zero upfront commitment until your test order succeeds.
            </p>
          </div>

          {!success ? (
            <div className="max-w-3xl mx-auto">
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Merchant / Store Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Peptides"
                      value={formData.storeName}
                      onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                      className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-all text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Store URL / Website or Channel Link *</label>
                    <input
                      type="text"
                      required
                      placeholder="https://apeppeptides.com"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="owner@store.com"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-all text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Telegram Handle (Optional)</label>
                    <input
                      type="text"
                      placeholder="@username"
                      value={formData.telegramHandle}
                      onChange={(e) => setFormData({ ...formData, telegramHandle: e.target.value })}
                      className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-all text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">WhatsApp Number (Optional)</label>
                    <input
                      type="text"
                      placeholder="+1 (555) 000-0000"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Industry / Category *</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-all text-slate-900"
                    >
                      <option value="Research Peptides & Biochemicals">Research Peptides & Biochemicals</option>
                      <option value="Nutraceuticals & Health Supplements">Nutraceuticals & Health Supplements</option>
                      <option value="Global Freelancers & Solopreneurs">Global Freelancers & Solopreneurs (No Docs)</option>
                      <option value="Digital Goods & Software Licenses">Digital Goods & Software Licenses</option>
                      <option value="SaaS & Cloud Platforms">SaaS & Cloud Platforms</option>
                      <option value="Telehealth & Remote Consultations">Telehealth & Remote Consultations</option>
                      <option value="Vape, E-Cig & Specialty Hardware">Vape, E-Cig & Specialty Hardware</option>
                      <option value="High-Volume Dropshipping & D2C">High-Volume Dropshipping & D2C</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Target Monthly Card Volume *</label>
                    <select
                      value={formData.monthlyVolume}
                      onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                      className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-all text-slate-900"
                    >
                      <option value="<$10k">&lt; $10k / mo</option>
                      <option value="$10k - $50k">$10k – $50k / mo</option>
                      <option value="$50k - $200k">$50k – $200k / mo</option>
                      <option value="$200k+">$200k+ / mo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Preferred Payout Asset *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "USDT TRC20", desc: "Recommended" },
                      { label: "USDT ERC20", desc: "Ethereum" },
                      { label: "USDC", desc: "Stablecoin" },
                      { label: "BTC", desc: "Bitcoin" }
                    ].map((asset) => (
                      <label
                        key={asset.label}
                        className={`flex flex-col p-3.5 rounded-xl border cursor-pointer transition-all ${
                          formData.payoutPreference === asset.label
                            ? "bg-blue-50/70 border-blue-500 ring-1 ring-blue-500/20"
                            : "bg-white border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-slate-900">{asset.label}</span>
                          <input
                            type="radio"
                            name="payoutPreference"
                            checked={formData.payoutPreference === asset.label}
                            onChange={() => setFormData({ ...formData, payoutPreference: asset.label })}
                            className="text-blue-600 focus:ring-blue-500"
                          />
                        </div>
                        <span className="text-[10px] text-slate-500">{asset.desc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-10 rounded-full bg-blue-600 text-white font-medium text-sm shadow-lg shadow-blue-600/25 hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-75 mx-auto"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <p className="font-sans text-[11px] text-slate-500 text-center leading-relaxed pt-2">
                  Zero upfront commitment until your test order succeeds. Underwriting response in 4–6 hours.
                </p>
              </form>
            </div>
          ) : (
            <div className="text-center py-10 px-4 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 mb-3">
                Application Received!
              </h3>

              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                Application received! An underwriting specialist will contact you via Telegram/WhatsApp/Email within <span className="font-semibold text-slate-900">4–6 hours</span>.
              </p>

              <button
                onClick={() => setSuccess(false)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white font-medium text-xs sm:text-sm hover:bg-slate-800 transition-all cursor-pointer"
              >
                <span>Submit Another Application</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
