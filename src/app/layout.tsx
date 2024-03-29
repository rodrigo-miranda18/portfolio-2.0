import { ReactNode } from 'react';
import './globals.css';

import { Metadata } from 'next';
import { DM_Sans as DMSans } from 'next/font/google';
import { cookies } from 'next/headers';
import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';

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

  const cookieStore = cookies();
  const theme = cookieStore.get('theme');

  return (
    <html
      lang={locale}
      className={`${DmSans.variable}${theme && theme.value === 'dark' ? ' dark' : ''}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
