import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { faqSections } from "@/data/faqs";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "FAQ",
  description:
    "Read PawNest FAQ answers about orders, shipping, returns, products, safety claims, payments, and pet sizing.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Help center"
        title="PawNest FAQ"
        description="Honest answers about orders, shipping, returns, products, product claims, payments, and choosing the right size."
      />

      <Section tone="white">
        <div className="faq-page-list">
          {faqSections.map((section) => (
            <section className="faq-page-section" key={section.title}>
              <div>
                <p className="eyebrow">{section.title}</p>
                <h2>{section.title}</h2>
              </div>
              <FaqAccordion items={section.items} />
            </section>
          ))}
        </div>
      </Section>

      <Section tone="beige">
        <div className="support-faq-cta">
          <div>
            <p className="eyebrow">Still need help?</p>
            <h2>Send PawNest a message.</h2>
            <p>
              Share the product name, sizing question, or order details if
              available, and PawNest support can help from there.
            </p>
          </div>
          <ButtonLink href="/contact">Contact PawNest</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
