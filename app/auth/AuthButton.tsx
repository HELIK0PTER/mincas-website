"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";

type AuthButtonProps = {
  action: typeof login | typeof signup;
  children: React.ReactNode;
  variant: "login" | "signup";
};

export default function AuthButton({
  action,
  children,
  variant,
}: AuthButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      formAction={action}
      disabled={pending}
      variant={variant === "login" ? "default" : "secondary"}
      className={`w-full py-2 px-4 rounded-md transition-colors duration-200
        ${pending ? "opacity-70 cursor-not-allowed" : ""}`}
    >
      {pending ? "Loading..." : children}
    </Button>
  );
}
