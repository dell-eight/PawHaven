import type { Metadata } from "next";
import { ShopProductBrowser } from "@/components/shop/ShopProductBrowser";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { primaryCategories } from "@/data/categories";
import { getPublicProducts } from "@/data/products";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Shop PawHaven Essentials",
  description:
    "Shop PawHaven pet comfort, cat essentials, cleaner-home tools, and walk and travel products for happier pets and cleaner homes.",
  path: "/shop",
});

export default function ShopPage() {
  const publicProducts = getPublicProducts();

  return (
    <main>
      <PageHeader
        eyebrow="Shop"
        title="Shop PawHaven Essentials"
        description="Focused cozy essentials for happier pets and cleaner homes: cat comfort, soft rest spots, cleaner-home helpers, and useful outing products."
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
          description="Join PawHaven for helpful pet home-care tips, new product updates, and cozy essentials for dogs and cats."
        />
      </Section>
    </main>
  );
}
