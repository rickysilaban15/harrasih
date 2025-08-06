'use client'

import { useEffect } from 'react'

export function ScrollToTop() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}
