"use client";

import React, { useEffect } from "react";
import { useAuditForm } from "@/hooks/useAuditForm";
import { INDUSTRY_CATEGORIES, SERVICE_OPTIONS } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface AuditFormProps {
  initialSelectedPackage?: string;
}

export function AuditForm({ initialSelectedPackage }: AuditFormProps) {
  const {
    formData,
    formState,
    handleChange,
    handlePackageSelect,
    handleSubmit,
  } = useAuditForm();

  useEffect(() => {
    if (initialSelectedPackage) {
      handlePackageSelect(initialSelectedPackage);
    }
  }, [initialSelectedPackage, handlePackageSelect]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Error Banner */}
      {formState.errorMessage && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{formState.errorMessage}</span>
        </div>
      )}

      {/* Row 1: Full Name & Business Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-bold text-slate-800 mb-1"
          >
            Nama Lengkap Pemilik Bisnis <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Contoh: Budi Santoso"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="businessName"
            className="block text-xs font-bold text-slate-800 mb-1"
          >
            Nama Usaha / Brand UMKM <span className="text-red-500">*</span>
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Contoh: Kopi Nusantara Mandiri"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Row 2: WhatsApp Number & Industry Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="whatsappNumber"
            className="block text-xs font-bold text-slate-800 mb-1"
          >
            Nomor WhatsApp Aktif <span className="text-red-500">*</span>
          </label>
          <div className="flex rounded-xl border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            <span className="px-3 py-2.5 bg-slate-100 text-slate-600 text-xs font-bold border-r border-slate-200 flex items-center">
              +62
            </span>
            <input
              id="whatsappNumber"
              name="whatsappNumber"
              type="tel"
              required
              value={formData.whatsappNumber}
              onChange={handleChange}
              placeholder="812-3456-7890"
              className="w-full px-3 py-2.5 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="industryCategory"
            className="block text-xs font-bold text-slate-800 mb-1"
          >
            Kategori Industri Usaha <span className="text-red-500">*</span>
          </label>
          <select
            id="industryCategory"
            name="industryCategory"
            required
            value={formData.industryCategory}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          >
            <option value="" disabled>
              Pilih Kategori Bisnis...
            </option>
            {INDUSTRY_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3: Service / Package Selectable Pills */}
      <div>
        <label className="block text-xs font-bold text-slate-800 mb-2">
          Layanan / Paket yang Diminati:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {SERVICE_OPTIONS.map((pkg) => {
            const isSelected = formData.selectedPackage === pkg;
            return (
              <button
                type="button"
                key={pkg}
                onClick={() => handlePackageSelect(pkg)}
                className={`py-2 px-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-slate-100/80 text-slate-700 border-slate-200/80 hover:bg-slate-200/70"
                }`}
              >
                {pkg}
              </button>
            );
          })}
        </div>
      </div>

      {/* Row 4: Challenge / Target Goal (Optional) */}
      <div>
        <label
          htmlFor="challengeNote"
          className="block text-xs font-bold text-slate-800 mb-1"
        >
          Tantangan Terbesar / Target Omset Saat Ini (Opsional)
        </label>
        <textarea
          id="challengeNote"
          name="challengeNote"
          rows={3}
          value={formData.challengeNote}
          onChange={handleChange}
          placeholder="Ceritakan target Anda (misal: ingin tembus omset 50jt/bulan atau butuh website katalog yang praktis...)"
          className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
        />
      </div>

      {/* Row 5: Claim Free CRO Audit Checkbox Alert */}
      <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-start gap-2.5">
        <input
          id="claimFreeAudit"
          name="claimFreeAudit"
          type="checkbox"
          checked={formData.claimFreeAudit}
          onChange={handleChange}
          className="w-4 h-4 mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
        />
        <label
          htmlFor="claimFreeAudit"
          className="text-xs text-emerald-900 leading-snug cursor-pointer select-none"
        >
          <span className="font-bold">
            Klaim Audit Website & Akun Bisnis Gratis (Senilai Rp750.000)
          </span>
          <br />
          <span className="text-emerald-700 font-normal">
            Tim analis kami akan memberikan checklist evaluasi konversi tanpa
            pungutan biaya.
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="whatsapp"
          size="lg"
          fullWidth
          disabled={formState.isSubmitting}
          leftIcon={<Send className="w-4 h-4" />}
          className="font-bold text-sm sm:text-base py-3.5 shadow-emerald-600/25"
        >
          {formState.isSubmitting ? (
            "Memproses & Menghubungkan ke WhatsApp..."
          ) : formState.isSuccess ? (
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-5 h-5" /> Terkirim! Membuka WhatsApp...
            </span>
          ) : (
            "Kirim & Dapatkan Rencana Pertumbuhan Bisnis Sekarang"
          )}
        </Button>
      </div>
    </form>
  );
}
