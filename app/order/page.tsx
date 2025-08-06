'use client'

import { Suspense } from 'react'
import OrderPageContent from './OrderPageContent'

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-500">Loading Form Pemesanan...</div>}>
      <OrderPageContent />
    </Suspense>
  )
}
