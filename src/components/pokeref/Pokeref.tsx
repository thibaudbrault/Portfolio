import { Icon } from '@iconify/react';
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

export const Pokeref = ({ lang }: Lang) => {
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
        icon: `logos:sass`,
        name: `Scss`,
      },
      {
        icon: `vscode-icons:file-type-prisma`,
        name: `Prisma`,
      },
      {
        icon: `simple-icons:railway`,
        name: `Railway`,
      },
    ],
    [],
  );

  const features: string[] = useMemo(
    () => [
      t(`pokeref.features[0]`),
      t(`pokeref.features[1]`),
      t(`pokeref.features[2]`),
      t(`pokeref.features[3]`),
      t(`pokeref.features[4]`),
      t(`pokeref.features[5]`),
      t(`pokeref.features[6]`),
      t(`pokeref.features[7]`),
      t(`pokeref.features[8]`),
    ],
    [],
  );

  const about: string[] = useMemo(
    () => [
      t(`pokeref.about[0]`),
      t(`pokeref.about[1]`),
      t(`pokeref.about[2]`),
      t(`pokeref.about[3]`),
      t(`pokeref.about[4]`),
      t(`pokeref.about[5]`),
    ],
    [],
  );

  const images = useMemo(
    () => [
      {
        id: 0,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1690114665/pokeref/Pok%C3%A9Ref_-_Home_ixcxat.png`,
        alt: `PokéRef - Home`,
      },
      {
        id: 1,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1690183906/pokeref/Pok%C3%A9Ref_-_Moves_pg2dhp.png`,
        alt: `PokéRef - Moves`,
      },
      {
        id: 2,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1692718908/pokeref/Pok%C3%A9Ref_-_Types_tb7tea.png`,
        alt: `PokéRef - Types`,
      },
      {
        id: 3,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1692719049/pokeref/Pok%C3%A9Ref_-_Locations_k1nj6c.png`,
        alt: `PokéRef - Locations`,
      },
      {
        id: 4,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload//c_thumb,w_2543,h_1297,g_auto/v1692719113/pokeref/Pok%C3%A9Ref_-_Login_ywlt02.png`,
        alt: `PokéRef - Login`,
      },
      {
        id: 5,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1690186955/pokeref/Pok%C3%A9Ref_-_Pok%C3%A9mon_hzpsxt.png`,
        alt: `PokéRef - Pokémon`,
      },
      {
        id: 6,
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1690189257/pokeref/Pok%C3%A9Ref_-_Pok%C3%A9mon2_ydngon.png`,
        alt: `PokéRef - Pokémon (types et attaques)`,
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
        <div className="mx-auto flex items-center gap-3">
          <Title small text="PokéRef" />
          <Icon
            className="text-2xl text-red-700 md:text-4xl"
            icon="gg:pokemon"
          />
        </div>
        <TabsComponent images />
      </div>
      <div className="flex flex-col items-center gap-6">
        <Links
          github="https://github.com/thibaudbrault/PokeRef"
          live="https://pokeref.app"
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
