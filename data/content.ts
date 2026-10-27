import {
  NavItem,
  PillarItem,
  FeatureItem,
  StatItem,
  TestimonialItem,
  PricingTier,
  FaqItem,
} from "@/types";

export const NAVIGATION_LINKS: NavItem[] = [
  { label: "Beranda", href: "#hero" },
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Hasil & Studi Kasus", href: "#hasil" },
  { label: "Paket Harga", href: "#paket" },
  { label: "FAQ", href: "#faq" },
];

export const ANNOUNCEMENT_TEXT =
  "Sisa 3 Slot Audit CRO & Konsultasi Gratis Pekan Ini — Khusus Pemilik Bisnis & UMKM";

export const WHATSAPP_CONTACT = {
  number: "+62 812-3456-7890",
  link: "https://www.google.com/search?gs_ssp=eJzj4tLP1TcoSzLJKctRYDRgdGDwYipPBAA6cAUg&q=wa&rlz=1C1YTUH_idID974ID974&oq=w&gs_lcrp=EgZjaHJvbWUqEwgEEC4YgwEYxwEYsQMY0QMYgAQyBggAEEUYPDIICAEQRRgnGDsyBggCEEUYOTIGCAMQRRg7MhMIBBAuGIMBGMcBGLEDGNEDGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMzE3OWowajeoAgiwAgHxBfiSVlHBwabp8QX4klZRwcGm6Q&sourceid=chrome&source=chrome.ob&ie=UTF-8",
};

export const HERO_TRUST_BADGES = [
  {
    icon: "clock",
    title: "Respon WA < 15 Menit",
    subtitle: "Layanan aktif setiap hari",
  },
  {
    icon: "shield",
    title: "Garansi Transparan",
    subtitle: "Kontrak fleksibel tanpa denda",
  },
  {
    icon: "users",
    title: "450+ UMKM Terbantu",
    subtitle: "Di 28 Kota se-Indonesia",
  },
];

export const PILLARS_DATA: PillarItem[] = [
  {
    id: "cro-website",
    tag: "Target Bounce Rate < 28%",
    title: "Website Kilat Siap Konversi (CRO-Ready)",
    description:
      "Desain super cepat dengan loading kilat di bawah 1.8 detik. Terintegrasi tombol Checkout WhatsApp langsung tanpa formulir berbelit-belit.",
    iconName: "layout",
    bullets: [
      "Mobile-First UX untuk Pembeli Indonesia",
      "Checkout Langsung ke Chat WhatsApp CS",
      "Performa Skor Kecepatan Google 95+",
    ],
  },
  {
    id: "local-seo",
    tag: "Trafik Gratis Selamanya",
    highlightBadge: "Paling Dicari Konsumen",
    title: "Dominasi Google Lokal (SEO Bergaransi)",
    description:
      "Optimasi Google Business Profile dan kata kunci berdaya beli tinggi di kota Anda. Bikin calon pembeli lokal menemukan bisnis Anda pertama kali.",
    iconName: "map-pin",
    bullets: [
      "Garansi Ranking Halaman 1 Google Search",
      "Titik Google Maps Terverifikasi & Ramah Pembeli",
      "Sistem Ulasan Positif Bintang 5 Berkelanjutan",
    ],
  },
  {
    id: "social-media",
    tag: "Target Engagement > 4.5%",
    title: "Konten Medsos yang Menghasilkan Omset",
    description:
      "Produksi video Reels & Carousel edukasi persuasif berbasis psikologi pembeli. Mengubah audiens yang sekadar scroll jadi pembeli loyal.",
    iconName: "video",
    bullets: [
      "15-30 Detik Hook Video Reels & TikTok",
      "Copywriting Penjualan Teruji & Menusuk Kebutuhan",
      "Distribusi Konten Terjadwal & Konsisten",
    ],
  },
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "f-1",
    title: "Mobile-First Landing Page",
    description:
      "Dirancang khusus untuk 87% pembeli online Indonesia yang menggunakan smartphone. Tampilan rapi, navigasi instan tanpa lemot.",
    iconName: "smartphone",
  },
  {
    id: "f-2",
    title: "WhatsApp Direct Checkout",
    description:
      "Pesan produk langsung masuk format WhatsApp CS lengkap dengan nama barang, jumlah, dan alamat pengiriman tanpa form rumit.",
    iconName: "message-square",
  },
  {
    id: "f-3",
    title: "On-Page & Local Maps SEO",
    description:
      "Penataan kata kunci ramah Googlebot, integrasi schema produk, serta optimasi titik Google Maps agar selalu muncul di pencarian teratas.",
    iconName: "search",
  },
  {
    id: "f-4",
    title: "20+ Video & Desain Bulanan",
    description:
      "Produksi rutin video Reels/TikTok dengan tren audio terkini plus feed infografis profesional yang memperkuat kredibilitas brand.",
    iconName: "video",
  },
  {
    id: "f-5",
    title: "Copywriting Penjualan Teruji",
    description:
      "Setiap kalimat ditulis berdasarkan psikologi konsumen Indonesia. Mengubah orang yang sekadar melihat menjadi pembeli yang siap transfer.",
    iconName: "pen-tool",
  },
  {
    id: "f-6",
    title: "Laporan Transparan & Review Rutin",
    description:
      "Dashboard analitik bulanan mudah dipahami tanpa bahasa teknis njelimet, didampingi sesi konsultasi strategi via Google Meet.",
    iconName: "bar-chart-3",
  },
];

export const STATS_DATA: StatItem[] = [
  {
    value: "450+",
    label: "UMKM Didigitalkan",
    detail:
      "Portofolio lintas industri UMKM yang beralih dari sepi pembeli menjadi kewalahan melayani orderan.",
  },
  {
    value: "94%",
    label: "Kenaikan Omset Rata-rata",
    detail: "Kenaikan terukur dalam periode 90 hari pendampingan intensif.",
  },
  {
    value: "Rp 12.8M+",
    label: "Nilai Transaksi Tercipta",
    detail:
      "Total transaksi langsung mitra melalui WhatsApp & checkout website.",
  },
  {
    value: "4.9★",
    label: "Rating Kepuasan",
    detail: "Dari 320+ Ulasan Google Review pemilik bisnis terverifikasi.",
    hasStar: true,
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Hendra Gunawan",
    role: "Owner",
    company: "Dapur Rasa Catering",
    city: "Bandung",
    quote:
      "Dulu pesanan cuma dari tetangga dan mulut ke mulut. Setelah dibuatkan landing page kilat dan SEO Google lokal sama TumbuhDigital, pesanan corporate lunch box melonjak drastis hingga 350 porsi tiap hari!",
    resultBadge: "Hasil: Omset Naik 280% dlm 2 Bulan",
    initials: "HG",
    rating: 5,
  },
  {
    id: "t-2",
    name: "Nurul Aisyah",
    role: "Founder",
    company: "Medina Syari",
    city: "Surabaya",
    quote:
      "Paket Scale-Up Pro sangat hemat dibanding rekrut desainer dan videografer sendiri. Konten Reels-nya selalu FYP dan checkout WhatsApp langsung teratur tanpa ada chat customer yang tercecer.",
    resultBadge: "Hasil: 12.000 Followers Baru & ROI 4.2x",
    initials: "NA",
    rating: 5,
  },
  {
    id: "t-3",
    name: "Bambang Tarigan",
    role: "Direktur",
    company: "Sentra Auto Service",
    city: "Medan",
    quote:
      "Dulu bengkel kami sepi di hari kerja. Begitu TumbuhDigital garap Google Bisnis dan Website Booking, sekarang slot servis AC mobil selalu penuh dari reservasi online Google Maps!",
    resultBadge: "Hasil: 45+ Mobil Baru Masuk/Minggu",
    initials: "BT",
    rating: 5,
  },
];

export const PRICING_DATA: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Growth",
    badge: "UMKM Rintisan",
    description:
      "Cocok untuk usaha rintisan, kuliner lokal, atau jasa perorangan yang ingin go-digital cepat.",
    price: "1.499.000",
    period: "/ bulan",
    features: [
      { text: "Landing Page Kilat (1 Halaman Fokus Konversi)", included: true },
      { text: "Koneksi WhatsApp Checkout Otomatis", included: true },
      { text: "Free Domain .com & Cloud Hosting Cepat", included: true },
      { text: "Optimasi Dasar Google Profil Bisnis", included: true },
      { text: "Manajemen Konten Video Medsos", included: false },
    ],
    ctaText: "Pilih Paket Starter",
    ctaVariant: "outline",
  },
  {
    id: "scale-up",
    name: "Scale-Up Pro",
    badge: "Rekomendasi Terbaik",
    isPopular: true,
    recommendationTag: "PALING POPULER",
    description:
      "Solusi all-in-one lengkap: Website CRO, SEO Google ranking, dan konten sosial media aktif.",
    price: "2.899.000",
    period: "/ bulan",
    features: [
      { text: "Website Komplit Hingga 5 Halaman Responsif", included: true },
      {
        text: "Katalog Produk Interaktif + Direct WA Checkout",
        included: true,
      },
      { text: "SEO Google Lokal Ranking 3 Besar (Garansi)", included: true },
      {
        text: "12 Konten Video Reels/TikTok + 8 Desain Feed/Bln",
        included: true,
      },
      { text: "Laporan Performa Mingguan & Dedicated CS", included: true },
    ],
    ctaText: "Pilih Paket Scale-Up Pro",
    ctaVariant: "primary",
  },
  {
    id: "enterprise",
    name: "Enterprise Dominasi",
    badge: "Bisnis Menengah & Cabang",
    description:
      "Dirancang untuk skala korporasi lokal, pabrik/distributor, atau brand multi-cabang.",
    price: "4.999.000",
    period: "/ bulan",
    features: [
      {
        text: "Portal Web Kustom (Unlimited Page + CMS Mandiri)",
        included: true,
      },
      {
        text: "Dominasi SEO Nasional & Riset Backlink Berkualitas",
        included: true,
      },
      {
        text: "24 Konten Video + Copywriting & Meta Ads Setup",
        included: true,
      },
      { text: "Integrasi Payment Gateway Otomatis (QRIS/VA)", included: true },
      { text: "Senior Growth Strategist Pendamping Khusus", included: true },
    ],
    ctaText: "Pilih Paket Enterprise",
    ctaVariant: "outline",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question:
      "Berapa lama proses pembuatan website hingga siap menerima pesanan?",
    answer:
      "Untuk landing page kilat (Starter Growth), pengerjaan memakan waktu 3-5 hari kerja. Untuk website multi-halaman (Scale-Up Pro), rata-rata 7-10 hari kerja setelah materi foto dan data produk kami terima lengkap.",
  },
  {
    id: "faq-2",
    question: "Bagaimana cara kerja garansi ranking Google Search & Maps?",
    answer:
      "Kami menerapkan optimasi SEO berbasis data lokal. Kami menggaransi kata kunci target masuk halaman 1 Google dalam tempo 60-90 hari. Jika dalam periode tersebut belum tercapai, kami berikan perpanjangan optimasi gratis hingga target terpenuhi.",
  },
  {
    id: "faq-3",
    question:
      "Apakah saya harus menyiapkan video dan foto sendiri untuk medsos?",
    answer:
      "Jika Anda memiliki materi produk, Anda cukup mengirimkannya via Google Drive atau WA. Tim kami yang akan mengedit, memberi hook copywriting, audio trending, dan narasi persuasif. Untuk area yang terjangkau tim kami di Bandung/Jakarta, tersedia opsi sesi dokumentasi produk.",
  },
  {
    id: "faq-4",
    question: "Apakah ada ikatan kontrak yang memberatkan jika ingin berhenti?",
    answer:
      "Tidak ada kontrak mengikat yang kaku. Layanan kami berbasis langganan bulanan tanpa penalti. Anda memiliki kebebasan penuh untuk melanjutkan, upgrade paket, atau berhenti kapan saja sesuai ritme bisnis Anda.",
  },
  {
    id: "faq-5",
    question: "Bagaimana jika saya gaptek dan tidak paham teknis website?",
    answer:
      "Tenang, Anda tidak perlu paham coding atau server sama sekali! Seluruh teknis hosting, domain, keamanan SSL, hingga maintenance kami yang urus 100%. Anda cukup fokus merespons chat WhatsApp pembeli yang masuk.",
  },
];

export const INDUSTRY_CATEGORIES = [
  "Kuliner / F&B",
  "Fashion & Modest Wear",
  "Jasa & Servis Profesional",
  "Kecantikan, Kosmetik & Skincare",
  "Retail & Toko Online",
  "Otomotif & Bengkel",
  "Properti & Konstruksi",
  "Lainnya",
];

export const SERVICE_OPTIONS = [
  "Website Kilat",
  "Scale-Up Pro",
  "SEO Dominasi",
  "Kelola Medsos",
];
