import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAS International — Association Management & Business Development",
  description:
    "Deeply Rooted in Growing Partnerships with Purpose. RAS International delivers turnkey management, revenue growth, and strategic governance for non-profit trade associations in the luxury ground transportation industry.",
  openGraph: {
    title: "RAS International — Association Management & Business Development",
    description:
      "Deeply Rooted in Growing Partnerships with Purpose. Turnkey management, revenue growth, and strategic governance for non-profit trade associations.",
    url: "https://ras-int.org",
    siteName: "RAS International",
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL("https://ras-int.org"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans text-neutral-900 antialiased bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
