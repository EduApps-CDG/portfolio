
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false
})

module.exports = withBundleAnalyzer({
  distDir: 'build',
  compress:true
})