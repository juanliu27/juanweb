import type { ReactNode } from "react";
import { IBM_Plex_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";

const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "600"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600"] });

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <div className={inter.className}>{children}</div>;
}
