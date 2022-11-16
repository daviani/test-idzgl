/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify      : true,
  i18n           : {
    locales      : ['fr', 'en'],
    defaultLocale: 'fr'
  },
  images         : {
    domains: ['i.annihil.us'],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
