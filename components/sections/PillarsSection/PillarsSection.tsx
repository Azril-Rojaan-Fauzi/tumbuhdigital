import React from "react";
import { PILLARS_DATA } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PillarCard } from "./PillarCard";

export function PillarsSection() {
  return (
    <section id="keunggulan" className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="MENGAPA MEMILIH TUMBUHDIGITAL"
          title="3 Pilar Mesin Penjualan Digital Tanpa Trial-and-Error"
          description="Setiap rupiah investasi Anda dirancang untuk kembali dalam wujud pesanan riil, pelanggan loyal, dan aset digital permanen."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS_DATA.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
