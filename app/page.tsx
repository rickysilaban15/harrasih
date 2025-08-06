'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Zap, Shield, Star, CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from 'react'
import { ScrollAnimation } from '@/components/scroll-animation'
import { BannerSlider } from '@/components/banner-slider'

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Ahmad Santoso",
      position: "CEO, Toko Online Makmur",
      avatar: "AS",
      rating: 5,
      text: "PT. Harrasih berhasil mengembangkan sistem e-commerce yang sangat membantu bisnis kami. Tim mereka profesional dan responsif terhadap kebutuhan kami."
    },
    {
      id: 2,
      name: "Dr. Sari Muti",
      position: "Direktur, RS Sehat Sentosa",
      avatar: "SP",
      rating: 5,
      text: "Sistem informasi rumah sakit yang dikembangkan sangat membantu operasional harian kami. Interface yang user-friendly dan fitur yang lengkap."
    },
    {
      id: 3,
      name: "Farhan Adian",
      position: "Owner, Restoran Nusantara",
      avatar: "BW",
      rating: 5,
      text: "Aplikasi POS yang dikembangkan sangat membantu manajemen restoran kami. Laporan penjualan yang detail dan fitur yang mudah digunakan."
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation delay={0}>
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 hover:from-purple-200 hover:to-blue-200 border-0 px-4 py-2">
                    ✨ Solusi Digital Terpercaya
                  </Badge>
                  <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    Membangun Masa Depan 
                    <span className="text-gradient block"> Digital Bersama</span>
                    <span className="text-purple-600">PT.Harrasih</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Kami menyediakan solusi digital inovatif untuk membantu bisnis Anda berkembang di era digital. 
                    Dari aplikasi web hingga sistem enterprise, kami siap mewujudkan visi digital Anda.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="btn-primary">
                      Minta Penawaran
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button className="btn-secondary">
                      Lihat Portofolio
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center space-x-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">100+</div>
                    <div className="text-sm text-gray-600">Proyek Selesai</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">50+</div>
                    <div className="text-sm text-gray-600">Klien Puas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">5+</div>
                    <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/images/beranda2.jpg"
                    alt="Digital Solutions"
                    width={600}
                    height={600}
                    className="rounded-3xl shadow-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Banner Slider Section */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Showcase Terbaru Kami
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Lihat hasil karya terbaru dan inovasi digital yang telah kami ciptakan
              </p>
            </div>
            <BannerSlider />
          </div>
        </section>
      </ScrollAnimation>

      {/* Why Choose Us Section */}
      <ScrollAnimation delay={100}>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4">
                Mengapa Memilih Kami
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Keunggulan PT. Harrasih
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dengan pengalaman bertahun-tahun dalam industri teknologi, kami berkomitmen untuk memberikan 
                solusi digital terbaik yang sesuai dengan kebutuhan bisnis Anda.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollAnimation delay={0}>
                <Card className="text-center p-8 border-0 shadow-lg card-hover bg-white">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Target className="h-10 w-10 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl mb-4">Fokus pada Kualitas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Setiap proyek dikerjakan dengan standar kualitas tinggi dan perhatian detail yang maksimal untuk hasil terbaik.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <Card className="text-center p-8 border-0 shadow-lg card-hover bg-white">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Zap className="h-10 w-10 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl mb-4">Inovasi Berkelanjutan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Kami selalu mengikuti perkembangan teknologi terbaru untuk memberikan solusi terdepan dan inovatif.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <Card className="text-center p-8 border-0 shadow-lg card-hover bg-white">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-10 w-10 text-indigo-600" />
                    </div>
                    <CardTitle className="text-2xl mb-4">Kepercayaan Klien</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Membangun hubungan jangka panjang dengan klien melalui layanan yang dapat diandalkan dan terpercaya.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Services Preview */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
                Layanan Kami
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solusi Digital Komprehensif
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Kami menyediakan berbagai layanan pengembangan aplikasi dan sistem 
                yang disesuaikan dengan kebutuhan bisnis Anda.
              </p>
              <Link href="/services">
                <Button className="btn-primary">
                  Lihat Semua Layanan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Testimonials Section */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4">
                Testimoni Klien
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Apa Kata Klien Kami?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Kepuasan klien adalah prioritas utama kami. Lihat pengalaman mereka bekerja sama dengan PT. Harrasih.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 lg:p-12 border-0 shadow-xl bg-white card-hover">
                <CardContent className="text-center space-y-8">
                  <div className="flex items-center justify-center space-x-1 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-2xl text-gray-700 italic leading-relaxed font-medium">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-6 pt-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-2xl">
                        {testimonials[currentTestimonial].avatar}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 text-xl">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600 text-lg">
                        {testimonials[currentTestimonial].position}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center space-x-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-purple-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Siap Memulai Proyek Digital Anda?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan digital bisnis Anda dengan tim ahli kami. 
              Dapatkan solusi terbaik untuk mengembangkan bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 rounded-xl">
                  Lihat Portofolio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
