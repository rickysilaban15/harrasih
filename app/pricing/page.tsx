import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Code, Building, Award, ArrowRight, X } from 'lucide-react'
import Link from "next/link"
import type { Metadata } from 'next'
import { ScrollAnimation } from '@/components/scroll-animation'

export const metadata: Metadata = {
  title: 'Paket & Harga - PT. Harrasih | Solusi Digital Terjangkau',
  description: 'Pilih paket pengembangan website dan aplikasi yang sesuai dengan budget dan kebutuhan bisnis Anda. Harga transparan dan kompetitif.',
}

export default function PricingPage() {
  const packages = [
    {
      id: 'basic',
      name: "Paket Basic",
      price: "Rp 2-5jt",
      period: "/proyek",
      description: "Cocok untuk startup dan UMKM yang baru memulai",
      icon: Code,
      popular: false,
      features: [
        "Website Company Profile",
        "Responsive Design",
        "CMS Sederhana",
        "SEO Basic",
        "Support 3 Bulan",
        "5 Halaman Website",
        "Contact Form",
        "Google Analytics"
      ],
      notIncluded: [
        "E-Commerce Features",
        "Advanced SEO",
        "Custom Functionality",
        "Database Integration"
      ]
    },
    {
      id: 'professional',
      name: "Paket Professional",
      price: "Rp 5-10jt",
      period: "/proyek",
      description: "Ideal untuk perusahaan menengah dengan kebutuhan lengkap",
      icon: Building,
      popular: true,
      features: [
        "Sistem Informasi Lengkap",
        "Dashboard Admin",
        "Database Management",
        "User Management",
        "Laporan & Analytics",
        "Support 6 Bulan",
        "Mobile Responsive",
        "API Integration",
        "Security Features",
        "Backup System"
      ],
      notIncluded: [
        "Mobile App",
        "Advanced Integrations"
      ]
    },
    {
      id: 'enterprise',
      name: "Paket Enterprise",
      price: "Custom",
      period: "/proyek",
      description: "Solusi lengkap untuk perusahaan besar dan korporasi",
      icon: Award,
      popular: false,
      features: [
        "Custom Development",
        "Integrasi Sistem",
        "High Performance",
        "Security Advanced",
        "Dedicated Support",
        "Support 12 Bulan",
        "Scalable Architecture",
        "Load Balancing",
        "Multi-server Setup",
        "24/7 Monitoring",
        "Training & Documentation",
        "Maintenance Included"
      ],
      notIncluded: []
    }
  ]

  const addOns = [
    {
      name: "Mobile App Development",
      price: "Rp 10jt",
      description: "Aplikasi mobile native atau cross-platform"
    },
    {
      name: "E-Commerce Integration",
      price: "Rp 7jt",
      description: "Fitur toko online dengan payment gateway"
    },
    {
      name: "Advanced SEO Package",
      price: "Rp 5jt",
      description: "Optimasi SEO mendalam dan content marketing"
    },
    {
      name: "Extended Support",
      price: "Rp 2jt/bulan",
      description: "Support dan maintenance berkelanjutan"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4">
                Paket & Harga
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Pilih Paket yang Sesuai untuk Bisnis Anda
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kami menawarkan berbagai paket pengembangan aplikasi dengan harga yang kompetitif 
                dan sesuai dengan kebutuhan bisnis Anda.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card 
                  className={`p-8 border-0 shadow-lg card-hover relative ${
                    pkg.popular ? 'border-2 border-purple-500 shadow-xl' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-purple-600 text-white px-4 py-1">
                        Paling Populer
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <pkg.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <CardDescription className="text-gray-600 mb-6">
                      {pkg.description}
                    </CardDescription>
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      {pkg.price}
                      <span className="text-lg font-normal text-gray-500">{pkg.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {pkg.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 opacity-50">
                          <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          <span className="text-gray-500 line-through">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <Link href={`/order?package=${pkg.id}`}>
                      <Button 
                        className={`w-full ${
                          pkg.popular 
                            ? 'btn-primary' 
                            : 'btn-primary'
                        }`}
                      >
                        {pkg.name === "Paket Enterprise" ? "Konsultasi Sekarang" : `Pilih ${pkg.name}`}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0}>
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Tidak yakin paket mana yang tepat untuk Anda? Konsultasikan kebutuhan proyek Anda dengan tim ahli kami.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Add-ons Section */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Layanan Tambahan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tingkatkan proyek Anda dengan layanan tambahan yang dapat disesuaikan dengan kebutuhan spesifik bisnis Anda.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="p-6 border-0 shadow-lg card-hover bg-white">
                    <CardContent className="text-center space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">{addon.name}</h3>
                      <div className="text-2xl font-bold text-purple-600">{addon.price}</div>
                      <p className="text-gray-600 text-sm">{addon.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pertanyaan Umum
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Jawaban untuk pertanyaan yang sering diajukan tentang paket dan layanan kami.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "Apakah harga sudah termasuk hosting dan domain?",
                  answer: "Harga paket belum termasuk hosting dan domain. Kami dapat membantu Anda memilih hosting dan domain yang sesuai dengan kebutuhan proyek Anda dengan biaya terpisah."
                },
                {
                  question: "Berapa lama waktu pengerjaan proyek?",
                  answer: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Paket Basic: 2-4 minggu, Paket Professional: 6-8 minggu, Paket Enterprise: 8-12 minggu atau sesuai kesepakatan."
                },
                {
                  question: "Apakah ada garansi untuk proyek yang dikerjakan?",
                  answer: "Ya, kami memberikan garansi bug-free selama periode support yang tertera di setiap paket. Jika ditemukan bug atau error, kami akan memperbaikinya tanpa biaya tambahan."
                },
                {
                  question: "Bagaimana sistem pembayaran?",
                  answer: "Sistem pembayaran dapat dilakukan secara bertahap: 50% di awal proyek, 30% saat development, dan 20% saat serah terima. Kami menerima pembayaran melalui transfer bank atau payment gateway."
                },
                {
                  question: "Apakah bisa request fitur khusus di luar paket?",
                  answer: "Tentu saja! Kami dapat menambahkan fitur khusus sesuai kebutuhan Anda dengan biaya tambahan yang akan didiskusikan terlebih dahulu. Semua customization dapat diakomodasi."
                }
              ].map((faq, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="p-6 border-0 shadow-lg card-hover">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan digital bisnis Anda dengan tim ahli kami. 
              Dapatkan penawaran terbaik yang sesuai dengan budget dan kebutuhan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl">
                  Konsultasi & Penawaran
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 rounded-xl">
                  Lihat Hasil Kerja Kami
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
