import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export default function BlogArticleNotFound() {
  return (
    <main>
      <PageHeader
        eyebrow="Article not found"
        title="We could not find that PawNest article."
        description="The guide may have moved, or it may not be part of the current PawNest blog plan."
      />
      <Section tone="white">
        <div className="not-found-actions">
          <ButtonLink href="/blog">Back to Blog</ButtonLink>
          <ButtonLink href="/shop" variant="secondary">
            Shop PawNest
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
