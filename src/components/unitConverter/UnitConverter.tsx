import { useMemo } from 'react';

import type { TStack } from '@/types';

import { About, Features, Stack, TabsComponent, Title } from '../projects';
import { Links } from '../projects/Links';
import { Tabs, TabsContent } from '../ui';

export const UnitConverter = () => {
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
      `Package NPM`,
      `Utilise Typescript et supporte CJS et ESM`,
      `Tests des fonctions avec Vitest`,
      `Utilisation de Changesets pour le versioning`,
      `CI / CD avec Github Actions et Changesets bot`,
      `Documentation: installation et utilisation du package`,
    ],
    [],
  );

  const about: string[] = useMemo(
    () => [
      `Package NPM dont le but est de fournir des fonctions permettant de convertir des unités de mesures vers d'autres unités (par exemple des mètres vers des pieds)`,
      `Build qui supporte CJS ("require" et "module.exports") et ESM ("import" et "export") grâce à l'utilisation de tsup`,
      `Ecriture de tests unitaires avec Vitest afin de s'assurer que toutes les fonctions soient toujours fonctionnelles et que les fonctions retournent bien le résultat souhaité`,
      `Utilisation de Changesets comme outil de versioning afin de facilement changer le package de version et le publier`,
      `Mise en place d'une CI / CD avec la création de deux workflows Github Actions qui permettent de lancer lint et Vitest lors de chaque commit et de publier la nouvelle version lors d'un merge sur la branche main`,
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
