import { useTranslations } from "@/i18n/utils";

import { Button } from "../ui";
import type { Lang } from "@/types";

export const Hero = ({ lang }: Lang) => {
  const t = useTranslations(lang);
  return (
    <header className="flex h-screen flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center font-atkinson text-6xl md:text-8xl">
          {t(`hero.title`)}
        </h1>
        <h3 className=" mx-auto w-11/12 text-center text-xl text-yellow-600 md:text-2xl">
          {t(`hero.subtitle`)}
        </h3>
      </div>
      <ul className="flex w-5/6 justify-between md:w-1/2">
        <li>
          <Button variant="primary" size="medium" asChild>
            <a
              href="https://github.com/thibaudbrault"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Button>
        </li>
        <li>
          <Button variant="primary" size="medium" asChild>
            <a
              href="https://www.linkedin.com/in/thibaud-brault/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </Button>
        </li>
        <li>
          <Button variant="secondary" size="medium" asChild>
            <a href="/cv.pdf">CV</a>
          </Button>
        </li>
      </ul>
    </header>
  );
};
