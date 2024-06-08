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

export const FaqMaker = ({ lang }: Lang) => {
  const t = useTranslations(lang);

  const tech: TStack[] = useMemo(
    () => [
      {
        icon: `logos:react`,
        name: `React`,
      },
      {
        icon: `logos:nextjs-icon`,
        name: `Next`,
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
        icon: `logos:playwright`,
        name: `Playwright`,
      },
      {
        icon: `vscode-icons:file-type-prisma`,
        name: `Prisma`,
      },
      {
        icon: `simple-icons:railway`,
        name: `Railway`,
      },
      {
        icon: `logos:zod`,
        name: `Zod`,
      },
      {
        icon: `logos:stripe`,
        name: `Stripe`,
      },
    ],
    [],
  );

  const features: string[] = useMemo(
    () => [
      t(`faqmaker.features[0]`),
      t(`faqmaker.features[1]`),
      t(`faqmaker.features[2]`),
      t(`faqmaker.features[3]`),
      t(`faqmaker.features[4]`),
      t(`faqmaker.features[5]`),
      t(`faqmaker.features[6]`),
      t(`faqmaker.features[7]`),
      t(`faqmaker.features[8]`),
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
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1696151902/faqmaker/FAQMaker_-_Landing_-_Home_e2o4sk.png`,
        alt: `FAQMaker - Landing - Home`,
      },
      {
        id: 1,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1696151997/faqmaker/FAQMaker_-_Landing_-_Pricing_q1iegt.png`,
        alt: `FAQMaker - Landing - Pricing`,
      },
    ],
    [],
  );

  return (
    <Tabs
      defaultValue="features"
      className="mb-24 flex flex-col items-center gap-12"
    >
      <div className="flex flex-col gap-4">
        <Title small text="SaaS" />
        <TabsComponent lang={lang} />
      </div>
      <div className="flex flex-col items-center gap-6">
        <Links
          github="https://github.com/thibaudbrault/FAQMaker"
          live="https://app.faqmaker.co"
        />
        <div className="flex flex-col-reverse gap-6 md:flex-row">
          <Stack stack={tech} text={t(`summary.more`)} />
          <div className="md:w-[500px]  lg:w-[700px]">
            {/* <TabsContent value="pres">
              <Carousel images={images} />
            </TabsContent> */}
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
