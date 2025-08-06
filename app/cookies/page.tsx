import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from '@/components/scroll-animation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - PT. Harrasih | Kebijakan Cookie',
  description: 'Kebijakan cookie PT. Harrasih menjelaskan penggunaan cookie dan teknologi pelacakan serupa di website kami.',
}

export default function CookiesPage() {
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
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kebijakan ini menjelaskan bagaimana PT. Harrasih menggunakan cookie 
                dan teknologi pelacakan serupa di website kami.
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
                  <CardTitle className="text-2xl">1. Apa itu Cookie?</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Cookie adalah file teks kecil yang disimpan di perangkat Anda ketika mengunjungi website. Cookie membantu website mengingat informasi tentang kunjungan Anda, seperti preferensi bahasa dan pengaturan lainnya.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">2. Jenis Cookie yang Kami Gunakan</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h4>Cookie Esensial</h4>
                  <p>Cookie yang diperlukan untuk fungsi dasar website, seperti keamanan dan navigasi.</p>
                  
                  <h4>Cookie Analitik</h4>
                  <p>Membantu kami memahami bagaimana pengunjung berinteraksi dengan website melalui Google Analytics.</p>
                  
                  <h4>Cookie Fungsional</h4>
                  <p>Mengingat pilihan Anda seperti bahasa, region, atau preferensi tampilan.</p>
                  
                  <h4>Cookie Pemasaran</h4>
                  <p>Digunakan untuk menampilkan iklan yang relevan dan mengukur efektivitas kampanye pemasaran.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">3. Tujuan Penggunaan Cookie</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Kami menggunakan cookie untuk:</p>
                  <ul>
                    <li>Memastikan website berfungsi dengan baik</li>
                    <li>Menganalisis traffic dan perilaku pengguna</li>
                    <li>Personalisasi konten dan pengalaman</li>
                    <li>Mengingat preferensi dan pengaturan Anda</li>
                    <li>Meningkatkan keamanan website</li>
                    <li>Menampilkan iklan yang relevan</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">4. Cookie Pihak Ketiga</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Website kami menggunakan layanan pihak ketiga yang mungkin menetapkan cookie mereka sendiri:</p>
                  <ul>
                    <li><strong>Google Analytics:</strong> Untuk analisis website</li>
                    <li><strong>Google Ads:</strong> Untuk iklan dan remarketing</li>
                    <li><strong>Facebook Pixel:</strong> Untuk pelacakan konversi</li>
                    <li><strong>WhatsApp Business:</strong> Untuk integrasi chat</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">5. Mengelola Cookie</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Anda dapat mengelola cookie melalui:</p>
                  
                  <h4>Pengaturan Browser</h4>
                  <p>Sebagian besar browser memungkinkan Anda untuk melihat, mengelola, dan menghapus cookie. Anda juga dapat memblokir cookie dari website tertentu.</p>
                  
                  <h4>Opt-out Tools</h4>
                  <p>Untuk cookie iklan, Anda dapat menggunakan tools opt-out dari:</p>
                  <ul>
                    <li>Google Ads Settings</li>
                    <li>Facebook Ad Preferences</li>
                    <li>Network Advertising Initiative</li>
                  </ul>
                  
                  <p><strong>Catatan:</strong> Menonaktifkan cookie tertentu dapat mempengaruhi fungsionalitas website.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={500}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">6. Perubahan Kebijakan</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Kami dapat memperbarui kebijakan cookie ini dari waktu ke waktu. Perubahan akan dipublikasikan di halaman ini dengan tanggal pembaruan yang baru.</p>
                  
                  <h4>Kontak</h4>
                  <p>Jika Anda memiliki pertanyaan tentang kebijakan cookie ini, silakan hubungi kami di:</p>
                  <ul>
                    <li>Email: privacy@harrasih.com</li>
                    <li>Telepon: +62 21 1234 5678</li>
                  </ul>
                  
                  <p className="text-sm text-gray-600 mt-6">
                    Kebijakan cookie ini terakhir diperbarui pada 1 Januari 2024.
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
