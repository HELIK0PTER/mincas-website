import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Content from "@/components/layout/Content";

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
      <body className={cn(font.className, `flex h-screen`, `bg-zinc-950 text-white`)}>
          <header className="
            flex flex-col items-center
            h-full w-52 z-50 py-[10px]
            border-r-2 border-zinc-800
            ">
            <div>logo</div>
            <div className="flex-1 flex flex-col justify-center">
              <div>menu</div>
            </div>
            <div>Login</div>
          </header>
          <div className="flex flex-col flex-1 items-center overflow-y-auto min-h-screen z-0">
            <Content>
              {children}
            </Content>
            <footer>
              footer
            </footer>
          </div>
      </body>
    </html>
  );
}
