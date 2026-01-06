import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] text-[18px] font-medium leading-[27px] px-6 ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "h-[59px] bg-primary text-white hover:bg-primary-900 active:scale-[0.98]",
        white: "h-[59px] bg-white text-primary hover:bg-white/90 active:scale-[0.98]",
        outline: "h-[57px] border-2 border-primary bg-transparent text-primary hover:bg-primary/10 active:scale-[0.98]",
        "outline-white": "h-[57px] border-2 border-white bg-transparent text-white hover:bg-white/10 active:scale-[0.98]",
        "primary-700": "h-[59px] bg-primary-700 text-white hover:bg-primary-800 active:scale-[0.98]",
        "primary-100": "h-[59px] bg-primary-100 text-primary hover:bg-primary-200 active:scale-[0.98]",
        "primary-200-outline": "h-[57px] bg-primary-200 border-2 border-primary text-primary hover:bg-primary-300 active:scale-[0.98]",
        "primary-50-outline": "h-[57px] bg-primary-50 border-2 border-primary text-primary hover:bg-primary-100 active:scale-[0.98]",
        disabled: "h-[59px] bg-grey-100 text-grey-300 cursor-not-allowed",
        "disabled-outline": "h-[57px] border-2 border-grey-300 bg-transparent text-grey-300 cursor-not-allowed",
        destructive: "h-[59px] bg-destructive text-white hover:bg-destructive/90 active:scale-[0.98]",
        ghost: "h-[59px] hover:bg-accent hover:text-accent-foreground",
        link: "h-auto text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        sm: "h-10 px-4 text-base",
        lg: "h-[59px] px-6",
        icon: "h-10 w-10 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
