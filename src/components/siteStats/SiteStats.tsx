import { Icon } from '@iconify/react';
import { useMemo } from 'react';

import { useTranslations } from '@/i18n/utils';
import type { Lang, TStack } from '@/types';

import { Links, Stack, Title } from '../projects';

export const SiteStats = ({ lang }: Lang) => {
  const t = useTranslations(lang);

  const tech: TStack[] = useMemo(
    () => [
      {
        icon: `logos:vue`,
        name: `Vue`,
      },
      {
        icon: `logos:nuxt-icon`,
        name: `Nuxt`,
      },
      {
        icon: `logos:typescript-icon`,
        name: `Typescript`,
      },
      {
        icon: `logos:tailwindcss-icon`,
        name: `Tailwind`,
      },
    ],
    [],
  );

  return (
    <section className="mb-24 flex flex-col items-center gap-12">
      <div className="flex flex-col gap-4">
        <div className="mx-auto flex items-center gap-3">
          <Title small text="SiteStats" />
          <Icon
            className="text-2xl md:text-4xl"
            icon="material-symbols-light:query-stats"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <Links github="https://github.com/thibaudbrault/SiteStats" live="" />
        <div className="flex flex-col-reverse gap-6 md:flex-row">
          <Stack stack={tech} text={t(`summary.more`)} />
          <div className="flex items-center justify-center md:w-[500px]  lg:w-[700px]">
            <p className="text-5xl font-bold text-center">Coming soon!</p>
          </div>
        </div>
      </div>
    </section>
  );
};
