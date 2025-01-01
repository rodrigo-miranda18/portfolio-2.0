import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getPost, getPostSlugs } from '@/utils/posts';

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

    return <Post />;
  } catch (error) {
    notFound();
  }
}

export function generateStaticParams() {
  return getPostSlugs();
}

export const dynamicParams = false;
