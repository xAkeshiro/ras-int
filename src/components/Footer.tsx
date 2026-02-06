import Image from "next/image";
import Link from "next/link";
import { siteConfig, navLinks, footerAssociationLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logos/ras-logo-green.png"
                alt="RAS International logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-sm font-semibold text-neutral-900 tracking-tight">
                RAS International
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
              Turnkey association management for the luxury ground
              transportation industry.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-neutral-400 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact-us"
                  className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Association links */}
          <div>
            <h4 className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-neutral-400 mb-5">
              Associations
            </h4>
            <ul className="space-y-3">
              {footerAssociationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-neutral-400 mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="hover:text-neutral-900 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-neutral-900 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.hours}</li>
              <li className="text-neutral-400">{siteConfig.address}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[10px] tracking-[0.05em] text-neutral-400">
            &copy; {new Date().getFullYear()} RAS International. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-[0.05em] text-neutral-400">
            Proud Member of ASAE
          </p>
        </div>
      </div>
    </footer>
  );
}
