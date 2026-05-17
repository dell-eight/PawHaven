import Link from "next/link";
import { CartNavLink } from "@/components/cart/CartNavLink";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { mainNavLinks } from "@/lib/navigation";

export function Header() {
  return (
    <header className="site-header">
      <div className="announcement-bar">
        Cozy, practical pet essentials for a cleaner, happier home.
      </div>
      <Container className="site-header__inner">
        <Link className="site-header__logo" href="/" aria-label="PawHaven home">
          <BrandLogo />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {mainNavLinks.map((link) => (
            <Link className="desktop-nav__link" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <CartNavLink className="cart-link" icon />

        <MobileNav links={mainNavLinks} />
      </Container>
    </header>
  );
}
