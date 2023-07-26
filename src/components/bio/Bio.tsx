import {
  AstroIcon,
  CssIcon,
  GraphqlIcon,
  HtmlIcon,
  JavascriptIcon,
  MysqlIcon,
  NextIcon,
  PrismaIcon,
  ReactIcon,
  SassIcon,
  StyledIcon,
  TailwindIcon,
  TypescriptIcon,
} from '@/lib';
import type { TStack } from '@/types';

import Title from '../projects/Title.astro';
import { TechBadge } from '../ui';

export const Bio = () => {
  const stack: TStack[][] = [
    [{ name: `HTML`, icon: <HtmlIcon /> }],
    [
      { name: `CSS`, icon: <CssIcon /> },
      { name: `Sass`, icon: <SassIcon /> },
      { name: `Styled-Components`, icon: <StyledIcon /> },
      { name: `Tailwind`, icon: <TailwindIcon /> },
    ],
    [
      { name: `Javascript`, icon: <JavascriptIcon /> },
      { name: `Typescript`, icon: <TypescriptIcon /> },
    ],
    [
      { name: `React`, icon: <ReactIcon /> },
      { name: `Next`, icon: <NextIcon /> },
      { name: `Astro`, icon: <AstroIcon /> },
    ],
    [
      { name: `Prisma`, icon: <PrismaIcon /> },
      { name: `MySQL`, icon: <MysqlIcon /> },
      { name: `GraphQL`, icon: <GraphqlIcon /> },
    ],
  ];

  return (
    <section id="bio" className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <Title text="Bio" />
        <p className="font-raleway mx-auto w-2/3 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et neque
          eligendi dicta libero nam perspiciatis, impedit porro.
        </p>
      </div>
      <div className="flex justify-center gap-6">
        {stack.map((tech) => (
          <ul className="flex flex-col gap-6">
            {tech.map((t, i) => (
              <TechBadge tech={t} index={i} />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};
