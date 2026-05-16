import type { Metadata } from "next";
import { ShopProductBrowser } from "@/components/shop/ShopProductBrowser";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { isPrimaryCategoryId, primaryCategories } from "@/data/categories";
import { products } from "@/data/products";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Shop PawNest Essentials",
  description:
    "Shop thoughtfully selected pet accessories for cozy homes, cleaner spaces, easier walks, travel, grooming, and everyday pet care.",
  path: "/shop",
});

export default function ShopPage() {
  const publicProducts = products.filter((product) =>
    isPrimaryCategoryId(product.category),
  );

  return (
    <main>
      <PageHeader
        eyebrow="Shop"
        title="Shop PawNest Essentials"
        description="Thoughtfully selected pet accessories for cozy homes, cleaner spaces, easier walks, and everyday pet care."
      />
      <Section tone="white">
        <ShopProductBrowser
          categories={primaryCategories}
          products={publicProducts}
        />
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
