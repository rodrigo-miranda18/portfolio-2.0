import { useTranslations } from 'next-intl';
import Header from '@/components/Header';

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
      link: '#contact',
    },
  ];

  return <Header menuItems={menuItens} />;
}
