"use client";

import React, { useState, useEffect } from "react";
import { useJastip } from "@/context/JastipContext";

export default function LiveDropSection() {
  const { setIsRequestModalOpen } = useJastip();

  // Dynamic countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 22,
    seconds: 9,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDigits = (n: number) => n.toString().padStart(2, "0");

  const trends = [
    {
      name: "Air Jordan 1 'Seoul'",
      meta: "1.2K WATCHING",
      image: "/images/trend_jordan.jpg",
    },
    {
      name: "Line Friends Mega Plush",
      meta: "840 WATCHING",
      image: "/images/trend_line_friends.jpg",
    },
    {
      name: "Gucci Horsebit Card Case",
      meta: "610 WATCHING",
      image: "/images/trend_gucci.jpg",
    },
  ];

  return (
    <section
      data-pencil-name="Live Drop Section"
      className="box-border w-full h-fit shrink-0 flex flex-col gap-0 px-4 sm:px-8 lg:px-[64px] pt-16 sm:pt-20 lg:pt-[104px] pb-16 sm:pb-20 lg:pb-[104px] justify-start items-start bg-[#161413] text-[#EDE4DD] border-b border-[#3A322C]"
    >
      {/* Drop Header */}
      <div
        data-pencil-name="Drop Header"
        className="box-border w-full flex flex-row justify-between items-center pb-8 sm:pb-[48px] border-b border-[#3A322C]"
      >
        <div
          data-pencil-name="Live Label"
          className="flex flex-row gap-[10px] items-center"
        >
          <div
            data-pencil-name="Live Pulse"
            className="w-[8px] h-[8px] rounded-full bg-[#F2381A] animate-ping"
          />
          <span
            data-pencil-name="Live Text"
            className="text-[11px] font-semibold tracking-[1.6px] text-[#EDE4DD] uppercase"
          >
            LIVE PRE-ORDER · SEOUL SNEAKER RUN 07
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsRequestModalOpen(true)}
          data-pencil-name="All Drops Link"
          className="flex flex-row gap-[8px] items-center text-[11px] font-semibold tracking-[1.4px] text-[#A79A8F] hover:text-[#EDE4DD] transition-colors uppercase cursor-pointer"
        >
          <span data-pencil-name="All Drops Label">SEE ALL 12 DROPS</span>
          <svg viewBox="0 0 12 12" className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2.5 6h7m-3-3 3 3-3 3" />
          </svg>
        </button>
      </div>

      {/* Drop Body */}
      <div
        data-pencil-name="Drop Body"
        className="box-border w-full flex flex-col lg:flex-row gap-12 lg:gap-[64px] justify-between items-start pt-10 sm:pt-[54px] pb-12 sm:pb-[64px]"
      >
        {/* Drop Copy */}
        <div
          data-pencil-name="Drop Copy"
          className="box-border flex-1 max-w-[620px] flex flex-col justify-start items-start"
        >
          <div
            data-pencil-name="Drop Eyebrow"
            className="text-[10px] text-[#A79A8F] font-semibold tracking-[1.6px] uppercase pb-3"
          >
            FLASH DROP · 02 — 09 FEB
          </div>

          <h2
            data-pencil-name="Drop Title"
            className="text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.08] text-[#EDE4DD] font-semibold tracking-[-1.8px] pb-4"
          >
            200 pairs from Seoul. Reserved before they land.
          </h2>

          <p
            data-pencil-name="Drop Sub"
            className="text-[14.5px] sm:text-[16px] leading-[25px] text-[#A79A8F] pb-8"
          >
            Our traveler flies out Friday. Claim a slot and we confirm size, colorway and landed price within two hours — before anything is bought.
          </p>

          {/* Timer Wrap */}
          <div
            data-pencil-name="Timer Wrap"
            className="box-border w-full flex flex-wrap gap-4 sm:gap-6 items-center pb-8"
          >
            <div
              data-pencil-name="Countdown"
              className="flex flex-row gap-2 sm:gap-3 items-center"
            >
              {[
                { val: formatDigits(timeLeft.days), lbl: "DAYS" },
                { val: formatDigits(timeLeft.hours), lbl: "HRS" },
                { val: formatDigits(timeLeft.minutes), lbl: "MIN" },
                { val: formatDigits(timeLeft.seconds), lbl: "SEC" },
              ].map((t) => (
                <div
                  key={t.lbl}
                  className="flex flex-col items-center justify-center w-[58px] sm:w-[68px] h-[64px] sm:h-[72px] bg-[#221D1A] border border-[#3A322C] rounded-[2px]"
                >
                  <span className="text-[22px] sm:text-[26px] font-semibold text-[#EDE4DD] tracking-[-0.5px]">
                    {t.val}
                  </span>
                  <span className="text-[8.5px] font-semibold tracking-[1.2px] text-[#A79A8F]">
                    {t.lbl}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col text-[10px] tracking-[1.4px] text-[#A79A8F] uppercase font-semibold pl-2">
              <span>PRE-ORDER CLOSES</span>
              <span className="text-[#EDE4DD]">FRI 23:59 KST</span>
            </div>
          </div>

          {/* Slots progress */}
          <div className="w-full max-w-[420px] pb-8">
            <div className="flex justify-between text-[10.5px] font-semibold tracking-[1.2px] text-[#A79A8F] pb-2 uppercase">
              <span>142 OF 200 SLOTS CLAIMED</span>
              <span className="text-[#EDE4DD]">71%</span>
            </div>
            <div className="w-full h-[3px] bg-[#2A2420] rounded-full overflow-hidden">
              <div className="w-[71%] h-full bg-[#F2381A]" />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setIsRequestModalOpen(true)}
              className="h-[52px] px-8 bg-[#EDE4DD] hover:bg-white text-[#131110] text-[13.5px] font-medium rounded-[2px] transition-colors cursor-pointer flex justify-center items-center gap-2"
            >
              <span>Reserve a slot</span>
              <svg viewBox="0 0 12 12" className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2.5 6h7m-3-3 3 3-3 3" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("how-it-works");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="h-[52px] px-6 border border-[#3A322C] hover:border-[#EDE4DD] text-[#EDE4DD] text-[13.5px] font-medium rounded-[2px] transition-colors cursor-pointer flex justify-center items-center"
            >
              How pre-orders work
            </button>
          </div>
        </div>

        {/* Traveler Route Card */}
        <div
          data-pencil-name="Route Card"
          className="box-border w-full lg:w-[420px] p-[32px] bg-[#201B18] border border-[#3A322C] rounded-[2px] flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center pb-6 border-b border-[#3A322C]">
              <span className="text-[10px] font-semibold tracking-[1.4px] text-[#A79A8F] uppercase">
                NEXT TRAVELER ROUTE
              </span>
              <span className="px-2 py-[2px] bg-[#163622] text-[#4ADE80] text-[9.5px] font-semibold tracking-[1px] rounded-[2px]">
                VERIFIED
              </span>
            </div>

            {/* Traveler Profile */}
            <div className="flex items-center gap-3 pt-6 pb-6">
              <div className="w-[44px] h-[44px] rounded-full bg-[#332A24] border border-[#483B32] flex items-center justify-center font-bold text-[14px] text-[#EDE4DD]">
                RA
              </div>
              <div>
                <div className="text-[15px] font-semibold text-[#EDE4DD]">
                  Rania Adhitama
                </div>
                <div className="text-[11px] text-[#A79A8F]">
                  48 trips · 4.9 rating · Jakarta
                </div>
              </div>
            </div>

            {/* Flight Route */}
            <div className="p-4 bg-[#161413] border border-[#3A322C] rounded-[2px] my-2">
              <div className="flex justify-between items-center">
                <span className="text-[18px] font-semibold text-[#EDE4DD]">Seoul</span>
                <div className="flex items-center gap-2 text-[#A79A8F]">
                  <span className="h-[1px] w-12 bg-[#3A322C]" />
                  <svg viewBox="0 0 16 16" className="w-4 h-4 text-[#EDE4DD]" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 8h12m-4-4 4 4-4 4" />
                  </svg>
                  <span className="h-[1px] w-12 bg-[#3A322C]" />
                </div>
                <span className="text-[18px] font-semibold text-[#EDE4DD]">Jakarta</span>
              </div>
              <div className="flex justify-between items-center pt-3 text-[10px] font-medium tracking-[1.1px] text-[#A79A8F] uppercase">
                <span>DEPARTS 14 FEB</span>
                <span>RETURNS 19 FEB</span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flex justify-between items-center pb-4 text-[11px] font-medium">
              <span className="text-[#A79A8F]">Capacity</span>
              <span className="text-[#F2381A] font-semibold">6 SLOTS LEFT</span>
            </div>
            <button
              type="button"
              onClick={() => setIsRequestModalOpen(true)}
              className="w-full h-[46px] bg-[#EDE4DD] hover:bg-white text-[#131110] text-[13px] font-medium rounded-[2px] transition-colors cursor-pointer"
            >
              Join this pre-order
            </button>
            <div className="text-[9.5px] text-center text-[#A79A8F] tracking-[1.2px] pt-3 uppercase">
              FEE CALCULATED AT CHECKOUT · NO DEPOSIT TODAY
            </div>
          </div>
        </div>
      </div>

      {/* Trending Strip */}
      <div
        data-pencil-name="Trending Strip"
        className="box-border w-full pt-8 border-t border-[#3A322C] grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {trends.map((t) => (
          <div
            key={t.name}
            data-pencil-name={`Trend / ${t.name}`}
            className="flex flex-row items-center gap-3 p-3 bg-[#201B18] border border-[#3A322C] rounded-[2px] hover:border-[#5F564F] transition-colors cursor-pointer"
            onClick={() => setIsRequestModalOpen(true)}
          >
            <div
              className="w-[48px] h-[48px] rounded-[2px] bg-center bg-cover shrink-0"
              style={{ backgroundImage: `url('${t.image}')` }}
            />
            <div className="flex flex-col">
              <span className="text-[13px] font-semibold text-[#EDE4DD] line-clamp-1">
                {t.name}
              </span>
              <span className="text-[9.5px] font-semibold tracking-[1.2px] text-[#F2381A] uppercase">
                {t.meta}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
