import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const variantClasses: Record<string, string> = {
  primary:
    "bg-graphite-900 text-white hover:bg-graphite-700 dark:bg-white dark:text-graphite-900 dark:hover:bg-graphite-100",
  secondary:
    "bg-transparent text-graphite-900 border border-graphite-300 hover:border-graphite-900 dark:text-white dark:border-graphite-500 dark:hover:border-white",
  ghost:
    "bg-graphite-50 text-graphite-900 hover:bg-graphite-100 dark:bg-graphite-800 dark:text-white dark:hover:bg-graphite-700",
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
