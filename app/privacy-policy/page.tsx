import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Privacy Policy",
  description:
    "Read PawHaven privacy policy guidance for the pre-launch storefront. Final legal policy review is required before accepting real orders.",
  path: "/privacy-policy",
});

const privacySections = [
  {
    title: "Pre-launch status",
    copy: "This PawHaven storefront is not accepting real orders yet. Privacy language should be reviewed and finalized before collecting real customer data, accepting orders, or connecting email and payment providers.",
  },
  {
    title: "Information customers may provide",
    copy: "Once configured, PawHaven may collect information such as name, email address, shipping details, order details, support messages, and newsletter signup information.",
  },
  {
    title: "How information may be used",
    copy: "Customer information should only be used to operate the store, provide support, process orders, send opted-in updates, improve the website, and meet legal obligations.",
  },
  {
    title: "Third-party services",
    copy: "Payment, email, analytics, fulfillment, and support tools may process data after they are connected. Their policies should be reviewed before launch.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Policy"
        title="Privacy Policy"
        description="A clear privacy policy is required before PawHaven collects real customer data or accepts real orders."
      />
      <Section tone="white">
        <SectionHeader
          eyebrow="Privacy guidance"
          title="Review before launch."
          description="This page is a pre-launch policy outline, not a substitute for final legal review."
        />
        <div className="policy-grid">
          {privacySections.map((section) => (
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
            <p className="eyebrow">Questions?</p>
            <h2>Contact PawHaven before sharing sensitive details.</h2>
            <p>
              The support form is not connected until a form service or inbox is
              added.
            </p>
          </div>
          <ButtonLink href="/contact">Contact PawHaven</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
