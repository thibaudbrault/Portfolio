import { useMemo } from 'react';

import { useTranslations } from '@/i18n/utils';
import type { Lang, TStack } from '@/types';

import {
  About,
  Features,
  Links,
  Stack,
  TabsComponent,
  Title,
} from '../projects';
import { Tabs, TabsContent } from '../ui';

export const Portfolio = ({ lang }: Lang) => {
  const t = useTranslations(lang);

  const tech: TStack[] = useMemo(
    () => [
      {
        icon: `vscode-icons:file-type-astro`,
        name: `Astro`,
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
  const features: string[] = useMemo(
    () => [
      t(`portfolio.features[0]`),
      t(`portfolio.features[1]`),
      t(`portfolio.features[2]`),
    ],
    [],
  );

  const about: string[] = useMemo(
    () => [
      t(`portfolio.about[0]`),
      t(`portfolio.about[1]`),
      t(`portfolio.about[2]`),
      t(`portfolio.about[3]`),
    ],
    [],
  );

  return (
    <Tabs defaultValue="features" className="flex flex-col items-center gap-12">
      <div className="flex flex-col gap-4">
        <Title small text="Portfolio" />
        <TabsComponent />
      </div>
      <div className="flex flex-col items-center gap-6">
        <Links github="https://github.com/thibaudbrault/Portfolio" />
        <div className="flex flex-col-reverse gap-6 md:flex-row">
          <Stack stack={tech} text={t(`summary.more`)} />
          <div className="lg:w-[700px]">
            <TabsContent value="features">
              <Features features={features} />
            </TabsContent>
            <TabsContent value="about">
              <About paragraphs={about} />
            </TabsContent>
          </div>
        </div>
      </div>
    </Tabs>
  );
};
