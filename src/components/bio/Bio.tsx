import { useMemo } from 'react';

import { useTranslations } from '@/i18n/utils';
import type { Lang, TStack } from '@/types';

import { Title } from '../projects';
import { TechBadge } from '../ui';

export const Bio = ({ lang }: Lang) => {
  const t = useTranslations(lang);

  const stack: TStack[][] = useMemo(
    () => [
      [{ name: `HTML`, icon: `logos:html-5` }],
      [
        { name: `CSS`, icon: `logos:css-3` },
        { name: `Sass`, icon: `logos:sass` },
        { name: `Styled-Components`, icon: `vscode-icons:file-type-styled` },
        { name: `Tailwind`, icon: `logos:tailwindcss-icon` },
      ],
      [
        { name: `Javascript`, icon: `logos:javascript` },
        { name: `Typescript`, icon: `logos:typescript-icon` },
      ],
      [
        { name: `React`, icon: `logos:react` },
        { name: `Next`, icon: `logos:nextjs-icon` },
        { name: `Astro`, icon: `vscode-icons:file-type-astro` },
      ],
      [
        { name: `Prisma`, icon: `vscode-icons:file-type-prisma` },
        { name: `MySQL`, icon: `logos:mysql-icon` },
        { name: `PostgreSQL`, icon: `logos:postgresql` },
        { name: `GraphQL`, icon: `logos:graphql` },
      ],
    ],
    [],
  );

  return (
    <section id="bio" className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <Title text={t(`section.title[2]`)} />
        <div className="mx-auto w-5/6 text-center text-xl md:w-2/3">
          <p>{t(`bio.text[0]`)}</p>
          <p>{t(`bio.text[1]`)}</p>
        </div>
      </div>
      <div className="mx-auto flex w-11/12 flex-col flex-wrap justify-center gap-6 lg:flex lg:w-full lg:flex-row">
        {stack.map((techs, index) => (
          <ul
            className="flex flex-col flex-wrap gap-6 md:flex-row lg:flex-col"
            key={index}
          >
            {techs.map((tech, techIndex) => (
              <TechBadge tech={tech} index={techIndex} key={techIndex} />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};
