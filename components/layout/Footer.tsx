import Link from "next/link";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Container } from "@/components/ui/Container";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import {
  footerAboutLinks,
  footerCareLinks,
  footerPolicyLinks,
  footerShopLinks,
} from "@/lib/navigation";

function FooterLinkList({
  links,
  title,
}: {
  links: { href: string; label: string }[];
  title: string;
}) {
  return (
    <div className="footer-links">
      <h2 className="footer-links__title">{title}</h2>
      <ul className="footer-links__list">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="footer-links__link" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link className="site-footer__logo" href="/" aria-label="PawHaven home">
              <BrandLogo footer />
            </Link>
            <p>
              PawHaven helps pet parents create cleaner, cozier, and more
              practical homes with thoughtfully selected pet accessories.
            </p>
            <p className="site-footer__trust-note">
              Practical comfort, cleanup, cat, and walk essentials with clear
              product roles and honest shopping expectations.
            </p>
            <div className="site-footer__trust-list" aria-label="PawHaven trust signals">
              <span>Philippines-focused store</span>
              <span>PHP pricing</span>
              <span>No food, medicine, supplements, or risky pet health claims</span>
            </div>
          </div>

          <div className="site-footer__newsletter">
            <NewsletterSignup
              title="Get cozy pet-parent tips and product picks."
              description="Join PawHaven for helpful pet home-care tips, new product updates, and cozy essentials for dogs and cats."
            />
          </div>
        </div>

        <div className="site-footer__links">
          <FooterLinkList links={footerShopLinks} title="Shop" />
          <FooterLinkList links={footerCareLinks} title="Customer Care" />
          <FooterLinkList links={footerAboutLinks} title="About" />
          <FooterLinkList links={footerPolicyLinks} title="Policies" />
        </div>

        <div className="site-footer__bottom">
          <p>&copy; {new Date().getFullYear()} PawHaven. All rights reserved.</p>
          <p>No food, supplements, medicine, or risky pet health claims.</p>
        </div>
      </Container>
    </footer>
  );
}
