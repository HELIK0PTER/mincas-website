"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const logout = () => {
    router.push("/auth/logout");
  };

  return (
    <button
      onClick={logout}
      className="text-primary dark:text-secondary hover:underline"
    >
      Logout
    </button>
  );
}
