import { useMemo } from 'react';

import { useTranslations } from '@/i18n/utils';
import type { Lang, TStack } from '@/types';

import {
  About,
  Carousel,
  Features,
  Links,
  Stack,
  TabsComponent,
  Title,
} from '../projects';
import { Tabs, TabsContent } from '../ui';

export const GameMusic = ({ lang }: Lang) => {
  const t = useTranslations(lang);

  const tech: TStack[] = useMemo(
    () => [
      {
        icon: `devicon:svelte`,
        name: `Svelte`,
      },
      {
        icon: `logos:typescript-icon`,
        name: `Typescript`,
      },
      {
        icon: `logos:tailwindcss-icon`,
        name: `Tailwind`,
      },
      {
        icon: `simple-icons:drizzle`,
        name: `Drizzle`,
      },
      {
        icon: `devicon:supabase`,
        name: `Supabase`,
      },
      {
        icon: `skill-icons:aws-dark`,
        name: `AWS`,
      },
    ],
    [],
  );

  const features: string[] = useMemo(
    () => [
      t(`gamemusic.features[0]`),
      t(`gamemusic.features[1]`),
      t(`gamemusic.features[2]`),
      t(`gamemusic.features[3]`),
    ],
    [],
  );

  const about: string[] = useMemo(
    () => [
      t(`faqmaker.about[0]`),
      t(`faqmaker.about[1]`),
      t(`faqmaker.about[2]`),
    ],
    [],
  );

  return (
    <Tabs
      defaultValue="features"
      className="mb-24 flex flex-col items-center gap-12"
    >
      <div className="flex flex-col gap-4">
        <Title small text="GameMusic" />
        <TabsComponent lang={lang} />
      </div>
      <div className="flex flex-col items-center gap-6">
        <Links
          github="https://github.com/thibaudbrault/GameMusic"
          live=""
        />
        <div className="flex flex-col-reverse gap-6 md:flex-row">
          <Stack stack={tech} text={t(`summary.more`)} />
          <div className="md:w-[500px]  lg:w-[700px]">
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
