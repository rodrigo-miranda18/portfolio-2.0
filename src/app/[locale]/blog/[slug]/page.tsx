import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { formatPostDate, getPost, getPostSlugs } from '@/utils/posts';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const { metadata } = await getPost(slug, locale);

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      type: 'article',
      title: metadata.title,
      description: metadata.description,
      publishedTime: metadata.publishedDate,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/blog/${slug}`,
    },
  };
}

export default async function PostSingle({ params }: PageProps) {
  try {
    const { locale, slug } = await params;
    const { default: Post } = await import(`../posts/${slug}/${locale}.mdx`);
    const post = await getPost(slug, locale);

    return (
      <article className="mx-auto max-w-3xl px-9 pb-16 pt-12">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base text-zinc-500">
            <time dateTime={post.metadata.publishedDate}>
              {formatPostDate(post.metadata.publishedDate, locale)}
            </time>
          </dd>
        </dl>

        <h1 className="mt-2 text-5xl font-semibold">{post.metadata.title}</h1>

        <p className="mt-5 text-lg leading-7 text-zinc-500 dark:text-zinc-300">
          {post.metadata.description}
        </p>

        <hr className="mt-7 border-gray-200 dark:border-zinc-700" />

        <dl className="mt-4">
          <dt className="sr-only">Time to read</dt>
          <dd className="text-base font-semibold text-purple-500">{post.metadata.timeToRead}</dd>
        </dl>

        <div className="prose prose-zinc prose-p:text-base prose-li:text-base prose-a:font-semibold prose-li:marker:font-semibold prose-h2:text-2xl prose-h3:text-xl lg:prose-h3:text-2xl lg:prose-h2:text-3xl lg:prose-xl lg:prose-p:text-lg lg:prose-li:text-lg dark:prose-invert mt-9">
          <Post />
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}

export function generateStaticParams() {
  return getPostSlugs();
}

export const dynamicParams = false;
