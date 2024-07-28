import React from 'react'

export default function Content(
  {children}: Readonly<{children: React.ReactNode}>
) {
  return (
    <div
      className={`
        flex flex-col items-center py-5
        overflow-y-auto h-full w-full z-0
      `}
    >
      {children}
    </div>
  )
}
