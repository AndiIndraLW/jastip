"use client";

import React, { useState } from "react";
import { useJastip } from "@/context/JastipContext";

const RATES: Record<string, { name: string; rate: number; symbol: string; flag: string; defaultVal: number; maxVal: number }> = {
  JPY: { name: "Yen Jepang", rate: 110, symbol: "¥", flag: "🇯🇵", defaultVal: 15000, maxVal: 200000 },
  KRW: { name: "Won Korea Selatan", rate: 11.8, symbol: "₩", flag: "🇰🇷", defaultVal: 120000, maxVal: 1500000 },
  EUR: { name: "Euro", rate: 17200, symbol: "€", flag: "🇪🇺", defaultVal: 120, maxVal: 1500 },
  USD: { name: "Dolar AS", rate: 16100, symbol: "$", flag: "🇺🇸", defaultVal: 100, maxVal: 1200 },
  GBP: { name: "Poundsterling Inggris", rate: 20400, symbol: "£", flag: "🇬🇧", defaultVal: 90, maxVal: 1000 },
  SGD: { name: "Dolar Singapura", rate: 12050, symbol: "S$", flag: "🇸🇬", defaultVal: 150, maxVal: 2000 },
};

export default function FeeCalculatorModal() {
  const { isFeeCalcOpen, setIsFeeCalcOpen, setIsRequestModalOpen } = useJastip();
  const [selectedCurrency, setSelectedCurrency] = useState("JPY");
  const [rawAmount, setRawAmount] = useState<number>(15000);
  const [isFragile, setIsFragile] = useState(false);

  if (!isFeeCalcOpen) return null;

  const currentRate = RATES[selectedCurrency] || RATES.JPY;
  const itemCostIdr = Math.round(rawAmount * currentRate.rate);
  const serviceFeeIdr = Math.round(itemCostIdr * 0.08);
  const handlingFeeIdr = itemCostIdr > 0 ? (isFragile ? 180000 : 120000) : 0;
  const totalLandedIdr = itemCostIdr + serviceFeeIdr + handlingFeeIdr;

  const handleCurrencyChange = (newCurr: string) => {
    setSelectedCurrency(newCurr);
    setRawAmount(RATES[newCurr].defaultVal);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-[520px] bg-[#EDE4DD] border border-[#D3C7BA] rounded-[4px] shadow-2xl p-6 sm:p-8 text-[#131110]">
        {/* Close Button */}
        <button
          onClick={() => setIsFeeCalcOpen(false)}
          className="absolute top-4 right-4 p-2 text-[#5F564F] hover:text-[#131110] transition-colors cursor-pointer"
          aria-label="Tutup modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <div className="text-[10px] font-semibold tracking-[1.6px] text-[#5F564F] uppercase pb-1">
            TRANSPARANSI HARGA
          </div>
          <h3 className="text-[24px] font-semibold tracking-tight text-[#131110]">
            Kalkulator Estimasi Biaya Bersih
          </h3>
          <p className="text-[13px] text-[#5F564F] pt-1">
            Perhitungan kurs terkini dengan rincian biaya yang jelas dan transparan.
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          {/* Country Currency Pills */}
          <div>
            <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-[#5F564F] mb-1.5">
              Pilih Mata Uang
            </label>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(RATES).map(([code, data]) => {
                const isSelected = selectedCurrency === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => handleCurrencyChange(code)}
                    className={`py-2 px-2.5 rounded-[2px] text-[12px] font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#fec201] text-[#131110] border-[#fec201] font-bold shadow-sm"
                        : "bg-[#F7F2EC] text-[#131110] border-[#D3C7BA] hover:bg-[#EAE2D8]"
                    }`}
                  >
                    <span>{data.flag}</span>
                    <span>{code}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Range & Number Input */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-[11px] font-semibold tracking-[1px] uppercase text-[#5F564F]">
                Harga Toko ({currentRate.symbol})
              </label>
              <span className="text-[13px] font-bold text-[#131110]">
                {currentRate.symbol} {rawAmount.toLocaleString()}
              </span>
            </div>

            <input
              type="range"
              min={Math.round(currentRate.maxVal * 0.05)}
              max={currentRate.maxVal}
              step={Math.round(currentRate.maxVal * 0.01)}
              value={rawAmount}
              onChange={(e) => setRawAmount(Number(e.target.value))}
              className="w-full accent-[#fec201] cursor-pointer"
            />
          </div>

          {/* Fragile / Special Packing toggle */}
          <div className="flex items-center justify-between p-3 bg-[#F7F2EC] border border-[#D3C7BA] rounded-[2px]">
            <div className="flex flex-col">
              <span className="text-[12.5px] font-semibold text-[#131110]">
                Barang Pecah Belah / Sensitif Suhu
              </span>
              <span className="text-[10.5px] text-[#5F564F]">
                Perlindungan bubble wrap ganda & pouch khusus suhu
              </span>
            </div>
            <input
              type="checkbox"
              checked={isFragile}
              onChange={(e) => setIsFragile(e.target.checked)}
              className="w-4 h-4 accent-[#fec201] cursor-pointer"
            />
          </div>

          {/* Breakdown Card */}
          <div className="p-4 bg-[#F7F2EC] border border-[#D3C7BA] rounded-[2px] flex flex-col gap-2.5 text-[13px]">
            <div className="flex justify-between items-center text-[#5F564F]">
              <span>Ekuivalen Harga Ritel (1 {selectedCurrency} ≈ Rp {currentRate.rate})</span>
              <span className="font-semibold text-[#131110]">
                Rp {itemCostIdr.toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex justify-between items-center text-[#5F564F]">
              <span>Biaya Layanan Jastip (8%)</span>
              <span className="font-semibold text-[#131110]">
                Rp {serviceFeeIdr.toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex justify-between items-center text-[#5F564F]">
              <span>Jaminan Bagasi & Penanganan Aman</span>
              <span className="font-semibold text-[#131110]">
                Rp {handlingFeeIdr.toLocaleString("id-ID")}
              </span>
            </div>

            <div className="h-[1px] bg-[#D3C7BA] my-1" />

            <div className="flex justify-between items-baseline pt-1">
              <div>
                <div className="text-[14px] font-semibold text-[#131110]">
                  Total Estimasi Bersih
                </div>
                <div className="text-[10px] text-[#22C55E] font-medium">
                  Garansi sampai di depan pintu Anda
                </div>
              </div>
              <div className="text-[22px] font-bold text-[#131110] tracking-tight">
                Rp {totalLandedIdr.toLocaleString("id-ID")}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsFeeCalcOpen(false);
                setIsRequestModalOpen(true);
              }}
              className="w-full h-[48px] bg-[#fec201] hover:bg-[#eab300] text-[#131110] text-[13.5px] font-bold rounded-[2px] transition-all hover:scale-101 active:scale-99 cursor-pointer flex justify-center items-center gap-2 shadow-md"
            >
              <span>Titip barang dengan estimasi ini</span>
              <svg viewBox="0 0 12 12" className="w-[12px] h-[12px] text-[#131110]" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M2.5 6h7m-3-3 3 3-3 3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
