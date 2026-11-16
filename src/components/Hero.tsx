"use client";

import React from "react";
import { useJastip } from "@/context/JastipContext";

export default function Hero() {
  const { setIsRequestModalOpen } = useJastip();

  const scrollToCatalog = () => {
    const el = document.getElementById("catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      data-pencil-name="Hero"
      className="box-border w-full h-fit shrink-0 flex flex-col lg:flex-row gap-12 lg:gap-[56px] px-4 sm:px-8 lg:px-[64px] pt-12 sm:pt-16 lg:pt-[104px] pb-12 sm:pb-16 lg:pb-[96px] justify-between items-center"
    >
      {/* Copy */}
      <div
        data-pencil-name="Hero Copy"
        className="box-border w-full lg:w-[660px] shrink-0 h-fit flex flex-col gap-0 justify-start items-start"
      >
        {/* Eyebrow */}
        <div
          data-pencil-name="Hero Eyebrow"
          className="box-border w-fit h-fit shrink-0 flex flex-row gap-[9px] justify-start items-center mb-3 sm:mb-4"
        >
          <div
            data-pencil-name="Live Dot"
            className="box-border w-[6px] shrink-0 h-[6px] bg-[#F2381A] rounded-full animate-pulse"
          />
          <div
            data-pencil-name="Eyebrow Text"
            className="text-[10.5px] box-border text-[#5F564F] font-sans font-semibold tracking-[1.6px] text-left uppercase"
          >
            PRE-ORDERS OPEN · SEOUL RUN CLOSES FRIDAY
          </div>
        </div>

        {/* Headlines */}
        <h1 className="w-full tracking-[-2px] sm:tracking-[-2.8px] leading-[1.05]">
          <span
            data-pencil-name="Headline Line 1"
            className="block text-[44px] sm:text-[64px] lg:text-[80px] text-[#131110] font-semibold"
          >
            Shop the World,
          </span>
          <span
            data-pencil-name="Headline Line 2"
            className="block text-[44px] sm:text-[64px] lg:text-[80px] text-[#131110] font-semibold"
          >
            Delivered to You.
          </span>
        </h1>

        {/* Subhead */}
        <div
          data-pencil-name="Subhead Wrap"
          className="box-border w-fit h-fit shrink-0 flex flex-col gap-0 pt-4 sm:pt-[24px] justify-start items-start"
        >
          <p
            data-pencil-name="Hero Subhead"
            className="text-[15px] sm:text-[16.5px] leading-[24px] sm:leading-[26px] box-border max-w-[480px] text-[#5F564F] font-sans font-normal text-left"
          >
            Tell us what you want from anywhere on earth. We buy it in store, inspect it, and
            bring it home with a verified traveler — no freight forwarders, no guesswork.
          </p>
        </div>

        {/* Hero Actions */}
        <div
          data-pencil-name="Hero Actions"
          className="box-border w-full sm:w-fit h-fit shrink-0 flex flex-col sm:flex-row gap-[12px] pt-6 sm:pt-[34px] justify-start items-stretch sm:items-center"
        >
          <button
            type="button"
            onClick={() => setIsRequestModalOpen(true)}
            data-pencil-name="Primary CTA"
            className="group box-border w-auto sm:w-fit shrink-0 h-[56px] flex flex-row gap-[10px] px-[26px] justify-center sm:justify-start items-center bg-[#131110] hover:bg-[#2C2622] text-[#F4ECE5] rounded-[3px] transition-all cursor-pointer shadow-sm hover:shadow"
          >
            <span
              data-pencil-name="Primary Label"
              className="text-[14px] font-sans font-medium whitespace-nowrap"
            >
              Start a request
            </span>
            <svg
              data-pencil-name="Primary Arrow"
              viewBox="0 0 15 15"
              className="w-[15px] h-[15px] transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <path d="M2.5 7.5h10m-4-4 4 4-4 4" />
            </svg>
          </button>

          <button
            type="button"
            onClick={scrollToCatalog}
            data-pencil-name="Secondary CTA"
            className="box-border w-auto sm:w-fit shrink-0 h-[56px] flex flex-row gap-0 px-[24px] justify-center sm:justify-start items-center border border-[#131110] hover:bg-[#131110]/5 text-[#131110] rounded-[3px] transition-all cursor-pointer"
          >
            <span
              data-pencil-name="Secondary Label"
              className="text-[14px] font-sans font-medium whitespace-nowrap"
            >
              Browse the catalog
            </span>
          </button>
        </div>

        {/* CTA Note */}
        <div
          data-pencil-name="CTA Note Wrap"
          className="box-border w-fit h-fit shrink-0 flex flex-col gap-0 pt-4 sm:pt-[18px] justify-start items-start"
        >
          <div
            data-pencil-name="CTA Note"
            className="text-[9.5px] leading-[13px] text-[#5F564F] font-sans font-semibold tracking-[1.4px] text-left uppercase"
          >
            NO ACCOUNT NEEDED · A HUMAN REPLIES WITHIN 2 HOURS
          </div>
        </div>
      </div>

      {/* Hero Visual Collage */}
      <div
        data-pencil-name="Hero Visual"
        className="box-border w-full lg:w-[534px] shrink-0 h-fit flex flex-col gap-[14px] justify-start items-start"
      >
        <div
          data-pencil-name="Collage"
          className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-end"
        >
          {/* Tall Image */}
          <div
            data-pencil-name="Hero Image Tall"
            className="box-border w-[58%] sm:w-[306px] shrink-0 h-[360px] sm:h-[452px] rounded-[2px] overflow-hidden bg-center bg-no-repeat bg-cover shadow-sm transition-transform hover:scale-[1.01]"
            style={{ backgroundImage: "url('/images/hero_tall.jpg')" }}
          />

          {/* Short Image */}
          <div
            data-pencil-name="Hero Image Short"
            className="box-border flex-1 h-[240px] sm:h-[306px] rounded-[2px] overflow-hidden bg-center bg-no-repeat bg-cover shadow-sm transition-transform hover:scale-[1.01]"
            style={{ backgroundImage: "url('/images/hero_short.jpg')" }}
          />
        </div>

        {/* Captions */}
        <div
          data-pencil-name="Caption Row"
          className="box-border w-full h-fit shrink-0 flex flex-col sm:flex-row gap-1 sm:gap-0 justify-between items-start sm:items-center text-[9.5px] text-[#5F564F] font-sans font-semibold tracking-[1.4px] uppercase"
        >
          <div data-pencil-name="Caption Left">MYEONGDONG, SEOUL — 04:12 PM</div>
          <div data-pencil-name="Caption Right">SHOPPED BY 12 TRAVELERS THIS WEEK</div>
        </div>
      </div>
    </section>
  );
}
