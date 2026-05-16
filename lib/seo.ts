import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type SeoMetadataOptions = {
  description: string;
  path: string;
  robots?: Metadata["robots"];
  title: string;
  type?: "website" | "article";
};

export function createSeoMetadata({
  description,
  path,
  robots,
  title,
  type = "website",
}: SeoMetadataOptions): Metadata {
  return {
    title,
    description,
    robots,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      type,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
