import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib';

const buttonVariants = cva(
  `rounded-md border transition duration-300 ease-in-out`,
  {
    variants: {
      variant: {
        primary: `border-transparent bg-stone-200 text-stone-900 hover:border-stone-200 hover:bg-transparent hover:text-stone-200`,
        secondary: `border-stone-200 bg-transparent text-stone-200`,
        outline: `rounded-full border-gray-700 bg-transparent text-stone-200`,
        link: `rounded-none border-transparent hover:border-b-yellow-600 hover:text-yellow-600`,
      },
      size: {
        medium: `px-2 py-1 md:px-4 md:py-2`,
        nav: `text-xl`,
      },
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : `button`;
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = `Button`;

export { Button, buttonVariants };
