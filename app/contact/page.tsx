import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Contact PawHaven",
  description:
    "Contact PawHaven for support with products, order questions, sizing, and choosing practical pet essentials.",
  path: "/contact",
});

const supportTopics = [
  "Choosing the right product or category",
  "Pet sizing questions for beds, carriers, perches, and mats",
  "Shipping and returns policy questions",
  "Catalog, care instruction, or product detail questions",
];

const supportExpectations = [
  {
    title: "Response target",
    copy: "Once support is active, PawHaven should aim to reply within 24-48 hours on business days.",
  },
  {
    title: "Damaged or wrong items",
    copy: "Include your order number if available, clear photos of the item and packaging, and a short description of the issue.",
  },
  {
    title: "Sizing questions",
    copy: "Share the product name, your pet's measurements, and where the item will be used so support can give more useful guidance.",
  },
];

const supportTrustItems = [
  "Support guidance for damaged or wrong items",
  "Sizing and product-use questions welcomed once support is active",
  "No food, medicine, supplements, or risky pet health claims",
  "Product pages available for browsing while checkout and fulfillment details are finalized",
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Support"
        title="Contact PawHaven"
        description="For product questions, order concerns, or support requests, PawHaven aims to keep communication clear and helpful."
      />

      <Section tone="white">
        <div className="support-layout">
          {/* TODO(owner): Connect a real support inbox/form service and confirm the official support email before showing an email address publicly. */}
          <form className="support-form">
            <div className="support-form__field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" />
            </div>
            <div className="support-form__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" />
            </div>
            <div className="support-form__field">
              <label htmlFor="order-number">Order number optional</label>
              <input id="order-number" name="orderNumber" type="text" />
            </div>
            <div className="support-form__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} />
            </div>
            <Button disabled type="button">
              Send Message
            </Button>
            <p className="support-form__note">
              This message form is being prepared and is not accepting customer
              messages yet.
            </p>
          </form>

          <aside className="support-panel">
            <h2>Support expectations</h2>
            <p>
              PawHaven support should be clear, friendly, and practical. These
              expectations will apply once checkout, fulfillment, and support
              tools are active.
            </p>
            <div className="support-expectation-list">
              {supportExpectations.map((item) => (
                <article className="support-expectation-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <div className="support-trust-list" aria-label="Support trust notes">
              {supportTrustItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="beige">
        <SectionHeader
          eyebrow="Common support topics"
          title="Questions PawHaven can help with."
          description="Use support for product guidance, sizing checks, care questions, damaged or wrong item concerns, and policy questions once the support channel is active."
        />
        <div className="support-topic-grid">
          {supportTopics.map((topic) => (
            <article className="support-topic-card" key={topic}>
              <h2>{topic}</h2>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="support-faq-cta">
          <div>
            <p className="eyebrow">Need a quick answer?</p>
            <h2>Start with the PawHaven FAQ.</h2>
            <p>
              Find honest answers about orders, shipping, returns, product
              claims, payments, and pet sizing before sending a message.
            </p>
          </div>
          <ButtonLink href="/faq">Visit FAQ</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
