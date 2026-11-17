"use client";

import React, { useState } from "react";
import { useJastip } from "@/context/JastipContext";

export default function Navbar() {
  const {
    currency,
    toggleCurrency,
    cart,
    setIsCartOpen,
    setIsRequestModalOpen,
    setRequestUrl,
  } = useJastip();
  const [searchInput, setSearchInput] = useState("");

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handlePasteSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchInput.trim()) {
      setRequestUrl(searchInput.trim());
    }
    setIsRequestModalOpen(true);
  };

  const handlePasteClip = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        const text = await navigator.clipboard.readText();
        if (text) {
          setSearchInput(text);
          setRequestUrl(text);
          setIsRequestModalOpen(true);
          return;
        }
      }
    } catch {
      // Fallback
    }
    setIsRequestModalOpen(true);
  };

  return (
    <header
      data-pencil-name="Navbar"
      className="box-border w-full h-[78px] shrink-0 flex flex-row gap-4 px-4 sm:px-8 lg:px-[64px] justify-between items-center border-b border-[#D3C7BA] bg-[#EDE4DD]"
    >
      {/* Brand */}
      <div
        data-pencil-name="Brand"
        className="box-border w-auto lg:w-[400px] shrink-0 h-fit flex flex-row gap-[11px] justify-start items-center cursor-pointer select-none"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div
          data-pencil-name="Logo Mark"
          className="box-border w-[26px] shrink-0 h-[26px] flex flex-row justify-center items-center bg-[#fec201] rounded-[13px] shadow-[0_1px_4px_rgba(254,194,1,0.35)]"
        >
          <span
            data-pencil-name="Mark Letter"
            className="text-[13px] text-[#131110] font-['Inter_Tight',system-ui,sans-serif] font-black"
          >
            J
          </span>
        </div>
        <div
          data-pencil-name="Wordmark"
          className="text-[17px] text-[#131110] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[3.4px]"
        >
          JASTIP
        </div>
      </div>

      {/* Search Input Bar */}
      <form
        onSubmit={handlePasteSubmit}
        data-pencil-name="Search"
        className="hidden md:flex box-border flex-1 max-w-[480px] h-[44px] flex-row gap-[10px] pl-[18px] pr-[7px] justify-between items-center bg-[#F7F2EC] border border-[#D3C7BA] rounded-[22px]"
      >
        <svg
          data-pencil-name="Search Icon"
          viewBox="0 0 15 15"
          className="box-border w-[15px] shrink-0 h-[15px] text-[#5F564F]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M6.5 11.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm4.5-.5 3 3" />
        </svg>

        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Tempel tautan produk dari mana saja"
          className="text-[13px] box-border flex-1 text-[#131110] placeholder-[#5F564F] bg-transparent outline-none font-[Inter,system-ui,sans-serif]"
        />

        <button
          type="button"
          onClick={handlePasteClip}
          data-pencil-name="Paste Chip"
          className="box-border w-fit shrink-0 h-fit flex flex-row px-[10px] py-[6px] justify-start items-center bg-[#fec201] hover:bg-[#eab300] text-[#131110] rounded-[14px] transition-colors cursor-pointer shadow-xs"
        >
          <span
            data-pencil-name="Paste Label"
            className="text-[9px] text-[#131110] font-[Inter,system-ui,sans-serif] font-bold tracking-[1.3px]"
          >
            TEMPEL
          </span>
        </button>
      </form>

      {/* Nav Actions */}
      <div
        data-pencil-name="Nav Actions"
        className="box-border w-auto lg:w-[400px] shrink-0 h-fit flex flex-row gap-4 sm:gap-[22px] justify-end items-center"
      >
        {/* Currency Switcher */}
        <button
          type="button"
          onClick={toggleCurrency}
          data-pencil-name="Currency"
          className="box-border w-fit shrink-0 h-fit flex flex-row gap-[4px] justify-start items-center hover:opacity-80 transition-opacity cursor-pointer"
          title="Ubah mata uang (IDR / USD)"
        >
          <span
            data-pencil-name="Currency Label"
            className="text-[10.5px] text-[#131110] font-[Inter,system-ui,sans-serif] font-bold tracking-[1.2px]"
          >
            {currency}
          </span>
          <svg
            data-pencil-name="Chevron"
            viewBox="0 0 12 12"
            className="box-border w-[12px] shrink-0 h-[12px] text-[#5F564F]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 4.5l3 3 3-3" />
          </svg>
        </button>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => setIsRequestModalOpen(true)}
          data-pencil-name="Sign In"
          className="px-3.5 py-1.5 bg-[#fec201] hover:bg-[#eab300] text-[#131110] text-[12.5px] font-bold rounded-[2px] transition-colors whitespace-nowrap hidden sm:inline-block cursor-pointer shadow-xs"
        >
          Titip Sekarang
        </button>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => setIsRequestModalOpen(true)}
          className="hover:opacity-75 transition-opacity cursor-pointer p-0.5"
          aria-label="Wishlist"
        >
          <svg
            data-pencil-name="Wishlist"
            viewBox="0 0 24 24"
            className="box-border w-[17px] shrink-0 h-[17px] text-[#131110]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>

        {/* Cart */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          data-pencil-name="Cart"
          className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center hover:opacity-75 transition-opacity cursor-pointer p-0.5"
          aria-label="Keranjang Pre-Order"
        >
          <svg
            data-pencil-name="Cart Icon"
            viewBox="0 0 24 24"
            className="box-border w-[17px] shrink-0 h-[17px] text-[#131110]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          {totalCartCount > 0 ? (
            <span
              data-pencil-name="Cart Count"
              className="min-w-[19px] h-[19px] px-1 flex items-center justify-center rounded-full bg-[#fec201] text-[#131110] text-[10px] font-[Inter,system-ui,sans-serif] font-bold shadow-sm"
            >
              {totalCartCount}
            </span>
          ) : (
            <span
              data-pencil-name="Cart Count"
              className="text-[11.5px] text-[#131110] font-[Inter,system-ui,sans-serif] font-semibold"
            >
              0
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
