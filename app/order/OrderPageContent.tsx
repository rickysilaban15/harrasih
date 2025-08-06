'use client'

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, ArrowLeft, Send } from 'lucide-react'
import Link from "next/link"
import { useSearchParams } from 'next/navigation'

export default function OrderPage() {
  const searchParams = useSearchParams()
  const selectedPackage = searchParams.get('package') || 'basic'
  
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    
    // Project Details
    projectTitle: '',
    projectDescription: '',
    projectType: '',
    timeline: '',
    budget: '',
    
    // Technical Requirements
    features: [] as string[],
    platforms: [] as string[],
    integrations: '',
    
    // Additional Information
    hasExistingSystem: '',
    designPreference: '',
    contentReady: '',
    additionalNotes: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const packages = {
    basic: {
      name: 'Paket Basic',
      price: 'Rp 2-5jt',
      features: ['Website Company Profile', 'Responsive Design', 'CMS Sederhana', 'SEO Basic', 'Support 3 Bulan']
    },
    professional: {
      name: 'Paket Professional', 
      price: 'Rp 5-10jt',
      features: ['Sistem Informasi Lengkap', 'Dashboard Admin', 'Database Management', 'User Management', 'Support 6 Bulan']
    },
    enterprise: {
      name: 'Paket Enterprise',
      price: 'Custom',
      features: ['Custom Development', 'Integrasi Sistem', 'High Performance', 'Security Advanced', 'Support 12 Bulan']
    }
  }

  const currentPackage = packages[selectedPackage as keyof typeof packages] || packages.basic

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name as keyof typeof prev].includes(value)
        ? (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
        : [...(prev[name as keyof typeof prev] as string[]), value]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Format message for WhatsApp
      const message = `
🚀 *PESANAN BARU - ${currentPackage.name}*

👤 *INFORMASI PRIBADI*
Nama: ${formData.fullName}
Email: ${formData.email}
Telepon: ${formData.phone}
Perusahaan: ${formData.company}
Posisi: ${formData.position}

📋 *DETAIL PROYEK*
Judul Proyek: ${formData.projectTitle}
Jenis Proyek: ${formData.projectType}
Timeline: ${formData.timeline}
Budget: ${formData.budget}

📝 *DESKRIPSI PROYEK*
${formData.projectDescription}

🔧 *KEBUTUHAN TEKNIS*
Fitur yang Diinginkan: ${formData.features.join(', ')}
Platform: ${formData.platforms.join(', ')}
Integrasi: ${formData.integrations}

ℹ️ *INFORMASI TAMBAHAN*
Sistem Existing: ${formData.hasExistingSystem}
Preferensi Design: ${formData.designPreference}
Konten Siap: ${formData.contentReady}

💬 *CATATAN TAMBAHAN*
${formData.additionalNotes}

📦 *PAKET DIPILIH: ${currentPackage.name} - ${currentPackage.price}*
      `.trim()

      // Send to WhatsApp
      const whatsappUrl = `https://wa.me/6287818894504?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/pricing">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Paket
              </Button>
            </Link>
          </div>
          <div className="text-center text-white">
            <Badge className="bg-white/20 text-white border-0 mb-4">
              Form Pemesanan
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Pesan {currentPackage.name}
            </h1>
            <p className="text-xl opacity-90">
              Isi form di bawah ini untuk memulai proyek Anda
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Ringkasan Pesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                  <h3 className="font-semibold text-lg text-purple-800">{currentPackage.name}</h3>
                  <p className="text-2xl font-bold text-purple-600">{currentPackage.price}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Fitur Termasuk:</h4>
                  <ul className="space-y-2">
                    {currentPackage.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Setelah submit, Anda akan diarahkan ke WhatsApp untuk konfirmasi pesanan
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Detail Pemesanan</CardTitle>
                <CardDescription>
                  Lengkapi informasi di bawah ini untuk memproses pesanan Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-purple-800">Informasi Pribadi</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Nama Lengkap *</label>
                        <Input 
                          name="fullName"
                          value={formData.fullName}
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
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-gray-700">Posisi/Jabatan</label>
                        <Input 
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          placeholder="CEO, Manager, dll"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Project Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-purple-800">Detail Proyek</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Judul Proyek *</label>
                        <Input 
                          name="projectTitle"
                          value={formData.projectTitle}
                          onChange={handleInputChange}
                          placeholder="Nama proyek yang akan dikembangkan"
                          required
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Jenis Proyek *</label>
                          <select 
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                            required
                          >
                            <option value="">Pilih jenis proyek</option>
                            <option value="website">Website</option>
                            <option value="mobile-app">Mobile App</option>
                            <option value="desktop-app">Desktop App</option>
                            <option value="e-commerce">E-Commerce</option>
                            <option value="sistem-informasi">Sistem Informasi</option>
                            <option value="custom">Custom Project</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Timeline yang Diharapkan</label>
                          <select 
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                          >
                            <option value="">Pilih timeline</option>
                            <option value="1-2-minggu">1-2 Minggu</option>
                            <option value="3-4-minggu">3-4 Minggu</option>
                            <option value="1-2-bulan">1-2 Bulan</option>
                            <option value="3-6-bulan">3-6 Bulan</option>
                            <option value="lebih-6-bulan">Lebih dari 6 Bulan</option>
                            <option value="fleksibel">Fleksibel</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Budget Range</label>
                        <select 
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">Pilih budget range</option>
                          <option value="sesuai-paket">Sesuai Paket Terpilih</option>
                          <option value="15-25jt">Rp 15-25 Juta</option>
                          <option value="25-50jt">Rp 25-50 Juta</option>
                          <option value="50-100jt">Rp 50-100 Juta</option>
                          <option value="lebih-100jt">Lebih dari Rp 100 Juta</option>
                          <option value="diskusi">Perlu Diskusi</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Deskripsi Proyek *</label>
                        <Textarea 
                          name="projectDescription"
                          value={formData.projectDescription}
                          onChange={handleInputChange}
                          placeholder="Jelaskan detail proyek, tujuan, target user, dan ekspektasi hasil..."
                          rows={4}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Technical Requirements */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-purple-800">Kebutuhan Teknis</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-3 block">Fitur yang Diinginkan</label>
                        <div className="grid md:grid-cols-2 gap-2">
                          {[
                            'User Authentication', 'Dashboard Admin', 'Payment Gateway', 'Chat/Messaging',
                            'Notification System', 'File Upload', 'Search Function', 'Reporting',
                            'Multi-language', 'API Integration', 'Social Media Login', 'Email System'
                          ].map((feature) => (
                            <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.features.includes(feature)}
                                onChange={() => handleCheckboxChange('features', feature)}
                                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                              />
                              <span className="text-sm">{feature}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-3 block">Platform Target</label>
                        <div className="grid md:grid-cols-2 gap-2">
                          {[
                            'Web Browser', 'iOS App', 'Android App', 'Windows Desktop',
                            'Mac Desktop', 'Progressive Web App', 'Tablet Optimized', 'Smart TV'
                          ].map((platform) => (
                            <label key={platform} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.platforms.includes(platform)}
                                onChange={() => handleCheckboxChange('platforms', platform)}
                                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                              />
                              <span className="text-sm">{platform}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Integrasi yang Diperlukan</label>
                        <Textarea 
                          name="integrations"
                          value={formData.integrations}
                          onChange={handleInputChange}
                          placeholder="Contoh: Google Analytics, Facebook Pixel, Payment Gateway (Midtrans, Xendit), ERP System, dll"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-purple-800">Informasi Tambahan</h3>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Apakah sudah memiliki sistem existing?</label>
                        <select 
                          name="hasExistingSystem"
                          value={formData.hasExistingSystem}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">Pilih jawaban</option>
                          <option value="tidak">Tidak, mulai dari nol</option>
                          <option value="ya-upgrade">Ya, ingin upgrade/migrasi</option>
                          <option value="ya-integrasi">Ya, perlu integrasi</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Preferensi Design</label>
                        <select 
                          name="designPreference"
                          value={formData.designPreference}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">Pilih preferensi</option>
                          <option value="modern-minimalis">Modern & Minimalis</option>
                          <option value="corporate-professional">Corporate & Professional</option>
                          <option value="creative-colorful">Creative & Colorful</option>
                          <option value="classic-elegant">Classic & Elegant</option>
                          <option value="custom">Custom Design</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Apakah konten sudah siap?</label>
                        <select 
                          name="contentReady"
                          value={formData.contentReady}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">Pilih jawaban</option>
                          <option value="sudah-siap">Sudah siap semua</option>
                          <option value="sebagian-siap">Sebagian sudah siap</option>
                          <option value="belum-siap">Belum siap, perlu bantuan</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Catatan Tambahan</label>
                        <Textarea 
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleInputChange}
                          placeholder="Tambahkan informasi lain yang menurut Anda penting untuk proyek ini..."
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800">✅ Pesanan berhasil dikirim! Anda akan diarahkan ke WhatsApp untuk konfirmasi.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800">❌ Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button 
                      type="submit"
                      className="w-full btn-primary text-lg py-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Memproses Pesanan...
                        </>
                      ) : (
                        <>
                          Kirim Pesanan ke WhatsApp
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-gray-600 text-center mt-3">
                      Dengan mengirim pesanan, Anda menyetujui syarat dan ketentuan kami
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
