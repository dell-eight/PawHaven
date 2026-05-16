export type NavLink = {
  href: string;
  label: string;
};

export const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/categories/cozy-comfort", label: "Pet Comfort" },
  {
    href: "/categories/grooming-clean-home",
    label: "Grooming",
  },
  { href: "/categories/walk-travel", label: "Walk & Travel" },
  { href: "/categories/cat-essentials", label: "Cat Essentials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] satisfies NavLink[];

export const footerShopLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/categories/cozy-comfort", label: "Comfort Products for Pets" },
  { href: "/categories/grooming-clean-home", label: "Grooming Products" },
  { href: "/categories/walk-travel", label: "Walk & Travel Products" },
  { href: "/categories/cat-essentials", label: "Cat Essentials" },
] satisfies NavLink[];

export const footerCareLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/shipping-returns", label: "Shipping & Returns" },
] satisfies NavLink[];

export const footerAboutLinks = [
  { href: "/about", label: "About PawNest" },
  { href: "/blog", label: "Blog" },
] satisfies NavLink[];

export const footerPolicyLinks = [
  { href: "/shipping-returns", label: "Shipping & Returns" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/faq", label: "FAQ" },
] satisfies NavLink[];

export const socialPlaceholders = ["Instagram", "TikTok", "Pinterest"];
