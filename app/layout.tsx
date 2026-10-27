import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TumbuhDigital Indonesia - Solusi Terpadu Pertumbuhan Bisnis & Ekosistem Digital UMKM",
  description:
    "Solusi all-in-one website kilat siap jualan, optimasi SEO Google halaman #1, dan manajemen media sosial tertarget tanpa beban gaji tim internal belasan juta tiap bulan.",
  keywords: [
    "TumbuhDigital",
    "Digital Marketing UMKM",
    "Jasa Pembuatan Website Kilat",
    "Jasa SEO Google Maps",
    "Social Media Management UMKM",
    "Audit CRO Gratis",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
