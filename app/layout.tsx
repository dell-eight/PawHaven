import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { CartProvider } from "@/components/cart/CartProvider";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

const fraunces = Fraunces({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PawHaven | Cozy Essentials for Happier Pets and Cleaner Homes",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "pet accessories",
    "pet home care",
    "cat essentials",
    "pet comfort",
    "pet hair remover",
    "cleaner home pets",
  ],
  openGraph: {
    title: "PawHaven | Cozy Essentials for Happier Pets and Cleaner Homes",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PawHaven | Cozy Essentials for Happier Pets and Cleaner Homes",
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
      <body className={`${nunitoSans.variable} ${fraunces.variable}`}>
        <CartProvider>
          <SiteShell>{children}</SiteShell>
        </CartProvider>
      </body>
    </html>
  );
}
