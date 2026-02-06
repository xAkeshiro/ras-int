import Image from "next/image";
import Link from "next/link";
import { siteConfig, navLinks, footerAssociationLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/logos/ras-logo-green.png"
                alt="RAS International logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-sm font-semibold text-neutral-900">
                RAS International
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              Turnkey association management for the luxury ground
              transportation industry.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs font-medium text-neutral-900 mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact-us"
                  className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Association links */}
          <div>
            <h4 className="text-xs font-medium text-neutral-900 mb-3">
              Associations
            </h4>
            <ul className="space-y-2">
              {footerAssociationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-medium text-neutral-900 mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="hover:text-neutral-600 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-neutral-600 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.hours}</li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} RAS International. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            Proud Member of ASAE
          </p>
        </div>
      </div>
    </footer>
  );
}
