"use client";

import React, { useState } from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { PillarsSection } from "@/components/sections/PillarsSection/PillarsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection/FeaturesSection";
import { StatsSection } from "@/components/sections/StatsSection/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection/PricingSection";
import { AuditFormSection } from "@/components/sections/AuditFormSection/AuditFormSection";
import { FaqSection } from "@/components/sections/FaqSection/FaqSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection/CtaBannerSection";

export function LandingPage() {
  const [selectedPackage, setSelectedPackage] = useState<string>("Scale-Up Pro");

  const handleSelectTier = (tierName: string) => {
    setSelectedPackage(tierName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-500 selection:text-white">
      {/* 1. Promotional Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 3. Hero Section with Live Metric Console */}
        <HeroSection />

        {/* 4. 3 Pillars Section */}
        <PillarsSection />

        {/* 5. Features Infrastructure Grid */}
        <FeaturesSection />

        {/* 6. Social Proof Stats Row */}
        <StatsSection />

        {/* 7. Success Stories & Testimonials */}
        <TestimonialsSection />

        {/* 8. Pricing Packages */}
        <PricingSection onSelectTier={handleSelectTier} />

        {/* 9. CRO Audit Consultation Form */}
        <AuditFormSection initialSelectedPackage={selectedPackage} />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. Final Urgency CTA Banner */}
        <CtaBannerSection />
      </main>

      {/* 12. Footer with Company, Offices & Legal Details */}
      <Footer />
    </div>
  );
}
