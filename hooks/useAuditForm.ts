"use client";

import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { AuditFormData, FormSubmissionState } from "@/types";

const INITIAL_FORM_DATA: AuditFormData = {
  fullName: "",
  businessName: "",
  whatsappNumber: "",
  industryCategory: "",
  selectedPackage: "Scale-Up Pro",
  challengeNote: "",
  claimFreeAudit: true,
};

export function useAuditForm() {
  const [formData, setFormData] = useState<AuditFormData>(INITIAL_FORM_DATA);
  const [formState, setFormState] = useState<FormSubmissionState>({
    isSubmitting: false,
    isSuccess: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePackageSelect = useCallback((pkg: string) => {
    setFormData((prev) => ({ ...prev, selectedPackage: pkg }));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        errorMessage: "Mohon isi Nama Lengkap Pemilik Bisnis",
      });
      return;
    }

    if (!formData.businessName.trim()) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        errorMessage: "Mohon isi Nama Usaha / Brand UMKM",
      });
      return;
    }

    if (!formData.whatsappNumber.trim()) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        errorMessage: "Mohon isi Nomor WhatsApp Aktif",
      });
      return;
    }

    setFormState({ isSubmitting: true, isSuccess: false });

    // Simulate quick server process and open direct WhatsApp
    try {
      const cleanPhone = formData.whatsappNumber.replace(/[^0-9]/g, "");
      const formattedPhone = cleanPhone.startsWith("0")
        ? cleanPhone.replace(/^0/, "62")
        : cleanPhone.startsWith("62")
        ? cleanPhone
        : `62${cleanPhone}`;

      const message = `Halo Tim TumbuhDigital, saya ingin konsultasi dan klaim audit CRO gratis:%0A%0A` +
        `👤 *Nama*: ${encodeURIComponent(formData.fullName)}%0A` +
        `🏢 *Brand UMKM*: ${encodeURIComponent(formData.businessName)}%0A` +
        `📱 *WhatsApp*: ${encodeURIComponent(formattedPhone)}%0A` +
        `🏷️ *Industri*: ${encodeURIComponent(formData.industryCategory || "Belum dipilih")}%0A` +
        `📦 *Paket Diminati*: ${encodeURIComponent(formData.selectedPackage)}%0A` +
        `🎯 *Target/Tantangan*: ${encodeURIComponent(formData.challengeNote || "-")}%0A` +
        `🎁 *Klaim Audit Gratis*: ${formData.claimFreeAudit ? "Ya (Rp750.000)" : "Tidak"}`;

      const waUrl = `https://wa.me/6281234567890?text=${message}`;

      setTimeout(() => {
        setFormState({ isSubmitting: false, isSuccess: true });
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }, 600);
    } catch {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        errorMessage: "Terjadi kesalahan saat memproses data. Silakan coba lagi.",
      });
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    setFormState({ isSubmitting: false, isSuccess: false });
  };

  return {
    formData,
    formState,
    handleChange,
    handlePackageSelect,
    handleSubmit,
    resetForm,
  };
}
