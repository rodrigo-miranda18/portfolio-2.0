import fs from 'fs';
import path from 'path';

interface PostMetadata {
  title: string;
  description: string;
  publishedDate: string;
  timeToRead: string;
  heroImage: string;
  tags: string;
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
}

export async function getPost(slug: string, locale: string): Promise<Post> {
  const file = await import(`../i18n/posts/${slug}/${locale}.mdx`);

  if (file?.metadata) {
    return { slug, metadata: file.metadata };
  }

  throw new Error(`Unable to find metadata for ${slug}.mdx`);
}

export function getPostSlugs(): string[] {
  const postsDirectory = path.resolve(process.cwd(), 'src/i18n/posts');
  return fs.readdirSync(postsDirectory);
}

export async function getPosts(locale: string): Promise<Post[]> {
  const postSlugs = getPostSlugs();
  const posts = postSlugs.map(async (slug) => {
    const postData = await getPost(slug, locale);

    return { ...postData, slug };
  });

  return Promise.all(posts);
}

export function formatPostDate(dateString: string, locale: string): string {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}
