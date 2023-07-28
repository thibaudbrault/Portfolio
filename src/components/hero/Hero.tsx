import { Button } from '../ui';

export const Hero = () => {
  return (
    <header className="flex h-screen flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center font-raleway text-6xl md:text-8xl">
          Thibaud Brault
        </h1>
        <h3 className="text-center text-xl text-yellow-600 md:text-2xl">
          Développeur front-end nantais
        </h3>
      </div>
      <ul className="flex gap-32">
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
