import { useMemo } from 'react';

import { useTranslations } from '@/i18n/utils';
import type { Lang, TStack } from '@/types';

import { About, Features, Stack, TabsComponent, Title } from '../projects';
import { Links } from '../projects/Links';
import { Tabs, TabsContent } from '../ui';

export const UnitConverter = ({ lang }: Lang) => {
  const t = useTranslations(lang);

  const tech: TStack[] = useMemo(
    () => [
      {
        icon: `logos:typescript-icon`,
        name: `Typescript`,
      },
      {
        icon: `logos:vitest`,
        name: `Vitest`,
      },
    ],
    [],
  );
  const features: string[] = useMemo(
    () => [
      t(`unit.features[0]`),
      t(`unit.features[1]`),
      t(`unit.features[2]`),
      t(`unit.features[3]`),
      t(`unit.features[4]`),
      t(`unit.features[5]`),
    ],
    [],
  );

  const about: string[] = useMemo(
    () => [
      t(`unit.about[0]`),
      t(`unit.about[1]`),
      t(`unit.about[2]`),
      t(`unit.about[3]`),
      t(`unit.about[4]`),
    ],
    [],
  );

  return (
    <Tabs
      defaultValue="features"
      className="mb-24 flex flex-col items-center gap-12"
    >
      <div className="flex flex-col gap-4">
        <Title small text="Unit Converter" />
        <TabsComponent />
      </div>
      <div className="flex flex-col items-center gap-6">
        <Links github="https://github.com/thibaudbrault/UnitConverter" />
        <div className="flex flex-col-reverse gap-6 md:flex-row">
          <Stack stack={tech} />
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
