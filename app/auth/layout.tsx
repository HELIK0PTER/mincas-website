import type { Metadata } from "next";
import "@/app/globals.css"
import { Allerta_Stencil } from "next/font/google";

export const metadata: Metadata = {
  title: "Mincas",
  description: "Descobra nossa paixão para os vinhos naturais.",
};

const inter = Allerta_Stencil({
  subsets: ["latin"],
  weight: "400",
});

type LayoutProps = Readonly<{
  children: React.ReactNode;
  isAuthPage?: boolean;
}>;

export default function CombinedLayout({ children, isAuthPage = false }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {isAuthPage ? (
          <div className="flex min-h-screen bg-background text-neutral text-md">
            <div className="w-full">
              {children}
            </div>
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}