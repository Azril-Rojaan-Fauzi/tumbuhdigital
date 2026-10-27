import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "emerald" | "purple" | "slate" | "amber" | "outline";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "blue",
  className = "",
  size = "md",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full transition-colors";

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs gap-1",
    md: "px-3 py-1 text-xs md:text-sm gap-1.5",
  };

  const variantStyles = {
    blue: "bg-blue-50 text-blue-700 border border-blue-200/70",
    emerald: "bg-emerald-50 text-emerald-700 border border-emerald-200/70",
    purple: "bg-purple-50 text-purple-700 border border-purple-200/70",
    slate: "bg-slate-100 text-slate-700 border border-slate-200",
    amber: "bg-amber-50 text-amber-700 border border-amber-200/70",
    outline: "border border-slate-200 text-slate-600 bg-white",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
