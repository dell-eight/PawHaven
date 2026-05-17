export type NavLink = {
  href: string;
  label: string;
};

export const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/categories/cat-essentials", label: "Cat Essentials" },
  { href: "/categories/cozy-comfort", label: "Cozy Rest" },
  {
    href: "/categories/grooming-clean-home",
    label: "Cleaner Home",
  },
  { href: "/categories/walk-travel", label: "Walk & Travel" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] satisfies NavLink[];

export const footerShopLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/categories/cat-essentials", label: "Cat Essentials" },
  { href: "/categories/cozy-comfort", label: "Cozy Rest" },
  { href: "/categories/grooming-clean-home", label: "Cleaner Home" },
  { href: "/categories/walk-travel", label: "Walk & Travel" },
] satisfies NavLink[];

export const footerCareLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/shipping-returns", label: "Shipping & Returns" },
] satisfies NavLink[];

export const footerAboutLinks = [
  { href: "/about", label: "About PawHaven" },
  { href: "/blog", label: "Blog" },
] satisfies NavLink[];

export const footerPolicyLinks = [
  { href: "/shipping-returns", label: "Shipping & Returns" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/faq", label: "FAQ" },
] satisfies NavLink[];

export const socialPlaceholders = ["Instagram", "TikTok", "Pinterest"];
