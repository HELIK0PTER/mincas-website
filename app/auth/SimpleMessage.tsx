'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ErrorMessage() {
  const [message, setMessage] = useState<string | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const message = searchParams.get('message')
    if (message) {
      setMessage(decodeURIComponent(message))
    }
  }, [searchParams])

  if (!message) return null

  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
      <span className="block sm:inline">{message}</span>
    </div>
  )
}