"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { navLinks } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-neutral-200/60"
          : "bg-white"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logos/ras-logo-green.png"
            alt="RAS International logo"
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <span className="text-sm font-semibold text-neutral-900">
            RAS International
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact">
            Contact Us
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5 text-neutral-600 hover:text-neutral-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={clsx(
          "fixed inset-0 top-14 z-40 bg-white transform transition-transform duration-200 ease-in-out md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col px-6 pt-8 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base text-neutral-600 hover:text-neutral-900 transition-colors py-3 border-b border-neutral-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <Button
              href="#contact"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
