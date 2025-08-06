'use client'

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Kontak - PT. Harrasih | Hubungi Tim Ahli Kami',
  description: 'Hubungi PT. Harrasih untuk konsultasi gratis tentang kebutuhan digital bisnis Anda. Tim ahli kami siap membantu 24/7.',
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("Halo PT. Harrasih, saya tertarik untuk konsultasi tentang layanan digital Anda.")
    window.open(`https://wa.me/6287818894504?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
              Kontak & Konsultasi
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Mari Diskusikan Proyek Anda
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap untuk memulai proyek digital Anda? Hubungi kami untuk konsultasi gratis 
              dan dapatkan solusi terbaik untuk bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Kirim Pesan Anda</CardTitle>
                <CardDescription>
                  Isi form di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Nama Lengkap *</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama lengkap" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email *</label>
                      <Input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="nama@email.com" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">No. Telepon *</label>
                      <Input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="08xxxxxxxxxx" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Perusahaan</label>
                      <Input 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nama perusahaan" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Jenis Layanan *</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Pilih jenis layanan</option>
                        <option value="website">Website Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="desktop">Desktop Application</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="custom">Custom Project</option>
                        <option value="consultation">Konsultasi</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Budget Range</label>
                      <select 
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Pilih budget range</option>
                        <option value="under-15">Rp 350K - 500k</option>
                        <option value="15-35">Rp 700k - 1jt</option>
                        <option value="35-50">Rp 1,5jt - 2,5jt</option>
                        <option value="above-50">Di atas Rp 3jt</option>
                        <option value="discuss">Perlu Diskusi</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Pesan *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Ceritakan tentang proyek yang ingin Anda kembangkan, timeline yang diharapkan, dan detail lainnya..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800">✅ Pesan Anda berhasil dikirim! Tim kami akan menghubungi Anda segera.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800">❌ Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.</p>
                    </div>
                  )}
                  
                  <Button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6 border-0 shadow-lg">
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Alamat Kantor</h3>
                      <p className="text-gray-600">
                        Jl. H.ali No. 123<br />
                        Jakarta Timur, DKI Jakarta 11350<br />
                        Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Telepon</h3>
                      <p className="text-gray-600">
                        <a href="tel:+622112345678" className="hover:text-blue-600 transition-colors">+62 21 1234 5678</a><br />
                        <a href="tel:+6281234567890" className="hover:text-blue-600 transition-colors">+62 878-1889-4504 (WhatsApp)</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:harrasih@idm.my.id" className="hover:text-blue-600 transition-colors">harrasih@idm.my.id</a><br />
                        <a href="mailto:support@harrasih.com" className="hover:text-blue-600 transition-colors">support@harrasih.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Jam Operasional</h3>
                      <p className="text-gray-600">
                        Senin - Jumat: 09:00 - 18:00<br />
                        Sabtu: 09:00 - 15:00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-0 shadow-lg">
                <CardContent>
                  <h3 className="font-semibold text-gray-900 mb-4">Konsultasi Gratis</h3>
                  <p className="text-gray-600 mb-6">
                    Dapatkan konsultasi gratis untuk proyek digital Anda. Tim ahli kami siap membantu 
                    menemukan solusi terbaik untuk kebutuhan bisnis Anda.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700 flex-1">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={() => window.location.href = 'mailto:info@harrasih.com'}>
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-0 shadow-lg">
                <CardContent>
                  <h3 className="font-semibold text-gray-900 mb-4">Mengapa Memilih Kami?</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Konsultasi gratis dan transparan</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Tim berpengalaman 5+ tahun</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Garansi dan support berkelanjutan</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Harga kompetitif dan terjangkau</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

           {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lokasi Kantor Kami
            </h2>
            <p className="text-gray-600">
              Kunjungi kantor kami untuk diskusi langsung tentang proyek Anda.
            </p>
          </div>

          <div className="w-full h-96 rounded-lg overflow-hidden">
            {/* Ganti link di src dengan lokasi kantormu */}
            <iframe
              title="Lokasi Kantor Kami"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.205841137591!2d106.86395877441092!3d-6.292335861585685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2874a6d66db%3A0x66310acb50a197d2!2sKost%20Bu%20Nurul!5e1!3m2!1sid!2sid!4v1754520281217!5m2!1sid!2sid"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

