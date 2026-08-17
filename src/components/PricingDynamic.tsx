'use client'

import dynamic from 'next/dynamic'

// `ssr: false` requires a Client Component boundary as of Next.js 16.
const Pricing = dynamic(() => import('@/components/Pricing'), { ssr: false })

export { Pricing as PricingDynamic }
