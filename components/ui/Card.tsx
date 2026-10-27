import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className = "",
  hoverEffect = false,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 transition-all duration-300 ${
        hoverEffect
          ? "hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
          : "shadow-sm"
      } ${className}`}
    >
      {children}
    </div>
  );
}
