import type { Metadata } from 'next'
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '@/modules/header/Header'
import Footer from '@/modules/footer/Footer';

export const metadata: Metadata = {
  title: 'Sweat At Home | Pilihan Personal Trainer Terpercaya #1',
  description: 'Sweat At Home | Pilihan Personal Trainer Terpercaya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
