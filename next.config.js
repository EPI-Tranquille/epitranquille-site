const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  redirects() {
    return [
      // URL imprimée dans le QR code des stickers : ne jamais la supprimer.
      // Changer uniquement `destination` pour la faire pointer ailleurs.
      // `permanent: false` (307) évite que navigateurs et proxies mettent la
      // redirection en cache, pour qu'un changement soit pris en compte de suite.
      {
        source: '/onboarding',
        destination:
          '/?utm_source=sticker&utm_medium=qrcode&utm_campaign=onboarding',
        permanent: false,
      },
    ]
  },
}

module.exports = withBundleAnalyzer(withMDX(nextConfig))
