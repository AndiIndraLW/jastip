"use client";

import React from "react";
import { useJastip } from "@/context/JastipContext";

export default function Toast() {
  const { toastMessage } = useJastip();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-[#131110] text-[#EDE4DD] rounded-[4px] shadow-xl border border-[#3A322C] animate-in fade-in slide-in-from-bottom-3 duration-300">
      <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
      <span className="text-[13px] font-medium">{toastMessage}</span>
    </div>
  );
}
