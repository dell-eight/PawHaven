export const siteConfig = {
  name: "PawHaven",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Shop cozy essentials for happier pets and cleaner homes, including cat essentials, cozy rest products, cleaner-home helpers, and walk and travel convenience accessories.",
  businessRules: {
    allowedFocus: [
      "pet beds",
      "blankets",
      "grooming tools",
      "pet hair removers",
      "pet carriers",
      "cleaning tools",
      "cat and dog home accessories",
      "cat scratching and lounging pieces",
      "cat window perches",
      "pet mats",
      "paw cleaners",
      "car seat covers",
      "portable dog water bottles",
      "travel accessories",
    ],
    excludedProducts: [
      "pet food",
      "treats",
      "supplements",
      "medicine",
      "prescription products",
      "medical devices",
      "risky health claims",
    ],
  },
} as const;
