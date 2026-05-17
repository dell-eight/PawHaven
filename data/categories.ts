import type { Category } from "@/lib/catalog/types";

export type CategoryPageContent = {
  benefits: string[];
  intro: string;
};

export const categories = [
  {
    id: "cozy-comfort",
    name: "Cozy Rest",
    description:
      "Soft beds, blankets, and comfort layers for calmer pet spaces.",
  },
  {
    id: "grooming-clean-home",
    name: "Cleaner Home",
    description:
      "Pet hair, paw cleanup, and feeding-zone helpers for easier home care.",
  },
  {
    id: "walk-travel",
    name: "Walk & Travel",
    description: "Accessories for easier walks, outings, and pet travel.",
  },
  {
    id: "play-enrichment",
    name: "Play & Enrichment",
    description: "Simple toys and activities for everyday engagement.",
  },
  {
    id: "cat-essentials",
    name: "Cat Essentials",
    description: "Home accessories selected for everyday cat routines.",
  },
  {
    id: "home-organization",
    name: "Feeding & Home Setup",
    description: "Storage and setup helpers for pet supplies at home.",
  },
  {
    id: "safety-accessories",
    name: "Safety Accessories",
    description: "Visibility and comfort accessories for daily pet care.",
  },
] satisfies Category[];

export const primaryCategoryIds = [
  "cat-essentials",
  "cozy-comfort",
  "grooming-clean-home",
  "walk-travel",
] satisfies Category["id"][];

export function isPrimaryCategoryId(
  categoryId: string,
): categoryId is (typeof primaryCategoryIds)[number] {
  return primaryCategoryIds.some((primaryCategoryId) => primaryCategoryId === categoryId);
}

export const primaryCategories = categories.filter((category) =>
  isPrimaryCategoryId(category.id),
);

export function getCategoryName(categoryId: Category["id"]) {
  return (
    categories.find((category) => category.id === categoryId)?.name ??
    categoryId
  );
}

export function getCategoryById(categoryId: string) {
  return categories.find((category) => category.id === categoryId);
}

export const categoryPageContent = {
  "cozy-comfort": {
    intro: "For soft, restful corners your pet can call their own.",
    benefits: [
      "Create dedicated comfort spots around the home",
      "Add soft layers to beds, sofas, crates, and carriers",
      "Keep cozy pet areas simple, warm, and easy to refresh",
    ],
  },
  "grooming-clean-home": {
    intro: "For pet parents who want less fur, fewer muddy paw prints, and tidier feeding zones.",
    benefits: [
      "Support quick pet hair touch-ups between deeper cleans",
      "Keep paw, coat, and bowl-area cleanup close to where mess starts",
      "Make everyday cleaner-home routines feel more manageable",
    ],
  },
  "walk-travel": {
    intro: "For easier walks, safer outings, and smoother trips together.",
    benefits: [
      "Pack walking and travel essentials with less friction",
      "Support more organized car trips, errands, and outdoor breaks",
      "Keep routine outing gear ready for dogs and small pets",
    ],
  },
  "play-enrichment": {
    intro: "For everyday fun, bonding, and active pet moments.",
    benefits: [
      "Add simple play options to daily routines",
      "Keep toys easy to rotate, supervise, and store",
      "Support pet-parent bonding without overcomplicated products",
    ],
  },
  "cat-essentials": {
    intro: "For cozy, playful, and practical cat-friendly homes.",
    benefits: [
      "Create dedicated cat spots for lounging and scratching",
      "Make small homes feel more cat-friendly without clutter",
      "Choose practical accessories for everyday cat routines",
    ],
  },
  "home-organization": {
    intro: "For keeping pet supplies neat, simple, and easy to find.",
    benefits: [
      "Give toys, bowls, blankets, and leashes a clear home",
      "Make feeding and pet supply zones easier to maintain",
      "Help shared spaces feel calmer and more organized",
    ],
  },
  "safety-accessories": {
    intro: "For everyday visibility, comfort, and peace of mind.",
    benefits: [
      "Add practical visibility details to daily walking routines",
      "Support attentive handling with comfortable accessories",
      "Keep simple safety-minded gear ready for everyday outings",
    ],
  },
} satisfies Record<Category["id"], CategoryPageContent>;
