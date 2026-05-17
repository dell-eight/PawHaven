export const siteConfig = {
  // TODO(owner): Before launch, connect Shopify/payment checkout, confirm the real support email,
  // finalize shipping timelines, set the return/refund window, add real product photos,
  // collect real reviews only after customers buy, and configure Meta Pixel, TikTok Pixel, and GA4.
  name: "PawHaven",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Shop PawHaven for pet comfort, pet cleaning, cat essentials, and dog accessories for cleaner homes, cozy rest, and easier everyday pet routines in the Philippines.",
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
