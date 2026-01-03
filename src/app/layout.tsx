import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";
import { Noto_Sans_SC } from "next/font/google";

import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });
const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "600"] });
const noto = Noto_Sans_SC({ weight: ["400", "500", "700"], subsets: ["latin"] });
  
export const metadata = {
  title: "Jingyuan Liu — AI Ethics & Sociology",
  description: "Interdisciplinary researcher focusing on AI, privacy, and culture.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="relative text-foreground antialiased">
        
        {/* 🌫️ 全局底部背景图 */}
        <div
          aria-hidden
          className="
            pointer-events-none
            fixed inset-0
            z-0
            flex items-end justify-center
          "
        >
          <img
            src="/bg.jpg"
            alt=""
            className="
              w-[1700px]
              max-w-none
              opacity-30
              translate-y-20
              select-none
            "
          />
        </div>

        {/* 🌱 内容层 */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}
