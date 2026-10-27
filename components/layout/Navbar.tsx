"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NAVIGATION_LINKS, WHATSAPP_CONTACT } from "@/data/content";
import { TrendingUp, MessageCircle, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-emerald-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <TrendingUp className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline leading-none">
              <span className="text-xl font-black text-slate-900 tracking-tight">
                Tumbuh
              </span>
              <span className="text-xl font-black text-blue-600 tracking-tight">
                Digital
              </span>
            </div>
            <span className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase mt-0.5">
              INDONESIA
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            asLink
            href={WHATSAPP_CONTACT.link}
            variant="whatsapp"
            size="md"
            leftIcon={<MessageCircle className="w-4 h-4 fill-white/20" />}
            className="rounded-full shadow-emerald-600/20 font-semibold"
          >
            Konsultasi WhatsApp
          </Button>

          <button
            aria-label="User Account"
            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <User className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600 border-b border-slate-100 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button
              asLink
              href={WHATSAPP_CONTACT.link}
              variant="whatsapp"
              size="md"
              fullWidth
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              Konsultasi WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
