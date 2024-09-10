'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'
import { login, signup } from './actions'

type AuthButtonProps = {
  action: typeof login | typeof signup
  children: React.ReactNode
  variant: 'login' | 'signup'
}

export default function AuthButton({ action, children, variant }: AuthButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button 
      type="submit"
      formAction={action}
      disabled={pending}
      className={`w-full py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-200 ${
        variant === 'login' 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-secondary text-secondary-foreground'
      } ${pending ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      {pending ? 'Loading...' : children}
    </button>
  )
}