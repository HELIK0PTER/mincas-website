"use client";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";
import React from "react";

const SignInWithGoogleButton = ({
  variant = "login",
}: {
  variant?: "login" | "signup";
}) => {
  return (
    <Button
      type="button"
      className="
      w-full
      flex items-center justify-center gap-2
      bg-white text-gray-800 border border-gray-300
      hover:bg-gray-100 transition-colors
      py-2 px-4 rounded-md
      "
      onClick={() => {
        signInWithGoogle();
      }}
    >
      {variant === "login" ? "Login with Google" : "Sign up with Google"}
    </Button>
  );
};

export default SignInWithGoogleButton;