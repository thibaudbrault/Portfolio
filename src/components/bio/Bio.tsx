import { NextIcon, TypescriptIcon } from "@/lib";
import { Title } from "../projects";

export const Bio = () => {
  const stack: string[][] = [
    ["HTML"],
    ["CSS", "Sass", "Styled-Components", "Tailwind"],
    ["Javascript", "Typescript"],
    ["React", "Next", "Astro"],
    ["Prisma", "MySQL"],
  ];

  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <Title text="Bio" />
        <p className="text-2xl w-2/3 mx-auto font-raleway">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et neque
          eligendi dicta libero nam perspiciatis, impedit porro.
        </p>
      </div>
      <ul className="flex justify-center gap-24">
        {stack.map((tech) => (
          <li>
            <ul className="flex flex-col gap-6">
              {tech.map((t) => (
                <li>{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
