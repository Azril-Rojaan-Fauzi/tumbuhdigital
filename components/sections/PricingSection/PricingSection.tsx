"use client";

import React from "react";
import { PRICING_DATA } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "./PricingCard";

interface PricingSectionProps {
  onSelectTier?: (tierName: string) => void;
}

export function PricingSection({ onSelectTier }: PricingSectionProps) {
  return (
    <section id="paket" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="INVESTASI TERJANGKAU & TRANSPARAN"
          title="Pilih Paket Pertumbuhan Bisnis Anda"
          description="Tanpa biaya tersembunyi. Klik tombol paket untuk langsung mengisi formulir pemesanan dengan penawaran audit cuma-cuma."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {PRICING_DATA.map((tier) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              onSelect={onSelectTier}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
