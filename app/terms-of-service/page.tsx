import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Terms of Service",
  description:
    "Read PawHaven terms guidance for browsing product pages while checkout, payment, fulfillment, and final legal details are prepared.",
  path: "/terms-of-service",
});

const termsSections = [
  {
    title: "Checkout preparation",
    copy: "PawHaven is currently preparing its full checkout experience. Product pages are available for browsing while payment, fulfillment, and final legal details are finalized.",
  },
  {
    title: "Product information",
    copy: "PawHaven product pages are written to explain each pet accessory clearly, including its everyday role, sizing considerations, care notes, and product details.",
  },
  {
    title: "No medical claims",
    copy: "PawHaven does not sell pet food, treats, supplements, medicine, prescription products, or medical devices, and does not make risky health claims.",
  },
  {
    title: "Orders and payments",
    copy: "Customer purchases should begin only after payment, order handling, taxes, shipping, and customer support processes are finalized and tested.",
  },
];

export default function TermsOfServicePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Policy"
        title="Terms of Service"
        description="PawHaven keeps product browsing clear while checkout, payment, shipping, and return details are prepared."
      />
      <Section tone="white">
        <SectionHeader
          eyebrow="Terms guidance"
          title="Clear terms for a safer shopping experience."
          description="This page outlines how PawHaven should handle product information, payments, orders, and support before the full checkout experience opens."
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
              PawHaven keeps checkout and payment status visible so customers
              know what is available today and what is still being finalized.
            </p>
          </div>
          <ButtonLink href="/faq">Read FAQ</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
