import type { TStack } from "@/types";
import { useMemo } from "react";
import { About, Features, Stack, TabsComponent, Title } from "../projects";
import { Links } from "../projects/Links";
import { Tabs, TabsContent } from "../ui";

export const Portfolio = () => {
  const tech: TStack[] = useMemo(
    () => [
      {
        icon: "vscode-icons:file-type-astro",
        name: `Astro`,
      },
      {
        icon: "logos:typescript-icon",
        name: `Typescript`,
      },
      {
        icon: "logos:tailwindcss-icon",
        name: `Tailwind`,
      },
    ],
    []
  );
  const features: string[] = useMemo(
    () => [`Présentation de mes projets`, `Carousel d'images`],
    []
  );

  const about: string[] = useMemo(
    () => [`Test paragrpah 1`, `Test paragrpah 2`],
    []
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
          github="https://github.com/thibaudbrault/PokeRef"
          live="https://pokeref.app"
        />
        <div className="flex flex-col-reverse md:flex-row gap-6">
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
