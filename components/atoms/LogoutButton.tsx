"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const router = useRouter();

  const logout = () => {
    router.push("/auth/logout");
  };

  return (
    <Button
      onClick={logout}
      variant="link"
      className="text-primary dark:text-secondary hover:underline"
    >
      Logout
    </Button>
  );
}
