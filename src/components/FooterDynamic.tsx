'use client'

import dynamic from 'next/dynamic'

// `ssr: false` requires a Client Component boundary as of Next.js 16.
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

export { Footer as FooterDynamic }
