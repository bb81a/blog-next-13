import { MetadataRoute } from 'next'

import { env } from '@/config/env.mjs'

// https://en.wikipedia.org/wiki/Robots.txt#Standard
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${env.NEXT_PUBLIC_APP_URL}/sitemap.xml`,
  }
}