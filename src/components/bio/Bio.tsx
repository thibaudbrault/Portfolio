import { useMemo } from 'react';

import type { TStack } from '@/types';

import { Title } from '../projects';
import { TechBadge } from '../ui';

export const Bio = () => {
  const stack: TStack[][] = useMemo(
    () => [
      [{ name: `HTML`, icon: `logos:html-5` }],
      [
        { name: `CSS`, icon: `logos:css-3` },
        { name: `Sass`, icon: `logos:sass` },
        { name: `Styled-Components`, icon: `vscode-icons:file-type-styled` },
        { name: `Tailwind`, icon: `logos:tailwindcss-icon` },
      ],
      [
        { name: `Javascript`, icon: `logos:javascript` },
        { name: `Typescript`, icon: `logos:typescript-icon` },
      ],
      [
        { name: `React`, icon: `logos:react` },
        { name: `Next`, icon: `logos:nextjs-icon` },
        { name: `Astro`, icon: `vscode-icons:file-type-astro` },
      ],
      [
        { name: `Prisma`, icon: `vscode-icons:file-type-prisma` },
        { name: `MySQL`, icon: `logos:mysql-icon` },
        { name: `GraphQL`, icon: `logos:graphql` },
      ],
    ],
    [],
  );

  return (
    <section id="bio" className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <Title text="Bio" />
        <div className="mx-auto w-5/6 text-center text-xl md:w-2/3">
          <p>
            Passionné par l'informatique et le design, c'est tout naturellement
            que je me suis tourné vers la création de sites.
          </p>
          <p>
            Adepte du clean code, je suis vigilant à l'accessibilité, au
            responsive design, à l'amélioration des performances et au respect
            des bonnes pratiques SEO.
          </p>
        </div>
      </div>
      <div className="mx-auto flex w-11/12 flex-col flex-wrap justify-center gap-6 lg:flex lg:w-full lg:flex-row">
        {stack.map((tech, index) => (
          <ul
            className="flex flex-col flex-wrap gap-6 md:flex-row lg:flex-col"
            key={index}
          >
            {tech.map((t, techIndex) => (
              <TechBadge tech={t} index={techIndex} key={techIndex} />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};
