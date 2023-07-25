import type { TStack } from "@/types";
import type { HTMLAttributes } from "react";

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
      className="flex gap-3 items-center font-bold text-lg border-2 border-gray-700 rounded-md py-2 px-6 transition duration-300 ease-in-out hover:border-yellow-600"
      key={index}
      {...props}
    >
      <span>{tech.icon}</span>
      {tech.name}
    </li>
  );
}
