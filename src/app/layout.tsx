import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/layout/Header'
import MenuBar from '@/components/layout/MenuBar'

export const metadata: Metadata = {
  title: 'AXI News',
  description: 'AXI News Homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Header />
        <MenuBar />
        {children}
      </body>
    </html>
  )
}