"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { navLinks } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-neutral-200/60"
          : "bg-white"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logos/ras-logo-green.png"
            alt="RAS International logo"
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <span className="text-sm font-semibold text-neutral-900 tracking-tight">
            RAS International
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm transition-colors",
                pathname === link.href
                  ? "text-neutral-900 font-medium"
                  : "text-neutral-400 hover:text-neutral-900"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact-us">
            Contact Us
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={clsx(
          "fixed inset-0 top-16 z-40 bg-white transform transition-transform duration-200 ease-in-out md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col px-6 pt-8 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={clsx(
                "text-base transition-colors py-3 border-b border-neutral-100",
                pathname === link.href
                  ? "text-neutral-900 font-medium"
                  : "text-neutral-500 hover:text-neutral-900"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Button
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="w-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
