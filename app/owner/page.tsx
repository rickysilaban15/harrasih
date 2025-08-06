import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Calendar, Award, GraduationCap, Briefcase, Users, Target, Heart } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from 'next'
import { ScrollAnimation } from '@/components/scroll-animation'

export const metadata: Metadata = {
  title: 'Profil Owner - PT. Harrasih | Ricky Steven Silaban',
  description: 'Profil lengkap Ricky Steven Silaban, Founder & CEO PT. Harrasih. Pengalaman, visi, dan dedikasi dalam memberikan solusi digital terbaik.',
}

export default function OwnerPage() {
  const achievements = [
    {
      year: "2024",
      title: "Top Digital Solution Provider",
      description: "Penghargaan sebagai penyedia solusi digital terbaik di Jakarta"
    },
    {
      year: "2023",
      title: "Certified Project Manager",
      description: "Sertifikasi manajemen proyek dari Project Management Institute"
    },
    {
      year: "2022",
      title: "Tech Innovation Award",
      description: "Penghargaan inovasi teknologi untuk pengembangan sistem terintegrasi"
    },
    {
      year: "2021",
      title: "Young Entrepreneur Award",
      description: "Penghargaan pengusaha muda berprestasi di bidang teknologi"
    }
  ]

  const skills = [
    "Strategic Planning",
    "Project Management", 
    "Software Architecture",
    "Team Leadership",
    "Business Development",
    "Digital Transformation",
    "Client Relations",
    "Technology Consulting",
    "Web Development"
  ]

  const education = [
  {
    degree: "Sekolah Teknik Menengah (STM) - Teknik Instalasi Tenaga Listrik (TITL)",
    institution: "STM Pancur Napitu",
    year: "2018-2021",
    description: "Lulus dengan hasil memuaskan sebagai siswa yang memahami bidang kelistrikan"
  },
  {
    degree: "Sarjana S1 Teknik Informatika",
    institution: "Universitas Indraprasta PGRI",
    year: "2022-2026",
    description: "Fokus pada pengembangan software dan web development"
  }


]

  const experience = [
  {
    position: "Field Work Internship (PKL)",
    company: "PT PLN (Persero) ULP Tarutung",
    period: "February – June 2020",
    location: "Tarutung, North Sumatra",
    description: `• Participated in work internship activities in PLN's operational environment
• Assisted field technicians in the maintenance and repair of electricity distribution networks
• Studied electrical systems, occupational safety (K3) standards, and PLN operational procedures
• Official PKL certificate accepted as proof of graduation and competency`
  },
  {
    position: "Helper Operator",
    company: "Freelance",
    period: "July – December 2021",
    location: "Tarutung, North Sumatra",
    description:  ` • Maintained occupational safety and ensured daily operational efficiency
                    • Conducted initial inspections, cleaning, and regular monitoring of heavy equipment
                    • Assisted the main operator in operating production equipment/industrial machinery`
  },
  {
    position: "Website Developer",
    company: "Freelance & Campus Projects",
    period: "2023 – 2025",
    location: "Various",
    description: `• Worked on various website development projects for personal use, campus assignments, and assisting other students
• Developed projects ranging from simple websites to PHP and MySQL-based information systems
• Used technologies including HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, PHP, MySQL, Laravel, Node.js, and CI
• Utilized tools such as VS Code, XAMPP, phpMyAdmin, GitHub, and Git`
  }

  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4">
                  Profil Owner
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Ricky Steven Silaban
                </h1>
                <p className="text-2xl text-purple-600 font-semibold mb-6">
                  Founder & CEO PT. Harrasih
                </p>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Seorang teknologi enthusiast dengan passion dalam menciptakan solusi digital 
                  yang memberikan dampak positif bagi bisnis dan masyarakat. Dengan pengalaman 
                  lebih dari 2 tahun di industri teknologi, saya berkomitmen untuk terus 
                  berinovasi dan memberikan yang terbaik.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <span>Jakarta, Indonesia</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <span> 2+ Tahun Pengalaman</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/6287818894504" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-block text-center"
                  >
                    Hubungi Saya
                  </a>
                  <a 
                    href="https://rickyport.surge.sh/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary inline-block text-center"
                  >
                    Lihat Portofolio
                  </a>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="relative z-10">
                    <Image
                      src="/images/prof1.jpg"
                      alt="Ricky Steven Silaban - CEO PT. Harrasih"
                      width={500}
                      height={600}
                      className="rounded-3xl shadow-2xl"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Personal Info */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <Card className="p-8 border-0 shadow-lg card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl mb-6 flex items-center">
                    <Phone className="h-6 w-6 text-purple-600 mr-3" />
                    Informasi Kontak
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Telepon</p>
                      <a href="tel:+6287818894504" className="text-purple-600 hover:underline">
                        +62 878 1889 4504
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:rickysilaban384@gmail.com" className="text-purple-600 hover:underline">
                        rickysilaban384@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Lokasi</p>
                      <p className="text-gray-600">Jakarta Timur, Indonesia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="p-8 border-0 shadow-lg card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl mb-6 flex items-center">
                    <Award className="h-6 w-6 text-purple-600 mr-3" />
                    Pencapaian
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">50+</div>
                    <div className="text-gray-600">Proyek Selesai</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">45+</div>
                    <div className="text-gray-600">Klien Puas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">15+</div>
                    <div className="text-gray-600">Tim Member</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">2+</div>
                    <div className="text-gray-600">Tahun Pengalaman</div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="p-8 border-0 shadow-lg card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl mb-6 flex items-center">
                    <Target className="h-6 w-6 text-purple-600 mr-3" />
                    Keahlian
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Vision & Mission */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Visi & Misi Pribadi
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Filosofi dan prinsip yang menjadi panduan dalam memimpin PT. Harrasih
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-8 border-0 shadow-lg card-hover">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl">Visi Pribadi</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">
                    Menjadi pemimpin teknologi yang menginspirasi dan menciptakan solusi digital 
                    yang tidak hanya memenuhi kebutuhan bisnis, tetapi juga memberikan dampak 
                    positif bagi masyarakat dan kemajuan teknologi Indonesia.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 border-0 shadow-lg card-hover">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Misi Pribadi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Membangun tim yang solid dan berkualitas tinggi</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mengembangkan solusi teknologi yang inovatif</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Memberikan nilai terbaik kepada setiap klien</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Berkontribusi pada kemajuan teknologi Indonesia</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Education */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Latar Belakang Pendidikan
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Fondasi akademis yang kuat dalam bidang teknologi informasi
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {education.map((edu, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="p-8 border-0 shadow-lg card-hover">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-8 w-8 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                        <p className="text-lg text-purple-600 font-semibold mb-2">{edu.institution}</p>
                        <p className="text-gray-500 mb-4">{edu.year}</p>
                        <p className="text-gray-600">{edu.description}</p>
                      </div>
                    </div>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Experience */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pengalaman Profesional
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Perjalanan karir dalam dunia teknologi dan pengembangan software
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {experience.map((exp, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="p-8 border-0 shadow-lg card-hover">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                        <p className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</p>
                        <p className="text-gray-500 mb-4">{exp.period}</p>
                        <p className="text-gray-600">{exp.description}</p>
                      </div>
                    </div>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Achievements */}
      <ScrollAnimation delay={0}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Penghargaan & Sertifikasi
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Pengakuan atas dedikasi dan kontribusi dalam industri teknologi
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="p-6 border-0 shadow-lg card-hover">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{achievement.title}</h3>
                          <Badge className="bg-yellow-100 text-yellow-800">{achievement.year}</Badge>
                        </div>
                        <p className="text-gray-600 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Personal Quote */}
      <ScrollAnimation delay={0}>
  <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-cyan-700">
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <blockquote className="text-3xl lg:text-4xl font-bold text-white mb-8 italic">
          "𝐓𝐞𝐤𝐧𝐨𝐥𝐨𝐠𝐢 𝐛𝐮𝐤𝐚𝐧 𝐡𝐚𝐧𝐲𝐚 𝐭𝐞𝐧𝐭𝐚𝐧𝐠 𝐤𝐨𝐝𝐞 𝐝𝐚𝐧 𝐚𝐥𝐠𝐨𝐫𝐢𝐭𝐦𝐚, 𝐭𝐞𝐭𝐚𝐩𝐢 𝐭𝐞𝐧𝐭𝐚𝐧𝐠 
          𝐦𝐞𝐧𝐜𝐢𝐩𝐭𝐚𝐤𝐚𝐧 𝐬𝐨𝐥𝐮𝐬𝐢 𝐲𝐚𝐧𝐠 𝐦𝐞𝐦𝐛𝐞𝐫𝐢𝐤𝐚𝐧 𝐝𝐚𝐦𝐩𝐚𝐤 𝐧𝐲𝐚𝐭𝐚 𝐛𝐚𝐠𝐢 𝐤𝐞𝐡𝐢𝐝𝐮𝐩𝐚𝐧 𝐦𝐚𝐧𝐮𝐬𝐢𝐚."
        </blockquote>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">RS</span>
          </div>
          <div className="text-left">
            <div className="text-white font-bold text-xl">Ricky Steven Silaban</div>
            <div className="text-cyan-100">Founder & CEO PT.Harrasih</div>
          </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}