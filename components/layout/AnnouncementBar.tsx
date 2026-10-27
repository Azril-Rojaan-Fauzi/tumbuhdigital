import React from "react";
import { ANNOUNCEMENT_TEXT } from "@/data/content";
import { Clock } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-slate-950 text-slate-200 text-xs md:text-sm py-2 px-4 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center font-medium">
        <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 hidden sm:inline" />
        <span>{ANNOUNCEMENT_TEXT}</span>
      </div>
    </div>
  );
}
