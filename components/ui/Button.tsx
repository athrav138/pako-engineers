import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "accent" | "destructive" | "success" | "warning" | "outline" | "ghost" | "link" | "gradient" | "glass";
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "icon";

const variantStyles: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy/90 shadow-sm",
  secondary: "bg-steel text-white hover:bg-steel/90 shadow-sm",
  accent: "bg-orange text-white hover:bg-orange/90 shadow-sm",
  destructive: "bg-red-600 text-white hover:bg-red-600/90 shadow-sm",
  success: "bg-green-600 text-white hover:bg-green-600/90 shadow-sm",
  warning: "bg-yellow-500 text-white hover:bg-yellow-500/90 shadow-sm",
  outline: "border border-line bg-transparent hover:bg-surface text-navy",
  ghost: "hover:bg-surface hover:text-navy text-navy",
  link: "text-navy underline-offset-4 hover:underline",
  gradient: "bg-gradient-to-r from-navy to-steel text-white hover:opacity-90 shadow-sm",
  glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
};

const sizeStyles: Record<Size, string> = {
  xs: "h-7 px-3 text-[11px] rounded",
  sm: "h-9 px-4 text-xs rounded-sm",
  md: "h-11 px-6 text-sm rounded-md",
  lg: "h-14 px-8 text-base rounded-md",
  xl: "h-16 px-10 text-lg rounded-lg",
  icon: "h-10 w-10 rounded-md",
};

const baseStyles = "inline-flex items-center justify-center whitespace-nowrap font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, leftIcon, rightIcon, children, disabled, href, ...props }, ref) => {
    const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
        </Link>
      );
    }

    return (
      <button
        className={classes}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
