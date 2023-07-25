import { useMemo } from 'react';

import {
  NextIcon,
  PlanetscaleIcon,
  PrismaIcon,
  SassIcon,
  TypescriptIcon,
} from '@/lib';

import About from '../projects/About';
import Carousel from '../projects/Carousel';
import Features from '../projects/Features';
import Links from '../projects/Links';
import Stack from '../projects/Stack';
import TabsComponent from '../projects/Tabs';
import Title from '../projects/Title';
import { Tabs, TabsContent } from '../ui';

export const Pokeref = () => {
  const tech = useMemo(
    () => [
      {
        icon: <NextIcon />,
        name: `Next`,
      },
      {
        icon: <TypescriptIcon />,
        name: `Typescript`,
      },
      {
        icon: <SassIcon />,
        name: `Scss`,
      },
      {
        icon: <PrismaIcon />,
        name: `Prisma`,
      },
      {
        icon: <PlanetscaleIcon />,
        name: `Planetscale`,
      },
    ],
    [],
  );

  const features = useMemo(
    () => [
      `Filtrage et recherche`,
      `Données dynamiques`,
      `Authentification`,
      `Sauvegarde des favoris`,
      `PWA`,
      `Changement de thème`,
      `et bien plus`,
    ],
    [],
  );

  const about = useMemo(() => [`Test paragrpah 1`, `Test paragrpah 2`], []);

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
        src: `https://res.cloudinary.com/dpgnjpsiy/image/upload/v1690186955/pokeref/Pok%C3%A9Ref_-_Pok%C3%A9mon_hzpsxt.png`,
        alt: `PokéRef - Pokémon`,
      },
      {
        id: 3,
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
        <Title text="PokéRef" />
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
