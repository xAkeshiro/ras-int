"use client";

import Link from "next/link";
import { clsx } from "clsx";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
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
    "inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-ras-green-600 text-white hover:bg-ras-green-700 shadow-sm hover:shadow-md",
    secondary:
      "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
    outline:
      "border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50",
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
