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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Image
            src="/logos/ras-logo-green.png"
            alt="RAS International logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <span className="font-serif text-lg sm:text-xl font-bold text-ras-neutral-800">
            RAS International
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-ras-neutral-600 hover:text-ras-green-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="text-sm px-5 py-2">
            Contact Us
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ras-neutral-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={clsx(
          "fixed inset-0 top-16 sm:top-20 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center gap-6 pt-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-sans text-lg text-ras-neutral-700 hover:text-ras-green-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#contact"
            className="mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
