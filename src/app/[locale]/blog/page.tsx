import { getTranslations } from 'next-intl/server';
import { Circle } from 'lucide-react';

import { Link } from '@/i18n/routing';
import { formatPostDate, getPosts } from '@/utils/posts';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Blog({ params }: PageProps) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'blog' });
  const posts = await getPosts(locale);

  return (
    <section className="mx-auto w-full max-w-5xl px-9 py-12">
      <h1 className="text-3.5xl font-semibold ">{t('title')}</h1>
      <p className="mt-3 text-lg text-zinc-500">{t('description')}</p>

      <main className="mt-16 lg:pl-44">
        <div className="space-y-9 border-l border-gray-200 dark:border-zinc-800">
          {posts.map((post) => (
            <article key={post.slug} className="relative pl-6 md:pl-12">
              <Circle className="absolute right-full top-1 h-[10px] w-[10px] translate-x-1 bg-[var(--background-hex)] text-gray-400 md:top-0" />

              <dl className="mb-2 whitespace-nowrap text-sm font-semibold text-zinc-400 lg:absolute lg:right-full lg:top-0 lg:mb-0 lg:-translate-x-12 dark:text-zinc-500">
                <dt className="sr-only">Published on</dt>
                <dd>
                  <time dateTime={post.metadata.publishedDate}>
                    {formatPostDate(post.metadata.publishedDate, locale)}
                  </time>
                </dd>
              </dl>

              <h2 className="z-10 text-2xl font-semibold hover:underline">
                <Link href={`/blog/${post.slug}`}>{post.metadata.title}</Link>
              </h2>

              <dl className="mt-2 text-sm font-semibold text-purple-500">
                <dt className="sr-only">Time to read</dt>
                <dd>{post.metadata.timeToRead}</dd>
              </dl>

              <p className="mt-3 text-base leading-7 text-zinc-500">{post.metadata.description}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 block text-base font-semibold text-purple-500 hover:underline"
              >
                {t('readMore')}
              </Link>
            </article>
          ))}
        </div>
      </main>
    </section>
  );
}

export const dynamic = 'force-static';
