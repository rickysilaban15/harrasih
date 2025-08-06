'use client'

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, User, Clock } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from 'next'
import { ScrollAnimation } from '@/components/scroll-animation'

const metadata: Metadata = {
  title: 'Blog - PT. Harrasih | Artikel & Tips Teknologi Terbaru',
  description: 'Baca artikel terbaru tentang teknologi, tips pengembangan website, mobile app, dan tren digital terkini dari tim ahli PT. Harrasih.',
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const blogPosts = [
    {
      id: 1,
      title: "Tren Teknologi Web Development 2025 Yang Perlu Anda Ketahui",
      excerpt: "Pelajari teknologi web development terbaru yang akan mendominasi tahun 2025, mulai dari framework hingga tools yang wajib dikuasai developer.",
      image: "/images/webdevelopment.jpg",
      category: "Web Development",
      author: "Tim PT. Harrasih",
      date: "07 Agustus 2025",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Mengapa Bisnis Anda Membutuhkan Aplikasi Mobile di Era Digital",
      excerpt: "Analisis mendalam tentang pentingnya aplikasi mobile untuk bisnis modern dan bagaimana hal ini dapat meningkatkan engagement pelanggan.",
      image: "/images/mobileaps.jpg",
      category: "Mobile Development",
      author: "Tim PT. Harrasih",
      date: "06 Agustus 2025",
      readTime: "7 min",
      featured: false
    },
    {
      id: 3,
      title: "Panduan Lengkap Memilih Tech Stack untuk Startup",
      excerpt: "Tips memilih teknologi yang tepat untuk startup Anda, mulai dari frontend, backend, database, hingga deployment strategy.",
      image: "/images/techstack.jpg",
      category: "Technology",
      author: "Tim PT. Harrasih",
      date: "10 Januari 2024",
      readTime: "8 min",
      featured: false
    },
    {
      id: 4,
      title: "UI/UX Design: Kunci Sukses Aplikasi Modern",
      excerpt: "Memahami prinsip-prinsip UI/UX design yang baik dan bagaimana implementasinya dapat meningkatkan user experience aplikasi Anda.",
      image:"/images/uiux.jpg",
      category: "Design",
      author: "Tim PT. Harrasih",
      date: "8 Januari 2024",
      readTime: "6 min",
      featured: false
    },
    {
      id: 5,
      title: "Keamanan Aplikasi Web: Best Practices yang Wajib Diterapkan",
      excerpt: "Panduan komprehensif tentang keamanan aplikasi web, mulai dari authentication, authorization, hingga protection terhadap common attacks.",
      image: "/images/security.jpg",
      category: "Security",
      author: "Tim PT. Harrasih",
      date: "5 Januari 2024",
      readTime: "10 min",
      featured: false
    },
    {
      id: 6,
      title: "Optimasi Performance Website: Tips dan Trik Terbukti",
      excerpt: "Teknik-teknik optimasi website untuk meningkatkan loading speed, SEO ranking, dan user experience secara keseluruhan.",
      image:"/images/SEO.jpg",
      category: "Performance",
      author: "Tim PT. Harrasih",
      date: "3 Januari 2024",
      readTime: "9 min",
      featured: false
    }
  ]

  const categories = [
    "Semua",
    "Web Development",
    "Mobile Development", 
    "Technology",
    "Design",
    "Security",
    "Performance"
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const filteredPosts = activeCategory === 'Semua' 
    ? blogPosts.filter(post => !post.featured)
    : blogPosts.filter(post => post.category === activeCategory && !post.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4">
                Blog & Artikel
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Insights & Tips Teknologi
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dapatkan wawasan terbaru tentang teknologi, tips pengembangan aplikasi, 
                dan tren digital dari tim ahli PT. Harrasih.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Featured Post */}
      {featuredPost && (
        <ScrollAnimation delay={0}>
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="mb-12">
                <Badge className="bg-yellow-100 text-yellow-800 mb-4">
                  ⭐ Artikel Pilihan
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900">Artikel Terbaru</h2>
              </div>
              
              <Card className="overflow-hidden border-0 shadow-xl card-hover">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-600 text-white">
                        {featuredPost.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <Button className="btn-primary w-fit">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </ScrollAnimation>
      )}

      {/* Categories Filter */}
      <ScrollAnimation delay={0}>
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'border-purple-600 text-purple-600 hover:bg-purple-50'
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Blog Posts Grid */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <ScrollAnimation key={post.id} delay={index * 100}>
                  <Card className="overflow-hidden border-0 shadow-lg card-hover">
                    <div className="relative h-48">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-purple-600 text-white text-xs">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{post.author}</span>
                        <Button variant="ghost" size="sm" className="hover:bg-purple-50 hover:text-purple-600">
                          Baca <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation delay={0}>
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  Muat Artikel Lainnya
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* Newsletter Section */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Dapatkan Update Artikel Terbaru
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Berlangganan newsletter kami untuk mendapatkan artikel terbaru tentang teknologi 
              dan tips pengembangan aplikasi langsung di inbox Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-purple-300"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg">
                Berlangganan
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
