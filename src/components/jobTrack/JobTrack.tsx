import { useMemo } from 'react';

import { useTranslations } from '@/i18n/utils';
import type { Lang, TStack } from '@/types';

import {
  About,
  Carousel,
  Features,
  Stack,
  TabsComponent,
  Title,
} from '../projects';
import { Links } from '../projects/Links';
import { Tabs, TabsContent } from '../ui';

export const JobTrack = ({ lang }: Lang) => {
  const t = useTranslations(lang);

  const tech: TStack[] = useMemo(
    () => [
      {
        icon: `logos:vitejs`,
        name: `Vite`,
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
        icon: `logos:supabase-icon`,
        name: `Supabase`,
      },
    ],
    [],
  );

  const features: string[] = useMemo(
    () => [
      t(`dashboard.features[0]`),
      t(`dashboard.features[1]`),
      t(`dashboard.features[2]`),
      t(`dashboard.features[3]`),
    ],
    [],
  );

  const about: string[] = useMemo(() => [t(`dashboard.about[0]`)], []);

  const images = useMemo(
    () => [
      {
        id: 0,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1692979413/jobTrack/JobTrack_-_Home_quc6nk.png`,
        alt: `JobTrack - Home`,
      },
      {
        id: 1,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1692979505/jobTrack/JobTrack_-_List_bz9fdf.png`,
        alt: `JobTrack - List`,
      },
      {
        id: 2,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1692979438/jobTrack/JobTrack_-_Form_ln1g33.png`,
        alt: `JobTrack - Form`,
      },
    ],
    [],
  );

  return (
    <Tabs
      defaultValue="pres"
      className="mb-24 flex flex-col items-center gap-12"
    >
      <div className="flex flex-col gap-4">
        <Title small text="Jobs Tracker" />
        <TabsComponent images />
      </div>
      <div className="flex flex-col items-center gap-6">
        <Links github="https://github.com/thibaudbrault/WorkDashboard" />
        <div className="flex flex-col-reverse gap-6 md:flex-row">
          <Stack stack={tech} text={t(`summary.more`)} />
          <div className="md:w-[500px]  lg:w-[700px]">
            <TabsContent value="pres">
              <Carousel images={images} />
            </TabsContent>
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
