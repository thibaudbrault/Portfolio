import { useMemo } from 'react';

import {
    AstroIcon,
    TailwindIcon,
    TypescriptIcon
} from '@/lib';

import About from '../projects/About';
import Features from '../projects/Features';
import Links from '../projects/Links';
import Stack from '../projects/Stack';
import TabsComponent from '../projects/Tabs';
import Title from '../projects/Title';
import { Tabs, TabsContent } from '../ui';

export const Portfolio = () => {
  const tech = useMemo(
    () => [
      {
        icon: <AstroIcon />,
        name: `Astro`,
      },
      {
        icon: <TypescriptIcon />,
        name: `Typescript`,
      },
      {
        icon: <TailwindIcon />,
        name: `Tailwind`,
      },
    ],
    [],
  );

  const features = useMemo(
    () => [
      `Présentation de mes projets`,
      `Carousel d'images`,
    ],
    [],
  );

  const about = useMemo(() => [`Test paragrpah 1`, `Test paragrpah 2`], []);

  return (
    <Tabs
      defaultValue="features"
      className="mb-24 flex flex-col items-center gap-12"
    >
      <div className="flex flex-col gap-4">
        <Title text="Portfolio" />
        <TabsComponent />
      </div>
      <div className="flex flex-col items-center gap-6">
        <Links
          github="https://github.com/thibaudbrault/PokeRef"
          live="https://pokeref.app"
        />
        <div className="flex gap-6">
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
