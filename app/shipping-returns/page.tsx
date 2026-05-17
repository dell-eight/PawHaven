import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Shipping and Returns",
  description:
    "Read PawHaven shipping and returns guidance, including processing, delivery estimates, tracking, delays, return eligibility, refunds, and support.",
  path: "/shipping-returns",
});

const shippingSections = [
  {
    title: "Shipping overview",
    copy: "PawHaven aims to keep shipping information clear before any real order is placed. Delivery times may vary depending on the product, supplier, and destination.",
  },
  {
    title: "Processing times",
    copy: "Processing starts after an order is accepted by the store and payment is confirmed. Processing windows should be finalized once PawHaven fulfillment partners are configured.",
  },
  {
    title: "Estimated delivery times",
    copy: "Estimated delivery times are not guaranteed yet. Final delivery ranges should be shown at checkout or in order communications once shipping setup is active.",
  },
  {
    title: "Tracking information",
    copy: "When tracking is available, customers should receive tracking details after the order ships. Tracking updates may take time to appear after a carrier receives a package.",
  },
  {
    title: "Delays",
    copy: "Delays can happen because of carrier volume, weather, supplier processing, address issues, holidays, customs, or other events outside PawHaven control.",
  },
];

const returnSections = [
  {
    title: "Returns overview",
    copy: "PawHaven return rules should be reviewed before launch. The goal is to keep returns fair, simple, and clear before customers complete a real purchase.",
  },
  {
    title: "Return eligibility",
    copy: "Eligible returns should generally be unused, clean, and in original condition with packaging when possible. Final eligibility can vary by product type and supplier requirements.",
  },
  {
    title: "Non-returnable items",
    copy: "For hygiene and safety reasons, some opened, used, damaged-by-customer, final-sale, or personalized items may not be returnable once the final policy is configured.",
  },
  {
    title: "Damaged or incorrect items",
    copy: "If an item arrives damaged or incorrect after real ordering is active, customers should contact support with the order number, photos, and a short description of the issue.",
  },
  {
    title: "Refund process",
    copy: "Refund timing depends on the final payment provider and review process. PawHaven should not promise refund timing until the payment and returns workflow is configured.",
  },
];

export default function ShippingReturnsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Policies"
        title="Shipping and Returns"
        description="Clear, flexible shipping and return guidance for PawHaven customers. This policy page should be finalized before accepting real orders."
      />

      <Section tone="white">
        <div className="policy-notice">
          <p className="eyebrow">Development note</p>
          <h2>Fulfillment details are not final yet.</h2>
          <p>
            Checkout, payment, suppliers, shipping rates, delivery estimates,
            and return handling must be configured and reviewed before PawHaven
            accepts real orders.
          </p>
        </div>
      </Section>

      <Section tone="beige">
        <SectionHeader
          eyebrow="Shipping"
          title="Shipping should be clear before checkout."
          description="Because PawHaven may work with supplier fulfillment, shipping language stays flexible and honest until product-level details are confirmed."
        />
        <div className="policy-grid">
          {shippingSections.map((section) => (
            <article className="policy-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Returns"
          title="Returns should feel fair, simple, and transparent."
          description="PawHaven should explain return eligibility, damaged item handling, and refund expectations clearly before launch."
        />
        <div className="policy-grid">
          {returnSections.map((section) => (
            <article className="policy-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="policy-support">
          <div>
            <p className="eyebrow">Need help?</p>
            <h2>Contact PawHaven support with product or order details.</h2>
            <p>
              Include your order number if available, the product name, photos
              for damaged or incorrect items, and a clear description of what
              happened.
            </p>
          </div>
          <ButtonLink href="/contact">Contact Support</ButtonLink>
        </div>
      </Section>

      <CtaSection
        eyebrow="Keep shopping carefully"
        title="Review product details before choosing a PawHaven essential."
        description="Check sizing, care instructions, product notes, and shipping language before ordering once checkout is active."
        actions={
          <>
            <ButtonLink href="/shop">Shop Products</ButtonLink>
            <ButtonLink href="/faq" variant="secondary">
              Read FAQ
            </ButtonLink>
          </>
        }
      />
    </main>
  );
}
