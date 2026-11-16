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
  title: "JASTIP — Shop the World, Delivered to You",
  description:
    "Tell us what you want from anywhere on earth. We buy it in store, inspect it, and bring it home with a verified traveler — no freight forwarders, no guesswork.",
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
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#EDE4DD] text-[#131110]">
        <JastipProvider>{children}</JastipProvider>
      </body>
    </html>
  );
}
