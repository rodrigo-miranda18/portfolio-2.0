import { useTranslations } from 'next-intl';

const technologies = [
  'React.js',
  'Next.js',
  'Typescript',
  'CSS-in-JS',
  'Tailwind CSS',
  'Redux',
  'Node.js',
  'PHP',
  'Git & Github',
  'Scrum',
  'Docker',
  'Wordpress',
  'Design Systems',
  'MySQL',
  'MongoDB',
];

function getAge(): number {
  const diff = Date.now() - new Date('2002-11-27T23:02:00').getTime();
  const age = new Date(diff);

  return Math.abs(age.getUTCFullYear() - 1970);
}

export default function About() {
  const t = useTranslations('about');
  const age = getAge();

  return (
    <div id="about" className="mx-auto max-w-3xl py-14">
      <h2 className="text-3.5xl text-center font-bold text-black dark:text-white">{t('title')}</h2>
      <p className="mt-8 text-center text-lg text-zinc-500">
        {t('bio', { age })}
        <br />
        <br />
        {t('technologiesIntro')}
      </p>

      <ul className="mt-10 flex flex-wrap justify-center gap-6">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="cursor-pointer bg-zinc-800 px-6 py-3 text-sm text-white transition-colors hover:bg-zinc-800/95 dark:hover:bg-zinc-700/70"
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}
