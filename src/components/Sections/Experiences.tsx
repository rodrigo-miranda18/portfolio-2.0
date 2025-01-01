import { useTranslations } from 'next-intl';

export default function Experiences() {
  const t = useTranslations('home.experiences');

  const experiences = [
    {
      id: 2,
      companyName: t('firstExperience.companyName'),
      companyLocation: t('firstExperience.companyLocation'),
      workModel: t('firstExperience.workModel'),
      role: t('firstExperience.role'),
      startDate: t('firstExperience.startDate'),
      endDate: t('firstExperience.endDate'),
      skills: t('firstExperience.skills'),
      jobDescription: t('firstExperience.jobDescription'),
    },
    {
      id: 1,
      companyName: t('secondExperience.companyName'),
      companyLocation: t('secondExperience.companyLocation'),
      workModel: t('firstExperience.workModel'),
      role: t('secondExperience.role'),
      startDate: t('secondExperience.startDate'),
      endDate: t('secondExperience.endDate'),
      skills: t('secondExperience.skills'),
      jobDescription: t('secondExperience.jobDescription'),
    },
  ];

  return (
    <section id="experiences" className="py-14">
      <h2 className="text-center text-3.5xl font-bold">{t('title')}</h2>

      <ul className="mt-16 flex flex-col gap-14">
        {experiences.map((experience) => (
          <li key={experience.id} className="flex flex-col gap-x-4 gap-y-6 md:flex-row">
            <div className="w-fit whitespace-nowrap border border-zinc-300 px-3 py-1 text-lg md:border-0 md:p-0 md:text-right dark:border-zinc-500">
              <span className="md:block">{experience.endDate}</span>
              <span className="text-zinc-500"> / {experience.startDate}</span>
            </div>

            <div>
              <div className="flex flex-col justify-between gap-5 lg:flex-row">
                <div className="leading-7 lg:leading-8">
                  <div className="font-bold">
                    {experience.companyName}{' '}
                    <span className="text-zinc-500">/ {experience.companyLocation}</span>
                  </div>

                  <span className="block font-medium leading-7">{experience.role}</span>

                  <span className="text-zinc-600 dark:text-zinc-400">{experience.workModel}</span>
                </div>

                <div className="h-fit w-fit bg-zinc-800 px-5 py-3 text-xs leading-3 text-white">
                  {experience.skills}
                </div>
              </div>

              <p className="mt-6 whitespace-pre-line leading-8 lg:mt-4">
                {experience.jobDescription}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
