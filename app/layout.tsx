import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "./scroll-reveal";

export const metadata: Metadata = {
  title: "DC Electric · Brooksville, FL · Residential & Commercial Electrical · Since 2003",
  description:
    "Family-owned electrical contractor in Brooksville, FL. Service, repair, panel work, and 24/7 emergency response. BBB A+. Owner-operated since 2003.",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bone text-graphite-700 font-sans antialiased">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
