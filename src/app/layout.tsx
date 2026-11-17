import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { JastipProvider } from "@/context/JastipContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JASTIP — Belanja dari Seluruh Dunia, Diantar ke Pintu Anda",
  description:
    "Titip barang apa pun dari mana saja di dunia. Dibeli langsung di toko oleh traveler terverifikasi, diperiksa, dan dibawa pulang — tanpa freight forwarder, tanpa ribet.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#EDE4DD] text-[#131110]">
        <JastipProvider>{children}</JastipProvider>
      </body>
    </html>
  );
}
