import React from "react";
import { PillarItem } from "@/types";
import { Layout, MapPin, Video, CheckCircle2 } from "lucide-react";

interface PillarCardProps {
  pillar: PillarItem;
}

export function PillarCard({ pillar }: PillarCardProps) {
  const getIcon = () => {
    switch (pillar.iconName) {
      case "layout":
        return <Layout className="w-6 h-6 text-blue-600" />;
      case "map-pin":
        return <MapPin className="w-6 h-6 text-emerald-600" />;
      case "video":
        return <Video className="w-6 h-6 text-purple-600" />;
    }
  };

  const getIconBg = () => {
    switch (pillar.iconName) {
      case "layout":
        return "bg-blue-50 border-blue-100";
      case "map-pin":
        return "bg-emerald-50 border-emerald-100";
      case "video":
        return "bg-purple-50 border-purple-100";
    }
  };

  const isHighlighted = Boolean(pillar.highlightBadge);

  return (
    <div
      className={`relative rounded-3xl bg-white p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
        isHighlighted
          ? "border-2 border-emerald-500 shadow-lg shadow-emerald-500/10"
          : "border border-slate-200 shadow-sm hover:border-blue-200"
      }`}
    >
      {/* Optional Top Tag (e.g. Paling Dicari Konsumen) */}
      {pillar.highlightBadge && (
        <div className="absolute -top-3.5 right-6">
          <span className="px-3.5 py-1 rounded-full bg-emerald-600 text-white text-xs font-black tracking-wide shadow-sm">
            {pillar.highlightBadge}
          </span>
        </div>
      )}

      <div>
        {/* Icon & Target Metric Tag */}
        <div className="flex items-center justify-between mb-5">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${getIconBg()}`}
          >
            {getIcon()}
          </div>
          <span className="text-xs font-bold text-slate-500 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60">
            {pillar.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
          {pillar.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
          {pillar.description}
        </p>
      </div>

      {/* Bullet Points */}
      <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
        {pillar.bullets.map((bullet, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="font-medium leading-tight">{bullet}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
