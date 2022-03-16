const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.BUNDLE_ANALYZE,
})

module.exports = bundleAnalyzer({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // this will allow site to be framed under builder.io for wysiwyg editing
          {
            key: 'Content-Security-Policy',
            value: 'frame-ancestors https://*.builder.io https://builder.io',
          },
        ],
      },
    ]
  },
  env: {
    // expose env to the browser
    BUILDER_PUBLIC_KEY: process.env.BUILDER_PUBLIC_KEY,
    NEXT_PUBLIC_CHEC_PUBLIC_KEY: process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY
  },
  images: {
    domains: ['cdn.builder.io', 'cdn.chec.io'],
  }
})
