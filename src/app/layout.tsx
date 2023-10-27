import './globals.css'
import type { Metadata } from 'next'
import Wrapper from './wrapper'

export const metadata: Metadata = {
  title: "ShakedKod's Podcasts",
  description: 'The home for Shakedkod\'s podcasts',
}

import localFont from 'next/font/local'

const archayFont = localFont({
    src: './fonts/archay.ttf',
    variable: '--font-archay',
})

export default function RootLayout({children}: {children: React.ReactNode})
{
  return (
    <html lang="en" className={archayFont.variable}>
      <body className="bg-blue-70 text-white hide-scrollbar">
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  )
}
