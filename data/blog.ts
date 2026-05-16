import type { CategoryId } from "@/lib/catalog/types";

export type BlogArticleSection = {
  heading: string;
  body: string;
};

export type BlogArticle = {
  category: string;
  contentSections: BlogArticleSection[];
  excerpt: string;
  readingTime: string;
  relatedProductCategory: CategoryId;
  slug: string;
  title: string;
};

export const blogArticles = [
  {
    title: "How to Keep a Cleaner Home With Pets",
    slug: "how-to-keep-a-cleaner-home-with-pets",
    excerpt:
      "Simple pet-home habits for managing hair, muddy paws, feeding areas, and everyday clutter without making your routine complicated.",
    category: "Clean Home",
    readingTime: "5 min read",
    relatedProductCategory: "grooming-clean-home",
    contentSections: [
      {
        heading: "Start with the places your pet uses most",
        body: "A cleaner pet home usually starts with the sofa, bed, entryway, and feeding area. Keep a reusable hair remover, washable blanket, and wipeable mat near those zones so small messes are easier to handle as they happen.",
      },
      {
        heading: "Make cleanup tools easy to reach",
        body: "Pet hair tools work best when they are stored where you actually need them. Try keeping lint roller refills near your closet, a paw cleaning cup by the door, and a grooming glove near your pet's favorite rest spot.",
      },
      {
        heading: "Use washable layers",
        body: "Blankets, mats, and removable covers can help define pet-friendly areas while making routine cleaning simpler. Check care labels before washing and dry items fully before returning them to pet spaces.",
      },
    ],
  },
  {
    title: "Best Pet Accessories for Apartment Living",
    slug: "best-pet-accessories-for-apartment-living",
    excerpt:
      "Compact, practical pet accessories that help small homes feel tidy, cozy, and easier to share with dogs or cats.",
    category: "Apartment Pets",
    readingTime: "4 min read",
    relatedProductCategory: "home-organization",
    contentSections: [
      {
        heading: "Choose items that do more than one job",
        body: "Small spaces benefit from accessories that are easy to move, store, and clean. Soft blankets can work on sofas or in carriers, while storage baskets can hold toys, leashes, and grooming tools.",
      },
      {
        heading: "Create clear pet zones",
        body: "A bed, bowl mat, scratch lounge, or toy basket can give your pet a dedicated area without taking over the room. Defined zones also make daily tidying easier.",
      },
      {
        heading: "Keep travel and walking gear ready",
        body: "Apartment pet parents often move through elevators, sidewalks, cars, and errands. A leash, carrier, travel organizer, or portable water bottle can make those transitions feel smoother.",
      },
    ],
  },
  {
    title: "How to Choose a Cozy Pet Bed",
    slug: "how-to-choose-a-cozy-pet-bed",
    excerpt:
      "A beginner-friendly guide to picking a pet bed based on size, cleaning needs, placement, and your pet's everyday lounging habits.",
    category: "Cozy Comfort",
    readingTime: "5 min read",
    relatedProductCategory: "cozy-comfort",
    contentSections: [
      {
        heading: "Measure before you buy",
        body: "Check the final size guide and compare it with the space your pet uses when resting. A bed should give your pet room to curl up or stretch without overwhelming your room layout.",
      },
      {
        heading: "Think about where the bed will live",
        body: "Beds near sofas, desks, bedrooms, or quiet corners can help pets settle into predictable routines. Pick a shape and color that fits your home so the bed feels like part of the room.",
      },
      {
        heading: "Look for practical cleaning details",
        body: "Removable covers, washable blankets, and pet hair tools can make cozy spaces easier to maintain. Always follow the product care label before washing.",
      },
    ],
  },
  {
    title: "Pet Hair Removal Tips for Busy Pet Parents",
    slug: "pet-hair-removal-tips-for-busy-pet-parents",
    excerpt:
      "Quick, realistic pet hair routines for clothes, sofas, blankets, and high-traffic home areas.",
    category: "Grooming & Cleaning",
    readingTime: "4 min read",
    relatedProductCategory: "grooming-clean-home",
    contentSections: [
      {
        heading: "Use the right tool for the surface",
        body: "Reusable hair removers are helpful for sofas and blankets, lint rollers are convenient for clothing, and grooming gloves can collect loose hair during calm grooming moments.",
      },
      {
        heading: "Clean in small passes",
        body: "A few minutes of touch-up cleaning can keep pet hair from becoming a bigger weekend job. Focus on the spots your pet uses daily, then rotate through other areas as needed.",
      },
      {
        heading: "Pair grooming with washable home layers",
        body: "Grooming tools and washable blankets work well together because loose hair is easier to collect from defined pet areas. This is a home-care routine, not a medical treatment.",
      },
    ],
  },
  {
    title: "Dog Walking Essentials for New Pet Owners",
    slug: "dog-walking-essentials-for-new-pet-owners",
    excerpt:
      "A simple starter list for daily dog walks, from adjustable gear to water breaks and post-walk cleanup.",
    category: "Walking",
    readingTime: "5 min read",
    relatedProductCategory: "walk-travel",
    contentSections: [
      {
        heading: "Start with fit and comfort",
        body: "A collar, harness, and leash should be checked against the final size guide before ordering. Fit can vary by product, so measure carefully and inspect gear before walks.",
      },
      {
        heading: "Pack for simple outdoor breaks",
        body: "A portable water bottle and a small travel organizer can make daily outings easier, especially for longer walks, car trips, or warm-weather errands.",
      },
      {
        heading: "Plan for the return home",
        body: "A paw cleaning cup or entryway mat can help with muddy paws and everyday mess after walks. Keep cleanup items near the door so they are easy to use.",
      },
    ],
  },
  {
    title: "Cat Home Essentials for a Cozy Space",
    slug: "cat-home-essentials-for-a-cozy-space",
    excerpt:
      "Practical cat-friendly home ideas for lounging, scratching, window watching, play, and storage.",
    category: "Cat Essentials",
    readingTime: "4 min read",
    relatedProductCategory: "cat-essentials",
    contentSections: [
      {
        heading: "Give cats dedicated places to lounge",
        body: "A soft blanket, window perch, or cat lounge can create familiar spots without taking over the room. Place them where your cat already likes to spend time.",
      },
      {
        heading: "Include a scratch-friendly surface",
        body: "A scratching lounge gives cats a dedicated accessory for scratching and stretching. Placement matters, and every cat has different preferences.",
      },
      {
        heading: "Keep toys easy to rotate",
        body: "A small storage basket helps keep cat toys tidy while making it easy to rotate options for supervised play and everyday enrichment.",
      },
    ],
  },
  {
    title: "How to Organize Pet Supplies at Home",
    slug: "how-to-organize-pet-supplies-at-home",
    excerpt:
      "Easy organization ideas for leashes, toys, blankets, grooming tools, feeding mats, and travel accessories.",
    category: "Organization",
    readingTime: "4 min read",
    relatedProductCategory: "home-organization",
    contentSections: [
      {
        heading: "Group supplies by routine",
        body: "Store walking gear near the door, grooming tools near favorite rest spots, and feeding mats near bowls. Grouping items by routine makes pet care feel more automatic.",
      },
      {
        heading: "Use open storage for daily items",
        body: "Baskets work well for toys, blankets, leashes, and other lightweight accessories. Open storage is easy to use and easy to tidy at the end of the day.",
      },
      {
        heading: "Keep travel gear packed between outings",
        body: "A travel organizer can hold allowed accessories like leashes, blankets, cleanup tools, and water bottles so you are not repacking from scratch every time.",
      },
    ],
  },
  {
    title: "Travel Accessories That Make Pet Outings Easier",
    slug: "travel-accessories-that-make-pet-outings-easier",
    excerpt:
      "Beginner-friendly travel accessories for short trips, car rides, errands, and smoother outings with pets.",
    category: "Travel",
    readingTime: "5 min read",
    relatedProductCategory: "walk-travel",
    contentSections: [
      {
        heading: "Match the accessory to the trip",
        body: "Short errands, car rides, weekend visits, and outdoor breaks all need slightly different gear. A carrier, car seat cover, travel organizer, or portable water bottle can support different parts of the outing.",
      },
      {
        heading: "Check size and fit details",
        body: "Carriers, harnesses, collars, and travel accessories should be checked against final measurements before ordering. Product fit can vary by supplier and item style.",
      },
      {
        heading: "Keep the car and bag easier to clean",
        body: "Seat covers, blankets, and organizers can make pet travel feel more manageable by giving accessories and pet hair a clearer place to land.",
      },
    ],
  },
] satisfies BlogArticle[];

export function getBlogArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: BlogArticle) {
  return blogArticles
    .filter(
      (relatedArticle) =>
        relatedArticle.slug !== article.slug &&
        (relatedArticle.category === article.category ||
          relatedArticle.relatedProductCategory === article.relatedProductCategory),
    )
    .slice(0, 3);
}
