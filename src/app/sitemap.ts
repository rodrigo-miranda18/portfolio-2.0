import { MetadataRoute } from 'next';
import { defaultLocale, getPathname, locales } from '@/i18n/routing';

import { getPosts, Post } from '@/utils/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts(locales[0]);
  const blogs = posts.map((post: Post) =>
    getEntry(`/blog/${post.slug}`, post.metadata.publishedDate),
  );

  const routes = ['', '/blog'].map((route) =>
    getEntry(route, new Date().toISOString().split('T')[0]),
  );

  return [...routes, ...blogs];
}

type Href = Parameters<typeof getPathname>[0]['href'];

function getEntry(href: Href, lastModified: string) {
  return {
    url: getUrl(href, defaultLocale),
    lastModified,
    alternates: {
      languages: Object.fromEntries(locales.map((locale) => [locale, getUrl(href, locale)])),
    },
  };
}

function getUrl(href: Href, locale: (typeof locales)[number]) {
  const pathname = getPathname({ locale, href });

  return `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`;
}
