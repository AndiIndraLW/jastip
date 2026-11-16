"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  meta: string;
  priceIdr: number;
  priceUsd: number;
  image: string;
  flag: string;
  code: string;
  quantity: number;
}

interface JastipContextType {
  currency: "IDR" | "USD";
  toggleCurrency: () => void;
  setCurrency: (c: "IDR" | "USD") => void;
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isFeeCalcOpen: boolean;
  setIsFeeCalcOpen: (open: boolean) => void;
  isRequestModalOpen: boolean;
  setIsRequestModalOpen: (open: boolean) => void;
  requestUrl: string;
  setRequestUrl: (url: string) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  formatPrice: (priceIdr: number, priceUsd: number) => string;
}

const JastipContext = createContext<JastipContextType | undefined>(undefined);

export function JastipProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<"IDR" | "USD">("IDR");
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: "bag-1",
      name: "Structured Leather Shoulder Bag",
      meta: "SEOUL · KR",
      priceIdr: 1890000,
      priceUsd: 118,
      image: "/images/bag.jpg",
      flag: "🇰🇷",
      code: "KR",
      quantity: 1,
    },
    {
      id: "tokyo-banana-1",
      name: "Tokyo Banana & Kit Kat Gift Box",
      meta: "TOKYO · JP",
      priceIdr: 385000,
      priceUsd: 24,
      image: "/images/tokyo_banana.jpg",
      flag: "🇯🇵",
      code: "JP",
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFeeCalcOpen, setIsFeeCalcOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [requestUrl, setRequestUrl] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "IDR" ? "USD" : "IDR"));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((cur) => (cur === msg ? null : cur));
    }, 3500);
  };

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    showToast(`Added "${item.name}" to pre-order bag`);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const formatPrice = (priceIdr: number, priceUsd: number) => {
    if (currency === "USD") {
      return `$${priceUsd.toLocaleString()}`;
    }
    return `Rp ${priceIdr.toLocaleString("id-ID")}`;
  };

  return (
    <JastipContext.Provider
      value={{
        currency,
        toggleCurrency,
        setCurrency,
        cart,
        addToCart,
        removeFromCart,
        isCartOpen,
        setIsCartOpen,
        isFeeCalcOpen,
        setIsFeeCalcOpen,
        isRequestModalOpen,
        setIsRequestModalOpen,
        requestUrl,
        setRequestUrl,
        toastMessage,
        showToast,
        formatPrice,
      }}
    >
      {children}
    </JastipContext.Provider>
  );
}

export function useJastip() {
  const context = useContext(JastipContext);
  if (!context) {
    throw new Error("useJastip must be used within a JastipProvider");
  }
  return context;
}

