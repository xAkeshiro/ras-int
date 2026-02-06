"use client";

import { clsx } from "clsx";

type ButtonProps = {
  variant?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  variant = "primary",
  href,
  children,
  className,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-sans font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-ras-green-500 text-white hover:bg-ras-green-600 shadow-sm hover:shadow-md",
    secondary:
      "bg-transparent text-ras-green-600 border-2 border-ras-green-500 hover:bg-ras-green-50",
  };

  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
