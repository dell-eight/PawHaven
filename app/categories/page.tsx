import type { Metadata } from "next";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { primaryCategories } from "@/data/categories";
import { categorySeoCtas } from "@/data/ctas";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "PawNest Categories",
  description:
    "Explore PawNest pet accessory categories for walk and travel products, comfort products for pets, grooming products, and cat essentials.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Categories"
        title="Explore PawNest categories."
        description="Browse practical pet accessories by routine: walk and travel, pet comfort, grooming, and cat essentials."
      />
      <Section tone="white">
        <SectionHeader
          eyebrow="Shop by routine"
          title="Find the pet-home essentials you need."
          description="Each category is focused on everyday pet-parent routines without food, medicine, supplements, or risky claims."
        />
        <div className="card-grid card-grid--3">
          {primaryCategories.map((category) => (
            <CategoryCard
              category={category}
              ctaLabel={categorySeoCtas[category.id].cardLabel}
              href={`/categories/${category.id}`}
              key={category.id}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
