import React from "react";
import {
  TrendingUp,
  Zap,
  MessageCircle,
  Play,
  Trophy,
} from "lucide-react";

export function HeroMetricsCard() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-blue-500/10 p-5 md:p-6 w-full max-w-lg mx-auto">
      {/* Top Header Console Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-semibold text-slate-600 pl-1">
            Console Metrik Mitra UMKM #0482
          </span>
        </div>
        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>LIVE REVENUE</span>
        </div>
      </div>

      {/* Main Revenue Card (Vivid Blue with Chart) */}
      <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/25 relative overflow-hidden">
        {/* Glow circle */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-start justify-between relative z-10">
          <div>
            <p className="text-[11px] font-bold tracking-wider uppercase text-blue-200">
              OMSET 30 HARI TERAKHIR
            </p>
            <p className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
              Rp 84.650.000
            </p>
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold text-white border border-white/20">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+318%</span>
          </div>
        </div>

        {/* Dynamic Wave Chart */}
        <div className="mt-4 pt-2">
          <svg
            className="w-full h-16 text-blue-200"
            viewBox="0 0 300 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="revenueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="70"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0.4" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,58 C30,55 50,48 80,45 C110,42 130,52 160,32 C190,12 220,38 250,18 C275,2 290,8 300,5 L300,70 L0,70 Z"
              fill="url(#revenueGradient)"
            />
            <path
              d="M0,58 C30,55 50,48 80,45 C110,42 130,52 160,32 C190,12 220,38 250,18 C275,2 290,8 300,5"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Two Metric Stat Cards */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 fill-emerald-600/20" />
            <span>Speed Score</span>
          </div>
          <div className="mt-1.5">
            <span className="text-xl font-black text-slate-900">98</span>
            <span className="text-xs text-slate-400 font-bold">/100</span>
            <p className="text-[11px] text-slate-500 font-medium">LCP 1.1s Kilat</p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-blue-600 text-xs font-semibold">
            <MessageCircle className="w-3.5 h-3.5 fill-blue-600/20" />
            <span>WhatsApp Order</span>
          </div>
          <div className="mt-1.5">
            <span className="text-xl font-black text-slate-900">1.240</span>
            <span className="text-xs text-slate-500 font-medium ml-1">Leads</span>
            <p className="text-[11px] text-slate-500 font-medium">Closing rate 26.4%</p>
          </div>
        </div>
      </div>

      {/* Google Organic Ranking Badges */}
      <div className="mt-4 pt-3 border-t border-slate-100">
        <p className="text-xs font-bold text-slate-600 mb-2 flex items-center gap-1">
          <Trophy className="w-3.5 h-3.5 text-amber-500" />
          <span>Posisi Google Search Organik Mitra:</span>
        </p>
        <div className="flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200/80">
            🥇 #1 Katering Harian Terdekat
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 text-[11px] font-bold border border-blue-200/80">
            🥈 #2 Hijab Syari Premium
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200">
            📈 #3 Bengkel AC Mobil Bandung
          </span>
        </div>
      </div>

      {/* Reels Viral Campaign Bar */}
      <div className="mt-3.5 p-3 rounded-xl bg-rose-50/70 border border-rose-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800 leading-tight">
              Reels Viral campaign
            </p>
            <p className="text-[11px] text-slate-500">
              Jangkauan Organik Bulan Ini
            </p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-sm font-black text-rose-600">142.800+</span>
          <p className="text-[10px] font-bold text-slate-500 uppercase">
            Penonton Aktif
          </p>
        </div>
      </div>
    </div>
  );
}
