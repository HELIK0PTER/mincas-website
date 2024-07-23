import type { Metadata } from "next";
import { Allerta_Stencil } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/organisms/Sidebar";
import Footer from "@/components/organisms/Footer";

const inter = Allerta_Stencil({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mincas",
  description: "Descobra nossa paixão para os vinhos naturais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`
        
        `}>
      <body className={`${inter.className} 
        flex
        h-screen
        bg-background
        text-neutral text-md
        overflow-y-visible
      `}>
        <Sidebar />
        <div className="flex flex-col flex-1 justify-between overflow-auto scroll-smooth">
          <div className="flex flex-col flex-1 py-10">
            {children}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
