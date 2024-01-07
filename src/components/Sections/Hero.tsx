import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="flex flex-col items-center pb-12 pt-16 lg:pt-28">
      <h1 className="text-center font-grifter">
        <span className="text-2xl leading-10 text-zinc-500">{t('welcome')}</span>
        <div className="text-7xl leading-[1.1]">
          <span>{t('name')} </span>
          <span className="bg-transparent bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {t('lastname')}
          </span>
        </div>
      </h1>

      <p className="mb-7 mt-4 max-w-xl text-center leading-7">{t('intro')}</p>

      <a href="#socials" className="relative h-16 w-48 p-0.5">
        <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 blur-md" />
        <button className="relative z-10 h-full w-full rounded-lg bg-black font-semibold text-white">
          {t('getInTouch')}
        </button>
      </a>
    </section>
  );
}
