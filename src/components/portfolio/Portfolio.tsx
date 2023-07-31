import { useMemo } from 'react';

import type { TStack } from '@/types';

import { About, Features, Stack, TabsComponent, Title } from '../projects';
import { Links } from '../projects/Links';
import { Tabs, TabsContent } from '../ui';

export const Portfolio = () => {
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
    () => [`Présentation de mes projets`, `Carousel d'images`, `Création d'un blog avec Mdx`],
    [],
  );

  const about: string[] = useMemo(
    () => [`Ce site me permet de présenter mes meilleurs projets.`, `Ce portfolio a un design volontairement minimaliste et épuré pour que les visiteurs puissent se focaliser sur les informations présentes.`, `J'ai utilisé Astro qui permet de créer des sites statiques performants ce qui est utile pour mon portfolio.`, `Crée avec en objectif principal la réusabilité des composants React afin de pouvoir facilement et rapidement ajouter des nouvelles informations.`],
    [],
  );

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
          github="https://github.com/thibaudbrault/Portfolio"
        />
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
