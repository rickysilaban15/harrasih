import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Target, Zap, Shield, Users, Award, Heart } from 'lucide-react'
import Image from "next/image"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang Kami - PT. Harrasih | Solusi Digital Terpercaya',
  description: 'Pelajari lebih lanjut tentang PT. Harrasih, visi, misi, dan tim ahli yang berpengalaman dalam memberikan solusi digital terbaik untuk bisnis Anda.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
              Tentang Kami
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Mengenal PT. Harrasih
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dengan pengalaman bertahun-tahun dalam industri teknologi, kami berkomitmen untuk memberikan 
              solusi digital terbaik yang sesuai dengan kebutuhan bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/images/tentangkami.jpg"
                alt="Tim PT. Harrasih"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Cerita Kami</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  PT. Harrasih didirikan dengan visi untuk menjadi mitra terpercaya dalam transformasi digital 
                  bisnis di Indonesia. Berawal dari tim kecil yang berpengalaman di bidang teknologi, 
                  kami telah berkembang menjadi perusahaan yang melayani berbagai klien dari UMKM hingga korporasi besar.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dengan fokus pada inovasi dan kualitas, kami terus mengembangkan kemampuan tim dan 
                  mengadopsi teknologi terbaru untuk memberikan solusi digital yang tidak hanya memenuhi 
                  kebutuhan saat ini, tetapi juga siap menghadapi tantangan masa depan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Visi Kami</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Menjadi penyedia solusi digital terbaik di Indonesia yang membantu bisnis 
                  bertransformasi dan berkembang di era digital dengan teknologi terdepan 
                  dan layanan yang dapat diandalkan.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Memberikan layanan pembuatan aplikasi yang inovatif dan handal</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Membantu UMKM dan perusahaan dalam transformasi digital</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Menyediakan pengalaman pengguna terbaik melalui UI/UX modern</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Membangun hubungan jangka panjang dengan klien</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nilai-nilai yang menjadi fondasi dalam setiap pekerjaan dan hubungan yang kami bangun.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Fokus pada Kualitas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Setiap proyek dikerjakan dengan standar kualitas tinggi dan perhatian detail yang maksimal.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Inovasi Berkelanjutan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Kami selalu mengikuti perkembangan teknologi terbaru untuk memberikan solusi terdepan.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Kepercayaan Klien</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Membangun hubungan jangka panjang dengan klien melalui layanan yang dapat diandalkan.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Kerja Tim</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Kolaborasi yang solid antar tim untuk menghasilkan solusi terbaik bagi klien.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Profesionalisme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Menjalankan setiap proyek dengan sikap profesional dan komitmen tinggi.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Kepuasan Klien</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mengutamakan kepuasan klien sebagai prioritas utama dalam setiap layanan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Klien Puas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
