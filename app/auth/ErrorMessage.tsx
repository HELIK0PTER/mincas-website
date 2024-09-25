'use client'

import { useEffect, useState } from 'react'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ErrorMessage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const error = searchParams.get('error')
    if (error) {
      setErrorMessage(decodeURIComponent(error))
    }
  }, [searchParams])

  if (!errorMessage) return null

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
      <strong className="font-bold">Error: </strong>
      <Suspense>
        <span className="block sm:inline">{errorMessage}</span>
      </Suspense>
    </div>
  )
}