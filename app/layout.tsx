import React from "react";

import type { Metadata } from "next";
import "@/app/globals.css"
import { Allerta_Stencil as mainFont } from "next/font/google";

import { Providers } from "@/providers/Providers";

export const metadata: Metadata = {
  title: "Minca",
  description: "Descubra nossa paixão pelos vinhos naturais.",
};

const inter = mainFont({
  subsets: ["latin"],
  weight: "400",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-neutral text-md`}>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
}

