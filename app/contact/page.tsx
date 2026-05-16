import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Contact PawNest",
  description:
    "Contact PawNest for support with products, order questions, sizing, and choosing practical pet essentials.",
  path: "/contact",
});

const supportTopics = [
  "Choosing the right product or category",
  "Pet sizing questions for collars, harnesses, beds, and carriers",
  "Shipping and returns policy questions",
  "Catalog, care instruction, or product detail questions",
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Support"
        title="Contact PawNest"
        description="Have a question about your order, a product, or choosing the right PawNest essential? Send us a message and we'll help as soon as we can."
      />

      <Section tone="white">
        <div className="support-layout">
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
              This contact form is not connected yet. Add a support inbox or
              form service before using it for real customer messages.
            </p>
          </form>

          <aside className="support-panel">
            <h2>Support expectations</h2>
            <p>
              PawNest support should be clear, friendly, and practical. Include
              the product name, order number if available, and any sizing or
              care details that help explain your question.
            </p>
            <p>
              Checkout and payment are not active yet, so real order support
              begins after payment and fulfillment are
              configured.
            </p>
          </aside>
        </div>
      </Section>

      <Section tone="beige">
        <SectionHeader
          eyebrow="Common support topics"
          title="Questions PawNest can help with."
          description="Use the form for product guidance, sizing checks, care questions, or support policy questions."
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
            <h2>Start with the PawNest FAQ.</h2>
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
