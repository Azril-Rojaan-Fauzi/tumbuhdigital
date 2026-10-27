import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "./FaqAccordion";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PERTANYAAN SEPUTAR LAYANAN"
          title="Frequently Asked Questions"
          description="Jawaban lugas untuk hal-hal yang sering ditanyakan oleh rekan-rekan pemilik usaha."
        />

        <FaqAccordion />
      </div>
    </section>
  );
}
