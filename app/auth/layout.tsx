import type { Metadata } from "next";
import "@/app/globals.css"
import { Allerta_Stencil } from "next/font/google";

export const metadata: Metadata = {
  title: "Minca",
  description: "Descobra nossa paixão para os vinhos naturais.",
};

const inter = Allerta_Stencil({
  subsets: ["latin"],
  weight: "400",
});

type LayoutProps = {
  children: React.ReactNode;
  isAuthPage?: boolean;
};

export default function CombinedLayout(
  { 
    children, 
  }: 
  {
    children: React.ReactNode,
  }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
          <div className="flex min-h-screen bg-background text-neutral text-md">
            <div className="w-full">
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}