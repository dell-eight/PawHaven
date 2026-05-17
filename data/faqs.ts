export type FaqSection = {
  items: {
    answer: string;
    question: string;
  }[];
  title: string;
};

export const faqSections = [
  {
    title: "Orders",
    items: [
      {
        question: "Can I place a real PawHaven order right now?",
        answer:
          "This storefront is still pre-launch. Checkout and payment must be configured before PawHaven can accept real orders.",
      },
      {
        question: "Where can I include order details when contacting support?",
        answer:
          "Use the optional order number field on the contact form if you have one. If checkout is not active yet, leave that field blank and describe what you need help with.",
      },
    ],
  },
  {
    title: "Shipping",
    items: [
      {
        question: "How long does shipping take?",
        answer:
          "Shipping times depend on the final fulfillment setup, destination, and carrier. PawHaven will show clear shipping expectations before accepting real orders.",
      },
      {
        question: "Are shipping notes final?",
        answer:
          "Current product shipping notes are not final until fulfillment is configured. They should be reviewed before launch.",
      },
    ],
  },
  {
    title: "Returns",
    items: [
      {
        question: "What is the PawHaven return policy?",
        answer:
          "The final returns policy should be reviewed before launch. PawHaven aims to keep returns clear, fair, and easy to understand before any real purchase is made.",
      },
      {
        question: "What if an item arrives damaged?",
        answer:
          "Once real ordering is active, contact support with your order number, photos, and a short description so the team can review the issue.",
      },
    ],
  },
  {
    title: "Products",
    items: [
      {
        question: "What products does PawHaven sell?",
        answer:
          "PawHaven focuses on cozy pet comfort, cat essentials, cleaner-home products, and useful outing accessories such as beds, blankets, pet hair removers, grooming gloves, paw cleaners, feeding mats, scratching lounges, window perches, carriers, car covers, and portable water bottles.",
      },
      {
        question: "Will product colors look exactly like the photos?",
        answer:
          "Product colors may vary slightly depending on screen settings, lighting, and supplier photos. PawHaven should use clear images and honest descriptions before launch.",
      },
    ],
  },
  {
    title: "Safety and product claims",
    items: [
      {
        question: "Does PawHaven make medical claims?",
        answer:
          "No. PawHaven does not claim that products cure anxiety, illness, behavior problems, or medical conditions.",
      },
      {
        question: "What does PawHaven avoid selling?",
        answer:
          "PawHaven avoids pet food, treats, supplements, medicine, prescription products, medical devices, and products that need risky health claims.",
      },
    ],
  },
  {
    title: "Payments",
    items: [
      {
        question: "Is payment processing active?",
        answer:
          "No payment provider is active yet. Payment must be configured and tested before accepting real orders.",
      },
      {
        question: "Why is checkout disabled?",
        answer:
          "The cart UI is present for storefront planning, but checkout integration is not active yet. PawHaven should not accept payment until the payment provider is connected.",
      },
    ],
  },
  {
    title: "Pet sizing",
    items: [
      {
        question: "How should I choose a size for beds, carriers, or window perches?",
        answer:
          "Check the product size guide before ordering and measure your pet carefully. Fit can vary by product and supplier.",
      },
      {
        question: "What if my pet is between sizes?",
        answer:
          "Review the final product-specific sizing guidance before purchase. If unsure, contact PawHaven support with your pet measurements and the product name.",
      },
    ],
  },
] satisfies FaqSection[];
