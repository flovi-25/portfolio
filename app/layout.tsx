import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import localFont from "next/font/local"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const geometria = localFont({
  src: [
    {
      path: "./fonts/Geometria-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Geometria-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Geometria-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Geometria-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geometria",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Florence Viprey - Portfolio",
  description: "Chef de projet en Recherche et Développement en Agro-alimentaire",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} ${geometria.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
