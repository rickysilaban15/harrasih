import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from '@/components/scroll-animation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - PT. Harrasih | Kebijakan Privasi',
  description: 'Kebijakan privasi PT. Harrasih mengenai pengumpulan, penggunaan, dan perlindungan data pribadi pengguna layanan kami.',
}

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kebijakan privasi ini menjelaskan bagaimana PT. Harrasih mengumpulkan, 
                menggunakan, dan melindungi informasi pribadi Anda.
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
                  <CardTitle className="text-2xl">1. Informasi yang Kami Kumpulkan</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, seperti:</p>
                  <ul>
                    <li>Nama lengkap dan informasi kontak</li>
                    <li>Alamat email dan nomor telepon</li>
                    <li>Informasi perusahaan dan jabatan</li>
                    <li>Detail proyek dan kebutuhan teknis</li>
                    <li>Komunikasi yang Anda kirimkan kepada kami</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">2. Bagaimana Kami Menggunakan Informasi</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Informasi yang kami kumpulkan digunakan untuk:</p>
                  <ul>
                    <li>Memberikan layanan dan dukungan yang Anda minta</li>
                    <li>Berkomunikasi dengan Anda tentang proyek dan layanan</li>
                    <li>Memproses pesanan dan pembayaran</li>
                    <li>Meningkatkan layanan dan pengalaman pengguna</li>
                    <li>Mengirimkan informasi pemasaran (dengan persetujuan Anda)</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">3. Perlindungan Informasi</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda:</p>
                  <ul>
                    <li>Enkripsi data saat transmisi dan penyimpanan</li>
                    <li>Akses terbatas hanya untuk karyawan yang berwenang</li>
                    <li>Pemantauan keamanan sistem secara berkala</li>
                    <li>Backup data secara teratur</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">4. Berbagi Informasi</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali:</p>
                  <ul>
                    <li>Dengan persetujuan eksplisit dari Anda</li>
                    <li>Untuk memenuhi kewajiban hukum</li>
                    <li>Kepada penyedia layanan yang membantu operasional bisnis kami</li>
                    <li>Dalam kasus merger atau akuisisi perusahaan</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">5. Hak Anda</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Anda memiliki hak untuk:</p>
                  <ul>
                    <li>Mengakses informasi pribadi yang kami miliki tentang Anda</li>
                    <li>Meminta koreksi atau pembaruan informasi</li>
                    <li>Meminta penghapusan informasi pribadi Anda</li>
                    <li>Menolak atau membatasi pemrosesan data</li>
                    <li>Menarik persetujuan kapan saja</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={500}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">6. Kontak</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami:</p>
                  <ul>
                    <li>Email: privacy@harrasih.com</li>
                    <li>Telepon: +62 21 1234 5678</li>
                    <li>Alamat: Jl. Teknologi Digital No. 123, Jakarta Selatan</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-6">
                    Kebijakan privasi ini terakhir diperbarui pada 1 Januari 2024.
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
