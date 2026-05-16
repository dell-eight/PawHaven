import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type CtaSectionProps = {
  actions?: ReactNode;
  description: string;
  eyebrow?: string;
  title: string;
};

export function CtaSection({
  actions,
  description,
  eyebrow,
  title,
}: CtaSectionProps) {
  return (
    <section className="cta-section">
      <Container className="cta-section__content">
        <div className="cta-section__copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="cta-section__title">{title}</h2>
          <p className="cta-section__description">{description}</p>
        </div>
        {actions ? <div className="cta-section__actions">{actions}</div> : null}
      </Container>
    </section>
  );
}
