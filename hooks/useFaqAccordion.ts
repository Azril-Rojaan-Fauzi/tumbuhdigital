"use client";

import { useState } from "react";

export function useFaqAccordion(defaultOpenId: string | null = "faq-1") {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const isOpen = (id: string) => openId === id;

  return {
    openId,
    toggleItem,
    isOpen,
  };
}
