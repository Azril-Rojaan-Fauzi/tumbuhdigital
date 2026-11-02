import { ImageResponse } from "next/og";

export const alt =
  "TumbuhDigital Indonesia - Solusi Terpadu Pertumbuhan Bisnis & Ekosistem Digital UMKM";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#090d16",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo brand */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "#10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
                marginRight: "14px",
              }}
            >
              TD
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: "28px", fontWeight: 900 }}>
                <span style={{ color: "#ffffff" }}>Tumbuh</span>
                <span style={{ color: "#3b82f6" }}>Digital</span>
              </div>
              <span
                style={{
                  color: "#10b981",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "3px",
                }}
              >
                INDONESIA
              </span>
            </div>
          </div>

          {/* Rating Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: "999px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#6ee7b7",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            <span>Rating 4.9 (320+ Ulasan Mitra UMKM)</span>
          </div>
        </div>

        {/* Center Main Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "1050px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "50px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              marginBottom: "16px",
            }}
          >
            Tingkatkan Omset UMKM Hingga 3x Lipat Lewat Ekosistem Digital Terpadu
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              color: "#cbd5e1",
              lineHeight: 1.4,
            }}
          >
            Website Kilat CRO | SEO Google Halaman 1 | Manajemen Medsos Viral
          </div>
        </div>

        {/* Bottom Feature Pillars */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#e2e8f0",
              fontSize: "17px",
              fontWeight: 600,
            }}
          >
            <span style={{ color: "#38bdf8", marginRight: "8px" }}>[CRO]</span>
            Website Kilat Konversi
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#e2e8f0",
              fontSize: "17px",
              fontWeight: 600,
            }}
          >
            <span style={{ color: "#34d399", marginRight: "8px" }}>[SEO]</span>
            Garansi Halaman 1 Google
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#e2e8f0",
              fontSize: "17px",
              fontWeight: 600,
            }}
          >
            <span style={{ color: "#c084fc", marginRight: "8px" }}>[REELS]</span>
            Konten Medsos Penjualan
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#fbbf24",
              fontSize: "17px",
              fontWeight: 700,
            }}
          >
            450+ UMKM Terbantu
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
