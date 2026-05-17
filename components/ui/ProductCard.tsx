import Link from "next/link";
import { ProductCardAddButton } from "@/components/cart/ProductCardAddButton";
import { ButtonLink } from "@/components/ui/Button";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { getCategoryName } from "@/data/categories";
import type { Product } from "@/lib/catalog/types";
import { formatPrice } from "@/lib/pricing";

type ProductCardProps = {
  categoryLabel?: string;
  ctaLabel?: string;
  href?: string;
  product: Product;
  showAddToCart?: boolean;
};

export function ProductCard({
  categoryLabel,
  ctaLabel = "See Details",
  href,
  product,
  showAddToCart = true,
}: ProductCardProps) {
  const productHref = href ?? `/products/${product.slug}`;

  return (
    <article className="product-card">
      <Link
        aria-label={`View ${product.name}`}
        className="product-card__media"
        href={productHref}
      >
        <ProductVisual product={product} />
      </Link>
      <div className="product-card__body">
        <p className="product-card__meta">
          {categoryLabel ?? getCategoryName(product.category)}
        </p>
        <h3 className="product-card__title">
          <Link href={productHref}>{product.name}</Link>
        </h3>
        <p className="product-card__confidence">
          PHP pricing. Sizing, care, and delivery notes included.
        </p>
        <p className="product-card__summary">{product.shortDescription}</p>
        <div className="product-card__footer">
          <div className="product-card__prices">
            <span className="product-card__price">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice ? (
              <span className="product-card__compare-price">
                {formatPrice(product.compareAtPrice)}
              </span>
            ) : null}
          </div>
          <div
            className={
              showAddToCart
                ? "product-card__actions"
                : "product-card__actions product-card__actions--single"
            }
          >
            <ButtonLink
              aria-label={`${ctaLabel} for ${product.name}`}
              className="product-card__view-button"
              href={productHref}
              variant="secondary"
            >
              {ctaLabel}
            </ButtonLink>
            {showAddToCart ? (
              <ProductCardAddButton productId={product.id} />
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
