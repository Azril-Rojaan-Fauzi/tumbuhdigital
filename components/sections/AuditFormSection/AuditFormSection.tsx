import React from "react";
import { Shield, CheckCircle2, Headphones, MessageCircle } from "lucide-react";
import { WHATSAPP_CONTACT } from "@/data/content";
import { AuditForm } from "./AuditForm";

interface AuditFormSectionProps {
  initialSelectedPackage?: string;
}

export function AuditFormSection({
  initialSelectedPackage,
}: AuditFormSectionProps) {
  return (
    <section id="audit" className="py-20 bg-slate-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Panel: Deep Blue Accent (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-blue-100 text-xs font-bold backdrop-blur-xs mb-6">
                <Shield className="w-3.5 h-3.5" />
                <span>AMAN & TANPA KOMITMEN</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                Konsultasi Kebutuhan & Amankan Slot Audit CRO Gratis
              </h3>

              {/* Subtitle */}
              <p className="mt-4 text-xs sm:text-sm text-blue-100 leading-relaxed">
                Isi formulir ini. Tim spesialis kami akan menganalisis bisnis Anda
                dan mengirimkan roadmap peningkatan omset dalam 15 menit melalui
                WhatsApp.
              </p>

              {/* Value list */}
              <div className="mt-8 space-y-3.5">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-blue-50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Audit CRO Website & Social Media gratis senilai Rp750.000</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-blue-50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Rekomendasi kata kunci bernilai belanja tinggi di kota Anda</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-blue-50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Konsultasi privat via WhatsApp tanpa desakan penjualan</span>
                </div>
              </div>
            </div>

            {/* Urgent CS Card */}
            <div className="mt-10 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Headphones className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">
                    Butuh Bantuan Mendesak?
                  </p>
                  <p className="text-[11px] text-blue-200">
                    CS Standby: 08:30 - 18:00 WIB
                  </p>
                </div>
              </div>
              <a
                href={WHATSAPP_CONTACT.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                <span>Chat Langsung</span>
              </a>
            </div>
          </div>

          {/* Right Panel: Form Inputs (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 bg-white">
            <AuditForm initialSelectedPackage={initialSelectedPackage} />
          </div>
        </div>
      </div>
    </section>
  );
}
