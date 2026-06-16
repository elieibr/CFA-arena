import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/quiz', '/settings', '/review', '/statistics', '/exam', '/subscription', '/onboarding'],
      },
    ],
    sitemap: 'https://charterpath.app/sitemap.xml',
  }
}
