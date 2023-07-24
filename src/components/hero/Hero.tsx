import { Button } from "../ui";

export const Hero = () => {
  return (
    <header className="h-screen flex justify-center items-center flex-col gap-12">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-8xl font-raleway">Thibaud Brault</h1>
        <h3 className="text-2xl">Développeur front-end nantais</h3>
      </div>
      <ul className="flex gap-32 text-stone-900 font-semibold">
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
            <a>CV</a>
          </Button>
        </li>
      </ul>
    </header>
  );
};
