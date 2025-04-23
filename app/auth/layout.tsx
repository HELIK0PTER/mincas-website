import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-neutral text-md">
      <Link
        href="/"
        className="z-10 absolute top-6 left-6 text-primary dark:text-secondary hover:opacity-80 transition-opacity"
      >
        <Image src="/Logo1.png" alt="Minca" width={200} height={200} priority />
      </Link>
      <div className="w-full">
        <main className="flex items-center justify-center min-h-screen relative bg-secondary dark:bg-primary p-4">
          <div className="z-20 w-full max-w-md bg-background rounded-lg shadow-md p-6">
            {children}
            <Link
              href="/"
              className="flex items-center gap-2 mt-8 text-primary dark:text-secondary hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-primary dark:text-secondary hover:opacity-80 transition-opacity">
                Voltar para a página inicial
              </span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
