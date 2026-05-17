"use client";

import Link from "next/link";
import { useState } from "react";
import { CartNavLink } from "@/components/cart/CartNavLink";
import type { NavLink } from "@/lib/navigation";

type MobileNavProps = {
  links: NavLink[];
};

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className="mobile-nav"
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
      open={isOpen}
    >
      <summary
        className="mobile-nav__toggle"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className="mobile-nav__line" aria-hidden="true" />
        <span className="mobile-nav__line" aria-hidden="true" />
        <span className="mobile-nav__line" aria-hidden="true" />
      </summary>
      <nav className="mobile-nav__panel" aria-label="Mobile navigation">
        {links.map((link) => (
          <Link
            className="mobile-nav__link"
            href={link.href}
            key={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <CartNavLink
          className="mobile-nav__cart"
          onClick={() => setIsOpen(false)}
        />
      </nav>
    </details>
  );
}
