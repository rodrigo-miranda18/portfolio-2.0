import { ReactNode } from 'react';
import './globals.css';

import { DM_Sans as DMSans } from 'next/font/google';

const DmSans = DMSans({
  variable: '--sans-font',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${DmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
