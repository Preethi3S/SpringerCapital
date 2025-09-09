import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Next Sales Dashboard',
  description: 'Dashboard showing sales over multiple years',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  )
}
