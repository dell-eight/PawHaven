import type { CategoryId } from "@/lib/catalog/types";

export type LinkCta = {
  href: string;
  label: string;
  note?: string;
};

export type CategorySeoCta = {
  blogDescription: string;
  blogTitle: string;
  cardLabel: string;
  collectionDescription: string;
  collectionTitle: string;
  emptyProductCtas: LinkCta[];
  primary: LinkCta;
  secondary: LinkCta;
};

export const categorySeoCtas = {
  "walk-travel": {
    blogDescription:
      "Move from walking and travel advice into practical products like carriers, car covers, water bottles, and organizer bags.",
    blogTitle: "Shop walk and travel convenience products.",
    cardLabel: "Shop walk & travel",
    collectionDescription:
      "Browse practical pet travel and outing products for water breaks, car rides, errands, and short trips.",
    collectionTitle: "Make walks, car rides, and short trips easier.",
    emptyProductCtas: [
      {
        href: "/categories/walk-travel",
        label: "Browse walking and travel accessories",
        note: "Use when travel carriers, water bottles, car covers, or organizer bags are ready.",
      },
      {
        href: "/blog/dog-walking-essentials-for-new-pet-owners",
        label: "Read dog walking essentials",
      },
    ],
    primary: {
      href: "/categories/walk-travel",
      label: "Shop walk & travel",
    },
    secondary: {
      href: "/blog/travel-accessories-that-make-pet-outings-easier",
      label: "Read pet travel tips",
    },
  },
  "cozy-comfort": {
    blogDescription:
      "Turn comfort guidance into product discovery for pet beds, washable blankets, fleece layers, and soft home essentials.",
    blogTitle: "Shop cozy rest products.",
    cardLabel: "Shop cozy rest",
    collectionDescription:
      "Explore cozy pet beds, pet blankets, and comfort accessories for calmer pet corners, sofas, crates, carriers, and shared homes.",
    collectionTitle: "Create a softer everyday rest spot.",
    emptyProductCtas: [
      {
        href: "/categories/cozy-comfort",
        label: "Browse pet beds and blankets",
        note: "Use when comfort items such as beds, blankets, crate layers, or lounge accessories are ready.",
      },
      {
        href: "/blog/how-to-choose-a-cozy-pet-bed",
        label: "Read the cozy pet bed guide",
      },
    ],
    primary: {
      href: "/categories/cozy-comfort",
      label: "Shop cozy rest",
    },
    secondary: {
      href: "/blog/how-to-choose-a-cozy-pet-bed",
      label: "Read the pet bed guide",
    },
  },
  "grooming-clean-home": {
    blogDescription:
      "Connect cleanup articles to grooming and pet hair tools that support cleaner sofas, entryways, blankets, and clothing.",
    blogTitle: "Shop cleaner-home pet products.",
    cardLabel: "Shop cleaner home",
    collectionDescription:
      "Shop pet hair removers, grooming gloves, paw cleanup tools, and feeding-zone mats for cleaner everyday routines.",
    collectionTitle: "Reduce pet mess where it starts.",
    emptyProductCtas: [
      {
        href: "/categories/grooming-clean-home",
        label: "Browse cleaner-home tools",
        note: "Use when brushes, grooming gloves, paw cleaners, mats, or cleanup accessories are ready.",
      },
      {
        href: "/blog/pet-hair-removal-tips-for-busy-pet-parents",
        label: "Read pet hair removal tips",
      },
    ],
    primary: {
      href: "/categories/grooming-clean-home",
      label: "Shop cleaner-home products",
    },
    secondary: {
      href: "/blog/how-to-keep-a-cleaner-home-with-pets",
      label: "Read cleaner-home tips",
    },
  },
  "cat-essentials": {
    blogDescription:
      "Guide cat owners from care ideas into cat essentials such as scratching lounges, window perches, cozy blankets, and storage helpers.",
    blogTitle: "Shop cat essentials for cozy homes.",
    cardLabel: "Shop cat essentials",
    collectionDescription:
      "Browse cat essentials for lounging, scratching, window watching, play, and tidy cat-friendly home routines.",
    collectionTitle: "Build a cozy cat-friendly home.",
    emptyProductCtas: [
      {
        href: "/categories/cat-essentials",
        label: "Browse cat home essentials",
        note: "Use when scratching, lounging, perch, blanket, or cat play accessories are ready.",
      },
      {
        href: "/blog/cat-home-essentials-for-a-cozy-space",
        label: "Read cat home essentials",
      },
    ],
    primary: {
      href: "/categories/cat-essentials",
      label: "Shop cat essentials",
    },
    secondary: {
      href: "/blog/cat-home-essentials-for-a-cozy-space",
      label: "Read cat home tips",
    },
  },
  "home-organization": {
    blogDescription:
      "Help shoppers move from organization ideas into storage, bowl mats, feeding station helpers, and travel organization products.",
    blogTitle: "Shop pet organization products.",
    cardLabel: "Shop organization products",
    collectionDescription:
      "Browse pet organization products for toys, leashes, blankets, bowls, feeding zones, and everyday home supply routines.",
    collectionTitle: "Give pet supplies a clearer place to land.",
    emptyProductCtas: [
      {
        href: "/categories/home-organization",
        label: "Browse pet organization products",
      },
      {
        href: "/blog/how-to-organize-pet-supplies-at-home",
        label: "Read pet supply organization tips",
      },
    ],
    primary: {
      href: "/categories/home-organization",
      label: "Shop pet organization products",
    },
    secondary: {
      href: "/blog/how-to-organize-pet-supplies-at-home",
      label: "Read organization tips",
    },
  },
  "play-enrichment": {
    blogDescription:
      "Use play and enrichment CTAs only for supervised toys and storage-friendly play accessories currently in the catalog.",
    blogTitle: "Shop pet play and enrichment products.",
    cardLabel: "Shop play products",
    collectionDescription:
      "Explore simple supervised play products and enrichment accessories that fit everyday pet routines.",
    collectionTitle: "Add simple play to everyday pet routines.",
    emptyProductCtas: [
      {
        href: "/categories/play-enrichment",
        label: "Browse pet play products",
      },
      {
        href: "/categories/home-organization",
        label: "Shop toy storage ideas",
      },
    ],
    primary: {
      href: "/categories/play-enrichment",
      label: "Shop play products",
    },
    secondary: {
      href: "/categories/home-organization",
      label: "Shop toy storage",
    },
  },
  "safety-accessories": {
    blogDescription:
      "Keep safety CTAs grounded in visible, fit-focused accessories without making medical or prevention claims.",
    blogTitle: "Shop pet visibility and safety accessories.",
    cardLabel: "Shop safety accessories",
    collectionDescription:
      "Browse visibility-minded collars and walking accessories that support attentive everyday handling and fit checks.",
    collectionTitle: "Add simple visibility details to daily walks.",
    emptyProductCtas: [
      {
        href: "/categories/safety-accessories",
        label: "Browse visibility accessories",
      },
      {
        href: "/categories/walk-travel",
        label: "Shop walking gear",
      },
    ],
    primary: {
      href: "/categories/safety-accessories",
      label: "Shop safety accessories",
    },
    secondary: {
      href: "/categories/walk-travel",
      label: "Shop walking gear",
    },
  },
} satisfies Record<CategoryId, CategorySeoCta>;

export const universalTrustCtas = [
  {
    href: "/shipping-returns",
    label: "Check shipping and returns",
    note: "Use near checkout, product pages, and collection bottoms.",
  },
  {
    href: "/faq",
    label: "Read sizing and fit FAQs",
    note: "Use near carriers, beds, perches, mats, and fit-sensitive products.",
  },
  {
    href: "/contact",
    label: "Ask PawHaven support",
    note: "Use near checkout-preparation notices, product uncertainty, and support panels.",
  },
] satisfies LinkCta[];
