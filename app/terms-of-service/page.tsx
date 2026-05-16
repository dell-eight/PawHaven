import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Terms of Service",
  description:
    "Read PawNest terms of service guidance for the pre-launch storefront. Final legal terms are required before accepting real orders.",
  path: "/terms-of-service",
});

const termsSections = [
  {
    title: "Pre-launch status",
    copy: "PawNest is currently a pre-launch storefront. Checkout, payment, fulfillment, and final legal terms must be configured before accepting real orders.",
  },
  {
    title: "Product information",
    copy: "PawNest product pages are intended to describe pet accessories clearly. Product colors, sizing, and supplier details should be reviewed before launch.",
  },
  {
    title: "No medical claims",
    copy: "PawNest does not sell pet food, treats, supplements, medicine, prescription products, or medical devices, and does not make risky health claims.",
  },
  {
    title: "Orders and payments",
    copy: "Real purchases should not be accepted until a payment provider, order workflow, taxes, shipping, and customer support process are configured and tested.",
  },
];

export default function TermsOfServicePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Policy"
        title="Terms of Service"
        description="PawNest terms should be finalized before real payments, orders, shipping, and returns are enabled."
      />
      <Section tone="white">
        <SectionHeader
          eyebrow="Terms guidance"
          title="Clear terms before real selling."
          description="This page provides a practical pre-launch outline and should be reviewed before accepting real orders."
        />
        <div className="policy-grid">
          {termsSections.map((section) => (
            <article className="policy-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.copy}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="beige">
        <div className="policy-support">
          <div>
            <p className="eyebrow">Need help?</p>
            <h2>Review FAQ or contact support.</h2>
            <p>
              PawNest keeps checkout and payment limitations visible until the
              store is ready for real orders.
            </p>
          </div>
          <ButtonLink href="/faq">Read FAQ</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
