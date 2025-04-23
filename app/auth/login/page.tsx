import Link from "next/link";
import React from "react";
import { Suspense } from "react";

import { login } from "../actions";
import AuthButton from "../AuthButton";
import SimpleMessage from "../SimpleMessage";
import ErrorMessage from "../ErrorMessage";
import OneTap from "../OneTapGoogle";

import * as Form from "../auth-form"

const LoginPage = () => {
  return (
    <>
        <h1 className="text-3xl font-bold text-center text-primary dark:text-secondary mb-8">
          Conectar à Minca
        </h1>
        <Suspense>
          <SimpleMessage />
          <ErrorMessage />
        </Suspense>
        <form className="space-y-6">
          <div>
            <Form.AuthInput
              id="email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <Form.AuthInput
              id="password"
              label="Senha"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>
          <AuthButton action={login} variant="login">
            Log in
          </AuthButton>
          <OneTap />
        </form>
        <p className="mt-4 text-center text-sm text-neutral dark:text-neutral-foreground">
          Não tem conta ?{" "}
          <Link
            href="/auth/signup"
            className="text-primary dark:text-secondary hover:underline"
          >
            Registrar-se
          </Link>
        </p>
    </>
  );
};

export default LoginPage;
