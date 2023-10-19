import type { TStack } from '@/types';

import { TechBadge } from '../ui';

type Props = {
  stack: TStack[];
  text: string;
};

export const Stack = ({ stack, text }: Props) => {
  const visibleStack = stack.slice(0, 4);
  const hiddenStack = stack.slice(4);
  return (
    <aside className="col-start-1 row-span-3 row-start-2 mx-auto flex w-2/3 flex-col items-center gap-6 md:w-fit md:items-end">
      <ul className="flex flex-col items-center gap-6">
        {visibleStack.map((tech, index) => (
          <TechBadge tech={tech} index={index} key={index} />
        ))}
      </ul>
      {hiddenStack.length > 0 && (
        <details className="w-full">
          <summary className="mb-6 cursor-pointer border-stone-200 bg-transparent text-center font-semibold text-stone-200 marker:content-['']">
            {text}
          </summary>
          <ul className="flex flex-col items-center gap-6">
            {hiddenStack.map((tech, index) => (
              <TechBadge tech={tech} index={index} key={index} />
            ))}
          </ul>
        </details>
      )}
    </aside>
  );
};
