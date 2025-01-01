import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const locales = ['en-GB', 'pt-BR'] as const; // A list of all locales that are supported
export const localePrefix = 'always';
export const defaultLocale = 'en-GB';

export const routing = defineRouting({
  locales,
  localePrefix,
  defaultLocale,
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
