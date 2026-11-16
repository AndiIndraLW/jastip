"use client";

import React, { useState } from "react";
import { useJastip } from "@/context/JastipContext";

const RATES: Record<string, { name: string; rate: number; symbol: string; flag: string }> = {
  JPY: { name: "Japanese Yen", rate: 110, symbol: "¥", flag: "🇯🇵" },
  KRW: { name: "South Korean Won", rate: 11.8, symbol: "₩", flag: "🇰🇷" },
  EUR: { name: "Euro", rate: 17200, symbol: "€", flag: "🇪🇺" },
  USD: { name: "US Dollar", rate: 16100, symbol: "$", flag: "🇺🇸" },
  GBP: { name: "British Pound", rate: 20400, symbol: "£", flag: "🇬🇧" },
  SGD: { name: "Singapore Dollar", rate: 12050, symbol: "S$", flag: "🇸🇬" },
};

export default function FeeCalculatorModal() {
  const { isFeeCalcOpen, setIsFeeCalcOpen, setIsRequestModalOpen } = useJastip();
  const [selectedCurrency, setSelectedCurrency] = useState("JPY");
  const [rawAmount, setRawAmount] = useState("10000");

  if (!isFeeCalcOpen) return null;

  const currentRate = RATES[selectedCurrency] || RATES.JPY;
  const numAmount = parseFloat(rawAmount) || 0;
  const itemCostIdr = Math.round(numAmount * currentRate.rate);
  const serviceFeeIdr = Math.round(itemCostIdr * 0.08);
  const handlingFeeIdr = itemCostIdr > 0 ? 120000 : 0;
  const totalLandedIdr = itemCostIdr + serviceFeeIdr + handlingFeeIdr;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-[500px] bg-[#EDE4DD] border border-[#D3C7BA] rounded-[4px] shadow-2xl p-6 sm:p-8 text-[#131110]">
        {/* Close Button */}
        <button
          onClick={() => setIsFeeCalcOpen(false)}
          className="absolute top-4 right-4 p-2 text-[#5F564F] hover:text-[#131110] transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <div className="text-[10.5px] font-semibold tracking-[1.6px] text-[#5F564F] uppercase pb-1">
            TRANSPARENT PRICING
          </div>
          <h3 className="text-[24px] font-semibold tracking-tight text-[#131110]">
            Fee & Landed Cost Calculator
          </h3>
          <p className="text-[13px] text-[#5F564F] pt-1">
            No unexpected duties, surprise weight fees, or hidden markups.
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-[#5F564F] mb-1.5">
                Currency
              </label>
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="w-full h-[44px] px-3 bg-[#F7F2EC] border border-[#D3C7BA] rounded-[2px] text-[13px] text-[#131110] outline-none focus:border-[#131110]"
              >
                {Object.entries(RATES).map(([code, data]) => (
                  <option key={code} value={code}>
                    {data.flag} {code} ({data.name})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-[#5F564F] mb-1.5">
                Store Price ({currentRate.symbol})
              </label>
              <input
                type="number"
                value={rawAmount}
                onChange={(e) => setRawAmount(e.target.value)}
                placeholder="10000"
                className="w-full h-[44px] px-3 bg-[#F7F2EC] border border-[#D3C7BA] rounded-[2px] text-[14px] font-medium text-[#131110] outline-none focus:border-[#131110]"
              />
            </div>
          </div>

          {/* Breakdown Card */}
          <div className="p-4 bg-[#F7F2EC] border border-[#D3C7BA] rounded-[2px] flex flex-col gap-3 text-[13px]">
            <div className="flex justify-between items-center text-[#5F564F]">
              <span>Store Retail Equivalent</span>
              <span className="font-semibold text-[#131110]">
                Rp {itemCostIdr.toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex justify-between items-center text-[#5F564F]">
              <span>Jastip Concierge Fee (8%)</span>
              <span className="font-semibold text-[#131110]">
                Rp {serviceFeeIdr.toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex justify-between items-center text-[#5F564F]">
              <span>Luggage & Handling Guarantee</span>
              <span className="font-semibold text-[#131110]">
                Rp {handlingFeeIdr.toLocaleString("id-ID")}
              </span>
            </div>

            <div className="h-[1px] bg-[#D3C7BA] my-1" />

            <div className="flex justify-between items-baseline pt-1">
              <div>
                <div className="text-[14px] font-semibold text-[#131110]">
                  Total Estimated Landed
                </div>
                <div className="text-[10px] text-[#5F564F]">
                  Delivered to Jakarta address
                </div>
              </div>
              <div className="text-[20px] font-bold text-[#131110] tracking-tight">
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
              className="w-full h-[48px] bg-[#131110] hover:bg-[#2C2622] text-[#EDE4DD] text-[13.5px] font-semibold rounded-[2px] transition-colors cursor-pointer flex justify-center items-center gap-2"
            >
              <span>Request this item now</span>
              <svg viewBox="0 0 12 12" className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2.5 6h7m-3-3 3 3-3 3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
