import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background text-neutral text-md">
      <div className="w-full">{children}</div>
    </div>
  );
}
