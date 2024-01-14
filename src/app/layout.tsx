import { ReactNode } from 'react';
import './globals.css';

import { Metadata } from 'next';
import { DM_Sans as DMSans } from 'next/font/google';
import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

const DmSans = DMSans({
  variable: '--sans-font',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: 'Rodrigo Miranda',
    description: t('description'),
    openGraph: {
      images: [t('ogImage')],
    },
  };
}

export default function RootLayout({ children }: PageProps & { children: ReactNode }) {
  const locale = useLocale();

  return (
    <html lang={locale} className={`${DmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
