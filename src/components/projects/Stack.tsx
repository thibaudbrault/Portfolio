import type { TStack } from '@/types';

import { TechBadge } from '../ui';

type Props = {
  stack: TStack[];
};

const Stack = ({ stack }: Props) => {
  return (
    <ul className="col-start-1 row-span-3 row-start-2 flex flex-col items-end gap-6">
      {stack.map((tech, i) => (
        <TechBadge tech={tech} index={i} />
      ))}
    </ul>
  );
};

export default Stack;
