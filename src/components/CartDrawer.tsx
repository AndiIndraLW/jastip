"use client";

import React from "react";
import { useJastip } from "@/context/JastipContext";

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    formatPrice,
    currency,
    showToast,
  } = useJastip();

  if (!isCartOpen) return null;

  const totalIdr = cart.reduce((acc, item) => acc + item.priceIdr * item.quantity, 0);
  const totalUsd = cart.reduce((acc, item) => acc + item.priceUsd * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckout = () => {
    showToast("Pesanan dibuat! Membuka WhatsApp concierge dengan ringkasan pre-order...");
    setTimeout(() => {
      setIsCartOpen(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-[440px] h-full bg-[#EDE4DD] border-l border-[#D3C7BA] flex flex-col justify-between p-6 sm:p-8 text-[#131110] shadow-2xl">
        {/* Top */}
        <div>
          <div className="flex justify-between items-center pb-6 border-b border-[#D3C7BA]">
            <div>
              <div className="text-[10px] font-semibold tracking-[1.4px] text-[#5F564F] uppercase">
                KERANJANG PRE-ORDER
              </div>
              <h3 className="text-[20px] font-semibold text-[#131110] flex items-center gap-2">
                <span>{totalItems} Barang Dipilih</span>
                {totalItems > 0 && (
                  <span className="w-2 h-2 rounded-full bg-[#fec201]" />
                )}
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#5F564F] hover:text-[#131110] transition-colors cursor-pointer"
              aria-label="Tutup keranjang"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items list */}
          <div className="divide-y divide-[#D3C7BA]/50 max-h-[calc(100vh-280px)] overflow-y-auto">
            {cart.length === 0 ? (
              <div className="py-16 text-center text-[#5F564F] text-[13.5px]">
                Keranjang pre-order Anda masih kosong. Jelajahi katalog atau tempel tautan barang!
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 items-center">
                  <div
                    className="w-[60px] h-[60px] rounded-[2px] bg-center bg-cover shrink-0 border border-[#D3C7BA]"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#5F564F] font-semibold uppercase">
                      <span>{item.flag}</span>
                      <span>{item.code}</span>
                    </div>
                    <div className="text-[14px] font-semibold text-[#131110] line-clamp-1">
                      {item.name}
                    </div>
                    <div className="text-[13px] font-medium text-[#131110] pt-0.5">
                      {formatPrice(item.priceIdr, item.priceUsd)}
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 pt-2">
                      <div className="flex items-center border border-[#D3C7BA] rounded bg-[#F7F2EC] overflow-hidden">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center bg-[#fec201]/30 hover:bg-[#fec201] text-[#131110] font-bold transition-colors cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-[12px] font-bold text-[#131110]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center bg-[#fec201]/30 hover:bg-[#fec201] text-[#131110] font-bold transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-[11px] text-[#5F564F]">
                        = {formatPrice(item.priceIdr * item.quantity, item.priceUsd * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[12px] text-[#A79A8F] hover:text-[#F2381A] transition-colors p-1 cursor-pointer"
                    title="Hapus barang"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-[#D3C7BA]">
          <div className="flex justify-between items-baseline pb-2">
            <span className="text-[12px] font-medium text-[#5F564F]">Total Estimasi Bersih ({currency})</span>
            <span className="text-[22px] font-bold text-[#131110]">
              {formatPrice(totalIdr, totalUsd)}
            </span>
          </div>

          <div className="text-[11px] text-[#22C55E] font-medium pb-4">
            ✓ Bebas biaya konsolidasi untuk {totalItems} barang
          </div>

          <button
            type="button"
            disabled={cart.length === 0}
            onClick={handleCheckout}
            className="w-full h-[50px] bg-[#fec201] hover:bg-[#eab300] disabled:opacity-40 text-[#131110] text-[13.5px] font-bold rounded-[2px] transition-all hover:scale-101 active:scale-99 cursor-pointer flex justify-center items-center gap-2 shadow-lg"
          >
            <span>Konfirmasi via WhatsApp Traveler</span>
            <svg viewBox="0 0 12 12" className="w-[12px] h-[12px] text-[#131110]" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M2.5 6h7m-3-3 3 3-3 3" />
            </svg>
          </button>
          <div className="text-center text-[9.5px] tracking-[1.2px] text-[#5F564F] uppercase pt-2.5">
            TANPA KARTU KREDIT HARI INI · BAYAR SETELAH DIKONFIRMASI
          </div>
        </div>
      </div>
    </div>
  );
}
