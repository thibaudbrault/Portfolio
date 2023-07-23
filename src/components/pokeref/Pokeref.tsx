import { useMemo } from "react";
import { About, Features, Slider, Stack, TabsComponent, Title } from "..";
import { Tabs, TabsContent } from "../ui/Tabs";
import { Links } from "../projects/Links";

export const Pokeref = () => {
  const tech = useMemo(
    () => ["Next", "Typescript", "Scss", "Prisma", "Plantescale"],
    []
  );

  const features = useMemo(
    () => [
      "Filtrage et recherche",
      "Données dynamiques",
      "Authentification",
      "PWA",
      "Changement de thème",
      "et bien plus",
    ],
    []
  );

  const about = useMemo(() => ["Test paragrpah 1", "Test paragrpah 2"], []);

  const images = useMemo(
    () => [
      {
        src: "https://res.cloudinary.com/dpgnjpsiy/image/upload/v1690114665/pokeref/Pok%C3%A9Ref_-_Home_ixcxat.png",
        alt: "PokéRef - Home",
      },
    ],
    []
  );

  return (
    <Tabs defaultValue="pres" className="flex flex-col items-center gap-12">
      <div className="flex flex-col gap-4">
        <Title text="PokéRef" />
        <TabsComponent />
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
              <Slider images={images} />
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
