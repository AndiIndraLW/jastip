"use client";

import React from "react";
import { useJastip } from "@/context/JastipContext";

export default function HowItWorksSection() {
  const { setIsFeeCalcOpen } = useJastip();

  const steps = [
    {
      num: "01",
      title: "Paste the link",
      body: "Send us a product URL, a photo, or just the name of the store. We confirm the item, size and landed price in under two hours.",
      foot: "TAKES 40 SECONDS",
    },
    {
      num: "02",
      title: "We buy & secure it",
      body: "Your traveler buys it in store, checks it against your request, and sends you photos before it leaves the country.",
      foot: "PAY ONLY WHEN CONFIRMED",
    },
    {
      num: "03",
      title: "Delivered to your door",
      body: "We hand-carry it home, consolidate multi-store orders into one box, and ship it anywhere in Indonesia.",
      foot: "2–14 DAYS, TRACKED",
    },
  ];

  return (
    <section
      id="how-it-works"
      data-pencil-name="How It Works Section"
      className="box-border w-full h-fit shrink-0 flex flex-col gap-0 px-4 sm:px-8 lg:px-[64px] pt-16 sm:pt-20 lg:pt-[104px] pb-16 sm:pb-20 lg:pb-[104px] justify-start items-start bg-[#EDE4DD] border-b border-[#D3C7BA]"
    >
      {/* Header */}
      <div
        data-pencil-name="How Header"
        className="box-border w-full flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-start md:items-end pb-12 sm:pb-[56px]"
      >
        <div
          data-pencil-name="How Title Block"
          className="box-border w-full md:w-[600px] flex flex-col justify-start items-start"
        >
          {/* Section Index */}
          <div
            data-pencil-name="Section Label Row"
            className="flex flex-row gap-[12px] items-center mb-3 sm:mb-4"
          >
            <span
              data-pencil-name="Section Index"
              className="text-[10.5px] text-[#5F564F] font-semibold tracking-[1.6px]"
            >
              03
            </span>
            <div
              data-pencil-name="Label Rule"
              className="w-[24px] h-[1px] bg-[#D3C7BA]"
            />
            <span
              data-pencil-name="Section Label"
              className="text-[10.5px] text-[#5F564F] font-semibold tracking-[1.6px]"
            >
              HOW IT WORKS
            </span>
          </div>

          {/* Title */}
          <h2
            data-pencil-name="How Title"
            className="text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.08] text-[#131110] font-semibold tracking-[-1.6px]"
          >
            <span data-pencil-name="Title Line 1" className="block">
              Three steps. One traveler.
            </span>
            <span data-pencil-name="Title Line 2" className="block">
              Zero guesswork.
            </span>
          </h2>
        </div>

        {/* Note */}
        <p
          data-pencil-name="How Note"
          className="text-[13.5px] sm:text-[14px] leading-[22px] max-w-[380px] text-[#5F564F]"
        >
          Every request is handled by a real person in the city you&apos;re shopping from.
        </p>
      </div>

      {/* Steps Grid */}
      <div
        data-pencil-name="Steps"
        className="box-border w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-12 sm:pb-[64px]"
      >
        {steps.map((s) => (
          <div
            key={s.num}
            data-pencil-name={`Step / ${s.title}`}
            className="box-border p-6 sm:p-8 bg-[#F7F2EC] border border-[#D3C7BA] rounded-[2px] flex flex-col justify-between min-h-[290px] shadow-sm"
          >
            <div>
              <div
                data-pencil-name="Step Top"
                className="flex justify-between items-center pb-6"
              >
                <span
                  data-pencil-name="Step Number"
                  className="text-[32px] font-semibold text-[#131110] tracking-[-1px]"
                >
                  {s.num}
                </span>
                <div className="w-[34px] h-[34px] rounded-full border border-[#D3C7BA] flex items-center justify-center text-[#5F564F]">
                  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8.5l3.5 3.5 6.5-7" />
                  </svg>
                </div>
              </div>

              <h3
                data-pencil-name="Step Title"
                className="text-[19px] sm:text-[20px] font-semibold text-[#131110] pb-2"
              >
                {s.title}
              </h3>

              <p
                data-pencil-name="Step Body"
                className="text-[13.5px] leading-[22px] text-[#5F564F]"
              >
                {s.body}
              </p>
            </div>

            <div
              data-pencil-name="Step Foot"
              className="pt-6 border-t border-[#D3C7BA]/50 text-[10px] font-semibold tracking-[1.4px] text-[#5F564F] uppercase"
            >
              {s.foot}
            </div>
          </div>
        ))}
      </div>

      {/* How Footer Banner */}
      <div
        data-pencil-name="How Footer"
        className="box-border w-full p-6 sm:p-8 bg-[#F7F2EC] border border-[#D3C7BA] rounded-[2px] flex flex-col sm:flex-row gap-4 justify-between items-center"
      >
        <div
          data-pencil-name="How Footer Note"
          className="text-[11.5px] font-semibold tracking-[1.3px] text-[#131110] text-center sm:text-left uppercase"
        >
          EVERY FEE — ITEM, SERVICE, SHIPPING, DUTIES — SHOWN BEFORE YOU PAY
        </div>

        <button
          type="button"
          onClick={() => setIsFeeCalcOpen(true)}
          data-pencil-name="Calculator Label"
          className="h-[44px] px-6 bg-[#131110] hover:bg-[#2C2622] text-[#F4ECE5] text-[12px] font-semibold tracking-[1.2px] rounded-[2px] transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2 uppercase"
        >
          <span>OPEN FEE CALCULATOR</span>
          <svg viewBox="0 0 12 12" className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2.5 6h7m-3-3 3 3-3 3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
