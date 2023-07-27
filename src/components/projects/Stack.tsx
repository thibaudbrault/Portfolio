import type { TStack } from "@/types";
import { TechBadge } from "../ui";

type Props = {
  stack: TStack[];
};

export const Stack = ({ stack }: Props) => {
  return (
    <ul className="flex flex-col items-end gap-6 row-span-3 col-start-1 row-start-2">
      {stack.map((tech, index) => (
        <TechBadge tech={tech} index={index} key={index} />
      ))}
    </ul>
  );
};
