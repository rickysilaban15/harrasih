// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harrasih - Solusi Teknologi & Inovasi',
  description:
    'Harrasih adalah penyedia solusi teknologi dan inovasi untuk bisnis Anda. Menghadirkan layanan modern dengan desain elegan dan performa tinggi.',
  keywords: ['Harrasih', 'Teknologi', 'Inovasi', 'Bisnis', 'Website', 'Digital'],
  authors: [{ name: 'Harrasih', url: 'https://harrasih.vercel.app' }],
  openGraph: {
    title: 'Harrasih - Solusi Teknologi & Inovasi',
    description:
      'Harrasih adalah penyedia solusi teknologi dan inovasi untuk bisnis Anda.',
    url: 'https://harrasih.vercel.app',
    siteName: 'Harrasih',
    images: [
      {
        url: 'https://harrasih.vercel.app/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Logo Harrasih',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  icons: {
    icon: '/images/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

// JSON-LD Schema
function JsonLd() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Harrasih',
    url: 'https://harrasih.vercel.app',
    logo: 'https://harrasih.vercel.app/logo.png',
    sameAs: [
      'href="https://www.facebook.com/ricki.silaban.1', // ganti jika ada
      'https://www.instagram.com/harrasih', // ganti jika ada
      'https://www.linkedin.com/in/ricky-steven-44a8a0292', // ganti jika ada
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  )
}
