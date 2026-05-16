export type CategoryId =
  | "cozy-comfort"
  | "grooming-clean-home"
  | "walk-travel"
  | "play-enrichment"
  | "cat-essentials"
  | "home-organization"
  | "safety-accessories";

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  price: number;
  compareAtPrice: number | null;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  features: string[];
  bestFor: string[];
  tags: string[];
  careInstructions: string;
  shippingNote: string;
  faqs: ProductFaq[];
  relatedProductIds: string[];
  isFeatured?: boolean;
};
