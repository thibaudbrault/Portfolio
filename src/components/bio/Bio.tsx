import { useMemo } from 'react';

import { useTranslations } from '@/i18n/utils';
import type { Lang, TStack } from '@/types';

import { Title } from '../projects';
import { TechBadge } from '../ui';

export const Bio = ({ lang }: Lang) => {
  const t = useTranslations(lang);

  const stack: TStack[] = useMemo(
    () => [
      { name: `React`, icon: `logos:react` },
      { name: `Next`, icon: `logos:nextjs-icon` },
      { name: `Typescript`, icon: `logos:typescript-icon` },
      { name: `Sass`, icon: `logos:sass` },
      { name: `Tailwind`, icon: `logos:tailwindcss-icon` },
      { name: `Prisma`, icon: `vscode-icons:file-type-prisma` },
      { name: `Zod`, icon: `logos:zod` },
    ],
    [],
  );

  return (
    <section id="bio" className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <Title text={t(`section.title[2]`)} />
        <div className="mx-auto w-5/6 text-center text-xl">
          <p>{t(`bio.text[0]`)}</p>
          <p>{t(`bio.text[1]`)}</p>
        </div>
      </div>
      <div className="flex w-11/12 flex-wrap mx-auto justify-center gap-6">
        {stack.map((tech, index) => (
          <TechBadge tech={tech} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};
