import { useTranslations } from 'next-intl';

const socialMedias = [
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/rodrigoamiranda/',
  },
  {
    name: 'Email',
    link: 'mailto:rodrigo.mira08@gmail.com',
  },
  {
    name: 'Github',
    link: 'https://github.com/rodrigo-miranda18/',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/rodri_go_miranda/',
  },
  {
    name: 'Whatsapp',
    link: 'https://wa.me/5541988103200',
  },
];

export default function Socials() {
  const t = useTranslations('home.socials');

  return (
    <section id="contact" className="mx-auto max-w-3xl py-14 text-center">
      <h2 className="text-3.5xl font-bold">{t('title')}</h2>
      <p className="mt-4 text-lg text-zinc-500">{t('description')}</p>

      <ul className="mt-12 flex flex-col items-center gap-4 md:gap-6">
        {socialMedias.map(({ name, link }) => (
          <li key={name} className="w-full md:w-fit">
            <a
              href={link}
              className="block w-full min-w-72 bg-zinc-800 px-3 py-5 text-center text-lg text-white transition-opacity hover:opacity-90"
              target="_blank"
              rel="noreferrer"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
