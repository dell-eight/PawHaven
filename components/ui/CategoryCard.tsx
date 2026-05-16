import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/catalog/types";

type CategoryCardProps = {
  category: Category;
  ctaLabel?: string;
  href?: string;
  image?: {
    alt: string;
    src: string;
  };
};

export function CategoryCard({
  category,
  ctaLabel = `Shop ${category.name}`,
  href,
  image,
}: CategoryCardProps) {
  const content = (
    <>
      {image ? (
        <span className="category-card__media" aria-hidden="true">
          <Image
            alt={image.alt}
            fill
            sizes="(min-width: 64rem) 25vw, (min-width: 42rem) 50vw, 100vw"
            src={image.src}
          />
        </span>
      ) : (
        <span
          className={`category-card__visual category-card__visual--${category.id}`}
          aria-hidden="true"
        >
          <span />
        </span>
      )}
      <span className="category-card__label">Category</span>
      <h3 className="category-card__title">{category.name}</h3>
      <p className="category-card__description">{category.description}</p>
      <span className="category-card__cta">{ctaLabel}</span>
    </>
  );

  if (href) {
    return (
      <Link
        className={image ? "category-card category-card--image" : "category-card"}
        href={href}
      >
        {content}
      </Link>
    );
  }

  return (
    <article className={image ? "category-card category-card--image" : "category-card"}>
      {content}
    </article>
  );
}
