import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-md border transition duration-300 ease-in-out",
  {
    variants: {
      variant: {
        primary:
          "bg-stone-200 text-stone-900 border-transparent hover:bg-transparent hover:text-stone-200 hover:border-stone-200",
        secondary: "bg-transparent text-stone-200 border-stone-200",
        outline: "bg-transparent text-stone-200 border-gray-700 rounded-full",
        link: "border-transparent rounded-none hover:border-b-yellow-600 hover:text-yellow-600",
      },
      size: {
        medium: "py-2 px-4",
        nav: "text-xl",
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
