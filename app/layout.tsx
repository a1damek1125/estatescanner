import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EstateScanner - Auction Intelligence dla nieruchomości',
  description: 'Jedno miejsce dla wszystkich licytacji nieruchomości w Hiszpanii. AI czyści i ocenia okazje, Ty dostajesz gotowe alerty.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}