'use client';

import { useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import useOnClickOutside from '@/hooks/useOnClickOutside';

const languages = [
  { icon: '🇬🇧', name: 'English', value: 'en-GB' },
  { icon: '🇧🇷', name: 'Português', value: 'pt-BR' },
];

export default function LanguageSelect() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  const selectedItem = languages.find(({ value }) => value === locale);

  function toggleSelect() {
    setIsOpen((value) => !value);
  }

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="relative cursor-pointer text-sm" ref={ref}>
      <button
        className="flex h-12 w-12 items-center gap-x-2 whitespace-nowrap rounded-md bg-zinc-300 px-4 py-3 transition-colors hover:bg-zinc-400/50 md:h-auto md:w-auto md:px-5 dark:bg-zinc-800 dark:hover:bg-zinc-700/65"
        onClick={toggleSelect}
      >
        <span>{selectedItem?.icon}</span>
        <span className="hidden md:inline">{selectedItem?.name}</span>
        <ChevronDownIcon className="hidden h-4 w-4 text-black md:inline dark:text-white" />
      </button>

      <ul
        data-open={isOpen}
        className="absolute mt-1 hidden w-full overflow-hidden rounded-md bg-zinc-300 py-1 data-[open=true]:block dark:bg-zinc-800"
      >
        {languages.map(({ icon, name, value }) => (
          <li key={value} className="transition-colors hover:bg-black/5 dark:hover:bg-zinc-700/65">
            <Link href={pathname} locale={value} className="flex gap-x-2 px-4 py-3 md:px-5">
              <span>{icon}</span>
              <span className="hidden md:inline">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
