import React from "react";
import { TestimonialItem } from "@/types";
import { RatingStars } from "@/components/ui/RatingStars";
import { CheckCircle2, TrendingUp } from "lucide-react";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
      <div>
        {/* Rating Stars */}
        <div className="flex items-center justify-between mb-4">
          <RatingStars rating={testimonial.rating} />
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
            Terverifikasi
          </span>
        </div>

        {/* Quote */}
        <p className="text-sm text-slate-700 leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        {/* Growth Result Badge */}
        <div className="mt-4 p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-2 text-xs font-bold text-blue-800">
          <TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />
          <span>{testimonial.resultBadge}</span>
        </div>
      </div>

      {/* Author Info */}
      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
          {testimonial.initials}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-extrabold text-slate-900 leading-tight">
              {testimonial.name}
            </h4>
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 fill-blue-50" />
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            {testimonial.role}, {testimonial.company} • {testimonial.city}
          </p>
        </div>
      </div>
    </div>
  );
}
