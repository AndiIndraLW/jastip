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
    name: "Tas Bahu Kulit Terstruktur",
    meta: "SEOUL · KR · EST. 9–12 HARI",
    priceIdr: 1890000,
    priceUsd: 118,
    image: "/images/bag.jpg",
    flag: "🇰🇷",
    code: "KR",
    category: "Fashion",
  },
  {
    id: "tokyo-banana-1",
    name: "Kotak Hadiah Tokyo Banana & KitKat",
    meta: "TOKYO · JP · EST. 6–8 HARI",
    priceIdr: 385000,
    priceUsd: 24,
    image: "/images/tokyo_banana.jpg",
    flag: "🇯🇵",
    code: "JP",
    category: "Makanan & Camilan",
  },
  {
    id: "skincare-1",
    name: "Paket Skincare Terbaik Olive Young",
    meta: "SEOUL · KR · EST. 9–12 HARI",
    priceIdr: 645000,
    priceUsd: 40,
    image: "/images/skincare.jpg",
    flag: "🇰🇷",
    code: "KR",
    category: "Kecantikan",
  },
  {
    id: "sonny-angel-1",
    name: "Sonny Angel Seri Terbatas",
    meta: "TOKYO · JP · EST. 7–10 HARI",
    priceIdr: 520000,
    priceUsd: 32,
    image: "/images/sonny_angel.jpg",
    flag: "🇯🇵",
    code: "JP",
    category: "Koleksi",
  },
  {
    id: "nb-530-1",
    name: "New Balance 530 'Moonbeam'",
    meta: "SEOUL · KR · EST. 10–14 HARI",
    priceIdr: 1240000,
    priceUsd: 77,
    image: "/images/new_balance.jpg",
    flag: "🇰🇷",
    code: "KR",
    category: "Fashion",
  },
  {
    id: "matcha-1",
    name: "Matcha Ceremonial Grade Ippodo",
    meta: "KYOTO · JP · EST. 6–8 HARI",
    priceIdr: 470000,
    priceUsd: 29,
    image: "/images/matcha.jpg",
    flag: "🇯🇵",
    code: "JP",
    category: "Makanan & Camilan",
  },
  {
    id: "margiela-replica-1",
    name: "Parfum Maison Margiela Replica 100ml",
    meta: "PARIS · FR · EST. 12–16 HARI",
    priceIdr: 2150000,
    priceUsd: 134,
    image: "/images/perfume.jpg",
    flag: "🇫🇷",
    code: "FR",
    category: "Kecantikan",
  },
];

const CATEGORIES = [
  { label: "Semua", count: 128 },
  { label: "Fashion", count: 42 },
  { label: "Makanan & Camilan", count: 31 },
  { label: "Kecantikan", count: 28 },
  { label: "Koleksi", count: 19 },
  { label: "Teknologi", count: 8 },
];

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [customLink, setCustomLink] = useState("");
  const { addToCart, formatPrice, currency, setIsRequestModalOpen, setRequestUrl } = useJastip();

  const filteredProducts =
    activeCategory === "Semua"
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
      className="box-border w-full h-fit shrink-0 flex flex-col gap-0 px-4 sm:px-8 lg:px-[64px] pt-16 sm:pt-20 lg:pt-[88px] pb-16 sm:pb-20 lg:pb-[100px] justify-start items-start"
    >
      {/* Catalog Header */}
      <div
        data-pencil-name="Catalog Header"
        className="box-border w-full h-fit shrink-0 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-start md:items-end"
      >
        <div
          data-pencil-name="Catalog Title Block"
          className="box-border w-full md:w-[700px] shrink-0 h-fit flex flex-col gap-[16px] justify-start items-start"
        >
          {/* Section Label Row */}
          <div
            data-pencil-name="Section Label Row"
            className="box-border w-fit h-fit shrink-0 flex flex-row gap-[12px] justify-start items-center"
          >
            <div
              data-pencil-name="Section Label"
              className="text-[10px]/[normal] box-border text-[#131110] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.6px] text-left uppercase whitespace-nowrap"
            >
              KATALOG PRE-ORDER
            </div>
          </div>

          {/* Catalog Title */}
          <h2
            data-pencil-name="Catalog Title"
            className="text-[36px] sm:text-[46px] lg:text-[52px]/[54px] box-border w-full text-[#131110] font-['Inter_Tight',system-ui,sans-serif] font-semibold tracking-[-1.6px] text-left"
          >
            <span data-pencil-name="Title Line 1" className="block">
              Pilihan minggu ini,
            </span>
            <span data-pencil-name="Title Line 2" className="block">
              dibeli oleh traveler kami.
            </span>
          </h2>
        </div>

        {/* Catalog Note */}
        <div
          data-pencil-name="Catalog Note"
          className="text-[13px] sm:text-[14px]/[22px] box-border w-full md:w-[380px] text-[#5F564F] font-[Inter,system-ui,sans-serif] font-normal text-left"
        >
          Harga merupakan estimasi dalam {currency} dan sudah termasuk biaya jasa 8%. Biaya final dikonfirmasi sebelum pembelian.
        </div>
      </div>

      {/* Filter Row */}
      <div
        data-pencil-name="Filter Row"
        className="box-border w-full h-fit shrink-0 flex flex-row gap-4 justify-between items-center pt-8 sm:pt-[40px] overflow-x-auto no-scrollbar"
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
                className={`box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] p-[10px_16px] justify-start items-center rounded-[999px] transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#fec201] border border-[#fec201] shadow-xs"
                    : "[border:1px_solid_#D3C7BA] hover:bg-[#EAE2D8]/50"
                }`}
              >
                <span
                  data-pencil-name="Pill Label"
                  className={`text-[12.5px]/[normal] font-[Inter,system-ui,sans-serif] whitespace-nowrap ${
                    isActive ? "text-[#131110] font-bold" : "text-[#131110] font-normal"
                  }`}
                >
                  {cat.label}
                </span>
                <span
                  data-pencil-name="Pill Count"
                  className={`text-[10px]/[normal] font-[Inter,system-ui,sans-serif] ${
                    isActive ? "text-[#131110]/70 font-bold" : "text-[#5F564F] font-medium"
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
          className="hidden md:flex box-border w-fit shrink-0 h-fit flex flex-row gap-[6px] justify-start items-center cursor-pointer select-none"
        >
        </div>
      </div>

      {/* Item Grid */}
      <div
        data-pencil-name="Item Grid"
        className="box-border w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] pt-[32px]"
      >
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            data-pencil-name={`Card / ${p.name}`}
            className="box-border w-full h-[462px] flex flex-col justify-start items-start"
          >
            {/* Media */}
            <div
              data-pencil-name="Media"
              className="box-border w-full h-[300px] shrink-0 rounded-[2px] overflow-hidden relative bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${p.image}')` }}
            >
              {/* Origin Badge */}
              <div
                data-pencil-name="Origin Badge"
                className="box-border w-fit h-fit absolute left-[12px] top-[12px] flex flex-row gap-[5px] p-[6px_9px] justify-start items-center bg-[#F7F2ECF2] rounded-[2px]"
              >
                <div data-pencil-name="Badge Flag" className="text-[10px]">
                  {p.flag}
                </div>
                <div
                  data-pencil-name="Badge Code"
                  className="text-[9.5px]/[normal] text-[#131110] font-[Inter,system-ui,sans-serif] font-bold tracking-[1.2px]"
                >
                  {p.code}
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div
              data-pencil-name="Card Body"
              className="box-border w-full flex-1 flex flex-col justify-between items-start pt-[16px]"
            >
              {/* Card Text */}
              <div
                data-pencil-name="Card Text"
                className="box-border w-full flex flex-col gap-[7px] justify-start items-start"
              >
                <div
                  data-pencil-name="Item Name"
                  className="text-[15.5px]/[21px] box-border w-full text-[#131110] font-['Inter_Tight',system-ui,sans-serif] font-medium tracking-[-0.2px] text-left line-clamp-1"
                >
                  {p.name}
                </div>
                <div
                  data-pencil-name="Item Meta"
                  className="text-[9px]/[normal] box-border text-[#5F564F] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.3px] text-left uppercase whitespace-nowrap"
                >
                  {p.meta}
                </div>
              </div>

              {/* Card Footer */}
              <div
                data-pencil-name="Card Footer"
                className="box-border w-full flex flex-col gap-[12px] justify-start items-start"
              >
                <div
                  data-pencil-name="Card Rule"
                  className="box-border w-full h-[1px] bg-[#D3C7BA]"
                />

                <div
                  data-pencil-name="Price Row"
                  className="box-border w-full flex flex-row justify-between items-center"
                >
                  <div
                    data-pencil-name="Price Block"
                    className="box-border flex flex-col gap-[2px] justify-start items-start"
                  >
                    <div
                      data-pencil-name="Price"
                      className="text-[13.5px]/[normal] text-[#131110] font-[Inter,system-ui,sans-serif] font-semibold text-left whitespace-nowrap"
                    >
                      {formatPrice(p.priceIdr, p.priceUsd)}
                    </div>
                    <div
                      data-pencil-name="Price USD"
                      className="text-[10.5px]/[normal] text-[#5F564F] font-[Inter,system-ui,sans-serif] font-normal text-left whitespace-nowrap"
                    >
                      {currency === "IDR" ? `≈ $${p.priceUsd}` : `≈ Rp ${p.priceIdr.toLocaleString("id-ID")}`}
                    </div>
                  </div>

                  {/* Pre-Order Button */}
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
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] p-[9px_14px] justify-start items-center bg-[#fec201] hover:bg-[#eab300] text-[#131110] border border-[#fec201] rounded-[2px] transition-colors cursor-pointer group shadow-xs"
                  >
                    <span
                      data-pencil-name="Pre-Order Label"
                      className="text-[11.5px]/[normal] font-[Inter,system-ui,sans-serif] font-bold text-left whitespace-nowrap"
                    >
                      Pre-Order
                    </span>
                    <svg
                      data-pencil-name="Pre-Order Arrow"
                      viewBox="0 0 12 12"
                      className="box-border w-[12px] shrink-0 h-[12px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2.5 9.5l7-7m-6 0h6v6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Card 8 / Request Any Item */}
        <div
          data-pencil-name="Card / Request Any Item"
          className="box-border w-full h-[462px] flex flex-col gap-0 p-[28px] justify-between items-start bg-[#F7F2EC] border border-[#D3C7BA] rounded-[2px]"
        >
          <div
            data-pencil-name="Special Top"
            className="box-border w-full flex flex-row justify-between items-center"
          >
            <div
              data-pencil-name="Icon Wrap"
              className="box-border w-[38px] shrink-0 h-[38px] flex justify-center items-center bg-[#fec201]/20 border border-[#fec201]/60 rounded-full"
            >
              <svg
                data-pencil-name="Link Icon"
                viewBox="0 0 16 16"
                className="box-border w-[16px] shrink-0 h-[16px] text-[#131110]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <div
              data-pencil-name="Special Label"
              className="text-[9px]/[normal] text-[#5F564F] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.3px] uppercase whitespace-nowrap"
            >
              TOKO APA PUN, KOTA MANA PUN
            </div>
          </div>

          <div
            data-pencil-name="Special Middle"
            className="box-border w-full flex flex-col gap-[10px] justify-start items-start"
          >
            <div
              data-pencil-name="Special Title"
              className="text-[24px]/[28px] text-[#131110] font-['Inter_Tight',system-ui,sans-serif] font-semibold tracking-[-0.6px]"
            >
              Tidak menemukan yang dicari?
            </div>
            <div
              data-pencil-name="Special Body"
              className="text-[12.5px]/[19px] text-[#5F564F] font-[Inter,system-ui,sans-serif] font-normal"
            >
              Tempel tautan dari toko mana saja — bahkan yang tidak melayani pengiriman ke Indonesia. Traveler kami yang akan membelikannya langsung untuk Anda.
            </div>
          </div>

          <form
            onSubmit={handleCustomLinkSubmit}
            data-pencil-name="Link Input"
            className="box-border w-full h-[44px] flex flex-row gap-0 px-[14px] justify-between items-center bg-[#EDE4DD] border border-[#D3C7BA] rounded-[2px] cursor-pointer"
          >
            <input
              type="text"
              value={customLink}
              onChange={(e) => setCustomLink(e.target.value)}
              placeholder="https://toko.com/produk"
              className="text-[12px] flex-1 bg-transparent text-[#131110] placeholder-[#5F564F] outline-none font-[Inter,system-ui,sans-serif]"
            />
            <button
              type="submit"
              className="p-1.5 bg-[#fec201] hover:bg-[#e5ae00] text-[#131110] rounded-[2px] transition-colors cursor-pointer"
              title="Kirim tautan"
            >
              <svg
                data-pencil-name="Input Arrow"
                viewBox="0 0 14 14"
                className="box-border w-[14px] shrink-0 h-[14px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2.5 7h9m-4-4 4 4-4 4" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
