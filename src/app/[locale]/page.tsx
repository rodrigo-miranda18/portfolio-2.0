import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Experiences from '@/components/Sections/Experiences';
import Socials from '@/components/Sections/Socials';

export default function Home() {
  const t = useTranslations();
  const menuItens = [
    {
      name: t('menuItems.about'),
      link: '#about',
    },
    {
      name: t('menuItems.experiences'),
      link: '#experiences',
    },
    {
      name: t('menuItems.contact'),
      link: '#socials',
    },
  ];

  return (
    <>
      <Header menuItems={menuItens} />

      <main className="px-9">
        <div className="mx-auto max-w-6xl">
          <Hero />
          <About />
          <Experiences />
          <Socials />
        </div>
      </main>
    </>
  );
}
