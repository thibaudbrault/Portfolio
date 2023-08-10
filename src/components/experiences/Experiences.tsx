import { Fragment, useMemo } from 'react';

import { useTranslations } from '@/i18n/utils';
import type { Lang, TExperiences } from '@/types';

import { Title } from '../projects';
import { TechBadge } from '../ui';

export const Experiences = ({ lang }: Lang) => {
  const t = useTranslations(lang);

  const experiences: TExperiences[] = useMemo(
    () => [
      {
        role: t(`experiences[0].role`),
        company: `Zénika`,
        city: `Nantes`,
        start: t(`experiences[0].start`),
        end: t(`experiences[0].end`),
        duration: t(`experiences[0].duration`),
        type: t(`experiences[0].type`),
        missions: [
          {
            client: t(`experiences[0].missions.client`),
            details: [
              t(`experiences[0].missions.details[0]`),
              t(`experiences[0].missions.details[1]`),
              t(`experiences[0].missions.details[2]`),
              t(`experiences[0].missions.details[3]`),
              t(`experiences[0].missions.details[4]`),
              t(`experiences[0].missions.details[5]`),
            ],
            stack: [
              {
                icon: `logos:react`,
                name: `React`,
              },
              {
                icon: `logos:playwright`,
                name: `Playwright`,
              },
              {
                icon: `logos:vitejs`,
                name: `Vite`,
              },
              {
                icon: `logos:tailwindcss-icon`,
                name: `Tailwind`,
              },
              {
                icon: `vscode-icons:file-type-prisma`,
                name: `Prisma`,
              },
              {
                icon: `logos:graphql`,
                name: `Graphql`,
              },
            ],
          },
        ],
      },
    ],
    [],
  );

  return (
    <section id="experiences" className="mb-24 flex flex-col gap-12">
      <Title text={t(`section.title[0]`)} />
      <ul className="mx-auto flex w-5/6 flex-col items-start gap-3 text-start">
        {experiences.map((experience, index) => (
          <li className="flex flex-col gap-6" key={index}>
            <div>
              <h4 className="text-2xl font-bold text-yellow-600">
                {experience.role}
              </h4>
              <p>
                <b>{experience.company}</b>, {experience.city}
              </p>
              <p>
                {experience.type} {t(`experiences.words.de`)}
                {` `}
                <b>{experience.duration}</b> {t(`experiences.words.entre`)}
                {` `}
                <b>{experience.start}</b> {t(`experiences.words.a`)}
                {` `}
                <b>{experience.end}</b>
              </p>
            </div>
            <div className="flex flex-col gap-12 md:flex-row">
              {experience.missions.map((mission, missionIndex) => (
                <Fragment key={missionIndex}>
                  <ul className="list-disc">
                    <li className="list-none text-xl">
                      <p>
                        Client:{` `}
                        <b className="text-yellow-600">{mission.client}</b>
                      </p>
                    </li>
                    {mission.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-6">
                    {mission.stack.map((tech, techIndex) => (
                      <TechBadge
                        tech={tech}
                        index={techIndex}
                        key={techIndex}
                      />
                    ))}
                  </ul>
                </Fragment>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
