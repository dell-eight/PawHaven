import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Shipping and Returns",
  description:
    "Read PawHaven shipping and returns guidance for pet comfort, pet cleaning, cat essentials, and dog accessories in the Philippines.",
  path: "/shipping-returns",
});

const shippingSections = [
  {
    title: "Shipping expectations",
    copy: "PawHaven aims to show delivery expectations clearly before any customer order is accepted. Timelines may vary by product, supplier fulfillment, destination, and carrier.",
  },
  {
    title: "Processing time",
    copy: "Processing should begin only after an order is accepted and payment is confirmed. Final processing windows must be set after checkout and fulfillment partners are finalized.",
  },
  {
    title: "Estimated delivery",
    copy: "Estimated delivery ranges are still being finalized. Final ranges should be shown at checkout or in order communication before PawHaven accepts customer orders.",
  },
  {
    title: "Damaged or wrong items",
    copy: "Once ordering is active, customers should contact support with the order number if available, clear photos of the item and packaging, and a short description of the issue.",
  },
  {
    title: "Before PawHaven opens checkout",
    copy: "PawHaven is currently preparing its full checkout experience. Product pages are available for browsing while payment and fulfillment details are finalized.",
  },
];

const returnSections = [
  {
    title: "Returns and refunds",
    copy: "Return and refund rules must be finalized before checkout opens. PawHaven should explain eligibility, required proof, review steps, and refund handling before any customer purchase is made.",
  },
  {
    title: "Return eligibility",
    copy: "Eligible returns should generally be unused, clean, and in original condition with packaging when possible. Final eligibility can vary by product type and supplier requirements.",
  },
  {
    title: "Items that may not be returnable",
    copy: "For hygiene and safety reasons, some opened, used, damaged-by-customer, final-sale, or personalized items may not be returnable once the final policy is active.",
  },
  {
    title: "Refund process",
    copy: "Refund timing depends on the final payment provider and review process. PawHaven should not promise refund timing until the payment and returns workflow is finalized.",
  },
];

const deliveryDraftRows = [
  { area: "Metro Manila", estimate: "To be finalized" },
  { area: "Luzon", estimate: "To be finalized" },
  { area: "Visayas & Mindanao", estimate: "To be finalized" },
];

export default function ShippingReturnsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Policies"
        title="Shipping and Returns"
        description="Clear, flexible shipping and return guidance for PawHaven customers while checkout, fulfillment, and return handling are finalized."
      />

      <Section tone="white">
        <div className="policy-notice">
          <p className="eyebrow">Checkout preparation</p>
          <h2>Shipping, payment, and return handling are being finalized.</h2>
          <p>
            PawHaven is currently preparing its full checkout experience.
            Product pages are available for browsing while payment and
            fulfillment details are finalized.
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

      <Section tone="white">
        <SectionHeader
          eyebrow="Draft delivery table"
          title="Philippines delivery estimates are still being finalized."
          description="This table is a planning placeholder until supplier fulfillment, courier setup, and checkout delivery messaging are confirmed."
        />
        <div className="policy-table-wrap">
          <table className="policy-table">
            <thead>
              <tr>
                <th scope="col">Delivery area</th>
                <th scope="col">Estimated delivery</th>
              </tr>
            </thead>
            <tbody>
              {deliveryDraftRows.map((row) => (
                <tr key={row.area}>
                  <td>{row.area}</td>
                  <td>{row.estimate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Returns"
          title="Returns should feel fair, simple, and transparent."
          description="PawHaven should explain return eligibility, damaged item handling, and refund expectations clearly before checkout opens."
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
        description="Check sizing, care instructions, product notes, and shipping language while PawHaven prepares its full checkout experience."
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
