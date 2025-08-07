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
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://harrasih.com',
    title: 'PT.Harrasih - Solusi Digital Terpercaya',
    description: 'Penyedia solusi digital terpercaya untuk website, aplikasi mobile, dan sistem informasi bisnis.',
    siteName: 'PT.Harrasih',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT.Harrasih - Solusi Digital Terpercaya',
    description: 'Penyedia solusi digital terpercaya untuk website, aplikasi mobile, dan sistem informasi bisnis.',
  },
  generator: 'v0.dev',

 
  icons: {
    icon: '/images/favicon.ico',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />

        
      </body>
    </html>
  )
}
