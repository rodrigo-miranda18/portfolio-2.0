import { getTranslations } from 'next-intl/server';

import { Link } from '@/navigation';
import { formatPostDate, getPosts } from '@/utils/posts';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Blog({ params }: PageProps) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'blog' });
  const posts = await getPosts(locale);

  return (
    <section className="mx-auto w-full max-w-3xl px-9 py-12">
      <h1 className="text-3.5xl font-semibold ">{t('title')}</h1>
      <p className="mt-3 text-lg text-zinc-500">{t('description')}</p>

      <ul className="mt-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-t border-gray-200 py-9 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold hover:underline">
              <Link href={`/blog/${post.slug}`}>{post.metadata.title}</Link>
            </h2>

            <div className="mt-2 flex gap-x-1 text-sm font-semibold text-purple-500">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd>
                  <time dateTime={post.metadata.publishedDate}>
                    {formatPostDate(post.metadata.publishedDate, locale)}
                  </time>
                </dd>
              </dl>
              -
              <dl>
                <dt className="sr-only">Time to read</dt>
                <dd>{post.metadata.timeToRead}</dd>
              </dl>
            </div>

            <p className="mt-3 text-base leading-7 text-zinc-500">{post.metadata.description}</p>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-5 block text-base font-semibold text-purple-500 hover:underline"
            >
              {t('readMore')}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
