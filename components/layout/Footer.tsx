import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  ShieldCheck,
  MessageCircle,
  Mail,
  Clock,
} from "lucide-react";
import { WHATSAPP_CONTACT } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/90 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#hero" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-emerald-600 to-emerald-500 flex items-center justify-center text-white shadow-sm">
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

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Partner strategis transformasi komersial digital UMKM dan
              korporasi Indonesia. Spesialis web konversi tinggi, optimasi SEO
              Google organik, dan akuisisi media sosial terukur.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Terdaftar PSE Kominfo & Berizin Resmi</span>
            </div>
          </div>

          {/* Column 2: Solusi Digital (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
              Solusi Digital
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href="#layanan"
                  className="hover:text-blue-600 transition-colors"
                >
                  Jasa Website UMKM
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="hover:text-blue-600 transition-colors"
                >
                  SEO Google Halaman #1
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="hover:text-blue-600 transition-colors"
                >
                  Social Media Management
                </a>
              </li>
              <li>
                <a
                  href="#audit"
                  className="hover:text-blue-600 transition-colors"
                >
                  Audit CRO & Funnel
                </a>
              </li>
              <li>
                <a
                  href="#paket"
                  className="hover:text-blue-600 transition-colors"
                >
                  Google Ads & Meta Ads
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Kantor Operasional (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
              Kantor Operasional
            </h3>
            <div className="space-y-3 text-xs md:text-sm text-slate-600">
              <div>
                <p className="font-semibold text-slate-800">Jakarta:</p>
                <p className="leading-relaxed">Jakarta</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Bandung:</p>
                <p className="leading-relaxed">Bandung</p>
              </div>
            </div>
          </div>

          {/* Column 4: Bantuan & Kontak (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
              Bantuan & CS Langsung
            </h3>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-600">
              <li>
                <a
                  href={WHATSAPP_CONTACT.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-700 font-semibold hover:underline"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp CS: {WHATSAPP_CONTACT.number}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>halo@tumbuhdigital.id</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Senin - Sabtu: 08:30 - 18:00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Payment and Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2 font-medium">
            <span className="uppercase tracking-wider font-semibold text-slate-700">
              Metode Pembayaran Aman:
            </span>
            <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-bold">
              QRIS
            </span>
            <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-bold">
              BCA
            </span>
            <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-bold">
              Mandiri
            </span>
            <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-bold">
              Midtrans
            </span>
          </div>

          <p className="text-center md:text-right">
            © 2026 PT Tumbuh Digital Solusindo. Hak Cipta Dilindungi
            Undang-Undang. (Tugas Kuliah)
          </p>
        </div>
      </div>
    </footer>
  );
}
