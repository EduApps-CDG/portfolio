
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false
})

module.exports = withBundleAnalyzer({
  distDir: 'build',
  poweredByHeader: false,
  compress: true,
  unstable_runtimeJS: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  httpAgentOptions: {
    keepAlive: false,
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  }
})