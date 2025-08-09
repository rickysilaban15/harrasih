import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'PT.Harrasih - Solusi Digital Terpercaya | Website & Aplikasi Development',
  description: 'PT.Harrasih adalah penyedia solusi digital terpercaya yang mengkhususkan diri dalam pengembangan website, aplikasi mobile, dan sistem informasi untuk membantu bisnis Anda berkembang di era digital.',
  keywords: 'web development, aplikasi mobile, sistem informasi, e-commerce, company profile, digital solutions, jakarta, indonesia',
  authors: [{ name: 'PT.Harrasih' }],
  creator: 'PT.Harrasih',
  publisher: 'PT.Harrasih',
  robots: 'index, follow',
  metadataBase: new URL('https://harrasih.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://harrasih.vercel.app',
    title: 'PT.Harrasih - Solusi Digital Terpercaya',
    description: 'Penyedia solusi digital terpercaya untuk website, aplikasi mobile, dan sistem informasi bisnis.',
    siteName: 'PT.Harrasih',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PT.Harrasih'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT.Harrasih - Solusi Digital Terpercaya',
    description: 'Penyedia solusi digital terpercaya untuk website, aplikasi mobile, dan sistem informasi bisnis.',
    images: ['/images/og-image.png']
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/apple-touch-icon.png',
  }
}

// JSON-LD Schema
function JsonLd() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PT.Harrasih',
    url: 'https://harrasih.vercel.app',
    logo: 'https://harrasih.vercel.app/images/logo.png',
    sameAs: [
      'https://www.facebook.com/ricki.silaban.1',
      'https://www.instagram.com/harrasih',
      'https://www.linkedin.com/in/ricky-steven-44a8a0292',
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <JsonLd />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
