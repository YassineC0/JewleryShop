import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "STRASS SHOP | Bijouterie de Luxe",
  description:
    "Découvrez l'excellence en bijouterie avec STRASS SHOP. Tradition et élégance réunies dans chaque création.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} font-sans`}>{children}</body>
    </html>
  )
}