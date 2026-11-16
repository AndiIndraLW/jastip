"use client";

import React, { useState } from "react";
import { useJastip } from "@/context/JastipContext";

interface Product {
  id: string;
  name: string;
  meta: string;
  priceIdr: number;
  priceUsd: number;
  image: string;
  flag: string;
  code: string;
  category: string;
}

const PRODUCTS: Product[] = [
  {
    id: "bag-1",
    name: "Structured Leather Shoulder Bag",
    meta: "SEOUL · KR · EST. 9–12 DAYS",
    priceIdr: 1890000,
    priceUsd: 118,
    image: "/images/bag.jpg",
    flag: "🇰🇷",
    code: "KR",
    category: "Fashion",
  },
  {
    id: "tokyo-banana-1",
    name: "Tokyo Banana & Kit Kat Gift Box",
    meta: "TOKYO · JP · EST. 6–8 DAYS",
    priceIdr: 385000,
    priceUsd: 24,
    image: "/images/tokyo_banana.jpg",
    flag: "🇯🇵",
    code: "JP",
    category: "Food & Snacks",
  },
  {
    id: "skincare-1",
    name: "Olive Young Skincare Best Set",
    meta: "SEOUL · KR · EST. 9–12 DAYS",
    priceIdr: 645000,
    priceUsd: 40,
    image: "/images/skincare.jpg",
    flag: "🇰🇷",
    code: "KR",
    category: "Beauty",
  },
  {
    id: "sonny-angel-1",
    name: "Sonny Angel Limited Series",
    meta: "TOKYO · JP · EST. 7–10 DAYS",
    priceIdr: 520000,
    priceUsd: 32,
    image: "/images/sonny_angel.jpg",
    flag: "🇯🇵",
    code: "JP",
    category: "Collectibles",
  },
  {
    id: "nb-530-1",
    name: "New Balance 530 'Moonbeam'",
    meta: "SEOUL · KR · EST. 10–14 DAYS",
    priceIdr: 1240000,
    priceUsd: 77,
    image: "/images/new_balance.jpg",
    flag: "🇰🇷",
    code: "KR",
    category: "Fashion",
  },
  {
    id: "matcha-1",
    name: "Ippodo Ceremonial Grade Matcha",
    meta: "KYOTO · JP · EST. 6–8 DAYS",
    priceIdr: 470000,
    priceUsd: 29,
    image: "/images/matcha.jpg",
    flag: "🇯🇵",
    code: "JP",
    category: "Food & Snacks",
  },
  {
    id: "margiela-replica-1",
    name: "Maison Margiela Replica 100ml",
    meta: "PARIS · FR · EST. 12–16 DAYS",
    priceIdr: 2150000,
    priceUsd: 134,
    image: "/images/perfume.jpg",
    flag: "🇫🇷",
    code: "FR",
    category: "Beauty",
  },
];

const CATEGORIES = [
  { label: "All", count: 128 },
  { label: "Fashion", count: 42 },
  { label: "Food & Snacks", count: 31 },
  { label: "Beauty", count: 28 },
  { label: "Collectibles", count: 19 },
  { label: "Tech", count: 8 },
];

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [customLink, setCustomLink] = useState("");
  const { addToCart, formatPrice, currency, setIsRequestModalOpen, setRequestUrl } = useJastip();

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleCustomLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customLink.trim()) {
      setRequestUrl(customLink.trim());
    }
    setIsRequestModalOpen(true);
  };

  return (
    <section
      id="catalog"
      data-pencil-name="Catalog Section"
      className="box-border w-full h-fit shrink-0 flex flex-col gap-0 px-4 sm:px-8 lg:px-[64px] pt-16 sm:pt-20 lg:pt-[104px] pb-16 sm:pb-20 lg:pb-[104px] justify-start items-start border-b border-[#D3C7BA]"
    >
      {/* Catalog Header */}
      <div
        data-pencil-name="Catalog Header"
        className="box-border w-full h-fit shrink-0 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-start md:items-end pb-8 sm:pb-[42px]"
      >
        <div
          data-pencil-name="Catalog Title Block"
          className="box-border w-full md:w-[600px] shrink-0 h-fit flex flex-col gap-0 justify-start items-start"
        >
          {/* Section Index */}
          <div
            data-pencil-name="Section Label Row"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-center mb-3 sm:mb-4"
          >
            <div
              data-pencil-name="Section Index"
              className="text-[10.5px] text-[#5F564F] font-semibold tracking-[1.6px]"
            >
              01
            </div>
            <div
              data-pencil-name="Label Rule"
              className="box-border w-[24px] shrink-0 h-[1px] bg-[#D3C7BA]"
            />
            <div
              data-pencil-name="Section Label"
              className="text-[10.5px] text-[#5F564F] font-semibold tracking-[1.6px]"
            >
              CURATED DROPS
            </div>
          </div>

          {/* Catalog Title */}
          <h2
            data-pencil-name="Catalog Title"
            className="text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.08] text-[#131110] font-semibold tracking-[-1.6px]"
          >
            <span data-pencil-name="Title Line 1" className="block">
              This week&apos;s picks,
            </span>
            <span data-pencil-name="Title Line 2" className="block">
              sourced by travelers.
            </span>
          </h2>
        </div>

        {/* Note */}
        <div
          data-pencil-name="Catalog Note"
          className="text-[13px] sm:text-[14px] leading-[22px] max-w-[380px] text-[#5F564F] font-normal"
        >
          Prices are estimates in {currency} and include our 8% service fee. Final cost is confirmed before purchase.
        </div>
      </div>

      {/* Filter Row */}
      <div
        data-pencil-name="Filter Row"
        className="box-border w-full h-fit shrink-0 flex flex-row gap-4 justify-between items-center pb-8 sm:pb-[34px] overflow-x-auto no-scrollbar border-b border-[#D3C7BA]/50"
      >
        {/* Category Pills */}
        <div
          data-pencil-name="Category Pills"
          className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setActiveCategory(cat.label)}
                data-pencil-name={`Pill / ${cat.label}`}
                className={`box-border w-fit shrink-0 h-[38px] flex flex-row gap-[7px] px-[16px] justify-start items-center rounded-[19px] transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#131110] text-[#EDE4DD]"
                    : "bg-[#F7F2EC] text-[#131110] border border-[#D3C7BA] hover:bg-[#EAE2D8]"
                }`}
              >
                <span
                  data-pencil-name="Pill Label"
                  className="text-[12.5px] font-medium whitespace-nowrap"
                >
                  {cat.label}
                </span>
                <span
                  data-pencil-name="Pill Count"
                  className={`text-[10px] font-normal ${
                    isActive ? "text-[#EDE4DD]/70" : "text-[#5F564F]"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sort */}
        <div
          data-pencil-name="Sort"
          className="hidden md:flex box-border w-fit shrink-0 h-fit flex-row gap-[6px] justify-start items-center text-[11px] font-semibold tracking-[1.2px] text-[#5F564F] uppercase cursor-pointer"
        >
          <span data-pencil-name="Sort Label">SORT: POPULAR</span>
          <svg
            data-pencil-name="Sort Chevron"
            viewBox="0 0 12 12"
            className="w-[12px] h-[12px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 4.5l3 3 3-3" />
          </svg>
        </div>
      </div>

      {/* Item Grid */}
      <div
        data-pencil-name="Item Grid"
        className="box-border w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 sm:pt-[36px]"
      >
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            data-pencil-name={`Card / ${p.name}`}
            className="group box-border flex flex-col justify-between bg-transparent transition-all"
          >
            {/* Media */}
            <div
              data-pencil-name="Media"
              className="box-border w-full h-[280px] sm:h-[300px] shrink-0 rounded-[2px] overflow-hidden relative bg-center bg-no-repeat bg-cover shadow-sm transition-transform duration-300 group-hover:scale-[1.015]"
              style={{ backgroundImage: `url('${p.image}')` }}
            >
              {/* Origin Badge */}
              <div
                data-pencil-name="Origin Badge"
                className="absolute left-[12px] top-[12px] flex flex-row gap-[5px] px-[9px] py-[6px] justify-start items-center bg-[#F7F2EC]/90 backdrop-blur-sm rounded-[2px] shadow-sm"
              >
                <span data-pencil-name="Badge Flag" className="text-[11px]">
                  {p.flag}
                </span>
                <span
                  data-pencil-name="Badge Code"
                  className="text-[9.5px] text-[#131110] font-bold tracking-[1.2px]"
                >
                  {p.code}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div
              data-pencil-name="Card Body"
              className="box-border w-full flex flex-col justify-start items-start pt-[14px]"
            >
              <div
                data-pencil-name="Item Name"
                className="text-[15.5px] leading-[21px] text-[#131110] font-semibold text-left line-clamp-1"
              >
                {p.name}
              </div>
              <div
                data-pencil-name="Item Meta"
                className="text-[9.5px] text-[#5F564F] font-semibold tracking-[1.4px] uppercase pt-[4px]"
              >
                {p.meta}
              </div>
            </div>

            {/* Card Rule */}
            <div
              data-pencil-name="Card Rule"
              className="box-border w-full h-[1px] bg-[#D3C7BA] my-[14px]"
            />

            {/* Card Footer */}
            <div
              data-pencil-name="Card Footer"
              className="box-border w-full flex flex-row justify-between items-center"
            >
              {/* Price */}
              <div
                data-pencil-name="Price Block"
                className="box-border flex flex-col justify-start items-start"
              >
                <div
                  data-pencil-name="Price"
                  className="text-[17px] leading-tight text-[#131110] font-semibold tracking-[-0.3px]"
                >
                  {formatPrice(p.priceIdr, p.priceUsd)}
                </div>
                <div
                  data-pencil-name="Price USD"
                  className="text-[10px] text-[#5F564F] font-medium"
                >
                  {currency === "IDR" ? `≈ $${p.priceUsd}` : `≈ Rp ${p.priceIdr.toLocaleString("id-ID")}`}
                </div>
              </div>

              {/* Pre-Order CTA */}
              <button
                type="button"
                onClick={() =>
                  addToCart({
                    id: p.id,
                    name: p.name,
                    meta: p.meta,
                    priceIdr: p.priceIdr,
                    priceUsd: p.priceUsd,
                    image: p.image,
                    flag: p.flag,
                    code: p.code,
                  })
                }
                data-pencil-name="Pre-Order Button"
                className="box-border h-[38px] flex flex-row gap-[6px] px-[14px] justify-center items-center bg-[#131110] hover:bg-[#2C2622] text-[#F4ECE5] rounded-[2px] transition-colors cursor-pointer"
              >
                <span
                  data-pencil-name="Pre-Order Label"
                  className="text-[12px] font-medium"
                >
                  Pre-Order
                </span>
                <svg
                  data-pencil-name="Pre-Order Arrow"
                  viewBox="0 0 12 12"
                  className="w-[12px] h-[12px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M2.5 6h7m-3-3 3 3-3 3" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {/* Card 8 / Request Any Item */}
        <div
          data-pencil-name="Card / Request Any Item"
          className="box-border flex flex-col justify-between p-[28px] bg-[#F7F2EC] border border-[#D3C7BA] rounded-[2px] min-h-[462px] shadow-sm"
        >
          <div className="flex flex-col gap-4">
            {/* Top Icon */}
            <div
              data-pencil-name="Special Top"
              className="box-border w-full flex flex-row justify-between items-center"
            >
              <div
                data-pencil-name="Icon Wrap"
                className="box-border w-[38px] shrink-0 h-[38px] flex justify-center items-center border border-[#131110] rounded-full"
              >
                <svg
                  data-pencil-name="Link Icon"
                  viewBox="0 0 24 24"
                  className="w-[18px] h-[18px] text-[#131110]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>

              <span
                data-pencil-name="Special Label"
                className="text-[9.5px] text-[#5F564F] font-semibold tracking-[1.4px] uppercase"
              >
                ANY SHOP, ANY CITY
              </span>
            </div>

            {/* Special Title */}
            <div className="pt-2">
              <h3
                data-pencil-name="Special Title"
                className="text-[22px] leading-[26px] text-[#131110] font-semibold"
              >
                Can&apos;t find it here?
              </h3>
              <p
                data-pencil-name="Special Body"
                className="text-[13.5px] leading-[21px] text-[#5F564F] pt-2"
              >
                Paste a link from any store — even ones that don&apos;t ship to Indonesia. A traveler picks it up and we handle the rest.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleCustomLinkSubmit} className="flex flex-col gap-3 pt-4">
            <input
              type="text"
              value={customLink}
              onChange={(e) => setCustomLink(e.target.value)}
              placeholder="https://store.com/item"
              className="w-full h-[44px] px-3 bg-white border border-[#D3C7BA] rounded-[2px] text-[13px] text-[#131110] placeholder-[#5F564F]/60 outline-none focus:border-[#131110]"
            />
            <button
              type="submit"
              className="w-full h-[44px] bg-[#131110] hover:bg-[#2C2622] text-[#F4ECE5] text-[13px] font-medium rounded-[2px] transition-colors cursor-pointer flex justify-center items-center gap-2"
            >
              <span>Get instant quote</span>
              <svg viewBox="0 0 12 12" className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2.5 6h7m-3-3 3 3-3 3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
