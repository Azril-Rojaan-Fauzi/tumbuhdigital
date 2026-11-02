import React from "react";
import { FAQ_DATA, PRICING_DATA, WHATSAPP_CONTACT } from "@/data/content";

export function JsonLd() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://tumbuhdigital.id";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "TumbuhDigital Indonesia",
    legalName: "PT Tumbuh Digital Solusindo",
    url: baseUrl,
    logo: `${baseUrl}/opengraph-image`,
    description:
      "Partner strategis transformasi komersial digital UMKM dan korporasi Indonesia. Spesialis web konversi tinggi, optimasi SEO Google organik, dan akuisisi media sosial terukur.",
    email: "halo@tumbuhdigital.id",
    telephone: WHATSAPP_CONTACT.number,
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Bandung",
      addressRegion: "Jawa Barat",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: WHATSAPP_CONTACT.number,
      contactType: "customer service",
      availableLanguage: ["Indonesian", "English"],
      areaServed: "ID",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#service`,
    name: "TumbuhDigital Indonesia",
    image: `${baseUrl}/opengraph-image`,
    url: baseUrl,
    telephone: WHATSAPP_CONTACT.number,
    priceRange: "Rp 1.499.000 - Rp 4.999.000",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Bandung",
      addressRegion: "Jawa Barat",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.9175,
      longitude: 107.6191,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "320",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Paket Solusi Digital UMKM",
      itemListElement: PRICING_DATA.map((tier, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: tier.name,
          description: tier.description,
        },
        price: tier.price.replace(/\./g, ""),
        priceCurrency: "IDR",
        position: index + 1,
      })),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "TumbuhDigital Indonesia",
    description:
      "Solusi Terpadu Pertumbuhan Bisnis & Ekosistem Digital UMKM Indonesia",
    inLanguage: "id-ID",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

