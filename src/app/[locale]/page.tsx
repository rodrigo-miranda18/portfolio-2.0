import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return <h1 className="font-grifter text-7xl leading-normal">{t('title')}</h1>;
}
