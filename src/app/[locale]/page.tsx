import { useTranslations } from 'next-intl';
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Experiences from '@/components/Sections/Experiences';
import Socials from '@/components/Sections/Socials';

export default function Home() {
  const t = useTranslations('home');

  return (
    <>
      <main className="px-9">
        <div className="mx-auto max-w-6xl">
          <Hero />
          <About />
          <Experiences />
          <Socials />
        </div>
      </main>

      <footer className="pb-12 pt-14 text-center text-lg">{t('footer.credits')}</footer>
    </>
  );
}

export const dynamic = 'force-static';
