import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix, defaultLocale } from './i18n/routing';

export default createMiddleware({
  locales,

  localePrefix,

  localeDetection: true,

  defaultLocale,
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
