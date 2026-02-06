import Image from "next/image";
import { siteConfig, navLinks, footerAssociationLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ras-neutral-800 text-ras-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logos/ras-logo-white.png"
                alt="RAS International logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-serif text-lg font-bold text-white">
                RAS International
              </span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-ras-neutral-400">
              Deeply rooted in growing partnerships with purpose. Turnkey
              association management for the luxury ground transportation
              industry.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-ras-neutral-400 hover:text-ras-green-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="font-sans text-sm text-ras-neutral-400 hover:text-ras-green-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Association links */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Associations
            </h4>
            <ul className="space-y-3">
              {footerAssociationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-ras-neutral-400 hover:text-ras-green-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 font-sans text-sm text-ras-neutral-400">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="hover:text-ras-green-400 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-ras-green-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.hours}</li>
              <li className="leading-relaxed">{siteConfig.address}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ras-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ras-neutral-500">
            &copy; {new Date().getFullYear()} RAS International. All rights reserved.
          </p>
          <p className="font-sans text-xs text-ras-neutral-500">
            Proud Member of ASAE
          </p>
        </div>
      </div>
    </footer>
  );
}
