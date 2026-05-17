import type { Product } from "@/lib/catalog/types";

type ProductVisualProps = {
  product: Pick<Product, "category" | "id" | "name">;
  size?: "card" | "cart" | "hero";
};

const visualLabels: Record<string, string> = {
  "cozy-cloud-pet-bed": "Washable bed",
  "pet-hair-remover-brush": "Reusable brush",
  "foldable-travel-pet-carrier": "Soft carrier",
  "everyday-no-pull-harness": "Walk harness",
  "waterproof-pet-feeding-mat": "Feeding mat",
  "cat-scratching-lounge": "Scratch lounge",
  "paw-cleaning-cup": "Paw cleaner",
  "car-seat-pet-cover": "Seat cover",
  "soft-fleece-pet-blanket": "Comfort blanket",
  "pet-toy-storage-basket": "Toy basket",
  "lint-roller-refill-set": "Lint refills",
  "cozy-cat-window-perch": "Window perch",
  "adjustable-pet-leash": "Adjustable leash",
  "portable-water-bottle-for-walks": "Water bottle",
  "pet-grooming-glove": "Grooming glove",
  "washable-pet-blanket": "Sofa blanket",
  "anti-slip-pet-bowl-mat": "Bowl mat",
  "pet-travel-organizer-bag": "Travel bag",
  "soft-plush-squeaky-toy": "Plush toy",
  "reflective-safety-collar": "Safety collar",
};

export function ProductVisual({ product, size = "card" }: ProductVisualProps) {
  return (
    <div
      aria-label={`Illustration of ${product.name}`}
      className={`product-visual product-visual--${size} product-visual--${product.category} product-visual--${product.id}`}
      role="img"
    >
      <span className="product-visual__glow" aria-hidden="true" />
      <span className="product-visual__surface" aria-hidden="true" />
      <span
        className="product-visual__object product-visual__object--primary"
        aria-hidden="true"
      />
      <span
        className="product-visual__object product-visual__object--secondary"
        aria-hidden="true"
      />
      <span
        className="product-visual__object product-visual__object--detail"
        aria-hidden="true"
      />
      <span className="product-visual__label">
        {visualLabels[product.id] ?? product.name}
      </span>
    </div>
  );
}
