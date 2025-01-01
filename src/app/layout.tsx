import { ReactNode } from 'react';
import './globals.css';

import { Metadata } from 'next';
import { DM_Sans as DMSans } from 'next/font/google';
import { cookies } from 'next/headers';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';

import Header from '@/components/Header';

const DmSans = DMSans({
  variable: '--sans-font',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: 'Rodrigo Miranda',
    description: t('metadata.description'),
    openGraph: {
      images: [t('metadata.ogImage')],
    },
    alternates: {
      canonical: '/',
    },
  };
}

export default function RootLayout({ children }: PageProps & { children: ReactNode }) {
  const locale = useLocale();

  const t = useTranslations();
  const menuItens = [
    {
      name: t('menuItems.about'),
      link: '#about',
    },
    {
      name: t('menuItems.experiences'),
      link: '#experiences',
    },
    {
      name: t('menuItems.contact'),
      link: '#contact',
    },
    {
      name: t('menuItems.blog'),
      link: `/${locale}/blog`,
    },
  ];

  const cookieStore = cookies();
  const theme = cookieStore.get('theme');

  return (
    <html
      lang={locale}
      className={`${DmSans.variable}${theme && theme.value === 'dark' ? ' dark' : ''}`}
    >
      <body>
        <Header menuItems={menuItens} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
