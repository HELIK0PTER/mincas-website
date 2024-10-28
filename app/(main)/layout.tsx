import type { Metadata } from "next";
import "@/app/globals.css"
import { Allerta_Stencil as mainFont } from "next/font/google";
import Sidebar from "@/app/(main)/_components/Sidebar";
import Footer from "@/components/organisms/Footer";

import {NextUIProvider} from "@nextui-org/react";

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
      <NextUIProvider>
        <Sidebar />
        <div className="z-10 flex flex-col flex-1 justify-between min-h-screen">
          <main className="flex flex-col flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </NextUIProvider>
      </body>
    </html>
  );
}