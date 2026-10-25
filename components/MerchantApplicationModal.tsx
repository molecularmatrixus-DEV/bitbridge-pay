"use client";

import React, { useState } from "react";
import { X, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

interface MerchantApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MerchantApplicationModal({ isOpen, onClose }: MerchantApplicationModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    storeName: "",
    websiteUrl: "",
    contactEmail: "",
    telegramHandle: "",
    industry: "Research Peptides & Biochemicals",
    monthlyVolume: "$10k - $50k",
    payoutPreference: "USDT TRC20"
  });

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden p-6 sm:p-8 max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!success ? (
          <div>
            <div className="mb-6 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Express Underwriting</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900">
                Apply for Merchant Gateway
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1">
                Zero upfront fees. Get reviewed and approved within 4–6 hours.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Store / Business Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Peptides"
                    value={formData.storeName}
                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                    className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm outline-none transition-all text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Store URL / Telegram Link *</label>
                  <input
                    type="text"
                    required
                    placeholder="https://apeppeptides.com"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm outline-none transition-all text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="owner@store.com"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm outline-none transition-all text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Telegram Username (Optional)</label>
                  <input
                    type="text"
                    placeholder="@username"
                    value={formData.telegramHandle}
                    onChange={(e) => setFormData({ ...formData, telegramHandle: e.target.value })}
                    className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm outline-none transition-all text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Business Industry *</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm outline-none transition-all text-slate-900"
                  >
                    <option value="Research Peptides & Biochemicals">Research Peptides & Biochemicals</option>
                    <option value="Nutraceuticals & Health Supplements">Nutraceuticals & Health Supplements</option>
                    <option value="Digital Goods & Software Licenses">Digital Goods & Software Licenses</option>
                    <option value="SaaS & Cloud Platforms">SaaS & Cloud Platforms</option>
                    <option value="Telehealth & Remote Consultations">Telehealth & Remote Consultations</option>
                    <option value="Vape, E-Cig & Specialty Hardware">Vape, E-Cig & Specialty Hardware</option>
                    <option value="High-Volume Dropshipping & D2C">High-Volume Dropshipping & D2C</option>
                    <option value="Global Freelancers & Solopreneurs">Global Freelancers & Solopreneurs</option>
                    <option value="Other High-Risk Niche">Other High-Risk Niche</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Monthly Volume *</label>
                  <select
                    value={formData.monthlyVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                    className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm outline-none transition-all text-slate-900"
                  >
                    <option value="<$10k">&lt; $10k / mo</option>
                    <option value="$10k - $50k">$10k – $50k / mo</option>
                    <option value="$50k - $200k">$50k – $200k / mo</option>
                    <option value="$200k+">$200k+ / mo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Settlement Asset *</label>
                <select
                  value={formData.payoutPreference}
                  onChange={(e) => setFormData({ ...formData, payoutPreference: e.target.value })}
                  className="w-full border border-slate-200 bg-white/90 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm outline-none transition-all text-slate-900"
                >
                  <option value="USDT TRC20">USDT (TRC20 - Recommended Low Fee)</option>
                  <option value="USDT ERC20">USDT (ERC20)</option>
                  <option value="USDC">USDC (Ethereum / Polygon)</option>
                  <option value="BTC">Bitcoin (BTC)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-blue-600 text-white font-medium text-sm shadow-lg shadow-blue-600/25 hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-75"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Merchant Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="font-sans text-[11px] text-slate-500 text-center leading-relaxed pt-1">
                Zero upfront payment required. You only settle the $199 setup fee after your test order is verified and account is fully approved. Underwriting response in 4–6 hours.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 px-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 mb-2">
              Application Received!
            </h3>

            <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-8">
              Our underwriting agent will review your store and reach out via email/Telegram within <span className="font-semibold text-slate-900">4–6 hours</span> with your gateway credentials.
            </p>

            <button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium text-xs sm:text-sm shadow-md hover:bg-blue-700 transition-all cursor-pointer"
            >
              <span>Back to Home</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
