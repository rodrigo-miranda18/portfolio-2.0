import { ReactNode } from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'blog' });

  return {
    title: {
      template: `%s | ${t('metadata.title')}`,
      default: t('metadata.title'),
    },
    description: t('metadata.description'),
  };
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
