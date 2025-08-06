'use client'

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, X, ZoomIn } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Portofolio - PT. Harrasih | Proyek Website & Aplikasi Terbaik',
  description: 'Lihat koleksi proyek terbaik PT. Harrasih dalam pengembangan website, aplikasi mobile, dan sistem informasi untuk berbagai industri.',
}

// Image Modal Component
const ImageModal = ({ isOpen, onClose, image, title }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="relative w-full h-full max-w-6xl max-h-[90vh] animate-scaleIn">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-6 py-3 rounded-lg backdrop-blur-sm">
          <p className="text-lg font-medium">{title}</p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default function PortfolioPage() {
  const [portfolioFilter, setPortfolioFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageClick = (item) => {
    setSelectedImage(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedImage(null), 300)
  }

  const portfolioItems = [
    {
      id: 1,
      slug: "library-information-system",
      title: "Library Information System",
      category: "web",
      industry: "Education",
      description: "Sistem manajemen perpustakaan lengkap dengan autentikasi pengguna dan pelacakan buku",
      image: "/images/Library-Information-System.png",
      badge: "Web App",
      badgeColor: "bg-green-100 text-green-800",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      features: ["User Authentication", "Book Tracking", "Library Management", "Admin Panel"],
      client: "PT. Harrasih",
      duration: "3 Bulan",
      year: "2024",
      link: "https://ricky-perpustakaan.kesug.com"
    },
    {
      id: 2,
      slug: "coffee-shop-landing-page",
      title: "Coffee Shop Landing Page",
      category: "web",
      industry: "Food & Beverage",
      description: "Halaman landing responsif modern untuk bisnis kedai kopi",
      image: "/images/Coffee-Shop.png",
      badge: "Landing Page",
      badgeColor: "bg-orange-100 text-orange-800",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Responsive Design", "Modern UI", "Mobile Friendly", "Fast Loading"],
      client: "Ngopi Coffee Shop",
      duration: "1 Bulan",
      year: "2024",
      link: "https://rickysilaban15.github.io/clone-ngopi"
    },
    {
      id: 3,
      slug: "ecommerce-website",
      title: "E-Commerce Website",
      category: "ecommerce",
      industry: "Retail Industry",
      description: "Platform e-commerce berfitur lengkap dengan integrasi pembayaran",
      image: "/images/E-commerce.png",
      badge: "E-Commerce",
      badgeColor: "bg-blue-100 text-blue-800",
      technologies: ["React", "Node.js", "MongoDB"],
      features: ["Payment Integration", "Product Management", "Shopping Cart", "Order Tracking"],
      client: "Online Store",
      duration: "4 Bulan",
      year: "2024",
      link: "https://studio--e-commerce-storefront-viewer.us-central1.hosted.app/"
    },
    {
      id: 4,
      slug: "restaurant-landing-page",
      title: "Restaurant Landing Page",
      category: "web",
      industry: "Food & Beverage",
      description: "Website restoran elegan dengan menu dan sistem reservasi",
      image: "/images/Restaurant-Landing-Page.png",
      badge: "Restaurant",
      badgeColor: "bg-red-100 text-red-800",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Menu Display", "Reservation System", "Gallery", "Contact Info"],
      client: "My Restaurant",
      duration: "2 Bulan",
      year: "2024",
      link: "https://rickysilaban15.github.io/my-resto"
    },
    {
      id: 5,
      slug: "portfolio-website",
      title: "Portfolio Website",
      category: "web",
      industry: "Personal Branding",
      description: "Portofolio pribadi yang menampilkan proyek dan keahlian",
      image: "/images/portfolio.png",
      badge: "Portfolio",
      badgeColor: "bg-purple-100 text-purple-800",
      technologies: ["React", "Tailwind", "TypeScript"],
      features: ["Project Showcase", "Skills Display", "Contact Form", "Responsive Design"],
      client: "Personal Project",
      duration: "2 Bulan",
      year: "2024",
      link: "https://kive-silaban.free.nf"
    },
    {
      id: 6,
      slug: "data-mining-application",
      title: "Data Mining Application",
      category: "web",
      industry: "Data Analytics",
      description: "Aplikasi analisis clustering yang dibangun dengan Streamlit",
      image: "/images/datamining.png",
      badge: "Data Science",
      badgeColor: "bg-indigo-100 text-indigo-800",
      technologies: ["Python", "Streamlit", "Pandas"],
      features: ["Data Clustering", "Analytics Dashboard", "Interactive Charts", "Export Results"],
      client: "Research Project",
      duration: "3 Bulan",
      year: "2024",
      link: "https://clustering-datamining-ri.streamlit.app/"
    },
    {
      id: 7,
      slug: "library-management-system",
      title: "Library Management System",
      category: "web",
      industry: "Education",
      description: "Manajemen perpustakaan online dengan sistem autentikasi",
      image: "/images/sistem-library.png",
      badge: "Management System",
      badgeColor: "bg-green-100 text-green-800",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      features: ["User Management", "Book Catalog", "Borrowing System", "Reports"],
      client: "Educational Institution",
      duration: "4 Bulan",
      year: "2024",
      link: "https://laban.wuaze.com/LibraryManagement/login.php"
    },
    {
      id: 8,
      slug: "student-attendance-system",
      title: "Student Attendance System",
      category: "desktop",
      industry: "Education",
      description: "Aplikasi desktop untuk absensi siswa menggunakan QR code dan verifikasi foto",
      image: "/images/Student-Attendance-System.png",
      badge: "Desktop App",
      badgeColor: "bg-yellow-100 text-yellow-800",
      technologies: ["Java", "SQLite", "JavaFX"],
      features: ["QR Code Scanning", "Photo Verification", "Attendance Reports", "Student Database"],
      client: "School Management",
      duration: "5 Bulan",
      year: "2024",
      link: "#"
    },
    {
      id: 9,
      slug: "stevencoffee-transaction-system",
      title: "StevenCoffe - Coffee Shop Transaction System",
      category: "desktop",
      industry: "Food & Beverage",
      description: "Sistem transaksi coffee shop lengkap dengan manajemen menu, pesanan, dan laporan penjualan menggunakan Python GUI",
      image: "/images/StevenCoffe-Coffee-Shop-Transaction-System.png",
      badge: "POS System",
      badgeColor: "bg-orange-100 text-orange-800",
      technologies: ["Python", "Tkinter", "ttkbootstrap", "SQLite"],
      features: ["Menu Management", "Order Processing", "Sales Reports", "Inventory Tracking"],
      client: "Steven Coffee",
      duration: "3 Bulan",
      year: "2024",
      link: "#"
    },
    {
      id: 10,
      slug: "sistem-informasi-dikesag",
      title: "Sistem Maintenance Laptop",
      category: "web",
      industry: "POS",
      description: "Website layanan Maintenance Laptop untuk perbaikan jangka panjang .",
      image: "/images/sistemmaintenance.png",
      badge: "Sistem Maintence",
      badgeColor: "bg-blue-100 text-blue-800",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      features: ["Health Services Info", "News Management", "Reservation System", "Patient Records"],
      client: "PT.Telkomsel",
      duration: "4 Bulan",
      year: "2024",
      link: "https://dikesag.kesug.com"
    },
    {
      id: 11,
      slug: "kosapp-manajemen-kos",
      title: "KosApp - Aplikasi Manajemen Kos",
      category: "mobile",
      industry: "Property Management",
      description: "Aplikasi mobile untuk pemilik dan penyewa kos dengan fitur manajemen kamar, pembayaran, dan notifikasi.",
      image: "/images/Screenshot 2025-07-18 024900.png",
      badge: "Mobile App",
      badgeColor: "bg-pink-100 text-pink-800",
      technologies: ["Flutter", "Firebase"],
      features: ["Room Management", "Payment System", "Notifications", "Tenant Portal"],
      client: "Property Owner",
      duration: "6 Bulan",
      year: "2024",
      link: "https://preview.builtwithrocket.new/kosapp-3n11y93"
    },
    {
      id: 12,
      slug: "topsky-topup-game",
      title: "TopSky - Website TOP-Up Game",
      category: "ecommerce",
      industry: "Gaming Voucher",
      description: "TopSky adalah platform web yang menyediakan layanan top-up game secara cepat, mudah, dan aman. Pengguna dapat membeli diamond, koin, atau voucher berbagai game populer hanya dengan beberapa klik.",
      image: "/images/topsky.png",
      badge: "Gaming",
      badgeColor: "bg-cyan-100 text-cyan-800",
      technologies: ["React", "SupaBase", "TypeScript", "Tailwind"],
      features: ["Game Selection", "Fast Top Up", "Payment Methods", "Order History"],
      client: "Gaming Community",
      duration: "5 Bulan",
      year: "2024",
      link: "https://topsky.vercel.app"
    },
    {
      id: 13,
      slug: "Website-Kosan",
      title: "CariTempat",
      category: "web",
      industry: "find a place",
      description: "Aplikasi Website Memudahkan Pengguna Untuk Mencari Tempat Tinggal Mencakup Kos,Apartemen, Dan Kontrakan",
      image: "/images/kosan.png",
      badge: "Residence",
      badgeColor: "bg-yellow-100 text-yellow-800",
      technologies: ["React", "Tailwind", "Vite", "Typescript"],
      features: ["Login page", "Find a boarding house", "Contact the owner", "Profile"],
      client: "Cari Tempat Tinggal",
      duration: "5 Bulan",
      year: "2025",
      link: "#"
    },
    {
      id: 14,
      slug: "Website-wisata",
      title: "Wisata Tarutung",
      category: "web",
      industry: "Traveling & Holiday",
      description: "Website Wisata yang memperkenalkan kota kecil di SUMUT yaitu Tarutung, suatu kota Rohani Kota wisata dengan berbagai macam Tempat menarik yang patut dikunjungi oleh traveler",
      image: "/images/wisata-tarutung.png",
      badge: "Holiday",
      badgeColor: "bg-orange-100 text-orange-800",
      technologies: ["React", "Tailwind", "Typescript"],
      features: ["HomePage", "Tarutung culture", "culinary"],
      client: "Wisata Tarutung",
      duration: "1 Bulan",
      year: "2025",
      link: "https://wisata-tarutung.vercel.app"
    },
    {
      id: 15,
      slug: "website-Company",
      title: "PT.Harrasih",
      category: "web",
      industry: "Company",
      description: "Website Company perusahaan Harrasih, Perusahaan saya Pribadi yaitu website ini sendiri.",
      image: "/images/harrasih.png",
      badge: "Company",
      badgeColor: "bg-blue-100 text-blue-800",
      technologies: ["React", "Tailwind", "Typescript"],
      features: ["Service", "Packages & Prices", "Company Profile"],
      client: "Personal",
      duration: "4 Bulan",
      year: "2024",
      link: "harrasih.vercel.app"
    },
    {
      id: 16,
      slug: "Tabunan-Pribadi",
      title: "Tabunganku",
      category: "web",
      industry: "invoice",
      description: "Aplikasi Website untuk membantu pengelolaan uang tabungan pribadi.",
      image: "/images/tabungan.png",
      badge: "personal financial records",
      badgeColor: "bg-pink-100 text-pink-800",
      technologies: ["React", "Tailwind", "Supabase", "Typescript"],
      features: ["LoginPage", "Savings input", "chart", "savings history", "target"],
      client: "tabungan",
      duration: "6 Bulan",
      year: "2024",
      link: "https://tabunganku-beta.vercel.app"
    }
  ]

  const categories = [
    { key: 'all', label: 'Semua' },
    { key: 'web', label: 'Web Apps' },
    { key: 'desktop', label: 'Desktop Apps' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'ecommerce', label: 'E-Commerce' },
  ]

  const filteredPortfolio = portfolioFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === portfolioFilter)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
              Portofolio
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Proyek yang Telah Kami Kerjakan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lihat berbagai proyek sukses yang telah kami selesaikan untuk klien dari berbagai industri 
              dengan teknologi terdepan dan solusi inovatif.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={portfolioFilter === category.key ? 'default' : 'outline'}
                onClick={() => setPortfolioFilter(category.key)}
                className={portfolioFilter === category.key ? 'bg-blue-600 hover:bg-blue-700' : ''}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 group cursor-pointer" onClick={() => handleImageClick(item)}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className={item.badgeColor}>{item.badge}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Teknologi:</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Fitur Utama:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {item.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-1">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.industry}</span>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="hover:bg-blue-50 hover:text-blue-600">
                        Lihat Detail <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPortfolio.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada proyek yang ditemukan untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pencapaian Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Angka-angka yang menunjukkan dedikasi dan kualitas kerja kami dalam memberikan solusi digital terbaik.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Proyek Selesai</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Klien Puas</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Industri Dilayani</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Tertarik dengan Proyek Kami?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mari diskusikan bagaimana kami dapat membantu mewujudkan visi digital bisnis Anda 
            dengan solusi yang tepat dan inovatif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Konsultasi Proyek
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Lihat Semua Layanan
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImage.image}
          title={selectedImage.title}
        />
      )}
    </div>
  )
}