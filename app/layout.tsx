import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const font = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinhos Minca",
  description: "Vinhos Biodynamicos do Brasil",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="br">
      <body className={cn(font.className, `min-h-screen flex flex-col items-center`, `bg-zinc-950 text-white`)}>
        <div className={`flex flex-col flex-1 items-center relative w-full`}>
          <header className="
            fixed top-0 left-0 
            flex justify-around items-center
            w-full h-14 z-50 pt-[10px]
            border-b-2 border-zinc-800 
            backdrop-blur-[2px] bg-blend-overlay
            ">
            <div>Mincas</div>
            <div>Login</div>
          </header>
          <div className="flex flex-col items-center mt-14 overflow-y-auto h-[1000px] z-0">
            {children}
          </div>
        </div>
        <footer>
          footer
        </footer>
      </body>
    </html>
  );
}
