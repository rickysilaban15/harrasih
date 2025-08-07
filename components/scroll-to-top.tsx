'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function AutoScrollTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pathname]) // This effect runs whenever the pathname changes

  return null // This component doesn't render anything
}
