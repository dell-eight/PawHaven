import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type SectionTone = "cream" | "beige" | "white";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: SectionTone;
};

export function Section({
  children,
  className,
  containerClassName,
  tone = "cream",
}: SectionProps) {
  const sectionClassName = ["section", `section--${tone}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="section__header">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section__title">{title}</h2>
      {description ? (
        <p className="section__description">{description}</p>
      ) : null}
    </div>
  );
}
