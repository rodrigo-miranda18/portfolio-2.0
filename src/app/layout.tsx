import { ReactNode } from 'react';
import './globals.css';

import { DM_Sans as DMSans } from 'next/font/google';
import { useLocale } from 'next-intl';

const DmSans = DMSans({
  variable: '--sans-font',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const locale = useLocale();

  return (
    <html lang={locale} className={`${DmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
