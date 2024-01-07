import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en-GB', 'pt-BR'] as const; // A list of all locales that are supported
export const localePrefix = 'always';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});
