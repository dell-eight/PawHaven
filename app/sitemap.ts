import type { MetadataRoute } from "next";
import { blogArticles } from "@/data/blog";
import { primaryCategories } from "@/data/categories";
import { siteConfig } from "@/lib/site";

const staticPaths = [
  "/",
  "/shop",
  "/categories",
  "/about",
  "/contact",
  "/faq",
  "/shipping-returns",
  "/privacy-policy",
  "/terms-of-service",
  "/blog",
];

function toSitemapEntry(
  path: string,
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteConfig.url}${path}`,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => toSitemapEntry(path, path === "/" ? 1 : 0.8)),
    ...primaryCategories.map((category) =>
      toSitemapEntry(`/categories/${category.id}`, 0.7),
    ),
    ...blogArticles.map((article) => toSitemapEntry(`/blog/${article.slug}`, 0.6)),
  ];
}
