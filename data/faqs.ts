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
        question: "Can I place a real PawNest order right now?",
        answer:
          "This storefront is still pre-launch. Checkout and payment must be configured before PawNest can accept real orders.",
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
          "Shipping times depend on the final fulfillment setup, destination, and carrier. PawNest will show clear shipping expectations before accepting real orders.",
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
        question: "What is the PawNest return policy?",
        answer:
          "The final returns policy should be reviewed before launch. PawNest aims to keep returns clear, fair, and easy to understand before any real purchase is made.",
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
        question: "What products does PawNest sell?",
        answer:
          "PawNest focuses on pet accessories and home-care products such as beds, blankets, grooming tools, pet hair removers, carriers, leashes, harnesses, toys, mats, organization products, scratching pieces, and safety accessories.",
      },
      {
        question: "Will product colors look exactly like the photos?",
        answer:
          "Product colors may vary slightly depending on screen settings, lighting, and supplier photos. PawNest should use clear images and honest descriptions before launch.",
      },
    ],
  },
  {
    title: "Safety and product claims",
    items: [
      {
        question: "Does PawNest make medical claims?",
        answer:
          "No. PawNest does not claim that products cure anxiety, illness, behavior problems, or medical conditions.",
      },
      {
        question: "What does PawNest avoid selling?",
        answer:
          "PawNest avoids pet food, treats, supplements, medicine, prescription products, medical devices, and products that need risky health claims.",
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
          "The cart UI is present for storefront planning, but checkout integration is not active yet. PawNest should not accept payment until the payment provider is connected.",
      },
    ],
  },
  {
    title: "Pet sizing",
    items: [
      {
        question: "How should I choose a size for harnesses, collars, or beds?",
        answer:
          "Check the product size guide before ordering and measure your pet carefully. Fit can vary by product and supplier.",
      },
      {
        question: "What if my pet is between sizes?",
        answer:
          "Review the final product-specific sizing guidance before purchase. If unsure, contact PawNest support with your pet measurements and the product name.",
      },
    ],
  },
] satisfies FaqSection[];
