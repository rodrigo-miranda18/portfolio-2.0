'use client';

import { useEffect, useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from '@/i18n/routing';

import ThemeToggle from './ThemeToggle';
import LanguageSelect from './LanguageSelect';
import { useTranslations } from 'next-intl';

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>();
  const t = useTranslations();
  const menuItems = [
    {
      name: t('menuItems.about'),
      link: '/#about',
    },
    {
      name: t('menuItems.experiences'),
      link: '/#experiences',
    },
    {
      name: t('menuItems.contact'),
      link: '/#contact',
    },
    {
      name: t('menuItems.blog'),
      link: `/blog`,
    },
  ];

  function toggleMenu() {
    setMenuIsOpen((value) => !value);
  }

  useEffect(() => {
    document.body.style.overflowY = menuIsOpen ? 'hidden' : 'initial';
  }, [menuIsOpen]);

  return (
    <header className="px-6 pb-4 pt-9 lg:pt-11">
      <div className="m-auto flex max-w-6xl justify-between">
        <Link href="/" className="font-grifter text-5xl">
          R
          <mark className="bg-transparent bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            M
          </mark>
        </Link>

        <div className="flex items-center gap-4">
          <ul
            data-open={menuIsOpen}
            className="absolute inset-0 top-[100px] z-50 flex w-full translate-x-[-100%] flex-col items-center gap-9 bg-[--background-hex] px-9 pt-14 transition-transform duration-300 data-[open=true]:translate-x-0 lg:static lg:translate-x-0 lg:flex-row lg:p-0"
          >
            {menuItems.map(({ name, link }) => (
              <li key={name}>
                <Link href={link} onClick={() => setMenuIsOpen(false)}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 md:gap-8 lg:ml-14">
            <LanguageSelect />
            <ThemeToggle />
          </div>

          <div className="lg:hidden" onClick={toggleMenu}>
            {!menuIsOpen && <Bars3Icon className="h-8 w-8 text-gray-500 dark:text-white" />}
            {menuIsOpen && <XMarkIcon className="h-8 w-8 text-gray-500 dark:text-white" />}
          </div>
        </div>
      </div>
    </header>
  );
}
