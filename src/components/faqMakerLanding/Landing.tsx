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

export const Landing = ({ lang }: Lang) => {
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
      {
        icon: `simple-icons:obsstudio`,
        name: `OBS Studio`,
      },
    ],
    [],
  );

  const features: string[] = useMemo(
    () => [
      t(`faqmaker.landing.features[0]`),
      t(`faqmaker.landing.features[1]`),
      t(`faqmaker.landing.features[2]`),
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

  const images = useMemo(
    () => [
      {
        id: 0,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1717870657/FAQMaker_-_Landing_-_Home.png`,
        alt: `FAQMaker - Home`,
      },
      {
        id: 1,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1717870724/FAQMaker_-_Landing_-_Features.png`,
        alt: `FAQMaker - Features`,
      },
      {
        id: 2,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1717870777/FAQMaker_-_Landing_-_Pricing.png`,
        alt: `FAQMaker - Pricing`,
      },
      {
        id: 3,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1717870993/FAQMaker_-_Landing_-_FAQ.png`,
        alt: `FAQMaker - FAQ`,
      },
    ],
    [],
  );

  return (
    <Tabs defaultValue="pres" className="flex flex-col items-center gap-12">
      <div className="flex flex-col gap-4">
        <Title small text="Landing page" />
        <TabsComponent images lang={lang} />
      </div>
      <div className="flex flex-col items-center gap-6">
        <Links
          github="https://github.com/thibaudbrault/FAQMaker-Landing"
          live="https://faqmaker.co"
        />
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
