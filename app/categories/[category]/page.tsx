import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { CtaSection } from "@/components/ui/CtaSection";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  categories,
  categoryPageContent,
  getCategoryById,
  isPrimaryCategoryId,
  primaryCategories,
} from "@/data/categories";
import { categorySeoCtas, universalTrustCtas } from "@/data/ctas";
import { getProductsByCategory } from "@/data/products";
import type { Category } from "@/lib/catalog/types";
import { createSeoMetadata } from "@/lib/seo";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

function isCategoryId(categoryId: string): categoryId is Category["id"] {
  return categories.some((category) => category.id === categoryId);
}

export function generateStaticParams() {
  return primaryCategories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categoryParam } = await params;
  const category = getCategoryById(categoryParam);

  if (!category || !isCategoryId(category.id)) {
    return {};
  }

  const seoCta = categorySeoCtas[category.id];

  return createSeoMetadata({
    title: category.name,
    description: seoCta.collectionDescription,
    path: `/categories/${category.id}`,
    robots: isPrimaryCategoryId(category.id)
      ? undefined
      : {
          follow: false,
          index: false,
        },
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categoryParam } = await params;
  const category = getCategoryById(categoryParam);

  if (!category || !isCategoryId(category.id)) {
    notFound();
  }

  const content = categoryPageContent[category.id];
  const seoCta = categorySeoCtas[category.id];
  const categoryProducts = getProductsByCategory(category.id);
  const relatedCategories = primaryCategories
    .filter((relatedCategory) => relatedCategory.id !== category.id)
    .slice(0, 3);

  return (
    <main>
      <PageHeader
        eyebrow="Category"
        title={category.name}
        description={`${content.intro} ${category.description}`}
      />

      <Section tone="white">
        <SectionHeader
          eyebrow="Shop the collection"
          title={seoCta.collectionTitle}
          description={seoCta.collectionDescription}
        />
        {categoryProducts.length > 0 ? (
          <div className="card-grid card-grid--4">
            {categoryProducts.map((product) => (
              <ProductCard
                ctaLabel="Check details"
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="category-empty">
            <h2>More products are being selected.</h2>
            <p>
              This category is part of the PawNest catalog plan, but no products
              are currently assigned to it.
            </p>
            <div className="category-empty__actions">
              {seoCta.emptyProductCtas.map((cta) => (
                <ButtonLink href={cta.href} key={cta.href} variant="secondary">
                  {cta.label}
                </ButtonLink>
              ))}
            </div>
          </div>
        )}
      </Section>

      <Section tone="beige">
        <div className="category-benefits">
          <SectionHeader
            eyebrow="Why this category helps"
            title="Make this pet-care routine feel easier."
            description="Each PawNest category is built around practical pet-home needs, clear product roles, and warm everyday use."
          />
          <ul className="category-benefits__list">
            {content.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Related categories"
          title="Keep exploring PawNest routines."
          description="Move between cozy, clean-home, walking, travel, play, organization, and safety essentials."
        />
        <div className="card-grid card-grid--3">
          {relatedCategories.map((relatedCategory) => (
            <CategoryCard
              category={relatedCategory}
              ctaLabel={categorySeoCtas[relatedCategory.id].cardLabel}
              href={`/categories/${relatedCategory.id}`}
              key={relatedCategory.id}
            />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader
          eyebrow="Helpful shopping links"
          title="Check shipping, sizing, and support details."
          description="These trust links support shoppers who need fit guidance, delivery expectations, or help before choosing a pet accessory."
        />
        <div className="cta-link-grid">
          {universalTrustCtas.map((cta) => (
            <ButtonLink href={cta.href} key={cta.href} variant="secondary">
              {cta.label}
            </ButtonLink>
          ))}
        </div>
      </Section>

      <Section tone="beige">
        <NewsletterSignup
          title="Get cozy pet-parent tips and product picks."
          description="Join PawNest for helpful pet home-care tips, new product updates, and cozy essentials for dogs and cats."
        />
      </Section>

      <CtaSection
        eyebrow="Keep shopping by routine"
        title={seoCta.collectionTitle}
        description={seoCta.collectionDescription}
        actions={
          <>
            <ButtonLink href={seoCta.primary.href}>{seoCta.primary.label}</ButtonLink>
            <ButtonLink href="/shop" variant="secondary">
              Shop all PawNest products
            </ButtonLink>
          </>
        }
      />
    </main>
  );
}
