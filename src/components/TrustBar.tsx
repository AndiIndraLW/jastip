"use client";

import React from "react";

export default function TrustBar() {
  const stats = [
    { value: "38", label: "COUNTRIES SOURCED" },
    { value: "12,480", label: "ITEMS DELIVERED" },
    { value: "4.8/5", label: "BUYER RATING" },
    { value: "< 2 HRS", label: "HUMAN RESPONSE" },
  ];

  return (
    <div
      data-pencil-name="Trust Bar"
      className="box-border w-full h-fit shrink-0 py-6 px-4 sm:px-8 lg:px-[64px] border-y border-[#D3C7BA] bg-[#EDE4DD]"
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
              <span
                data-pencil-name="Stat Value"
                className="text-[20px] text-[#131110] font-semibold tracking-[-0.4px] whitespace-nowrap"
              >
                {stat.value}
              </span>
              <span
                data-pencil-name="Stat Label"
                className="text-[9.5px] text-[#5F564F] font-semibold tracking-[1.5px] whitespace-nowrap"
              >
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
