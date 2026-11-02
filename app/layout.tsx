import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tumbuhdigital.id";

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "TumbuhDigital Indonesia - Solusi Terpadu Pertumbuhan Bisnis & Ekosistem Digital UMKM",
    template: "%s | TumbuhDigital Indonesia",
  },
  description:
    "Solusi all-in-one website kilat siap jualan (CRO-ready), optimasi SEO Google halaman #1 bergaransi, dan manajemen media sosial tertarget untuk melipatgandakan omset bisnis UMKM Indonesia.",
  keywords: [
    "TumbuhDigital",
    "TumbuhDigital Indonesia",
    "Digital Marketing UMKM",
    "Jasa Pembuatan Website Kilat",
    "Jasa SEO Google Maps",
    "Jasa SEO Murah Bergaransi",
    "Social Media Management UMKM",
    "Audit CRO Gratis",
    "Agensi Digital Marketing Indonesia",
    "Jasa Pembuatan Landing Page",
    "Konsultan Pemasaran Online",
    "Optimasi Google Bisnisku",
    "Jasa Konten Video Reels TikTok",
  ],
  authors: [{ name: "TumbuhDigital Indonesia", url: siteUrl }],
  creator: "TumbuhDigital Indonesia",
  publisher: "PT Tumbuh Digital Solusindo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "TumbuhDigital Indonesia - Solusi Terpadu Pertumbuhan Bisnis & Ekosistem Digital UMKM",
    description:
      "Tingkatkan omset bisnis UMKM hingga 3x lipat dengan website kilat CRO, SEO Google ranking 1 bergaransi, dan social media marketing tertarget.",
    url: siteUrl,
    siteName: "TumbuhDigital Indonesia",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TumbuhDigital Indonesia - Solusi Digital Marketing UMKM",
    description:
      "Website kilat siap jualan, ranking 1 Google bergaransi, dan video reels viral untuk mendongkrak penjualan bisnis Anda.",
    creator: "@tumbuhdigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Digital Marketing & Business Services",
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
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
