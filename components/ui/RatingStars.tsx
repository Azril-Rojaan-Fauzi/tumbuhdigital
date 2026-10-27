import React from "react";
import { Star } from "lucide-react";

interface RatingStarsProps {
  rating?: number;
  maxStars?: number;
  className?: string;
}

export function RatingStars({
  rating = 5,
  maxStars = 5,
  className = "",
}: RatingStarsProps) {
  return (
    <div className={`flex items-center gap-1 text-amber-400 ${className}`}>
      {Array.from({ length: maxStars }).map((_, idx) => (
        <Star
          key={idx}
          className={`w-4 h-4 ${
            idx < rating ? "fill-amber-400 text-amber-400" : "text-slate-300"
          }`}
        />
      ))}
    </div>
  );
}
