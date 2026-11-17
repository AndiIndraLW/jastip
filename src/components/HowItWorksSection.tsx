"use client";

import React from "react";
import { useJastip } from "@/context/JastipContext";

export default function HowItWorksSection() {
  const { setIsFeeCalcOpen } = useJastip();

  return (
    <section
      id="how-it-works"
      data-pencil-name="How It Works Section"
      className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[92px_64px_96px_64px] justify-start items-start"
    >
      {/* How Header */}
      <div
        data-pencil-name="How Header"
        className="box-border w-full h-fit shrink-0 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-start md:items-end"
      >
        <div
          data-pencil-name="How Title Block"
          className="box-border w-full md:w-[660px] shrink-0 h-fit flex flex-col gap-[16px] justify-start items-start"
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
              CARA KERJA
            </div>
          </div>

          {/* How Title */}
          <h2
            data-pencil-name="How Title"
            className="text-[36px] sm:text-[46px] lg:text-[52px]/[54px] box-border w-full text-[#131110] font-['Inter_Tight',system-ui,sans-serif] font-semibold tracking-[-1.6px] text-left"
          >
            <span data-pencil-name="Title Line 1" className="block">
              Tiga langkah. Satu traveler.
            </span>
            <span data-pencil-name="Title Line 2" className="block">
              Tanpa tebak-tebakan.
            </span>
          </h2>
        </div>

        {/* How Note */}
        <div
          data-pencil-name="How Note"
          className="text-[13px] sm:text-[14px]/[22px] box-border w-full md:w-[380px] text-[#5F564F] font-[Inter,system-ui,sans-serif] font-normal text-left"
        >
          Setiap titipan ditangani langsung oleh orang sungguhan di kota tempat Anda berbelanja.
        </div>
      </div>

      {/* Steps */}
      <div
        data-pencil-name="Steps"
        className="box-border w-full h-fit shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 pt-[56px]"
      >
        {/* Step 1 */}
        <div
          data-pencil-name="Step / Paste the link"
          className="box-border flex-1 h-fit flex flex-col gap-0 pt-[24px] pr-0 pb-0 pl-0 md:pl-[32px] justify-start items-start border-t border-[#D3C7BA]"
        >
          <div
            data-pencil-name="Step Top"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
          >
            <div
              data-pencil-name="Step Number"
              className="text-[10px]/[normal] box-border text-[#131110] bg-[#fec201] px-2 py-0.5 rounded-[2px] font-[Inter,system-ui,sans-serif] font-bold tracking-[1.4px] text-left uppercase whitespace-nowrap"
            >
              01
            </div>
            <svg
              data-pencil-name="Step Icon"
              viewBox="0 0 19 19"
              className="box-border w-[19px] shrink-0 h-[19px] text-[#131110]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M7 11a4 4 0 0 0 5.66.44l2-2a4 4 0 0 0-5.66-5.66l-1.42 1.41" />
              <path d="M12 8a4 4 0 0 0-5.66-.44l-2 2a4 4 0 0 0 5.66 5.66l1.42-1.41" />
            </svg>
          </div>

          <div
            data-pencil-name="Step Title Wrap"
            className="box-border w-fit h-fit shrink-0 flex flex-col gap-0 pt-[26px] justify-start items-start"
          >
            <div
              data-pencil-name="Step Title"
              className="text-[21px]/[normal] box-border text-[#131110] font-['Inter_Tight',system-ui,sans-serif] font-semibold tracking-[-0.5px] text-left whitespace-nowrap"
            >
              Tempel tautan
            </div>
          </div>

          <div
            data-pencil-name="Step Body Wrap"
            className="box-border w-full h-fit shrink-0 flex flex-col gap-0 pt-[12px] justify-start items-start"
          >
            <div
              data-pencil-name="Step Body"
              className="text-[13.5px]/[22px] box-border w-full text-[#5F564F] font-[Inter,system-ui,sans-serif] font-normal text-left"
            >
              Kirim tautan produk, foto, atau cukup nama tokonya. Kami konfirmasi ketersediaan barang,
              ukuran, dan harga total dalam waktu kurang dari dua jam.
            </div>
          </div>

          <div
            data-pencil-name="Step Foot Wrap"
            className="box-border w-fit h-fit shrink-0 flex flex-col gap-0 pt-[22px] justify-start items-start"
          >
            <div
              data-pencil-name="Step Foot"
              className="text-[9px]/[normal] box-border text-[#5F564F] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.3px] text-left uppercase whitespace-nowrap"
            >
              HANYA BUTUH 40 DETIK
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div
          data-pencil-name="Step / We buy &amp; secure it"
          className="box-border flex-1 h-fit flex flex-col gap-0 pt-[24px] px-0 md:px-[30px] pb-0 justify-start items-start border-t border-[#D3C7BA]"
        >
          <div
            data-pencil-name="Step Top"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
          >
            <div
              data-pencil-name="Step Number"
              className="text-[10px]/[normal] box-border text-[#131110] bg-[#fec201] px-2 py-0.5 rounded-[2px] font-[Inter,system-ui,sans-serif] font-bold tracking-[1.4px] text-left uppercase whitespace-nowrap"
            >
              02
            </div>
            <svg
              data-pencil-name="Step Icon"
              viewBox="0 0 19 19"
              className="box-border w-[19px] shrink-0 h-[19px] text-[#131110]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M9.5 2.5s5 1.5 6 5.5c0 5-6 8-6 8s-6-3-6-8c1-4 6-5.5 6-5.5z" />
              <path d="M7 9.5l2 2 3-3" />
            </svg>
          </div>

          <div
            data-pencil-name="Step Title Wrap"
            className="box-border w-fit h-fit shrink-0 flex flex-col gap-0 pt-[26px] justify-start items-start"
          >
            <div
              data-pencil-name="Step Title"
              className="text-[21px]/[normal] box-border text-[#131110] font-['Inter_Tight',system-ui,sans-serif] font-semibold tracking-[-0.5px] text-left whitespace-nowrap"
            >
              Kami beli &amp; amankan
            </div>
          </div>

          <div
            data-pencil-name="Step Body Wrap"
            className="box-border w-full h-fit shrink-0 flex flex-col gap-0 pt-[12px] justify-start items-start"
          >
            <div
              data-pencil-name="Step Body"
              className="text-[13.5px]/[22px] box-border w-full text-[#5F564F] font-[Inter,system-ui,sans-serif] font-normal text-left"
            >
              Traveler Anda membelinya langsung di gerai resmi, memeriksa fisik barang sesuai pesanan Anda, dan mengirimkan foto sebelum meninggalkan negara tersebut.
            </div>
          </div>

          <div
            data-pencil-name="Step Foot Wrap"
            className="box-border w-fit h-fit shrink-0 flex flex-col gap-0 pt-[22px] justify-start items-start"
          >
            <div
              data-pencil-name="Step Foot"
              className="text-[9px]/[normal] box-border text-[#5F564F] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.3px] text-left uppercase whitespace-nowrap"
            >
              BAYAR HANYA SETELAH DIKONFIRMASI
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div
          data-pencil-name="Step / Delivered to your door"
          className="box-border flex-1 h-fit flex flex-col gap-0 pt-[24px] pr-0 md:pr-[28px] pb-0 pl-0 justify-start items-start border-t border-[#D3C7BA]"
        >
          <div
            data-pencil-name="Step Top"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
          >
            <div
              data-pencil-name="Step Number"
              className="text-[10px]/[normal] box-border text-[#131110] bg-[#fec201] px-2 py-0.5 rounded-[2px] font-[Inter,system-ui,sans-serif] font-bold tracking-[1.4px] text-left uppercase whitespace-nowrap"
            >
              03
            </div>
            <svg
              data-pencil-name="Step Icon"
              viewBox="0 0 19 19"
              className="box-border w-[19px] shrink-0 h-[19px] text-[#131110]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M12.5 3.5l-6 3.5-4-2 6-3.5 4 2z" />
              <path d="M2.5 5v7l6 3.5v-7l-6-3.5z" />
              <path d="M14.5 5v7l-6 3.5v-7l6-3.5z" />
            </svg>
          </div>

          <div
            data-pencil-name="Step Title Wrap"
            className="box-border w-fit h-fit shrink-0 flex flex-col gap-0 pt-[26px] justify-start items-start"
          >
            <div
              data-pencil-name="Step Title"
              className="text-[21px]/[normal] box-border text-[#131110] font-['Inter_Tight',system-ui,sans-serif] font-semibold tracking-[-0.5px] text-left whitespace-nowrap"
            >
              Diantar ke pintu Anda
            </div>
          </div>

          <div
            data-pencil-name="Step Body Wrap"
            className="box-border w-full h-fit shrink-0 flex flex-col gap-0 pt-[12px] justify-start items-start"
          >
            <div
              data-pencil-name="Step Body"
              className="text-[13.5px]/[22px] box-border w-full text-[#5F564F] font-[Inter,system-ui,sans-serif] font-normal text-left"
            >
              Kami bawa langsung menggunakan bagasi pribadi, menggabungkan pesanan dari berbagai toko ke dalam satu paket rapi, lalu mengirimkannya ke mana pun di Indonesia.
            </div>
          </div>

          <div
            data-pencil-name="Step Foot Wrap"
            className="box-border w-fit h-fit shrink-0 flex flex-col gap-0 pt-[22px] justify-start items-start"
          >
            <div
              data-pencil-name="Step Foot"
              className="text-[9px]/[normal] box-border text-[#5F564F] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.3px] text-left uppercase whitespace-nowrap"
            >
              2–14 HARI, TERLACAK
            </div>
          </div>
        </div>
      </div>

      {/* How Footer */}
      <div
        data-pencil-name="How Footer"
        className="box-border w-full h-fit shrink-0 flex flex-col sm:flex-row gap-4 sm:gap-0 pt-[40px] justify-between items-start sm:items-center"
      >
        <button
          type="button"
          onClick={() => setIsFeeCalcOpen(true)}
          data-pencil-name="Calculator Link"
          className="box-border w-fit shrink-0 h-[46px] px-6 flex flex-row gap-[10px] justify-start items-center bg-[#fec201] hover:bg-[#eab300] text-[#131110] rounded-[2px] transition-colors cursor-pointer shadow-xs"
        >
          <div
            data-pencil-name="Calculator Label"
            className="text-[11px]/[normal] box-border text-[#131110] font-[Inter,system-ui,sans-serif] font-bold tracking-[1.4px] text-left uppercase whitespace-nowrap"
          >
            BUKA KALKULATOR BIAYA
          </div>
          <svg
            data-pencil-name="Calculator Arrow"
            viewBox="0 0 13 13"
            className="box-border w-[13px] shrink-0 h-[13px] text-[#131110]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path d="M3 10l7-7m-6 0h6v6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
