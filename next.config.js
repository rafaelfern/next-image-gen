/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ['oaidalleapiprodscus.blob.core.windows.net']
  }
}

module.exports = nextConfig
