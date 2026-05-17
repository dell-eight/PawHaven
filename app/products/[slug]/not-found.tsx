import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export default function ProductNotFound() {
  return (
    <main>
      <PageHeader
        eyebrow="Product not found"
        title="We could not find that PawHaven product."
        description="The product may have moved, or it may not be part of the current PawHaven catalog."
      />
      <Section tone="white">
        <div className="not-found-actions">
          <ButtonLink href="/shop">Shop All Products</ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Return Home
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
