import type { Product } from "@/lib/catalog/types";

const shippingNote =
  "Shipping estimates will be shown once fulfillment is configured for real orders.";

export const products: Product[] = [
  {
    id: "cozy-cloud-pet-bed",
    name: "Cozy Cloud Pet Bed",
    slug: "cozy-cloud-pet-bed",
    category: "cozy-comfort",
    price: 58,
    compareAtPrice: 72,
    shortDescription:
      "A soft, low-profile bed for everyday lounging in living rooms, bedrooms, and cozy pet corners.",
    longDescription:
      "The Cozy Cloud Pet Bed gives dogs and cats a plush place to curl up while keeping the look calm and home-friendly. Its simple shape works well beside sofas, beds, crates, or apartment pet stations.",
    benefits: [
      "Creates a dedicated resting spot",
      "Soft texture for everyday comfort",
      "Neutral look that blends into warm home decor",
    ],
    features: [
      "Low-profile oval shape",
      "Soft-touch sleep surface",
      "Removable cover design",
      "Non-slip style base",
    ],
    bestFor: ["Small dogs", "Cats", "Apartment pet corners"],
    tags: ["bed", "cozy", "dog", "cat", "home"],
    careInstructions:
      "Remove loose hair regularly and spot clean as needed. Follow the final care label before machine washing.",
    shippingNote,
    faqs: [
      {
        question: "Is this bed for cats or dogs?",
        answer: "It is intended for cats and small to medium dogs, depending on the selected size.",
      },
      {
        question: "Can the cover be cleaned?",
        answer: "Current catalog details assume a removable cover design. Confirm the final care label before launch.",
      },
    ],
    relatedProductIds: [
      "soft-fleece-pet-blanket",
      "washable-pet-blanket",
      "anti-slip-pet-bowl-mat",
    ],
    isFeatured: true,
  },
  {
    id: "pet-hair-remover-brush",
    name: "Pet Hair Remover Brush",
    slug: "pet-hair-remover-brush",
    category: "grooming-clean-home",
    price: 18,
    compareAtPrice: 24,
    shortDescription:
      "A reusable brush for lifting loose pet hair from sofas, cushions, blankets, and everyday fabrics.",
    longDescription:
      "This pet hair remover brush is made for quick cleanup moments around the home. Keep one near the sofa, laundry area, or entryway to tidy common pet zones without relying on single-use sheets.",
    benefits: [
      "Helps tidy fabric surfaces between deeper cleans",
      "Reusable design reduces disposable roller use",
      "Easy to keep near high-traffic pet areas",
    ],
    features: [
      "Manual reusable cleaning surface",
      "Comfort grip handle",
      "Compact storage size",
      "Designed for common home fabrics",
    ],
    bestFor: ["Sofas", "Blankets", "Pet beds", "Busy pet parents"],
    tags: ["cleaning", "pet hair", "reusable", "home care"],
    careInstructions:
      "Remove collected hair after use and wipe the brush surface with a dry or lightly damp cloth.",
    shippingNote,
    faqs: [
      {
        question: "Does it replace vacuuming?",
        answer: "No. It is a handy touch-up tool for visible hair between regular cleaning routines.",
      },
      {
        question: "Can it be used on clothing?",
        answer: "It is best suited for home fabrics. Test gently on delicate clothing first.",
      },
    ],
    relatedProductIds: [
      "lint-roller-refill-set",
      "pet-grooming-glove",
      "washable-pet-blanket",
    ],
    isFeatured: true,
  },
  {
    id: "foldable-travel-pet-carrier",
    name: "Foldable Travel Pet Carrier",
    slug: "foldable-travel-pet-carrier",
    category: "walk-travel",
    price: 46,
    compareAtPrice: 59,
    shortDescription:
      "A soft-sided carrier for easier everyday trips, short outings, and organized pet travel.",
    longDescription:
      "The Foldable Travel Pet Carrier is designed for practical transport with a lightweight feel and easy storage. It is a helpful pick for errands, visits, and planned outings where a secure carrier is needed.",
    benefits: [
      "Folds down for easier storage",
      "Keeps travel essentials more organized",
      "Soft-sided format for daily convenience",
    ],
    features: [
      "Foldable structure",
      "Ventilation panels",
      "Carry handles",
      "Interior leash clip style detail",
    ],
    bestFor: ["Small dogs", "Cats", "Short trips", "Apartment storage"],
    tags: ["carrier", "travel", "cat", "small dog"],
    careInstructions:
      "Spot clean with mild soap and air dry fully before folding or storing.",
    shippingNote,
    faqs: [
      {
        question: "Is it airline approved?",
        answer: "Airline rules vary. Confirm final carrier measurements and each airline policy before travel.",
      },
      {
        question: "What pets is it best for?",
        answer: "It is intended for cats and small dogs that fit comfortably within the final size guide.",
      },
    ],
    relatedProductIds: [
      "pet-travel-organizer-bag",
      "portable-water-bottle-for-walks",
      "adjustable-pet-leash",
    ],
    isFeatured: true,
  },
  {
    id: "everyday-no-pull-harness",
    name: "Everyday No-Pull Harness",
    slug: "everyday-no-pull-harness",
    category: "walk-travel",
    price: 34,
    compareAtPrice: 42,
    shortDescription:
      "An adjustable walking harness made for comfortable daily strolls and simple leash setup.",
    longDescription:
      "This everyday harness keeps walk prep straightforward with adjustable straps and a clean, practical shape. It is designed for routine walks, quick outings, and pet parents who want a dependable walking accessory.",
    benefits: [
      "Helps make daily walk setup easier",
      "Adjustable fit supports sizing flexibility",
      "Pairs well with everyday leashes",
    ],
    features: [
      "Adjustable neck and chest straps",
      "Front and back leash attachment style details",
      "Padded contact areas",
      "Quick-release buckle design",
    ],
    bestFor: ["Dogs", "Daily walks", "New pet parents"],
    tags: ["harness", "walking", "dog", "adjustable"],
    careInstructions:
      "Hand wash gently and air dry. Check straps, buckles, and fit before each walk.",
    shippingNote,
    faqs: [
      {
        question: "Does this stop pulling completely?",
        answer: "No harness can promise that. It is designed to support a more manageable walking setup when fitted properly.",
      },
      {
        question: "How should I choose a size?",
        answer: "Use the final supplier size chart and measure around the chest before ordering.",
      },
    ],
    relatedProductIds: [
      "adjustable-pet-leash",
      "reflective-safety-collar",
      "portable-water-bottle-for-walks",
    ],
  },
  {
    id: "waterproof-pet-feeding-mat",
    name: "Waterproof Pet Feeding Mat",
    slug: "waterproof-pet-feeding-mat",
    category: "home-organization",
    price: 22,
    compareAtPrice: 28,
    shortDescription:
      "A wipeable feeding mat that helps define the bowl area and catch everyday drips.",
    longDescription:
      "The Waterproof Pet Feeding Mat is a simple home-care helper for pet feeding stations. Place it under bowls to keep the area easier to wipe down after meals and water breaks.",
    benefits: [
      "Helps contain small spills",
      "Defines a tidy feeding zone",
      "Easy to wipe after daily use",
    ],
    features: [
      "Water-resistant style surface",
      "Raised edge detail",
      "Flexible mat construction",
      "Neutral home-friendly look",
    ],
    bestFor: ["Food and water bowls", "Apartments", "Kitchen pet stations"],
    tags: ["feeding mat", "clean home", "organization", "dog", "cat"],
    careInstructions:
      "Wipe with a damp cloth after meals and dry before placing back under bowls.",
    shippingNote,
    faqs: [
      {
        question: "Can it go under both food and water bowls?",
        answer: "Yes, it is intended for everyday bowl stations with food and water bowls.",
      },
      {
        question: "Is it chew-proof?",
        answer: "No. Supervise pets that chew mats or household items.",
      },
    ],
    relatedProductIds: [
      "anti-slip-pet-bowl-mat",
      "pet-toy-storage-basket",
      "paw-cleaning-cup",
    ],
  },
  {
    id: "cat-scratching-lounge",
    name: "Cat Scratching Lounge",
    slug: "cat-scratching-lounge",
    category: "cat-essentials",
    price: 39,
    compareAtPrice: 49,
    shortDescription:
      "A scratch-friendly lounge piece for cats who like to stretch, perch, and relax at home.",
    longDescription:
      "The Cat Scratching Lounge gives cats a dedicated surface for everyday scratching and lounging. Its simple silhouette works in living rooms, home offices, and cozy cat corners.",
    benefits: [
      "Creates a dedicated scratch area",
      "Doubles as a casual lounge spot",
      "Blends into calm home setups",
    ],
    features: [
      "Corrugated scratch surface style",
      "Curved lounge shape",
      "Lightweight placement",
      "Suitable for common cat corners",
    ],
    bestFor: ["Cats", "Small spaces", "Living room cat areas"],
    tags: ["cat", "scratching", "lounge", "home"],
    careInstructions:
      "Shake off loose debris and replace when the scratching surface becomes heavily worn.",
    shippingNote,
    faqs: [
      {
        question: "Is this for dogs?",
        answer: "No, it is designed for cats and cat home routines.",
      },
      {
        question: "Will it stop furniture scratching?",
        answer: "It provides a dedicated option, but every cat is different and placement matters.",
      },
    ],
    relatedProductIds: [
      "cozy-cat-window-perch",
      "soft-plush-squeaky-toy",
      "pet-toy-storage-basket",
    ],
    isFeatured: true,
  },
  {
    id: "paw-cleaning-cup",
    name: "Paw Cleaning Cup",
    slug: "paw-cleaning-cup",
    category: "grooming-clean-home",
    price: 21,
    compareAtPrice: 27,
    shortDescription:
      "A simple rinse cup for cleaning muddy paws after walks, park trips, and rainy-day outings.",
    longDescription:
      "The Paw Cleaning Cup helps make post-walk cleanup more manageable. Add water, gently rinse paws, and dry before your pet heads back into cozy indoor spaces.",
    benefits: [
      "Supports cleaner entryway routines",
      "Helpful after wet or muddy walks",
      "Compact enough for small homes",
    ],
    features: [
      "Soft inner bristle style design",
      "Easy-grip cup shape",
      "Removable cleaning insert style",
      "Compact storage size",
    ],
    bestFor: ["Dogs", "Rainy walks", "Entryway cleanup"],
    tags: ["paw cleaner", "cleaning", "walking", "dog"],
    careInstructions:
      "Empty after use, rinse thoroughly, and let all parts air dry before storing.",
    shippingNote,
    faqs: [
      {
        question: "Does this replace bathing?",
        answer: "No. It is for quick paw rinses after everyday walks and outings.",
      },
      {
        question: "Can it be used for cats?",
        answer: "It is primarily intended for dogs; use only if your pet is comfortable with gentle handling.",
      },
    ],
    relatedProductIds: [
      "everyday-no-pull-harness",
      "adjustable-pet-leash",
      "waterproof-pet-feeding-mat",
    ],
  },
  {
    id: "car-seat-pet-cover",
    name: "Car Seat Pet Cover",
    slug: "car-seat-pet-cover",
    category: "walk-travel",
    price: 52,
    compareAtPrice: 68,
    shortDescription:
      "A practical seat cover for helping protect car seats from pet hair, dirt, and everyday outing mess.",
    longDescription:
      "This car seat cover is made for pet parents who bring dogs along for errands, weekend visits, and outdoor plans. It helps define a pet-friendly car zone and supports easier cleanup after trips.",
    benefits: [
      "Helps protect seats during pet outings",
      "Makes car cleanup more manageable",
      "Useful for walks, parks, and weekend travel",
    ],
    features: [
      "Bench seat cover style",
      "Water-resistant style surface",
      "Seat anchor details",
      "Adjustable strap style setup",
    ],
    bestFor: ["Dogs", "Car trips", "Park outings"],
    tags: ["car", "travel", "seat cover", "dog"],
    careInstructions:
      "Shake off loose debris and wipe clean. Follow final care label for deeper cleaning.",
    shippingNote,
    faqs: [
      {
        question: "Is this a safety restraint?",
        answer: "No. It is a seat cover. Use appropriate pet travel restraints according to your vehicle and local rules.",
      },
      {
        question: "Will it fit every car?",
        answer: "Fit depends on final measurements and seat shape. Check the final size guide before ordering.",
      },
    ],
    relatedProductIds: [
      "pet-travel-organizer-bag",
      "foldable-travel-pet-carrier",
      "portable-water-bottle-for-walks",
    ],
  },
  {
    id: "soft-fleece-pet-blanket",
    name: "Soft Fleece Pet Blanket",
    slug: "soft-fleece-pet-blanket",
    category: "cozy-comfort",
    price: 24,
    compareAtPrice: 32,
    shortDescription:
      "A cozy fleece blanket for sofas, beds, crates, carriers, and everyday pet lounging.",
    longDescription:
      "The Soft Fleece Pet Blanket adds an easy comfort layer anywhere your pet likes to rest. Use it over furniture, inside carriers, or as a familiar blanket for cozy corners.",
    benefits: [
      "Adds a soft layer to favorite rest spots",
      "Helps define pet-friendly furniture zones",
      "Easy to move around the home",
    ],
    features: [
      "Soft fleece texture",
      "Lightweight foldable design",
      "Neutral color direction",
      "Multi-use home and travel format",
    ],
    bestFor: ["Dogs", "Cats", "Sofas", "Carriers"],
    tags: ["blanket", "cozy", "dog", "cat", "travel"],
    careInstructions:
      "Machine wash cold if the final care label allows. Air dry or tumble dry low according to supplier guidance.",
    shippingNote,
    faqs: [
      {
        question: "Can it be used in a carrier?",
        answer: "Yes, it is designed as a flexible comfort layer for home or travel setups.",
      },
      {
        question: "Is it waterproof?",
        answer: "No. This is a soft fleece comfort blanket, not a waterproof mat.",
      },
    ],
    relatedProductIds: [
      "cozy-cloud-pet-bed",
      "foldable-travel-pet-carrier",
      "washable-pet-blanket",
    ],
  },
  {
    id: "pet-toy-storage-basket",
    name: "Pet Toy Storage Basket",
    slug: "pet-toy-storage-basket",
    category: "home-organization",
    price: 29,
    compareAtPrice: 36,
    shortDescription:
      "A soft storage basket for keeping toys, leashes, blankets, and small pet supplies together.",
    longDescription:
      "The Pet Toy Storage Basket makes everyday pet gear easier to find and easier to tidy. Place it in an entryway, living room, or pet corner to keep small accessories from spreading around the home.",
    benefits: [
      "Keeps daily pet items in one place",
      "Soft-sided design for living spaces",
      "Helpful for tidier pet corners",
    ],
    features: [
      "Open-top basket shape",
      "Soft woven style material",
      "Carry handle detail",
      "Flexible storage size",
    ],
    bestFor: ["Toys", "Leashes", "Blankets", "Home organization"],
    tags: ["storage", "organization", "toys", "home"],
    careInstructions:
      "Spot clean with a damp cloth and reshape while drying if needed.",
    shippingNote,
    faqs: [
      {
        question: "Can pets chew this basket?",
        answer: "It is a storage basket, not a chew toy. Keep it away from pets who chew household items.",
      },
      {
        question: "What can it hold?",
        answer: "It is intended for lightweight pet accessories such as toys, blankets, and leashes.",
      },
    ],
    relatedProductIds: [
      "soft-plush-squeaky-toy",
      "adjustable-pet-leash",
      "soft-fleece-pet-blanket",
    ],
  },
  {
    id: "lint-roller-refill-set",
    name: "Lint Roller Refill Set",
    slug: "lint-roller-refill-set",
    category: "grooming-clean-home",
    price: 14,
    compareAtPrice: 18,
    shortDescription:
      "A practical refill set for quick pet hair touch-ups on clothing, bags, and fabric surfaces.",
    longDescription:
      "Keep lint roller refills on hand for those last-minute pet hair moments before work, errands, or guests arriving. This simple set supports quick cleanup around wardrobes and entryways.",
    benefits: [
      "Useful for fast clothing touch-ups",
      "Easy to store in closets or entryways",
      "Practical add-on for pet hair routines",
    ],
    features: [
      "Multi-roll refill style set",
      "Peel-away adhesive sheets",
      "Fits compatible standard handles",
      "Compact storage format",
    ],
    bestFor: ["Clothing", "Bags", "Entryways", "Busy mornings"],
    tags: ["lint roller", "pet hair", "cleaning", "refill"],
    careInstructions:
      "Store in a dry place and keep protective wrapping on unused rolls until needed.",
    shippingNote,
    faqs: [
      {
        question: "Does it include a handle?",
        answer: "This catalog item is positioned as a refill set. Final packaging details should confirm handle compatibility.",
      },
      {
        question: "Can it be used on delicate fabric?",
        answer: "Test on a small area first, especially with delicate or textured materials.",
      },
    ],
    relatedProductIds: [
      "pet-hair-remover-brush",
      "pet-grooming-glove",
      "soft-fleece-pet-blanket",
    ],
  },
  {
    id: "cozy-cat-window-perch",
    name: "Cozy Cat Window Perch",
    slug: "cozy-cat-window-perch",
    category: "cat-essentials",
    price: 48,
    compareAtPrice: 62,
    shortDescription:
      "A window perch style lounge for cats who like sunny views and elevated resting spots.",
    longDescription:
      "The Cozy Cat Window Perch creates a dedicated lookout spot for everyday lounging. It is designed for cat homes that need comfort without taking up much floor space.",
    benefits: [
      "Creates an elevated cat rest area",
      "Saves floor space in smaller homes",
      "Adds a cozy perch near a window",
    ],
    features: [
      "Window perch style frame",
      "Soft removable cushion style detail",
      "Compact footprint",
      "Neutral home-friendly finish",
    ],
    bestFor: ["Cats", "Apartments", "Window lounging"],
    tags: ["cat", "perch", "window", "cozy"],
    careInstructions:
      "Wipe frame surfaces as needed and clean cushion according to final care label.",
    shippingNote,
    faqs: [
      {
        question: "Will it fit every window?",
        answer: "Fit depends on final product dimensions and window style. Confirm measurements before ordering.",
      },
      {
        question: "Is setup required?",
        answer: "Yes, final installation steps should be followed carefully before allowing use.",
      },
    ],
    relatedProductIds: [
      "cat-scratching-lounge",
      "soft-fleece-pet-blanket",
      "pet-toy-storage-basket",
    ],
  },
  {
    id: "adjustable-pet-leash",
    name: "Adjustable Pet Leash",
    slug: "adjustable-pet-leash",
    category: "walk-travel",
    price: 23,
    compareAtPrice: 30,
    shortDescription:
      "A simple adjustable leash for daily dog walks, quick outdoor breaks, and travel bags.",
    longDescription:
      "The Adjustable Pet Leash is a dependable everyday walking accessory with a clean look and practical length options. Pair it with a properly fitted harness or collar for routine outings.",
    benefits: [
      "Supports everyday walking routines",
      "Adjustable length for different outing needs",
      "Easy to pack for trips and errands",
    ],
    features: [
      "Adjustable strap length",
      "Metal clip style attachment",
      "Soft hand loop",
      "Lightweight construction",
    ],
    bestFor: ["Dogs", "Daily walks", "Travel bags"],
    tags: ["leash", "walking", "dog", "travel"],
    careInstructions:
      "Wipe clean after wet walks and inspect the clip and stitching regularly.",
    shippingNote,
    faqs: [
      {
        question: "Can this be used with a harness?",
        answer: "Yes, it is intended to clip to compatible harnesses or collars.",
      },
      {
        question: "Is this for cats?",
        answer: "It is primarily positioned for dogs. Use only with properly fitted pet walking gear.",
      },
    ],
    relatedProductIds: [
      "everyday-no-pull-harness",
      "reflective-safety-collar",
      "portable-water-bottle-for-walks",
    ],
  },
  {
    id: "portable-water-bottle-for-walks",
    name: "Portable Water Bottle for Walks",
    slug: "portable-water-bottle-for-walks",
    category: "walk-travel",
    price: 20,
    compareAtPrice: 26,
    shortDescription:
      "A compact walk bottle with an attached drinking tray style top for outdoor breaks.",
    longDescription:
      "This portable water bottle is made for walks, park visits, and car outings where a simple drink setup is helpful. Keep it in a walking bag or car caddy for everyday convenience.",
    benefits: [
      "Makes water breaks easier on outings",
      "Compact for bags and car storage",
      "Helpful for warm-weather walks",
    ],
    features: [
      "Attached tray style top",
      "One-hand button style detail",
      "Leak-resistant style closure",
      "Carry strap detail",
    ],
    bestFor: ["Dogs", "Walks", "Car outings", "Travel bags"],
    tags: ["water bottle", "walking", "travel", "dog"],
    careInstructions:
      "Wash with mild soap after use and allow the bottle and tray to dry fully.",
    shippingNote,
    faqs: [
      {
        question: "Is this for food or treats?",
        answer: "No. PawNest does not sell pet food or treats; this item is for carrying water.",
      },
      {
        question: "Can it go in a dishwasher?",
        answer: "Follow the final care label. Hand washing is the safest current guidance.",
      },
    ],
    relatedProductIds: [
      "adjustable-pet-leash",
      "everyday-no-pull-harness",
      "pet-travel-organizer-bag",
    ],
  },
  {
    id: "pet-grooming-glove",
    name: "Pet Grooming Glove",
    slug: "pet-grooming-glove",
    category: "grooming-clean-home",
    price: 16,
    compareAtPrice: 21,
    shortDescription:
      "A soft grooming glove for collecting loose hair during calm brushing routines.",
    longDescription:
      "The Pet Grooming Glove is a gentle-feeling tool for everyday coat touch-ups. It is useful for pet parents who want a simple way to collect loose hair before it lands around the home.",
    benefits: [
      "Helps collect loose coat hair",
      "Glove format feels familiar in the hand",
      "Supports routine grooming touch-ups",
    ],
    features: [
      "Flexible glove shape",
      "Soft bristle style palm",
      "Adjustable wrist strap detail",
      "Easy-rinse surface",
    ],
    bestFor: ["Dogs", "Cats", "Loose hair", "Home grooming"],
    tags: ["grooming", "pet hair", "dog", "cat"],
    careInstructions:
      "Remove collected hair after grooming, rinse if needed, and air dry before storage.",
    shippingNote,
    faqs: [
      {
        question: "Is this a medical grooming tool?",
        answer: "No. It is a simple accessory for loose hair collection and routine coat care.",
      },
      {
        question: "Can it be used on cats?",
        answer: "Yes, if your cat is comfortable with gentle grooming.",
      },
    ],
    relatedProductIds: [
      "pet-hair-remover-brush",
      "lint-roller-refill-set",
      "soft-fleece-pet-blanket",
    ],
  },
  {
    id: "washable-pet-blanket",
    name: "Washable Pet Blanket",
    slug: "washable-pet-blanket",
    category: "cozy-comfort",
    price: 28,
    compareAtPrice: 36,
    shortDescription:
      "A washable everyday blanket for pet beds, sofas, crates, and cozy home routines.",
    longDescription:
      "The Washable Pet Blanket is a flexible layer for pet-friendly homes. Use it where your pet rests most often, then clean according to the final care label to keep routines simple.",
    benefits: [
      "Adds a washable layer to pet zones",
      "Works across beds, sofas, and crates",
      "Easy to rotate through home routines",
    ],
    features: [
      "Soft woven feel",
      "Machine-washable style design",
      "Foldable storage",
      "Home-neutral color direction",
    ],
    bestFor: ["Dogs", "Cats", "Pet beds", "Furniture protection"],
    tags: ["blanket", "washable", "cozy", "home"],
    careInstructions:
      "Wash cold if the final care label allows and dry fully before placing back in pet areas.",
    shippingNote,
    faqs: [
      {
        question: "Is this different from the fleece blanket?",
        answer: "This option is positioned as a washable everyday layer, while the fleece blanket focuses on soft warmth.",
      },
      {
        question: "Can it be used over furniture?",
        answer: "Yes, it can help define pet-friendly furniture zones.",
      },
    ],
    relatedProductIds: [
      "cozy-cloud-pet-bed",
      "soft-fleece-pet-blanket",
      "pet-hair-remover-brush",
    ],
  },
  {
    id: "anti-slip-pet-bowl-mat",
    name: "Anti-Slip Pet Bowl Mat",
    slug: "anti-slip-pet-bowl-mat",
    category: "home-organization",
    price: 19,
    compareAtPrice: 24,
    shortDescription:
      "A compact bowl mat that helps keep feeding stations steady and easier to wipe clean.",
    longDescription:
      "The Anti-Slip Pet Bowl Mat is built for small feeding zones, apartment kitchens, and tidy pet corners. Its grip-style base helps bowls feel more settled during everyday meals.",
    benefits: [
      "Helps bowls stay more settled",
      "Catches everyday drips and crumbs",
      "Works well in compact feeding areas",
    ],
    features: [
      "Anti-slip style base",
      "Raised edge detail",
      "Wipeable surface",
      "Compact mat footprint",
    ],
    bestFor: ["Dogs", "Cats", "Small kitchens", "Feeding stations"],
    tags: ["bowl mat", "feeding station", "organization", "clean home"],
    careInstructions:
      "Wipe clean daily and dry fully before placing bowls back on the mat.",
    shippingNote,
    faqs: [
      {
        question: "Is it for food products?",
        answer: "No. PawNest does not sell food or treats; this is a mat for bowl areas.",
      },
      {
        question: "Can it go on hardwood floors?",
        answer: "It is intended for common floor surfaces, but test placement and keep the underside dry.",
      },
    ],
    relatedProductIds: [
      "waterproof-pet-feeding-mat",
      "pet-toy-storage-basket",
      "paw-cleaning-cup",
    ],
  },
  {
    id: "pet-travel-organizer-bag",
    name: "Pet Travel Organizer Bag",
    slug: "pet-travel-organizer-bag",
    category: "walk-travel",
    price: 44,
    compareAtPrice: 56,
    shortDescription:
      "A compartment bag for keeping leashes, blankets, cleanup tools, and travel accessories together.",
    longDescription:
      "The Pet Travel Organizer Bag helps pet parents pack for outings without scattering essentials across the car or closet. Use it for accessories, cleaning tools, and comfort items during short trips.",
    benefits: [
      "Keeps outing gear in one place",
      "Helpful for car and weekend plans",
      "Makes packing pet accessories easier",
    ],
    features: [
      "Multiple pocket style layout",
      "Carry handle and shoulder strap details",
      "Wide opening",
      "Compact car storage shape",
    ],
    bestFor: ["Travel accessories", "Car storage", "Weekend outings"],
    tags: ["travel", "organizer", "car", "storage"],
    careInstructions:
      "Spot clean the exterior and let the bag air dry before repacking.",
    shippingNote,
    faqs: [
      {
        question: "Does it include pet supplies?",
        answer: "No. This catalog item is the organizer bag only.",
      },
      {
        question: "Can it hold food or treats?",
        answer: "PawNest does not sell food or treats. Use the bag for allowed accessories and follow final care guidance.",
      },
    ],
    relatedProductIds: [
      "foldable-travel-pet-carrier",
      "car-seat-pet-cover",
      "portable-water-bottle-for-walks",
    ],
  },
  {
    id: "soft-plush-squeaky-toy",
    name: "Soft Plush Squeaky Toy",
    slug: "soft-plush-squeaky-toy",
    category: "play-enrichment",
    price: 13,
    compareAtPrice: 17,
    shortDescription:
      "A soft plush toy for supervised play, gentle fetch moments, and cozy toy baskets.",
    longDescription:
      "The Soft Plush Squeaky Toy adds a simple play option to everyday routines. It is intended for supervised play and easy storage in a pet toy basket between uses.",
    benefits: [
      "Adds variety to everyday play",
      "Soft plush texture",
      "Easy to store in toy baskets",
    ],
    features: [
      "Plush outer fabric style",
      "Built-in squeaker style detail",
      "Lightweight shape",
      "Sized for indoor play",
    ],
    bestFor: ["Dogs", "Supervised play", "Toy baskets"],
    tags: ["toy", "plush", "play", "dog"],
    careInstructions:
      "Spot clean only and inspect regularly. Remove from use if damaged.",
    shippingNote,
    faqs: [
      {
        question: "Is this indestructible?",
        answer: "No. Always supervise play and remove the toy if it becomes damaged.",
      },
      {
        question: "Is this for chewing?",
        answer: "It is a soft play toy, not a chew-proof toy.",
      },
    ],
    relatedProductIds: [
      "pet-toy-storage-basket",
      "cat-scratching-lounge",
      "soft-fleece-pet-blanket",
    ],
  },
  {
    id: "reflective-safety-collar",
    name: "Reflective Safety Collar",
    slug: "reflective-safety-collar",
    category: "safety-accessories",
    price: 17,
    compareAtPrice: 23,
    shortDescription:
      "An adjustable reflective collar for added visibility during everyday walking routines.",
    longDescription:
      "The Reflective Safety Collar is a practical accessory for daily walks and outdoor breaks. Reflective detailing can support visibility in low-light settings when paired with attentive handling and safe walking habits.",
    benefits: [
      "Adds reflective visibility detail",
      "Adjustable for a better everyday fit",
      "Pairs with leash and harness routines",
    ],
    features: [
      "Reflective strip style detail",
      "Adjustable strap",
      "Quick-release buckle style",
      "D-ring attachment detail",
    ],
    bestFor: ["Dogs", "Evening walks", "Daily ID collar routines"],
    tags: ["collar", "reflective", "safety", "dog"],
    careInstructions:
      "Wipe clean after use and inspect the buckle, D-ring, and fit regularly.",
    shippingNote,
    faqs: [
      {
        question: "Does this replace supervision?",
        answer: "No. It is a visibility accessory and should be used with attentive handling.",
      },
      {
        question: "How should it fit?",
        answer: "Use the final size guide and make sure the collar is snug but comfortable.",
      },
    ],
    relatedProductIds: [
      "adjustable-pet-leash",
      "everyday-no-pull-harness",
      "portable-water-bottle-for-walks",
    ],
    isFeatured: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: Product["category"]) {
  return products.filter((product) => product.category === category);
}

export function getRelatedProducts(product: Product) {
  return product.relatedProductIds
    .map((id) => products.find((relatedProduct) => relatedProduct.id === id))
    .filter((relatedProduct): relatedProduct is Product => Boolean(relatedProduct));
}
