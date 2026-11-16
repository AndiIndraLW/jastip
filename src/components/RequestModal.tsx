"use client";

import React, { useState } from "react";
import { useJastip } from "@/context/JastipContext";

export default function RequestModal() {
  const { isRequestModalOpen, setIsRequestModalOpen, requestUrl, setRequestUrl, showToast } =
    useJastip();

  const [country, setCountry] = useState("JP");
  const [itemName, setItemName] = useState("");
  const [notes, setNotes] = useState("");
  const [estPrice, setEstPrice] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isRequestModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      showToast("Custom request submitted! A traveler will respond shortly.");
      setIsRequestModalOpen(false);
      setSubmitted(false);
      setRequestUrl("");
      setItemName("");
      setNotes("");
      setEstPrice("");
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-[540px] bg-[#EDE4DD] border border-[#D3C7BA] rounded-[4px] shadow-2xl p-6 sm:p-8 text-[#131110]">
        {/* Close Button */}
        <button
          onClick={() => setIsRequestModalOpen(false)}
          className="absolute top-4 right-4 p-2 text-[#5F564F] hover:text-[#131110] transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <div className="text-[10.5px] font-semibold tracking-[1.6px] text-[#5F564F] uppercase pb-1">
            CONCIERGE REQUEST
          </div>
          <h3 className="text-[24px] font-semibold tracking-tight text-[#131110]">
            Paste Link or Store Name
          </h3>
          <p className="text-[13px] text-[#5F564F] pt-1">
            Our verified travelers in Tokyo, Seoul, Paris, and London will check in-store stock, verify prices, and bring it to Indonesia.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#131110] text-[#EDE4DD] flex items-center justify-center mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-[18px] font-semibold">Request Received!</h4>
            <p className="text-[13px] text-[#5F564F] pt-1">
              Connecting you with an active traveler in your selected country...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-[#5F564F] mb-1.5">
                Product Link or Store URL
              </label>
              <input
                type="text"
                required
                value={requestUrl}
                onChange={(e) => setRequestUrl(e.target.value)}
                placeholder="https://... or e.g. Dover Street Market Ginza"
                className="w-full h-[44px] px-3 bg-[#F7F2EC] border border-[#D3C7BA] rounded-[2px] text-[13px] text-[#131110] outline-none focus:border-[#131110]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-[#5F564F] mb-1.5">
                  Origin Country
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full h-[44px] px-3 bg-[#F7F2EC] border border-[#D3C7BA] rounded-[2px] text-[13px] text-[#131110] outline-none focus:border-[#131110]"
                >
                  <option value="JP">🇯🇵 Japan (Tokyo, Osaka, Kyoto)</option>
                  <option value="KR">🇰🇷 South Korea (Seoul)</option>
                  <option value="FR">🇫🇷 France (Paris)</option>
                  <option value="US">🇺🇸 United States (NY, LA)</option>
                  <option value="UK">🇬🇧 United Kingdom (London)</option>
                  <option value="SG">🇸🇬 Singapore</option>
                  <option value="IT">🇮🇹 Italy (Milan)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-[#5F564F] mb-1.5">
                  Est. Price (Optional)
                </label>
                <input
                  type="text"
                  value={estPrice}
                  onChange={(e) => setEstPrice(e.target.value)}
                  placeholder="e.g. ¥15,000 or $120"
                  className="w-full h-[44px] px-3 bg-[#F7F2EC] border border-[#D3C7BA] rounded-[2px] text-[13px] text-[#131110] outline-none focus:border-[#131110]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-[#5F564F] mb-1.5">
                Item Details / Size / Color
              </label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="e.g. Size 42, Black, with original box & receipt"
                className="w-full h-[44px] px-3 bg-[#F7F2EC] border border-[#D3C7BA] rounded-[2px] text-[13px] text-[#131110] outline-none focus:border-[#131110]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-[#5F564F] mb-1.5">
                Special Instructions
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any promo codes, tax refund requests, or urgent deadlines..."
                className="w-full p-3 bg-[#F7F2EC] border border-[#D3C7BA] rounded-[2px] text-[13px] text-[#131110] outline-none focus:border-[#131110] resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-[48px] bg-[#131110] hover:bg-[#2C2622] text-[#EDE4DD] text-[13.5px] font-semibold rounded-[2px] transition-colors cursor-pointer flex justify-center items-center gap-2"
              >
                <span>Submit Request to Traveler Network</span>
                <svg viewBox="0 0 12 12" className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2.5 6h7m-3-3 3 3-3 3" />
                </svg>
              </button>
              <div className="text-center text-[10px] tracking-[1.2px] text-[#5F564F] uppercase pt-2.5">
                NO ADVANCE PAYMENT · HUMAN RESPONSE UNDER 2 HOURS
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
