import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-neutral text-md">
      <Link
        href="/"
        className="z-20 absolute top-6 left-6 text-primary dark:text-secondary hover:opacity-80 transition-opacity"
      >
        <Image src="/Logo1.png" alt="Minca" width={200} height={200} priority />
      </Link>
      <div className="w-full">
        <main className="flex items-center justify-center min-h-screen relative bg-secondary dark:bg-primary p-4">
          <div className="w-full max-w-md bg-background rounded-lg shadow-md p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
