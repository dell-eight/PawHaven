import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Privacy Policy",
  description:
    "Read PawHaven privacy guidance for product browsing, support messages, newsletter signups, and future checkout preparation.",
  path: "/privacy-policy",
});

const privacySections = [
  {
    title: "Checkout preparation",
    copy: "PawHaven is currently preparing its full checkout experience. Product pages are available for browsing while payment, fulfillment, and privacy details are finalized.",
  },
  {
    title: "Information customers may provide",
    copy: "PawHaven may collect information such as name, email address, shipping details, order details, support messages, and newsletter signup information once the relevant tools are active.",
  },
  {
    title: "How information may be used",
    copy: "Customer information should only be used to operate the store, provide support, process orders, send opted-in updates, improve the website, and meet legal obligations.",
  },
  {
    title: "Third-party services",
    copy: "Payment, email, analytics, fulfillment, and support tools may process data after they are connected. Their policies should be reviewed before PawHaven begins accepting customer orders.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Policy"
        title="Privacy Policy"
        description="PawHaven should explain how customer information is handled before support, newsletter, payment, and fulfillment tools are fully active."
      />
      <Section tone="white">
        <SectionHeader
          eyebrow="Privacy guidance"
          title="Clear privacy language before customer data flows."
          description="This page gives customers a plain-language view of how information should be handled as PawHaven prepares its full checkout experience."
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
              PawHaven should only request the details needed to answer a
              product, support, or order question.
            </p>
          </div>
          <ButtonLink href="/contact">Contact PawHaven</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
