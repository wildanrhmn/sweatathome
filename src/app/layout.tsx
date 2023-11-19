import type { Metadata } from 'next'
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '@/modules/header/Header'
import Footer from '@/modules/footer/Footer';

export const metadata: Metadata = {
  title: 'Your Private Coach at Home | Sweat at Home',
  description:'Sweat at Home, dirumah aja, yuk!',
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
