"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

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

export interface ProductItem {
  id: string;
  name: string;
  meta: string;
  priceIdr: number;
  priceUsd: number;
  image: string;
  flag: string;
  code: string;
  category: string;
  storeName?: string;
  inStock?: boolean;
  slotsLeft?: number;
  description?: string;
}

interface JastipContextType {
  currency: "IDR" | "USD";
  toggleCurrency: () => void;
  setCurrency: (c: "IDR" | "USD") => void;
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  selectedProduct: ProductItem | null;
  setSelectedProduct: (p: ProductItem | null) => void;
  isFeeCalcOpen: boolean;
  setIsFeeCalcOpen: (open: boolean) => void;
  isRequestModalOpen: boolean;
  setIsRequestModalOpen: (open: boolean) => void;
  requestUrl: string;
  setRequestUrl: (url: string) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  formatPrice: (priceIdr: number, priceUsd: number) => string;
  slotsClaimed: number;
  claimSlot: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

const JastipContext = createContext<JastipContextType | undefined>(undefined);

export function JastipProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<"IDR" | "USD">("IDR");
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: "bag-1",
      name: "Tas Bahu Kulit Terstruktur",
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
      name: "Kotak Hadiah Tokyo Banana & KitKat",
      meta: "TOKYO · JP",
      priceIdr: 385000,
      priceUsd: 24,
      image: "/images/tokyo_banana.jpg",
      flag: "🇯🇵",
      code: "JP",
      quantity: 1,
    },
  ]);
  const [wishlist, setWishlist] = useState<string[]>(["nb-530-1", "margiela-replica-1"]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFeeCalcOpen, setIsFeeCalcOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [requestUrl, setRequestUrl] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [slotsClaimed, setSlotsClaimed] = useState(142);
  const [searchQuery, setSearchQuery] = useState("");

  // Keyboard shortcut listener: Cmd+K / Ctrl+K opens quick request
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsRequestModalOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "IDR" ? "USD" : "IDR"));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((cur) => (cur === msg ? null : cur));
    }, 3800);
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        showToast("Barang dihapus dari daftar keinginan");
        return prev.filter((item) => item !== id);
      } else {
        showToast("Barang disimpan ke daftar keinginan ❤️");
        return [...prev, id];
      }
    });
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
    showToast(`"${item.name}" ditambahkan ke keranjang ✨`);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
    showToast("Barang dihapus dari keranjang pre-order");
  };

  const claimSlot = () => {
    if (slotsClaimed < 200) {
      setSlotsClaimed((prev) => prev + 1);
      showToast("Slot tersimpan! Rute traveler telah dikonfirmasi.");
    }
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
        updateQuantity,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        selectedProduct,
        setSelectedProduct,
        isFeeCalcOpen,
        setIsFeeCalcOpen,
        isRequestModalOpen,
        setIsRequestModalOpen,
        requestUrl,
        setRequestUrl,
        toastMessage,
        showToast,
        formatPrice,
        slotsClaimed,
        claimSlot,
        searchQuery,
        setSearchQuery,
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
