"use client";

import Link from "next/link";
import { clsx } from "clsx";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
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
    "inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 rounded-md",
    secondary:
      "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 rounded-md",
    ghost:
      "text-neutral-600 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 px-0",
  };

  const classes = clsx(base, variants[variant], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
