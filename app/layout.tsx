import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { CartProvider } from "@/components/cart/CartProvider";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PawNest | Cozy Pet Accessories for Cleaner, Happier Homes",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "pet accessories",
    "pet home care",
    "dog accessories",
    "cat accessories",
    "pet organization",
  ],
  openGraph: {
    title: "PawNest | Cozy Pet Accessories for Cleaner, Happier Homes",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PawNest | Cozy Pet Accessories for Cleaner, Happier Homes",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <CartProvider>
          <SiteShell>{children}</SiteShell>
        </CartProvider>
      </body>
    </html>
  );
}
