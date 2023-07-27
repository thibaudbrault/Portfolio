import { useMemo } from "react";
import { About, Features, Stack, TabsComponent, Title } from "../projects";
import Carousel from "../projects/Carousel";
import { Links } from "../projects/Links";
import { Tabs, TabsContent } from "../ui";
import type { TStack } from "@/types";
import { Icon } from "@iconify/react";

export const Pokeref = () => {
  const tech: TStack[] = useMemo(
    () => [
      {
        icon: "logos:nextjs-icon",
        name: "Next",
      },
      {
        icon: "logos:typescript-icon",
        name: "Typescript",
      },
      {
        icon: "logos:sass",
        name: "Scss",
      },
      {
        icon: "vscode-icons:file-type-prisma",
        name: "Prisma",
      },
      {
        icon: "simple-icons:planetscale",
        name: "Planetscale",
      },
    ],
    []
  );

  const features: string[] = useMemo(
    () => [
      "Filtrage et recherche",
      "Données dynamiques",
      "Authentification",
      "Sauvegarde des favoris",
      "EsLint, Prettier, Stylelint, Lint-Staged",
      "CI / CD avec Github Actions et Netlify",
      "PWA",
      "Changement de thème",
      "et bien plus",
    ],
    []
  );

  const about: string[] = useMemo(
    () => [
      "PokéRef est une encyclopédie Pokémon qui utilise les données de PokéAPI et Smogon",
      "Permet de retrouver toutes les informations sur les Pokémon, les attaques, les talents, les lieux, ...",
      "Permet de créer un compte afin de pouvoir mettre en favoris des Pokémon",
      "Ce projet est passé par beaucoup d'étapes et m'a permis d'apprendre plusieurs frameworks / langages tel que Typescript, Next, React-Query et l'utilisation d'API, Scss modules, ...",
      "Il m'a aussi permis d'apprendre à structurer une application ainsi que la modifier quand le projet s'agrandit, à mettre en place une CI/CD ainsi que du linting afin d'avoir un code propre et un site fonctionnel en permanence et à résoudre des problèmes créer lors de l'ajout de features, de refacto ou de migrations",
      "Il m'a aussi permis de faire du backend avec l'ajout de l'authentification par email / mot de passe ou avec des providers tel que Google ou encore Github, la sauvegarde des utilisateurs dans une base de donnée en utilisant Prisma et la modification de ces données"
    ],
    []
  );

  const images = useMemo(
    () => [
      {
        id: 0,
        src: "https://res.cloudinary.com/dpgnjpsiy/image/upload/v1690114665/pokeref/Pok%C3%A9Ref_-_Home_ixcxat.png",
        alt: "PokéRef - Home",
      },
      {
        id: 1,
        src: "https://res.cloudinary.com/dpgnjpsiy/image/upload/v1690183906/pokeref/Pok%C3%A9Ref_-_Moves_pg2dhp.png",
        alt: "PokéRef - Moves",
      },
      {
        id: 2,
        src: "https://res.cloudinary.com/dpgnjpsiy/image/upload/v1690186955/pokeref/Pok%C3%A9Ref_-_Pok%C3%A9mon_hzpsxt.png",
        alt: "PokéRef - Pokémon",
      },
      {
        id: 3,
        src: "https://res.cloudinary.com/dpgnjpsiy/image/upload/v1690189257/pokeref/Pok%C3%A9Ref_-_Pok%C3%A9mon2_ydngon.png",
        alt: "PokéRef - Pokémon (types et attaques)",
      },
    ],
    []
  );

  return (
    <Tabs
      defaultValue="pres"
      className="flex flex-col items-center gap-12 mb-24"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Title text="PokéRef" />
          <Icon className="text-6xl" icon="gg:pokemon" />
        </div>
        <TabsComponent images />
      </div>
      <div className="flex flex-col gap-6 items-center">
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
