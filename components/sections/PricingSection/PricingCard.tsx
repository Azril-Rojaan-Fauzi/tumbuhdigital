import React from "react";
import { PricingTier } from "@/types";
import { Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PricingCardProps {
  tier: PricingTier;
  onSelect?: (tierName: string) => void;
}

export function PricingCard({ tier, onSelect }: PricingCardProps) {
  const isPopular = tier.isPopular;

  const handleSelect = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onSelect) {
      onSelect(tier.name);
    }
    const auditSection = document.getElementById("audit");
    if (auditSection) {
      auditSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`relative rounded-3xl bg-white p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl ${
        isPopular
          ? "border-2 border-blue-600 shadow-xl shadow-blue-600/10 scale-100 lg:-translate-y-2"
          : "border border-slate-200/90 shadow-sm hover:border-slate-300"
      }`}
    >
      {/* Top Banner Tag for Popular Tier */}
      {isPopular && (
        <div className="absolute -top-3.5 right-6 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-600 text-white text-xs font-black tracking-wide shadow-md shadow-blue-500/25">
          <Sparkles className="w-3.5 h-3.5 fill-white" />
          <span>{tier.recommendationTag || "PALING POPULER"}</span>
        </div>
      )}

      <div>
        {/* Tier Category Badge */}
        <div className="mb-4">
          <span
            className={`inline-block text-xs font-bold px-3 py-1 rounded-md ${
              isPopular
                ? "bg-blue-50 text-blue-700 border border-blue-200/60"
                : "bg-slate-100 text-slate-700 border border-slate-200/60"
            }`}
          >
            {tier.badge}
          </span>
        </div>

        {/* Tier Name */}
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
          {tier.name}
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px]">
          {tier.description}
        </p>

        {/* Price */}
        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-sm font-bold text-slate-500">Rp</span>
          <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {tier.price}
          </span>
          <span className="text-xs font-medium text-slate-500">
            {tier.period}
          </span>
        </div>

        {/* Features List */}
        <div className="mt-7 pt-6 border-t border-slate-100 space-y-3.5">
          {tier.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
              {feature.included ? (
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
              ) : (
                <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3 h-3 stroke-[2.5]" />
                </div>
              )}
              <span
                className={
                  feature.included
                    ? "font-medium text-slate-800 leading-tight"
                    : "text-slate-400 line-through"
                }
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-8 pt-2">
        <Button
          onClick={handleSelect}
          variant={isPopular ? "primary" : "outline"}
          size="md"
          fullWidth
          className={
            isPopular
              ? "shadow-lg shadow-blue-600/25 font-bold"
              : "font-semibold hover:border-slate-400"
          }
        >
          {tier.ctaText}
        </Button>
      </div>
    </div>
  );
}
