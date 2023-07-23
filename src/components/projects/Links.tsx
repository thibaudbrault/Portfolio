import { Button } from "../ui/Button";

type Props = {
  github: string;
  live: string;
};

export const Links = ({ github, live }: Props) => {
  return (
    <ul className="flex justify-start gap-6 ">
      {github && (
        <li>
          <Button variant="outline" size="medium" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </Button>
        </li>
      )}
      {live && (
        <li>
          <a href={live} target="_blank" rel="noopener noreferrer">
            Live
          </a>
        </li>
      )}
    </ul>
  );
};
