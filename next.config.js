/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['kr', 'en'],
    defaultLocale: 'kr',
    localeDetection: false,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
