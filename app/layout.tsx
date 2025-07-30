import "./globals.css"
import { Inter } from "next/font/google"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SaintVisionAI™ - Divine AI Companion",
  description:
    "Production-ready AI platform with Builder.io integration. Transform your business with enterprise-grade AI solutions.",
  keywords: [
    "saintvisionai",
    "ai platform",
    "enterprise ai",
    "automation",
    "gpt-4"
  ],
  authors: [{ name: "Saint Vision Group" }],
  creator: "Saint Vision Group",
  publisher: "Saint Vision Group",
  openGraph: {
    title: "SaintVisionAI™ - Divine AI Companion",
    description: "Production-ready AI platform with Builder.io integration",
    url: "https://saintvisionai.com",
    siteName: "SaintVisionAI",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F90fa3cc4d85547ce9ae69ad15ae19bb2",
        width: 1200,
        height: 630,
        alt: "SaintVisionAI - Divine AI Companion"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SaintVisionAI™ - Divine AI Companion",
    description: "Production-ready AI platform with Builder.io integration",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F90fa3cc4d85547ce9ae69ad15ae19bb2"
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code"
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10161C" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="__next">{children}</div>
      </body>
    </html>
  )
}
