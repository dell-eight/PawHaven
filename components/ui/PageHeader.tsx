import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  description?: string;
  eyebrow?: string;
  title: string;
};

export function PageHeader({ description, eyebrow, title }: PageHeaderProps) {
  return (
    <header className="page-header">
      <Container className="page-header__content">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="page-header__title">{title}</h1>
        {description ? (
          <p className="page-header__description">{description}</p>
        ) : null}
      </Container>
    </header>
  );
}
