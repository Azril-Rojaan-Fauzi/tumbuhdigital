import React from "react";
import {
  Zap,
  ShieldCheck,
  Users,
  ArrowRight,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroMetricsCard } from "./HeroMetricsCard";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-slate-50/30"
    >
      {/* Background radial ambient lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-blue-100/40 via-emerald-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/80 text-slate-700 text-xs font-bold tracking-wide">
              <span className="flex gap-1 text-emerald-500 text-base leading-none">
                ●●●
              </span>
              <span>
                SOLUSI TERPADU PERTUMBUHAN BISNIS & EKOSISTEM DIGITAL UMKM
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.15]">
              Tingkatkan Penjualan Bisnis UMKM Anda Hingga{" "}
              <span className="relative inline-block text-blue-600">
                3x Lipat
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-3 text-blue-400/80"
                  viewBox="0 0 100 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 9C15 2 30 11 45 4C60 -3 75 11 99 6"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Lewat Ekosistem Digital Terpadu
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Solusi all-in-one website kilat siap jualan, optimasi SEO Google
              halaman #1, dan manajemen media sosial tertarget tanpa beban gaji
              tim internal belasan juta tiap bulan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                asLink
                href="#audit"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="shadow-lg shadow-blue-600/25"
              >
                Mulai Konsultasi & Audit Gratis
              </Button>

              <Button
                asLink
                href="#paket"
                variant="secondary"
                size="lg"
                leftIcon={
                  <ClipboardList className="w-4 h-4 text-emerald-700" />
                }
              >
                Pilih Paket & Harga
              </Button>
            </div>

            {/* Trust Indicators Row */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Badge 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 fill-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    Respon WA &lt; 15 Menit
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Layanan aktif setiap hari
                  </p>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    Garansi Transparan
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Kontrak fleksibel tanpa denda
                  </p>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100/70 text-purple-700 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    450+ UMKM Terbantu
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Di 28 Kota se-Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Metrics Console (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroMetricsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
