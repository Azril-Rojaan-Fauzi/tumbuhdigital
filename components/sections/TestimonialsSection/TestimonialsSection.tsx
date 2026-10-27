import React from "react";
import { TESTIMONIALS_DATA } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  return (
    <section id="hasil" className="py-20 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="VALIDASI PASAR & BUKTI NYATA"
          title="Kisah Sukses Mitra UMKM Indonesia"
          description="Fakta riil bagaimana ekosistem digital TumbuhDigital melipatgandakan profit pemilik bisnis lokal."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
