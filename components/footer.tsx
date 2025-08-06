import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold">PT. Harrasih</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Penyedia solusi digital terpercaya yang membantu bisnis Anda berkembang 
              di era digital dengan teknologi terdepan.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/ricki.silaban.1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ricky-steven-44a8a0292" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/harrasih" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Desktop Application
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Custom Project
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/owner" className="hover:text-white transition-colors">
                  Profil Owner
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Paket & Harga
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Jakarta Timur, Indonesia</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+6287818894504" className="hover:text-white transition-colors">
                  +62 878 1889 4504
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:harrasih@idm.my.id" className="hover:text-white transition-colors">
                  harrasih@idm.my.id	
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} PT. Harrasih. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}