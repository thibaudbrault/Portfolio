import { Button } from "@/components/ui";
import { CenturionHelmetIcon } from "@/lib";
import { useMemo } from "react";

export const Navbar = () => {
  const logo = "{TB}";

  const nav = useMemo(
    () => [
      {
        text: "Projets",
        link: "#projects",
      },
      {
        text: "Bio",
        link: "#bio",
      },
    ],
    []
  );

  return (
    <nav className="absolute top-8 left-12 right-12 mx-auto flex justify-between items-center">
      <p className="flex gap-3 text-5xl font-raleway">
        {logo}{" "}
        <span>
          <CenturionHelmetIcon />
        </span>
      </p>
      <ul className="flex gap-12">
        {nav.map((element, i) => (
          <li key={i}>
            <Button variant="link" size="nav" asChild>
              <a href={element.link}>{element.text}</a>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
