"use client";

import React from "react";
import { useJastip } from "@/context/JastipContext";

export default function Footer() {
  const { setIsFeeCalcOpen, setIsRequestModalOpen } = useJastip();

  return (
    <footer
      data-pencil-name="Footer"
      className="box-border w-full h-fit shrink-0 flex flex-col justify-start items-start bg-[#161413] text-[#EDE4DD] pt-12 sm:pt-16"
    >
      {/* Footer Fee Band */}
      <div
        data-pencil-name="Footer Fee Band"
        className="box-border w-full px-4 sm:px-8 lg:px-[64px] pb-12 sm:pb-[56px] border-b border-[#3A322C] flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center"
      >
        <div data-pencil-name="Fee Copy" className="flex flex-col gap-1">
          <span
            data-pencil-name="Fee Label"
            className="text-[10px] font-semibold tracking-[1.6px] text-[#A79A8F] uppercase"
          >
            TRANSPARENT FEES
          </span>
          <h4
            data-pencil-name="Fee Title"
            className="text-[20px] sm:text-[24px] font-semibold text-[#EDE4DD]"
          >
            Know the landed cost before you commit.
          </h4>
        </div>

        <button
          type="button"
          onClick={() => setIsFeeCalcOpen(true)}
          data-pencil-name="Fee Calculator Button"
          className="h-[46px] px-6 bg-[#EDE4DD] hover:bg-white text-[#131110] text-[13px] font-medium rounded-[2px] transition-colors cursor-pointer flex items-center gap-2"
        >
          <span data-pencil-name="Fee Button Label">Open fee calculator</span>
          <svg viewBox="0 0 12 12" className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2.5 6h7m-3-3 3 3-3 3" />
          </svg>
        </button>
      </div>

      {/* Footer Columns */}
      <div
        data-pencil-name="Footer Columns"
        className="box-border w-full px-4 sm:px-8 lg:px-[64px] py-12 sm:py-16 grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 border-b border-[#3A322C]"
      >
        {/* Brand Column */}
        <div
          data-pencil-name="Brand Column"
          className="col-span-2 flex flex-col gap-6 pr-0 md:pr-8"
        >
          {/* Footer Brand */}
          <div className="flex items-center gap-3">
            <div className="w-[26px] h-[26px] rounded-full bg-[#EDE4DD] flex items-center justify-center text-[#131110] font-bold text-[13px]">
              J
            </div>
            <span className="text-[17px] font-bold tracking-[3.4px] text-[#EDE4DD]">
              JASTIP
            </span>
          </div>

          <p
            data-pencil-name="Footer Tagline"
            className="text-[13px] leading-[22px] text-[#A79A8F] max-w-[340px]"
          >
            Global personal shopping, done by travelers you can verify. Anything, from anywhere, carried home by hand.
          </p>

          {/* Support Wrap */}
          <div
            data-pencil-name="Support Wrap"
            className="flex items-center gap-2 text-[12px] text-[#EDE4DD] pt-2"
          >
            <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span>WhatsApp support · 08:00–22:00 WIB</span>
          </div>

          {/* Socials */}
          <div className="flex gap-4 pt-2 text-[#A79A8F]">
            <a href="#" className="hover:text-[#EDE4DD] transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#EDE4DD] transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Shop Column */}
        <div data-pencil-name="Column / Shop" className="flex flex-col gap-3">
          <span className="text-[10px] font-bold tracking-[1.6px] text-[#A79A8F] uppercase">
            SHOP
          </span>
          {["New arrivals", "Fashion", "Food & snacks", "Beauty", "Collectibles"].map((item) => (
            <button
              key={item}
              onClick={() => {
                const el = document.getElementById("catalog");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[12.5px] text-[#F4ECE5] hover:underline text-left"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Service Column */}
        <div data-pencil-name="Column / Service" className="flex flex-col gap-3">
          <span className="text-[10px] font-bold tracking-[1.6px] text-[#A79A8F] uppercase">
            SERVICE
          </span>
          {["How it works", "Fee calculator", "Shipping & consolidation", "Track an order", "Traveler program"].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === "Fee calculator") setIsFeeCalcOpen(true);
                else {
                  const el = document.getElementById("how-it-works");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-[12.5px] text-[#F4ECE5] hover:underline text-left"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Company Column */}
        <div data-pencil-name="Column / Company" className="flex flex-col gap-3">
          <span className="text-[10px] font-bold tracking-[1.6px] text-[#A79A8F] uppercase">
            COMPANY
          </span>
          {["About Jastip", "Journal", "Careers", "Press", "Trust & safety"].map((item) => (
            <button
              key={item}
              onClick={() => setIsRequestModalOpen(true)}
              className="text-[12.5px] text-[#F4ECE5] hover:underline text-left"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        data-pencil-name="Footer Bottom"
        className="box-border w-full px-4 sm:px-8 lg:px-[64px] py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] text-[#A79A8F]"
      >
        <span data-pencil-name="Copyright" className="font-semibold tracking-[1.3px]">
          © 2026 JASTIP · PT JASTIP GLOBAL INDONESIA
        </span>

        <div className="flex gap-5">
          {["Terms", "Privacy", "Cookies", "Sitemap"].map((link) => (
            <a key={link} href="#" className="hover:text-[#EDE4DD] transition-colors">
              {link}
            </a>
          ))}
        </div>

        <span data-pencil-name="Locale" className="font-semibold tracking-[1.3px] text-[#F4ECE5]">
          ENGLISH · IDR
        </span>
      </div>

      {/* Giant Wordmark */}
      <div
        data-pencil-name="Giant Wordmark Wrap"
        className="box-border w-full py-4 sm:py-8 flex justify-center items-center overflow-hidden select-none pointer-events-none"
      >
        <span
          data-pencil-name="Giant Wordmark"
          className="text-[80px] sm:text-[160px] md:text-[220px] lg:text-[248px] font-bold text-[#231E1B] tracking-[-4px] sm:tracking-[-8px] leading-none"
        >
          JASTIP
        </span>
      </div>
    </footer>
  );
}
