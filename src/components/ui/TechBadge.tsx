import type { HTMLAttributes } from "react";

import type { TStack } from "@/types";
import { Icon } from "@iconify/react";

interface TechBadgeProps extends HTMLAttributes<HTMLLIElement> {
  tech: TStack;
  index: number;
}

export function TechBadge({
  className,
  tech,
  index,
  ...props
}: TechBadgeProps) {
  return (
    <li
      className="flex items-center gap-3 rounded-md border-2 border-gray-700 px-6 py-2 text-lg font-bold transition duration-300 ease-in-out hover:border-yellow-600"
      key={index}
      {...props}
    >
      <Icon icon={tech.icon} />
      {tech.name}
    </li>
  );
}
