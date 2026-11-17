"use client";

import React, { useState, useEffect } from "react";
import { useJastip } from "@/context/JastipContext";

export default function LiveDropSection() {
  const { setIsRequestModalOpen } = useJastip();

  const [timeLeft, setTimeLeft] = useState({
    days: "02",
    hours: "14",
    minutes: "22",
    seconds: "09",
  });

  useEffect(() => {
    let sec = 9;
    let min = 22;
    let hr = 14;
    let dy = 2;

    const timer = setInterval(() => {
      sec -= 1;
      if (sec < 0) {
        sec = 59;
        min -= 1;
        if (min < 0) {
          min = 59;
          hr -= 1;
          if (hr < 0) {
            hr = 23;
            dy -= 1;
          }
        }
      }
      setTimeLeft({
        days: String(dy).padStart(2, "0"),
        hours: String(hr).padStart(2, "0"),
        minutes: String(min).padStart(2, "0"),
        seconds: String(sec).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const trends = [
    {
      name: "Air Jordan 1 'Seoul'",
      meta: "1.2K MEMANTAU",
      image: "/images/trend_jordan.jpg",
    },
    {
      name: "Line Friends Mega Plush",
      meta: "840 MEMANTAU",
      image: "/images/trend_line_friends.jpg",
    },
    {
      name: "Gucci Horsebit Card Case",
      meta: "610 MEMANTAU",
      image: "/images/trend_gucci.jpg",
    },
  ];

  return (
    <section
      data-pencil-name="Live Drop Section"
      className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[88px_64px_96px_64px] justify-start items-start bg-[#161413] [border-width:0px_0px_1px_0px] [border-style:solid] [border-color:#3A322C]"
    >
      {/* Drop Header */}
      <div
        data-pencil-name="Drop Header"
        className="box-border w-full h-fit shrink-0 flex flex-row gap-0 p-[0px_0px_32px_0px] justify-between items-center [border-width:0px_0px_1px_0px] [border-style:solid] [border-color:#3A322C]"
      >
        <div
          data-pencil-name="Live Label"
          className="box-border w-fit shrink-0 h-fit flex flex-row gap-[10px] justify-start items-center"
        >
        </div>

        <button
          type="button"
          onClick={() => setIsRequestModalOpen(true)}
          data-pencil-name="All Drops Link"
          className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] px-3.5 py-1.5 justify-start items-center cursor-pointer bg-[#fec201] hover:bg-[#eab300] text-[#131110] rounded-[2px] transition-colors shadow-xs"
        >
          <div
            data-pencil-name="All Drops Label"
            className="text-[10px]/[normal] box-border text-[#131110] font-[Inter,system-ui,sans-serif] font-bold tracking-[1.4px] text-left uppercase whitespace-nowrap"
          >
            LIHAT SEMUA 12 TRIP
          </div>
          <svg
            data-pencil-name="All Drops Arrow"
            viewBox="0 0 12 12"
            className="box-border w-[12px] shrink-0 h-[12px] text-[#131110]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2.5 6h7m-3-3 3 3-3 3" />
          </svg>
        </button>
      </div>

      {/* Drop Body */}
      <div
        data-pencil-name="Drop Body"
        className="box-border w-full h-fit shrink-0 flex flex-col lg:flex-row gap-12 lg:gap-0 p-[48px_0px_0px_0px] justify-between items-start"
      >
        {/* Drop Copy */}
        <div
          data-pencil-name="Drop Copy"
          className="box-border w-full lg:w-[680px] shrink-0 h-fit flex flex-col gap-0 justify-start items-start"
        >
          <div
            data-pencil-name="Drop Eyebrow"
            className="text-[9.5px]/[normal] box-border text-[#A79A8F] font-[Inter,system-ui,sans-serif] font-bold tracking-[1.6px] text-left uppercase whitespace-nowrap"
          >
            FLASH DROP · 02 — 09 FEB
          </div>

          <div
            data-pencil-name="Drop Title Wrap"
            className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[14px_0px_0px_0px] justify-start items-start"
          >
            <div
              data-pencil-name="Drop Title"
              className="text-[36px] sm:text-[46px] lg:text-[54px]/[58px] box-border w-full text-[#F4ECE5] font-['Inter_Tight',system-ui,sans-serif] font-semibold tracking-[-1.8px] text-left"
            >
              200 pasang dari Seoul. Dipesan sebelum mendarat.
            </div>
          </div>

          <div
            data-pencil-name="Drop Sub Wrap"
            className="box-border w-fit h-fit shrink-0 flex flex-col gap-0 p-[20px_0px_0px_0px] justify-start items-start"
          >
            <div
              data-pencil-name="Drop Sub"
              className="text-[14.5px] sm:text-[15.5px]/[25px] box-border max-w-[540px] text-[#A79A8F] font-[Inter,system-ui,sans-serif] font-normal text-left"
            >
              Traveler kami terbang hari Jumat. Amankan slot Anda dan kami konfirmasi ukuran, warna, serta harga bersih dalam waktu 2 jam — sebelum barang dibeli.
            </div>
          </div>

          {/* Timer Wrap */}
          <div
            data-pencil-name="Timer Wrap"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] p-[36px_0px_0px_0px] justify-start items-center"
          >
            <div
              data-pencil-name="Countdown"
              className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-start"
            >
              {[
                { val: timeLeft.days, lbl: "HARI" },
                { val: timeLeft.hours, lbl: "JAM" },
                { val: timeLeft.minutes, lbl: "MENIT" },
                { val: timeLeft.seconds, lbl: "DETIK" },
              ].map((t) => (
                <div
                  key={t.lbl}
                  data-pencil-name={`Time / ${t.lbl}`}
                  className="box-border w-[62px] sm:w-[68px] shrink-0 h-[64px] flex flex-col gap-0 justify-center items-center bg-[#221D1A] [border:1px_solid_#3A322C] rounded-[2px]"
                >
                  <div
                    data-pencil-name="Time Value"
                    className="text-[24px] sm:text-[26px]/[normal] box-border text-[#F4ECE5] font-['Inter_Tight',system-ui,sans-serif] font-semibold tracking-[-0.6px] text-center"
                  >
                    {t.val}
                  </div>
                  <div
                    data-pencil-name="Time Label"
                    className="text-[8px]/[normal] box-border text-[#A79A8F] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.2px] text-center uppercase"
                  >
                    {t.lbl}
                  </div>
                </div>
              ))}
            </div>

            <div
              data-pencil-name="Timer Spacer"
              className="box-border w-[1px] shrink-0 h-[36px] bg-[#3A322C] ml-2"
            />

            <div
              data-pencil-name="Timer Note"
              className="box-border w-fit shrink-0 h-fit flex flex-col gap-[3px] justify-start items-start"
            >
              <div
                data-pencil-name="Timer Note Top"
                className="text-[8.5px]/[normal] box-border text-[#A79A8F] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.3px] text-left uppercase whitespace-nowrap"
              >
                PRE-ORDER DITUTUP
              </div>
              <div
                data-pencil-name="Timer Note Bottom"
                className="text-[12px]/[normal] box-border text-[#F4ECE5] font-[Inter,system-ui,sans-serif] font-semibold tracking-[0.6px] text-left uppercase whitespace-nowrap"
              >
                JUM 23.59 KST
              </div>
            </div>
          </div>

          {/* Slots Progress */}
          <div
            data-pencil-name="Slots"
            className="box-border w-full max-w-[420px] h-fit shrink-0 flex flex-col gap-[8px] p-[28px_0px_0px_0px] justify-start items-start"
          >
            <div
              data-pencil-name="Slots Row"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
            >
              <div
                data-pencil-name="Slots Label"
                className="text-[9.5px]/[normal] box-border text-[#A79A8F] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.4px] text-left uppercase whitespace-nowrap"
              >
                142 DARI 200 SLOT TERISI
              </div>
              <div
                data-pencil-name="Slots Pct"
                className="text-[9.5px]/[normal] box-border text-[#F4ECE5] font-[Inter,system-ui,sans-serif] font-bold text-right whitespace-nowrap"
              >
                71%
              </div>
            </div>

            <div
              data-pencil-name="Progress Track"
              className="box-border w-full h-[3px] shrink-0 flex flex-row gap-0 justify-start items-center bg-[#2A2420] rounded-[2px] overflow-hidden"
            >
              <div
                data-pencil-name="Progress Fill"
                className="box-border w-[71%] shrink-0 h-[3px] bg-[#fec201]"
              />
            </div>
          </div>

          {/* Drop Actions */}
          <div
            data-pencil-name="Drop Actions"
            className="box-border w-full sm:w-fit h-fit shrink-0 flex flex-col sm:flex-row gap-[12px] p-[32px_0px_0px_0px] justify-start items-stretch sm:items-center"
          >
            <button
              type="button"
              onClick={() => setIsRequestModalOpen(true)}
              data-pencil-name="Reserve CTA"
              className="box-border w-auto sm:w-fit shrink-0 h-[52px] flex flex-row gap-[10px] p-[0px_24px] justify-center sm:justify-start items-center bg-[#fec201] hover:bg-[#eab300] text-[#131110] rounded-[2px] transition-colors cursor-pointer shadow-sm"
            >
              <span
                data-pencil-name="Reserve Label"
                className="text-[13.5px]/[normal] box-border text-[#131110] font-[Inter,system-ui,sans-serif] font-bold text-left whitespace-nowrap"
              >
                Amankan slot
              </span>
              <svg
                data-pencil-name="Reserve Arrow"
                viewBox="0 0 14 14"
                className="box-border w-[14px] shrink-0 h-[14px]"
                fill="none"
                stroke="#131110"
                strokeWidth="2"
              >
                <path d="M2.5 7h9m-4-4 4 4-4 4" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("how-it-works");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              data-pencil-name="Drop Details CTA"
              className="box-border w-auto sm:w-fit shrink-0 h-[52px] flex flex-row gap-0 p-[0px_22px] justify-center sm:justify-start items-center bg-[#fec201]/15 hover:bg-[#fec201] border border-[#fec201] rounded-[2px] transition-colors cursor-pointer text-[#EDE4DD] hover:text-[#131110]"
            >
              <span
                data-pencil-name="Drop Details Label"
                className="text-[13.5px]/[normal] box-border font-[Inter,system-ui,sans-serif] font-semibold text-left whitespace-nowrap"
              >
                Cara kerja pre-order
              </span>
            </button>
          </div>
        </div>

        {/* Traveler Route Card */}
        <div
          data-pencil-name="Traveler Route Card"
          className="box-border w-full lg:w-[404px] shrink-0 h-fit flex flex-col gap-0 p-[26px] justify-start items-start bg-[#1C1916] [border:1px_solid_#3A322C] rounded-[2px]"
        >
          <div
            data-pencil-name="Route Head"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
          >
            <div
              data-pencil-name="Route Label"
              className="text-[9px]/[normal] box-border text-[#A79A8F] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.5px] text-left uppercase whitespace-nowrap"
            >
              RUTE TRAVELER BERIKUTNYA
            </div>
            <div
              data-pencil-name="Verified Chip"
              className="box-border w-fit shrink-0 h-fit flex flex-row gap-[5px] p-[4px_8px] justify-start items-center border border-[#fec201]/40 bg-[#fec201]/10 rounded-[2px]"
            >
              <svg viewBox="0 0 10 10" className="w-[10px] h-[10px] text-[#fec201]" fill="currentColor">
                <path d="M5 0l1.3 1.3 1.8-.2.7 1.7 1.8.6-.2 1.8 1.3 1.3-1.3 1.3.2 1.8-1.8.6-.7 1.7-1.8-.2L5 10l-1.3-1.3-1.8.2-.7-1.7-1.8-.6.2-1.8L0 5.5l1.3-1.3-.2-1.8 1.8-.6.7-1.7 1.8.2L5 0zm1.7 3.5L4.4 6 3.3 4.9l-.7.7 1.8 1.8 3-3.2-.7-.7z" />
              </svg>
              <div
                data-pencil-name="Verified Label"
                className="text-[8px]/[normal] box-border text-[#F4ECE5] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.2px] uppercase whitespace-nowrap"
              >
                TERVERIFIKASI
              </div>
            </div>
          </div>

          {/* Traveler Row */}
          <div
            data-pencil-name="Traveler Row"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] p-[20px_0px_0px_0px] justify-start items-center"
          >
            <div
              data-pencil-name="Traveler Avatar"
              className="box-border w-[46px] shrink-0 h-[46px] flex flex-row gap-0 justify-center items-center bg-[#2A2622] rounded-[23px]"
            >
              <span
                data-pencil-name="Avatar Initials"
                className="text-[14px]/[normal] box-border text-[#EDE4DD] font-['Inter_Tight',system-ui,sans-serif] font-bold"
              >
                RA
              </span>
            </div>
            <div
              data-pencil-name="Traveler Text"
              className="box-border w-fit shrink-0 h-fit flex flex-col gap-[3px] justify-start items-start"
            >
              <div
                data-pencil-name="Traveler Name"
                className="text-[15px]/[normal] box-border text-[#F4ECE5] font-['Inter_Tight',system-ui,sans-serif] font-semibold text-left whitespace-nowrap"
              >
                Rania Adhitama
              </div>
              <div
                data-pencil-name="Traveler Meta"
                className="text-[10px]/[normal] box-border text-[#A79A8F] font-[Inter,system-ui,sans-serif] font-normal text-left whitespace-nowrap flex items-center gap-1"
              >
                <span>48 perjalanan</span>
                <span>·</span>
                <span className="text-[#fec201] text-[12px] leading-none">★</span>
                <span>4.9</span>
                <span>·</span>
                <span>Jakarta</span>
              </div>
            </div>
          </div>

          {/* Route Line */}
          <div
            data-pencil-name="Route Line"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-0 p-[22px_0px_0px_0px] justify-between items-center"
          >
            <div
              data-pencil-name="Route From"
              className="text-[17px]/[normal] box-border text-[#F4ECE5] font-['Inter_Tight',system-ui,sans-serif] font-semibold text-left whitespace-nowrap"
            >
              Seoul
            </div>

            <div
              data-pencil-name="Route Glyph"
              className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center"
            >
              <div
                data-pencil-name="Route Dash A"
                className="box-border w-[26px] shrink-0 h-[1px] bg-[#3A322C]"
              />
              <svg
                data-pencil-name="Plane"
                viewBox="0 0 16 16"
                className="box-border w-[14px] shrink-0 h-[14px] text-[#fec201]"
                fill="currentColor"
              >
                <path d="M12 2l-6 6-4-1-1 1 3 2 2 3 1-1-1-4 6-6z" />
              </svg>
              <div
                data-pencil-name="Route Dash B"
                className="box-border w-[26px] shrink-0 h-[1px] bg-[#3A322C]"
              />
            </div>

            <div
              data-pencil-name="Route To"
              className="text-[17px]/[normal] box-border text-[#F4ECE5] font-['Inter_Tight',system-ui,sans-serif] font-semibold text-left whitespace-nowrap"
            >
              Jakarta
            </div>
          </div>

          {/* Route Meta */}
          <div
            data-pencil-name="Route Meta"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-0 p-[12px_0px_0px_0px] justify-between items-start"
          >
            <div
              data-pencil-name="Route Dates"
              className="text-[9px]/[normal] box-border text-[#A79A8F] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.3px] text-left uppercase whitespace-nowrap"
            >
              BERANGKAT 14 FEB · KEMBALI 19 FEB
            </div>
            <div
              data-pencil-name="Route Seats"
              className="text-[9px]/[normal] box-border text-[#fec201] font-[Inter,system-ui,sans-serif] font-bold tracking-[1.3px] text-left uppercase whitespace-nowrap"
            >
              SISA 6 SLOT
            </div>
          </div>

          {/* Join Wrap */}
          <div
            data-pencil-name="Join Wrap"
            className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[22px_0px_0px_0px] justify-start items-start"
          >
            <button
              type="button"
              onClick={() => setIsRequestModalOpen(true)}
              data-pencil-name="Join CTA"
              className="box-border w-full h-[48px] shrink-0 flex flex-row gap-0 p-[0px_18px] justify-between items-center bg-[#fec201] hover:bg-[#eab300] rounded-[2px] transition-colors cursor-pointer shadow-sm"
            >
              <span
                data-pencil-name="Join Label"
                className="text-[13px]/[normal] box-border text-[#131110] font-[Inter,system-ui,sans-serif] font-bold text-left whitespace-nowrap"
              >
                Ikut pre-order ini
              </span>
              <svg
                data-pencil-name="Join Arrow"
                viewBox="0 0 14 14"
                className="box-border w-[14px] shrink-0 h-[14px]"
                fill="none"
                stroke="#131110"
                strokeWidth="2"
              >
                <path d="M3.5 10.5l7-7m-6 0h6v6" />
              </svg>
            </button>
          </div>

          <div
            data-pencil-name="Route Footnote"
            className="text-[8.5px]/[normal] box-border text-[#6F665E] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.2px] text-left uppercase whitespace-nowrap pt-[12px]"
          >
            BIAYA DIHITUNG SAAT CHECKOUT · TANPA DP HARI INI
          </div>
        </div>
      </div>

      {/* Trending Strip */}
      <div
        data-pencil-name="Trending Strip"
        className="box-border w-full h-fit shrink-0 grid grid-cols-1 md:grid-cols-3 gap-[16px] p-[56px_0px_0px_0px]"
      >
        {trends.map((t) => (
          <div
            key={t.name}
            data-pencil-name={`Trend / ${t.name}`}
            onClick={() => setIsRequestModalOpen(true)}
            className="box-border [flex:1_1_0] h-[72px] flex flex-row gap-[14px] p-[14px_16px] justify-start items-center bg-[#1C1916] [border:1px_solid_#3A322C] rounded-[2px] cursor-pointer hover:border-[#EDE4DD] transition-colors"
          >
            <div
              data-pencil-name="Trend Thumb"
              className="box-border w-[44px] shrink-0 h-[44px] rounded-[2px] overflow-hidden bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${t.image}')` }}
            />
            <div
              data-pencil-name="Trend Text"
              className="box-border flex-1 h-fit flex flex-col gap-[3px] justify-start items-start"
            >
              <div
                data-pencil-name="Trend Name"
                className="text-[13px]/[normal] box-border text-[#F4ECE5] font-['Inter_Tight',system-ui,sans-serif] font-medium text-left truncate w-full"
              >
                {t.name}
              </div>
              <div
                data-pencil-name="Trend Meta"
                className="text-[9px]/[normal] box-border text-[#A79A8F] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.2px] text-left uppercase whitespace-nowrap"
              >
                {t.meta}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
