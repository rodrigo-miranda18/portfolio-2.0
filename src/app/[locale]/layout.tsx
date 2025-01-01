import { ReactNode } from 'react';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { DM_Sans as DMSans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';

import Header from '@/components/Header';
import { locales } from '@/i18n/routing';

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

export default async function LocaleLayout({
  children,
  params: { locale },
}: PageProps & { children: ReactNode }) {
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as 'en-GB' | 'pt-BR')) {
    notFound();
  }

  const cookieStore = cookies();
  const theme = cookieStore.get('theme');

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${DmSans.variable}${theme && theme.value === 'dark' ? ' dark' : ''}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
