import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Suspense } from 'react'

import { signup } from '../actions'
import AuthButton from '../AuthButton'
import SimpleMessage from '../SimpleMessage'
import ErrorMessage from '../ErrorMessage'

const SignUpPage = () => {
  return (
    <main className='flex items-center justify-center min-h-screen relative bg-secondary dark:bg-primary p-4'>
      <Link href="/" className="absolute top-6 left-6 text-primary dark:text-secondary hover:opacity-80 transition-opacity">
        <Image src="/Logo1.png" alt="Minca" width={200} height={200} priority />
      </Link>
      <div className="w-full max-w-md bg-clear dark:bg-background rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-primary dark:text-secondary mb-8">Registrar à Minca</h1>
        <Suspense>
          <SimpleMessage />
          <ErrorMessage />
        </Suspense>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral dark:text-neutral-foreground mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 bg-clear dark:bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-neutral dark:text-neutral-foreground mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="w-full px-3 py-2 bg-clear dark:bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <AuthButton action={signup} variant="signup">Sign up</AuthButton>
        </form>
        <p className="mt-4 text-center text-sm text-neutral dark:text-neutral-foreground">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-primary dark:text-secondary hover:underline">
            Log in
          </Link>
        </p>
        <p className="mt-4 text-center text-sm text-neutral dark:text-neutral-foreground">
          By signing up, you agree to our{' '}
          <Link href="/terms" className="text-primary dark:text-secondary hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-primary dark:text-secondary hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </main>
  )
}

export default SignUpPage