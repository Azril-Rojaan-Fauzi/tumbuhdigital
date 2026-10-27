import React from "react";
import { FeatureItem } from "@/types";
import {
  Smartphone,
  MessageSquare,
  Search,
  Video,
  PenTool,
  BarChart3,
} from "lucide-react";

interface FeatureCardProps {
  feature: FeatureItem;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const getIcon = () => {
    switch (feature.iconName) {
      case "smartphone":
        return <Smartphone className="w-5 h-5 text-blue-600" />;
      case "message-square":
        return <MessageSquare className="w-5 h-5 text-emerald-600" />;
      case "search":
        return <Search className="w-5 h-5 text-indigo-600" />;
      case "video":
        return <Video className="w-5 h-5 text-purple-600" />;
      case "pen-tool":
        return <PenTool className="w-5 h-5 text-teal-600" />;
      case "bar-chart-3":
        return <BarChart3 className="w-5 h-5 text-amber-600" />;
    }
  };

  const getIconBg = () => {
    switch (feature.iconName) {
      case "smartphone":
        return "bg-blue-50";
      case "message-square":
        return "bg-emerald-50";
      case "search":
        return "bg-indigo-50";
      case "video":
        return "bg-purple-50";
      case "pen-tool":
        return "bg-teal-50";
      case "bar-chart-3":
        return "bg-amber-50";
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-6 transition-all duration-200 hover:shadow-lg hover:border-slate-300 hover:-translate-y-1">
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${getIconBg()}`}
      >
        {getIcon()}
      </div>
      <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
        {feature.title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
