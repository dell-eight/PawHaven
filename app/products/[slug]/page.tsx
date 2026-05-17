import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { ButtonLink } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TrustBadgeList } from "@/components/ui/TrustBadge";
import { getCategoryName, isPrimaryCategoryId } from "@/data/categories";
import { categorySeoCtas, universalTrustCtas } from "@/data/ctas";
import {
  getProductBySlug,
  getPublicProducts,
  getRelatedProducts,
} from "@/data/products";
import { createSeoMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

const trustBadges = [
  "Thoughtfully selected for everyday pet parents",
  "No food, supplements, medicine, or risky claims",
  "Designed for comfort, convenience, and cleaner homes",
];

const productStructuredDataEnabled = false;

function createProductStructuredData(product: NonNullable<ReturnType<typeof getProductBySlug>>) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: getCategoryName(product.category),
    description: product.shortDescription,
    name: product.name,
    url: `${siteConfig.url}/products/${product.slug}`,
  };
}

export function generateStaticParams() {
  return getPublicProducts().map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const categoryName = getCategoryName(product.category);

  return createSeoMetadata({
    title: product.name,
    description: `${product.shortDescription} Shop this ${categoryName.toLowerCase()} essential from PawHaven.`,
    path: `/products/${product.slug}`,
    robots: {
      follow: false,
      index: false,
    },
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product)
    .filter((relatedProduct) => isPrimaryCategoryId(relatedProduct.category))
    .slice(0, 4);
  const categoryName = getCategoryName(product.category);
  const categoryCta = categorySeoCtas[product.category];

  return (
    <main>
      {productStructuredDataEnabled ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(createProductStructuredData(product)),
          }}
        />
      ) : null}
      <section className="product-hero" aria-labelledby="product-title">
        <div className="container product-hero__inner">
          <div className="product-hero__media">
            <ProductVisual product={product} size="hero" />
          </div>

          <div className="product-hero__content">
            <p className="eyebrow">{categoryName}</p>
            <h1 id="product-title">{product.name}</h1>
            <div className="product-hero__prices" aria-label="Product price">
              <span className="product-hero__price">
                {currencyFormatter.format(product.price)}
              </span>
              {product.compareAtPrice ? (
                <span className="product-hero__compare-price">
                  {currencyFormatter.format(product.compareAtPrice)}
                </span>
              ) : null}
            </div>
            <p className="product-hero__description">
              {product.shortDescription}
            </p>

            <ul className="product-benefits">
              {product.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <ul className="product-hero__trust-list">
              <li>Review sizing and care notes before ordering.</li>
              <li>Cart is active for planning; checkout is not configured yet.</li>
            </ul>

            <AddToCartButton productId={product.id} />
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="product-detail-grid">
          <article className="product-info-panel">
            <h2>Product details</h2>
            <p>{product.longDescription}</p>
          </article>

          <article className="product-info-panel">
            <h2>Features</h2>
            <ul>
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>

          <article className="product-info-panel">
            <h2>Best for</h2>
            <ul>
              {product.bestFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="product-info-panel">
            <h2>Care instructions</h2>
            <p>{product.careInstructions}</p>
          </article>

          <article className="product-info-panel">
            <h2>Sizing and fit</h2>
            <p>
              Final measurements, size options, and fit guidance should be
              confirmed before accepting real orders. Measure your pet and
              compare against the final size guide when it is available.
            </p>
            <ButtonLink href="/faq" variant="secondary">
              Read sizing and fit FAQs
            </ButtonLink>
          </article>

          <article className="product-info-panel">
            <h2>Ordering status</h2>
            <p>
              Add to Cart is available for planning, but checkout and payment
              are disabled until the order workflow is configured and tested.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="beige">
        <div className="product-support-grid">
          <article className="product-info-panel">
            <h2>Shipping note</h2>
            <p>{product.shippingNote}</p>
            <ButtonLink href="/shipping-returns" variant="secondary">
              Check shipping and returns
            </ButtonLink>
          </article>

          <article className="product-info-panel">
            <h2>Trust notes</h2>
            <TrustBadgeList badges={trustBadges} />
          </article>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Product FAQ"
          title="Helpful details before you choose."
          description="Clear product notes help keep PawHaven practical, honest, and easy to shop."
        />
        <FaqAccordion items={product.faqs} />
      </Section>

      {relatedProducts.length > 0 ? (
        <Section tone="white">
          <SectionHeader
            eyebrow="Related products"
            title={categoryCta.collectionTitle}
            description="Explore nearby products from the catalog that support the same everyday pet-home routine."
          />
          <div className="card-grid card-grid--4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone="beige">
        <NewsletterSignup
          title="Get cozy pet-parent tips and product picks."
          description="Join PawHaven for helpful pet home-care tips, new product updates, and cozy essentials for dogs and cats."
        />
      </Section>

      <CtaSection
        eyebrow="Keep browsing"
        title={categoryCta.collectionTitle}
        description={categoryCta.collectionDescription}
        actions={
          <>
            <ButtonLink href={categoryCta.primary.href}>
              {categoryCta.primary.label}
            </ButtonLink>
            <ButtonLink href={universalTrustCtas[1].href} variant="secondary">
              {universalTrustCtas[1].label}
            </ButtonLink>
          </>
        }
      />
    </main>
  );
}
