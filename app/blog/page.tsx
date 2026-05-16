import type { Metadata } from "next";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { blogArticles } from "@/data/blog";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "PawNest Blog",
  description:
    "Beginner-friendly pet home-care tips for cleaner homes, cozy pet spaces, walking, travel, organization, grooming, and cat or dog accessories.",
  path: "/blog",
});

export default function BlogPage() {
  const articleCategories = Array.from(
    new Set(blogArticles.map((article) => article.category)),
  );

  return (
    <main>
      <PageHeader
        eyebrow="PawNest Blog"
        title="Helpful pet-home tips for cleaner, cozier routines."
        description="Beginner-friendly guides for pet accessories, clean-home habits, cozy spaces, walking, travel, organization, and everyday dog and cat care."
      />

      <Section tone="white">
        <SectionHeader
          eyebrow="Starter guides"
          title="Learn by routine."
          description="Explore practical, non-medical articles focused on home-care, comfort, grooming, organization, walking, travel, and pet-parent education."
        />
        <div className="blog-category-labels" aria-label="Blog categories">
          {articleCategories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <div className="blog-grid">
          {blogArticles.map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </div>
      </Section>
      <Section tone="beige">
        <NewsletterSignup
          title="Get cozy pet-parent tips and product picks."
          description="Join PawNest for helpful pet home-care tips, new product updates, and cozy essentials for dogs and cats."
        />
      </Section>
    </main>
  );
}
