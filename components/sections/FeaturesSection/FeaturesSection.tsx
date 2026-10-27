import React from "react";
import { FEATURES_DATA } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FITUR & INFRASTRUKTUR LENGKAP"
          title="Apa Saja yang Anda Dapatkan di TumbuhDigital?"
          description="Solusi tanpa pusing teknis. Kami handle dari A sampai Z sehingga Anda bisa fokus melayani pembeli."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES_DATA.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
