import React from "react";
import { STATS_DATA } from "@/data/content";
import { Star } from "lucide-react";

export function StatsSection() {
  return (
    <section className="py-14 bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">
          {STATS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10"
            >
              <div className="flex items-center gap-1.5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                <span>{item.value}</span>
                {item.hasStar && (
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400 inline" />
                )}
              </div>
              <p className="mt-2 text-sm sm:text-base font-bold text-blue-200">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-slate-300 max-w-[200px] leading-relaxed hidden sm:block">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
