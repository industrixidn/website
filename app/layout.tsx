import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from './theme/ThemeProvider'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://industrix.com'),
  title: {
    default: 'Industrix - Industrial Digital Transformation',
    template: '%s | Industrix'
  },
  description: 'Transform your industrial operations with smart digital solutions. Specializing in equipment tracking, fuel monitoring, and enterprise integration for agriculture, mining, and logistics.',
  keywords: ['industrial automation', 'digital transformation', 'equipment tracking', 'fuel monitoring', 'IoT solutions', 'Indonesia', 'agriculture', 'mining', 'logistics'],
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
    url: 'https://industrix.com',
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