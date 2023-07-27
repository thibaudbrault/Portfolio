import type { TStack } from "@/types";

import { Title } from "../projects";
import { TechBadge } from "../ui";
import { useMemo } from "react";

export const Bio = () => {
  const stack: TStack[][] = useMemo(
    () => [
      [{ name: `HTML`, icon: "logos:html-5" }],
      [
        { name: `CSS`, icon: "logos:css-3" },
        { name: `Sass`, icon: "logos:sass" },
        { name: `Styled-Components`, icon: "vscode-icons:file-type-styled" },
        { name: `Tailwind`, icon: "logos:tailwindcss-icon" },
      ],
      [
        { name: `Javascript`, icon: "logos:javascript" },
        { name: `Typescript`, icon: "logos:typescript-icon" },
      ],
      [
        { name: `React`, icon: "logos:react" },
        { name: `Next`, icon: "logos:nextjs-icon" },
        { name: `Astro`, icon: "vscode-icons:file-type-astro" },
      ],
      [
        { name: `Prisma`, icon: "vscode-icons:file-type-prisma" },
        { name: `MySQL`, icon: "logos:mysql-icon" },
        { name: `GraphQL`, icon: "logos:graphql" },
      ],
    ],
    []
  );

  return (
    <section id="bio" className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <Title text="Bio" />
        <p className="mx-auto w-5/6 md:w-2/3 text-2xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et neque
          eligendi dicta libero nam perspiciatis, impedit porro.
        </p>
      </div>
      <div className="flex flex-col w-5/6 mx-auto md:flex-row md:w-full justify-center gap-6">
        {stack.map((tech, index) => (
          <ul className="flex flex-col gap-6" key={index}>
            {tech.map((t, techIndex) => (
              <TechBadge tech={t} index={techIndex} key={techIndex} />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};
