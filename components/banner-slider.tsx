'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const banners = [
    {
      id: 1,
      image: "/images/banners1.jpg",
      title: "Inovasi Digital Terdepan",
      subtitle: "Wujudkan visi digital bisnis Anda bersama kami"
    },
    {
      id: 2,
      image: "/images/banners2.jpg",
      title: "Solusi Teknologi Terpercaya",
      subtitle: "Dari konsep hingga implementasi, kami siap membantu"
    },
    {
      id: 3,
      image: "/images/banners3.jpg",
      title: "Siap Menghadapi Masa Depan",
      subtitle: "Teknologi yang scalable dan future-proof"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [banners.length])

  return (
    <div className="banner-slider h-96 rounded-2xl overflow-hidden relative">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <Image
            src={banner.image || "/placeholder.svg"}
            alt={banner.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-2">{banner.title}</h3>
              <p className="text-lg opacity-90">{banner.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
