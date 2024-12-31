import { notFound } from 'next/navigation';

import { getPosts } from '@/utils/posts';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function PostSingle({ params }: PageProps) {
  try {
    const { locale, slug } = await params;
    const { default: Post } = await import(`@/data/posts/${slug}/${locale}.mdx`);

    return <Post />;
  } catch (error) {
    notFound();
  }
}

export function generateStaticParams() {
  return getPosts();
}

export const dynamicParams = false;
