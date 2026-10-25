"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="pointer-events-auto max-w-[1200px] mx-auto py-2.5 px-6 rounded-full bg-white/45 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-between transition-all">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 overflow-hidden rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center transition-transform group-hover:scale-105">
            <Image
              src="/logo.webp"
              alt="BitBridge Pay Logo"
              width={24}
              height={24}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-serif text-xl tracking-tight text-slate-900 font-medium">
            BitBridge <span className="text-blue-600 font-sans font-bold text-base tracking-normal">Pay</span>
          </span>
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-700">
          <Link href="/#features" className="hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="/#industries" className="hover:text-blue-600 transition-colors">
            Industries
          </Link>
          <Link href="/#pricing" className="hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">
            Blog
          </Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/#apply"
            className="inline-flex items-center justify-center px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/#apply"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-medium shadow-sm shadow-blue-500/20 hover:bg-blue-700 active:scale-[0.98] transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100/50 transition-colors"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-xl rounded-3xl p-6 flex flex-col gap-4 text-sm font-medium text-slate-800 animate-fadeIn">
          <Link
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 rounded-xl hover:bg-slate-50 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#industries"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 rounded-xl hover:bg-slate-50 transition-colors"
          >
            Industries
          </Link>
          <Link
            href="/#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 rounded-xl hover:bg-slate-50 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 rounded-xl hover:bg-slate-50 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 rounded-xl hover:bg-slate-50 transition-colors"
          >
            Blog
          </Link>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/#apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-slate-100 text-slate-800 font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/#apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-blue-600 text-white font-medium shadow-md shadow-blue-600/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
