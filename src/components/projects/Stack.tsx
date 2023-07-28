import type { TStack } from '@/types';

import { TechBadge } from '../ui';

type Props = {
  stack: TStack[];
};

export const Stack = ({ stack }: Props) => {
  return (
    <ul className="col-start-1 row-span-3 row-start-2 mx-auto flex w-2/3 flex-col items-center gap-6 md:w-fit md:items-end">
      {stack.map((tech, index) => (
        <TechBadge tech={tech} index={index} key={index} />
      ))}
    </ul>
  );
};
