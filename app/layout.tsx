import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from './theme/ThemeProvider'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: {
    default: 'Industrix - Industrial Digital Transformation',
    template: '%s | Industrix'
  },
  description: 'Transform your industrial operations with smart digital solutions. Specializing in equipment tracking, resource monitoring, and enterprise integration for agriculture, mining, and logistics.',
  keywords: ['industrial automation', 'digital transformation', 'equipment tracking', 'resource monitoring', 'IoT solutions', 'Indonesia', 'agriculture', 'mining', 'logistics'],
  authors: [{ name: 'Industrix' }],
  creator: 'Industrix',
  publisher: 'Industrix',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000',
    title: 'Industrix - Industrial Digital Transformation',
    description: 'Transform your industrial operations with smart digital solutions for agriculture, mining, and logistics in Indonesia.',
    siteName: 'Industrix',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Industrix - Industrial Digital Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrix - Industrial Digital Transformation',
    description: 'Transform your industrial operations with smart digital solutions for agriculture, mining, and logistics in Indonesia.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}