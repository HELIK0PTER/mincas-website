import React from "react";

import Sidebar from "./Sidebar";
import Footer from "@/components/organisms/Footer";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="z-10 flex flex-col flex-1 justify-between min-h-screen">
        <main className="flex flex-col flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}