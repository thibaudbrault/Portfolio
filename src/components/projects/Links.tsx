import { Button } from "../ui";

type Props = {
  github: string;
  live: string;
};

export const Links = ({ github, live }: Props) => {
  return (
    <ul className="flex justify-start gap-6 ">
      {github && (
        <li>
          <Button variant="primary" size="medium" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </Button>
        </li>
      )}
      {live && (
        <li>
          <Button variant="secondary" size="medium" asChild>
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          </Button>
        </li>
      )}
    </ul>
  );
};
