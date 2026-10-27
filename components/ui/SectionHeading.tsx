import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl mx-auto mb-12 md:mb-16 ${alignmentClass} ${className}`}>
      {eyebrow && (
        <span className="text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
