import type { Metadata } from "next";
import "@/app/globals.css"
import { Allerta_Stencil as mainFont } from "next/font/google";
import Sidebar from "@/components/organisms/Sidebar";
import Footer from "@/components/organisms/Footer";

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
        <div className="flex h-screen overflow-y-visible">
          <Sidebar />
          <div className="flex flex-col flex-1 justify-between overflow-auto scroll-smooth">
            <main className="flex flex-col flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}