"use client";

import React from "react";

export default function TrustBar() {
  const stats = [
    { value: "38", label: "NEGARA TUJUAN" },
    { value: "12,480", label: "BARANG TERKIRIM" },
    { value: "4.8/5", label: "RATING PEMBELI" },
    { value: "< 2 JAM", label: "RESPON CEPAT" },
  ];

  return (
    <div
      data-pencil-name="Trust Bar"
      className="box-border w-full h-fit shrink-0 py-[24px] px-4 sm:px-8 lg:px-[64px] border-y border-[#D3C7BA] bg-[#EDE4DD]"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 items-center justify-between">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex items-center justify-start md:justify-center ${
              idx !== stats.length - 1 ? "md:border-r md:border-[#D3C7BA]" : ""
            }`}
          >
            <div
              data-pencil-name={`Stat / ${stat.label}`}
              className="box-border w-fit flex flex-row gap-[10px] items-baseline"
            >
              <div
                data-pencil-name="Stat Value"
                className="text-[20px]/[normal] text-[#131110] font-['Inter_Tight',system-ui,sans-serif] font-semibold tracking-[-0.4px] whitespace-nowrap flex items-center gap-1.5"
              >
                {stat.label.includes("RATING") && (
                  <span className="text-[#fec201] text-[17px] leading-none" aria-hidden="true">★</span>
                )}
                <span>{stat.value}</span>
              </div>
              <div
                data-pencil-name="Stat Label"
                className="text-[9.5px]/[normal] text-[#5F564F] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.5px] uppercase whitespace-nowrap"
              >
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
