import React from "react";
import { Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_CONTACT } from "@/data/content";

export function CtaBannerSection() {
  const handleSelect = (e: React.MouseEvent) => {
    e.preventDefault();
    const auditSection = document.getElementById("audit");
    if (auditSection) {
      auditSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
          {/* Radial ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="max-w-2xl space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-xs font-bold border border-slate-700">
                <Clock className="w-3.5 h-3.5" />
                <span>SISA KUOTA TERBATAS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug">
                Jangan Biarkan Kompetitor Mengambil Pelanggan Potensial Anda di
                Google &amp; Media Sosial
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Amankan slot audit CRO dan pendampingan digital pekan ini
                sebelum kuota habis. Konsultasi langsung dengan konsultan senior
                kami.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <Button
                onClick={handleSelect}
                href="#audit"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-bold text-sm shadow-blue-500/25"
              >
                Daftar Konsultasi Sekarang
              </Button>

              <Button
                asLink
                href={WHATSAPP_CONTACT.link}
                variant="whatsapp"
                size="lg"
                leftIcon={<MessageCircle className="w-4 h-4 fill-white/20" />}
                className="font-bold text-sm shadow-emerald-500/25"
              >
                WhatsApp Cepat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
