import { useMemo } from 'react';

import { Button } from '@/components/ui';
import { CenturionHelmetIcon } from '@/lib';

export const Navbar = () => {
  const logo = `{TB}`;

  const nav = useMemo(
    () => [
      {
        text: `Experiences`,
        link: `#experiences`,
      },
      {
        text: `Projets`,
        link: `#projects`,
      },
      {
        text: `Bio`,
        link: `#bio`,
      },
    ],
    [],
  );

  return (
    <nav className="absolute inset-x-12 top-8 mx-auto flex items-center justify-between">
      <p className="flex gap-3 font-raleway text-5xl">
        {logo}
        {` `}
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
