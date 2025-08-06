import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Globe, Monitor, Smartphone, Settings, Database, ShoppingCart, ArrowRight } from 'lucide-react'
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Layanan - PT. Harrasih | Website, Mobile App & Desktop Development',
  description: 'Layanan lengkap PT. Harrasih meliputi pengembangan website, aplikasi mobile, desktop, e-commerce, dan custom project untuk berbagai kebutuhan bisnis.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Pembuatan Aplikasi Website",
      description: "Solusi web modern dan responsif untuk berbagai kebutuhan bisnis",
      features: [
        "Sistem Informasi",
        "E-Commerce",
        "Website Company Profile",
        "Portal Berita & Blog",
        "Landing Page",
        "Web Application"
      ],
      technologies: ["React", "Next.js", "Laravel", "Node.js", "PHP", "MySQL"]
    },
    {
      icon: Smartphone,
      title: "Pembuatan Aplikasi Mobile",
      description: "Aplikasi mobile native dan cross-platform untuk iOS dan Android",
      features: [
        "Mobile App Native",
        "Cross-Platform App",
        "Progressive Web App (PWA)",
        "Mobile E-Commerce",
        "Social Media App",
        "Business App"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Firebase"]
    },
    {
      icon: Monitor,
      title: "Pembuatan Aplikasi Desktop",
      description: "Aplikasi desktop yang powerful untuk operasional bisnis yang efisien",
      features: [
        "POS (Point of Sale)",
        "Sistem Inventori",
        "Aplikasi Internal Perusahaan",
        "Sistem Manajemen Data",
        "Accounting Software",
        "CRM Desktop"
      ],
      technologies: ["Electron", "C#", ".NET", "Java", "Python", "Qt"]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Platform e-commerce lengkap dengan fitur modern dan terintegrasi",
      features: [
        "Online Store",
        "Multi-vendor Marketplace",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Management",
        "Customer Management"
      ],
      technologies: ["WooCommerce", "Shopify", "Magento", "Custom Solution"]
    },
    {
      icon: Database,
      title: "Sistem Informasi",
      description: "Sistem informasi terintegrasi untuk mengelola data dan proses bisnis",
      features: [
        "ERP System",
        "HRM System",
        "Hospital Management",
        "School Management",
        "Library System",
        "Document Management"
      ],
      technologies: ["Laravel", "CodeIgniter", "ASP.NET", "Spring Boot", "Django"]
    },
    {
      icon: Settings,
      title: "Custom Project",
      description: "Solusi khusus yang disesuaikan dengan kebutuhan spesifik bisnis Anda",
      features: [
        "Konsultasi Teknologi",
        "Integrasi Sistem",
        "Migrasi Data",
        "API Development",
        "Maintenance & Support",
        "System Optimization"
      ],
      technologies: ["Sesuai Kebutuhan", "Modern Stack", "Best Practices"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
              Layanan Kami
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Solusi Digital Komprehensif
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan pengembangan aplikasi dan sistem 
              yang disesuaikan dengan kebutuhan bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Fitur & Layanan:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Teknologi:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Proses Pengembangan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologi yang terstruktur untuk memastikan proyek Anda berjalan lancar dan sesuai ekspektasi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Konsultasi</h3>
              <p className="text-gray-600">
                Diskusi mendalam tentang kebutuhan dan tujuan bisnis Anda.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Perencanaan</h3>
              <p className="text-gray-600">
                Merancang solusi terbaik dengan timeline dan budget yang jelas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pengembangan</h3>
              <p className="text-gray-600">
                Implementasi dengan teknologi terbaru dan best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deployment</h3>
              <p className="text-gray-600">
                Testing, deployment, dan support berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan digital bisnis Anda dengan tim ahli kami. 
            Dapatkan solusi terbaik untuk mengembangkan bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Lihat Portofolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
