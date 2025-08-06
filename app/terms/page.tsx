import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from '@/components/scroll-animation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - PT. Harrasih | Syarat dan Ketentuan',
  description: 'Syarat dan ketentuan penggunaan layanan PT. Harrasih untuk pengembangan website, aplikasi mobile, dan sistem informasi.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4">
                Legal
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Syarat dan ketentuan ini mengatur penggunaan layanan yang disediakan oleh PT. Harrasih.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <ScrollAnimation delay={0}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">1. Penerimaan Syarat</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Dengan menggunakan layanan PT. Harrasih, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan syarat ini, mohon untuk tidak menggunakan layanan kami.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">2. Layanan yang Disediakan</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>PT. Harrasih menyediakan layanan pengembangan perangkat lunak meliputi:</p>
                  <ul>
                    <li>Pengembangan website dan aplikasi web</li>
                    <li>Pengembangan aplikasi mobile (iOS dan Android)</li>
                    <li>Pengembangan aplikasi desktop</li>
                    <li>Sistem informasi dan database</li>
                    <li>Konsultasi teknologi dan digital</li>
                    <li>Maintenance dan support berkelanjutan</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">3. Kewajiban Klien</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Sebagai klien, Anda berkewajiban untuk:</p>
                  <ul>
                    <li>Memberikan informasi yang akurat dan lengkap</li>
                    <li>Menyediakan konten dan materi yang diperlukan tepat waktu</li>
                    <li>Melakukan pembayaran sesuai dengan jadwal yang disepakati</li>
                    <li>Memberikan feedback dan approval dalam waktu yang wajar</li>
                    <li>Mematuhi hukum dan regulasi yang berlaku</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">4. Pembayaran dan Refund</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Ketentuan pembayaran:</p>
                  <ul>
                    <li>Pembayaran dilakukan sesuai dengan jadwal yang disepakati dalam kontrak</li>
                    <li>Keterlambatan pembayaran dapat mengakibatkan penundaan proyek</li>
                    <li>Refund hanya diberikan dalam kondisi tertentu sesuai kontrak</li>
                    <li>Biaya tambahan akan dikenakan untuk perubahan scope yang signifikan</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">5. Hak Kekayaan Intelektual</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Mengenai hak kekayaan intelektual:</p>
                  <ul>
                    <li>Klien memiliki hak penuh atas produk akhir yang telah dibayar lunas</li>
                    <li>PT. Harrasih mempertahankan hak atas metodologi dan framework yang digunakan</li>
                    <li>Kode sumber akan diserahkan setelah pembayaran final</li>
                    <li>PT. Harrasih berhak menggunakan proyek sebagai portfolio dengan persetujuan klien</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={500}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">6. Batasan Tanggung Jawab</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>PT. Harrasih tidak bertanggung jawab atas:</p>
                  <ul>
                    <li>Kerugian tidak langsung atau konsekuensial</li>
                    <li>Kehilangan data akibat faktor eksternal</li>
                    <li>Downtime server atau hosting pihak ketiga</li>
                    <li>Perubahan regulasi atau kebijakan platform</li>
                    <li>Force majeure atau keadaan kahar</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={600}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">7. Penyelesaian Sengketa</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Dalam hal terjadi sengketa:</p>
                  <ul>
                    <li>Upaya penyelesaian secara musyawarah akan dilakukan terlebih dahulu</li>
                    <li>Jika tidak tercapai kesepakatan, sengketa akan diselesaikan melalui mediasi</li>
                    <li>Hukum Indonesia berlaku untuk semua aspek layanan</li>
                    <li>Pengadilan Jakarta Selatan memiliki yurisdiksi eksklusif</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={700}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">8. Perubahan Syarat</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>PT. Harrasih berhak mengubah syarat dan ketentuan ini dengan pemberitahuan sebelumnya. Perubahan akan berlaku efektif setelah dipublikasikan di website kami.</p>
                  <p className="text-sm text-gray-600 mt-6">
                    Syarat dan ketentuan ini terakhir diperbarui pada 1 Januari 2024.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
