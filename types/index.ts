export interface NavItem {
  label: string;
  href: string;
}

export interface MetricHighlight {
  label: string;
  value: string;
  sublabel: string;
}

export interface PillarItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  iconName: "layout" | "map-pin" | "video";
  highlightBadge?: string;
  bullets: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: "smartphone" | "message-square" | "search" | "video" | "pen-tool" | "bar-chart-3";
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
  hasStar?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  quote: string;
  resultBadge: string;
  initials: string;
  rating: number;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  badge: string;
  isPopular?: boolean;
  recommendationTag?: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  ctaText: string;
  ctaVariant: "outline" | "primary" | "secondary";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AuditFormData {
  fullName: string;
  businessName: string;
  whatsappNumber: string;
  industryCategory: string;
  selectedPackage: string;
  challengeNote: string;
  claimFreeAudit: boolean;
}

export interface FormSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  errorMessage?: string;
}
