import Link from "next/link";
import React from "react";
import { Suspense } from "react";

import { signup } from "../actions";
import AuthButton from "../AuthButton";
import SimpleMessage from "../SimpleMessage";
import ErrorMessage from "../ErrorMessage";
import * as Form from "../auth-form"
import OneTapGoogle from "../OneTapGoogle";
const SignUpPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-primary dark:text-secondary mb-8">
        Registrar à Minca
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
            type="text"
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
            autoComplete="new-password"
            required
          />
        </div>
        <AuthButton action={signup} variant="signup">
          Sign up
        </AuthButton>
        <OneTapGoogle variant="signup" />
      </form>
      <p className="mt-4 text-center text-sm text-neutral dark:text-neutral-foreground">
        Já tem uma conta?{" "}
        <Link
          href="/auth/login"
          className="text-primary dark:text-secondary hover:underline"
        >
          Log in
        </Link>
      </p>
      <p className="mt-4 text-center text-sm text-neutral dark:text-neutral-foreground">
        Ao se registrar, você concorda com nossos{" "}
        <Link
          href="/legal/terms"
          className="text-primary dark:text-secondary hover:underline"
        >
          Termos de Serviço
        </Link>{" "}
        e{" "}
        <Link
          href="/legal/legal-notices/privacy"
          className="text-primary dark:text-secondary hover:underline"
        >
          Política de Privacidade
        </Link>
      </p>
    </>
  );
};

export default SignUpPage;
