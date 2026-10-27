"use client";

import React from "react";
import { FAQ_DATA } from "@/data/content";
import { useFaqAccordion } from "@/hooks/useFaqAccordion";
import { ChevronDown } from "lucide-react";

export function FaqAccordion() {
  const { toggleItem, isOpen } = useFaqAccordion("faq-1");

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {FAQ_DATA.map((item) => {
        const open = isOpen(item.id);
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-200 shadow-xs"
          >
            <button
              onClick={() => toggleItem(item.id)}
              aria-expanded={open}
              className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
            >
              <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-200 ${
                  open ? "rotate-180 bg-blue-50 text-blue-600" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {open && (
              <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 animate-in fade-in duration-200">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
