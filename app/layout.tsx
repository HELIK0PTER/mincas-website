import type { Metadata } from "next";
import { Allerta_Stencil } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Background from "@/components/organisms/Background";
import Content from "@/components/templates/Content";

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
        scroll-smooth
        `}>
      <body className={`${inter.className} 
        flex flex-col 
        min-h-screen 
        bg-background
        text-neutral text-md
        overflow-y-visible
      `}>
        <Content>
          {children}
        </Content>
      </body>
    </html>
  );
}
