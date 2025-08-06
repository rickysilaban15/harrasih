'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/logo.png"
                alt="PT. Harrasih Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-gray-900">PT. Harrasih</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${isActive('/')} transition-colors`}>
              Beranda
            </Link>
            <Link href="/about" className={`${isActive('/about')} transition-colors`}>
              Tentang Kami
            </Link>
            <Link href="/owner" className={`${isActive('/owner')} transition-colors`}>
              Profil Owner
            </Link>
            <Link href="/services" className={`${isActive('/services')} transition-colors`}>
              Layanan
            </Link>
            <Link href="/portfolio" className={`${isActive('/portfolio')} transition-colors`}>
              Portofolio
            </Link>
            <Link href="/pricing" className={`${isActive('/pricing')} transition-colors`}>
              Paket & Harga
            </Link>
            <Link href="/blog" className={`${isActive('/blog')} transition-colors`}>
              Blog
            </Link>
            <Link href="/contact" className={`${isActive('/contact')} transition-colors`}>
              Kontak
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 hidden md:flex">
                Konsultasi Gratis
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/" 
                className={`${isActive('/')} transition-colors text-left`}
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                href="/about" 
                className={`${isActive('/about')} transition-colors text-left`}
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link 
                href="/owner" 
                className={`${isActive('/owner')} transition-colors text-left`}
                onClick={() => setIsMenuOpen(false)}
              >
                Profil Owner
              </Link>
              <Link 
                href="/services" 
                className={`${isActive('/services')} transition-colors text-left`}
                onClick={() => setIsMenuOpen(false)}
              >
                Layanan
              </Link>
              <Link 
                href="/portfolio" 
                className={`${isActive('/portfolio')} transition-colors text-left`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portofolio
              </Link>
              <Link 
                href="/pricing" 
                className={`${isActive('/pricing')} transition-colors text-left`}
                onClick={() => setIsMenuOpen(false)}
              >
                Paket & Harga
              </Link>
              <Link 
                href="/blog" 
                className={`${isActive('/blog')} transition-colors text-left`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className={`${isActive('/contact')} transition-colors text-left`}
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  Konsultasi Gratis
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}