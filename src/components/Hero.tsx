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
      {/* Hero Copy */}
      <div
        data-pencil-name="Hero Copy"
        className="box-border w-full lg:w-[660px] shrink-0 h-fit flex flex-col gap-0 justify-start items-start"
      >
        {/* Hero Eyebrow */}
        <div
          data-pencil-name="Hero Eyebrow"
          className="box-border w-fit h-fit shrink-0 flex flex-row gap-[9px] justify-start items-center"
        >
        </div>

        {/* Headlines */}
        <div className="pt-2 sm:pt-3 w-full">
          <div
            data-pencil-name="Headline Line 1"
            className="text-[48px] sm:text-[68px] lg:text-[80px]/[83px] box-border w-full text-[#131110] font-['Inter_Tight',system-ui,sans-serif] font-semibold tracking-[-2.8px] text-left"
          >
            Belanja Dunia,
          </div>
          <div
            data-pencil-name="Headline Line 2"
            className="text-[48px] sm:text-[68px] lg:text-[80px]/[83px] box-border w-full text-[#131110] font-['Inter_Tight',system-ui,sans-serif] font-semibold tracking-[-2.8px] text-left"
          >
            Diantar ke Pintu Anda.
          </div>
        </div>

        {/* Subhead Wrap */}
        <div
          data-pencil-name="Subhead Wrap"
          className="box-border w-fit h-fit shrink-0 flex flex-col gap-0 p-[24px_0px_0px_0px] justify-start items-start"
        >
          <div
            data-pencil-name="Hero Subhead"
            className="text-[15px] sm:text-[16.5px]/[26px] box-border max-w-[460px] text-[#5F564F] font-[Inter,system-ui,sans-serif] font-normal text-left"
          >
            Beri tahu kami barang apa pun yang Anda inginkan dari belahan dunia mana pun. Kami beli langsung di gerai resmi, periksa kualitasnya, dan dibawa langsung oleh traveler terverifikasi — tanpa forwarder, tanpa ribet.
          </div>
        </div>

        {/* Hero Actions */}
        <div
          data-pencil-name="Hero Actions"
          className="box-border w-full sm:w-fit h-fit shrink-0 flex flex-col sm:flex-row gap-[12px] p-[34px_0px_0px_0px] justify-start items-stretch sm:items-center"
        >
          <button
            type="button"
            onClick={() => setIsRequestModalOpen(true)}
            data-pencil-name="Primary CTA"
            className="box-border w-auto sm:w-fit shrink-0 h-[56px] flex flex-row gap-[10px] px-[26px] justify-center sm:justify-start items-center bg-[#fec201] hover:bg-[#eab300] text-[#131110] rounded-[3px] transition-colors cursor-pointer group shadow-sm"
          >
            <span
              data-pencil-name="Primary Label"
              className="text-[14px]/[normal] box-border text-[#131110] font-[Inter,system-ui,sans-serif] font-bold text-left whitespace-nowrap"
            >
              Mulai titip barang
            </span>
            <svg
              data-pencil-name="Primary Arrow"
              viewBox="0 0 15 15"
              className="box-border w-[15px] shrink-0 h-[15px] group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="#131110"
              strokeWidth="2.2"
            >
              <path d="M2.5 7.5h10m-4-4 4 4-4 4" />
            </svg>
          </button>

          <button
            type="button"
            onClick={scrollToCatalog}
            data-pencil-name="Secondary CTA"
            className="box-border w-auto sm:w-fit shrink-0 h-[56px] flex flex-row gap-0 px-[24px] justify-center sm:justify-start items-center bg-[#fec201]/15 hover:bg-[#fec201] border border-[#fec201] text-[#131110] rounded-[3px] transition-colors cursor-pointer"
          >
            <span
              data-pencil-name="Secondary Label"
              className="text-[14px]/[normal] box-border text-[#131110] font-[Inter,system-ui,sans-serif] font-semibold text-left whitespace-nowrap"
            >
              Jelajahi katalog
            </span>
          </button>
        </div>

        {/* CTA Note Wrap */}
        <div
          data-pencil-name="CTA Note Wrap"
          className="box-border w-fit h-fit shrink-0 flex flex-col gap-0 p-[18px_0px_0px_0px] justify-start items-start"
        >
          <div
            data-pencil-name="CTA Note"
            className="text-[9.5px]/[13px] box-border text-[#5F564F] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.4px] text-left uppercase whitespace-nowrap"
          >
            TANPA PERLU AKUN · DIBALAS MANUSIA DALAM 2 JAM
          </div>
        </div>
      </div>

      {/* Hero Visual */}
      <div
        data-pencil-name="Hero Visual"
        className="box-border w-full lg:w-[534px] shrink-0 h-fit flex flex-col gap-[14px] justify-start items-start"
      >
        <div
          data-pencil-name="Collage"
          className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-end"
        >
          <div
            data-pencil-name="Hero Image Tall"
            className="box-border w-[58%] sm:w-[306px] shrink-0 h-[360px] sm:h-[452px] rounded-[2px] overflow-hidden bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/images/hero_tall.jpg')" }}
          />
          <div
            data-pencil-name="Hero Image Short"
            className="box-border flex-1 h-[240px] sm:h-[306px] rounded-[2px] overflow-hidden bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/images/hero_short.jpg')" }}
          />
        </div>

        {/* Caption Row */}
        <div
          data-pencil-name="Caption Row"
          className="box-border w-full h-fit shrink-0 flex flex-col sm:flex-row gap-1 sm:gap-0 justify-between items-start sm:items-center text-[9.5px]/[normal] text-[#5F564F] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.4px] uppercase"
        >
          <div data-pencil-name="Caption Left">MYEONGDONG, SEOUL — 16.12 KST</div>
          <div data-pencil-name="Caption Right">DIBELI OLEH 12 TRAVELER MINGGU INI</div>
        </div>
      </div>
    </section>
  );
}
