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
          "PawHaven is currently preparing its full checkout experience. Product pages are available for browsing while payment and fulfillment details are finalized.",
      },
      {
        question: "Where can I include order details when contacting support?",
        answer:
          "Use the optional order number field on the contact form if you have one. If you are browsing before checkout opens, leave that field blank and describe what you need help with.",
      },
    ],
  },
  {
    title: "Shipping",
    items: [
      {
        question: "How long does shipping take?",
        answer:
          "Shipping times depend on the final fulfillment setup, destination, and carrier. PawHaven will show clear shipping expectations before customer orders are accepted.",
      },
      {
        question: "Are shipping notes final?",
        answer:
          "Current product shipping notes are still being finalized with the fulfillment flow. PawHaven should keep them clear before customer orders are accepted.",
      },
    ],
  },
  {
    title: "Returns",
    items: [
      {
        question: "What is the PawHaven return policy?",
        answer:
          "The final returns policy should be reviewed before checkout opens. PawHaven aims to keep returns clear, fair, and easy to understand before any customer purchase is made.",
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
          "Product colors may vary slightly depending on screen settings, lighting, and supplier photos. PawHaven should use clear images and honest descriptions before checkout opens.",
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
          "PawHaven is currently preparing its full checkout experience. Product pages are available for browsing while payment details are finalized and tested.",
      },
      {
        question: "Why is checkout disabled?",
        answer:
          "Checkout stays unavailable until PawHaven finalizes payment, fulfillment, and support details. This helps keep the shopping experience clear and honest.",
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
